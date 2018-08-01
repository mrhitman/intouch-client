import { Button, Col, DatePicker, Form, Input, Row, Tabs } from 'antd';
import React, { Component } from 'react';
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
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
                                    {getFieldDecorator('name', { rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Second name' {...formItemLayout}>
                                    {getFieldDecorator('name', { rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Birthday' {...formItemLayout}>
                                    {getFieldDecorator('birthday', { rules: [{ required: true }] })(<DatePicker />)}
                                </FormItem>
                                <FormItem label='Hometown' {...formItemLayout}>
                                    {getFieldDecorator('hometown', { rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem label='Company' {...formItemLayout}>
                                    {getFieldDecorator('Company', { rules: [{ required: true }] })(<Input />)}
                                </FormItem>
                                <FormItem wrapperCol={formSubmitLayout}>
                                    <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                                </FormItem>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Additional" key={2}>
                                <FormItem label='Hobbies' {...formItemLayout}>
                                    {getFieldDecorator('hobbies')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                                </FormItem>
                                <FormItem label='Priorities' {...formItemLayout}>
                                    {getFieldDecorator('priorities')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
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

export default Form.create()(UpdateProfile);
