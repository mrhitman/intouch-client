import { Button, Col, DatePicker, Form, Input, Row, Select, Tabs } from 'antd';
import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

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
        const { getProfile, account } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, token } = this.props.active_user;
        this.props.form.validateFields((err, values) => {
            api.setProfile(token, id, values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const profile = this.props.active_user.get('profile');
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
                                    {getFieldDecorator('first_name', { initialValue: profile.get('first_name'), rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Middle name' {...formItemLayout} >
                                    {getFieldDecorator('middle_name', { initialValue: profile.get('middle_name'), rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Last name' {...formItemLayout}>
                                    {getFieldDecorator('last_name', { initialValue: profile.get('last_name') })(<Input />)}
                                </FormItem>
                                <FormItem label='gender' {...formItemLayout}>
                                    {getFieldDecorator('gender', { initialValue: profile.get('gender'), rules: [{ required: true }] })(
                                        <Select>
                                            <Select.Option value={1}>male</Select.Option>
                                            <Select.Option value={0}>female</Select.Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label='Birthday' {...formItemLayout}>
                                    {getFieldDecorator('birthday', { initialValue: moment(profile.birthday, 'Do MMMM YYYY'), rules: [{ required: true }] })(<DatePicker format='Do MMMM YYYY' />)}
                                </FormItem>
                                <FormItem label='Country' {...formItemLayout}>
                                    {getFieldDecorator('country', { initialValue: profile.get('country') })(<Input />)}
                                </FormItem>
                                <FormItem label='City' {...formItemLayout}>
                                    {getFieldDecorator('city', { initialValue: profile.get('city') })(<Input />)}
                                </FormItem>
                                <FormItem label='Hometown' {...formItemLayout}>
                                    {getFieldDecorator('home_town', { initialValue: profile.get('home_town') })(<Input />)}
                                </FormItem>
                                <FormItem label='Relationships' {...formItemLayout}>
                                    {getFieldDecorator('relationship', { initialValue: profile.get('relationship') })(
                                        <Select allowClear style={{ width: 200 }}>
                                            <Select.Option value={0}>Single</Select.Option>
                                            <Select.Option value={1}>In a relationship</Select.Option>
                                            <Select.Option value={2}>Engaged</Select.Option>
                                            <Select.Option value={3}>Married</Select.Option>
                                            <Select.Option value={4}>It's complicated</Select.Option>
                                            <Select.Option value={5}>It's open to relationship</Select.Option>
                                            <Select.Option value={6}>Widowed</Select.Option>
                                            <Select.Option value={7}>Separated</Select.Option>
                                            <Select.Option value={8}>Divorced</Select.Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label='Languages' {...formItemLayout}>
                                    {getFieldDecorator('language', { initialValue: profile.get('language') ? profile.get('language').split(',') : [] })(
                                        <Select mode='multiple' style={{ width: 200 }} allowClear>
                                            <Select.Option value='English'>English</Select.Option>
                                            <Select.Option value='Russian'>Russian</Select.Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label='Company' {...formItemLayout}>
                                    {getFieldDecorator('company', { initialValue: profile.get('company') })(<Input />)}
                                </FormItem>
                                <FormItem wrapperCol={formSubmitLayout}>
                                    <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                                </FormItem>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Additional" key={2}>
                                <FormItem label='Hobbies' {...formItemLayout}>
                                    {getFieldDecorator('hobbies', { initialValue: profile.get('hobbies') })(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                                </FormItem>
                                <FormItem label='Priorities' {...formItemLayout}>
                                    {getFieldDecorator('priorities', { initialValue: profile.get('priorities') })(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                                </FormItem>
                                <FormItem label='Books' {...formItemLayout}>
                                    {getFieldDecorator('books', { initialValue: profile.get('books') })(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
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

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Form.create()(UpdateProfile));
