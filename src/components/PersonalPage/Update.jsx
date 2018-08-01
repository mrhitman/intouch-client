import { Button, Checkbox, DatePicker, Col, Form, Icon, Input, Row } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
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
                        <Form onSubmit={this.handleSubmit} layout='vertical' >
                            <FormItem label='Name' {...formItemLayout} >
                                {getFieldDecorator('name', { rules: [{ required: true }] })(<Input />)}
                            </FormItem>
                            <FormItem label='Second name' {...formItemLayout}>
                                {getFieldDecorator('name', { rules: [{ required: true }] })(<Input />)}
                            </FormItem>
                            <FormItem label='Birthday' {...formItemLayout}>
                                {getFieldDecorator('birthday', { rules: [{ required: true }] })(<DatePicker />)}
                            </FormItem>
                            <FormItem span={24} offset={0}>
                                <Button type="primary" htmlType="submit">Update</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Layout >
        );
    }
}

export default Form.create()(UpdateProfile);
