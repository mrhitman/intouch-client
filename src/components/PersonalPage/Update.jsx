import { Button, Checkbox, DatePicker, Col, Form, Icon, Input, Row } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};

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
                        <FormItem wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 14, offset: 4 },
                        }}>
                            <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Layout >
        );
    }
}

export default Form.create()(UpdateProfile);
