import { Button, Col, DatePicker, Form, Input, Row, Tabs, Select } from 'antd';
import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};

const formSubmitLayout = {
    xs: { span: 24, offset: 0 },
    sm: { span: 14, offset: 4 },
}

class UpdateProfile extends Component {

    UNSAFE_componentWillMount() {
        const { id, token, getProfile } = this.props;
        api.getProfile(token, id).then(getProfile);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, token } = this.props;
        this.props.form.validateFields((err, values) => {
            api.setProfile(token, id, values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { profile } = this.props;
        return (
            <Layout >
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={18} style={{ margin: '30px 0 0 10px' }}>
                        <Tabs>
                            <Tabs.TabPane tab="Profile" key={1} >
                                <FormItem label='Name' {...formItemLayout} >
                                    {getFieldDecorator('first_name', { initialValue: profile.first_name, rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Middle name' {...formItemLayout} >
                                    {getFieldDecorator('middle_name', { initialValue: profile.first_name, rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Last name' {...formItemLayout}>
                                    {getFieldDecorator('last_name', { initialValue: profile.last_name, rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='gender' {...formItemLayout}>
                                    {getFieldDecorator('gender', { initialValue: profile.gender, rules: [{ required: true }] })(
                                        <Select>
                                            <Select.Option value={1}>male</Select.Option>
                                            <Select.Option value={0}>female</Select.Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label='Birthday' {...formItemLayout}>
                                    {getFieldDecorator('birthday', { initialValue: moment(profile.birthday, 'YYYY/MMMM/Do'), rules: [{ required: true }] })(<DatePicker format='YYYY/MMMM/Do' />)}
                                </FormItem>
                                <FormItem label='Hometown' {...formItemLayout}>
                                    {getFieldDecorator('town', { initialValue: profile.town, rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Company' {...formItemLayout}>
                                    {getFieldDecorator('company', { initialValue: profile.company, rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem wrapperCol={formSubmitLayout}>
                                    <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                                </FormItem>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Additional" key={2}>
                                <FormItem label='Hobbies' {...formItemLayout}>
                                    {getFieldDecorator('hobbies', { initialValue: profile.hobbies })(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                                </FormItem>
                                <FormItem label='Priorities' {...formItemLayout}>
                                    {getFieldDecorator('priorities', { initialValue: profile.priorities })(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                                </FormItem>
                                <FormItem wrapperCol={formSubmitLayout}>
                                    <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                                </FormItem>
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Layout >
        );
    }
}

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Form.create()(UpdateProfile));
