import { Button, DatePicker, Form, Input, message, Steps, Select } from 'antd';
import React, { Component } from 'react';

const FormItem = Form.Item;
const Step = Steps.Step;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class RegistrationForm extends Component {
    state = {
        current: 0
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
        });
    }

    next = () => {
        this.setState(state => ({ current: state.current + 1 }))
    }

    prev = () => {
        this.setState(state => ({ current: state.current - 1 }))
    }

    render() {
        const { current } = this.state;
        const steps = this.getSteps();
        return (
            <div>
                <div className="steps-action" style={{ margin: '40px 0 0 0' }}>
                    {current < 2 && <Button type="primary" onClick={this.next}>Next</Button>}
                    {current === 2 && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>}
                    {current > 0 && (<Button style={{ marginLeft: 8 }} onClick={this.prev}> Previous </Button>)}
                </div>
                <div className="steps-content">
                    {steps[current].content}
                </div>
                <Steps current={current} style={{ margin: 30, marginTop: 180 }}>
                    {steps.map(step => <Step key={step.title} title={step.title} />)}
                </Steps>
            </div>
        );
    }

    getSteps() {
        const { getFieldDecorator } = this.props.form;
        return [
            {
                title: 'Registration',
                content: (
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem label='email' {...formItemLayout}>
                            {getFieldDecorator('email', { rules: [{ required: true }] })(<Input />)}
                        </FormItem>
                        <FormItem label='password' {...formItemLayout}>
                            {getFieldDecorator('password', { rules: [{ required: true }] })(<Input type="password" />)}
                        </FormItem>
                    </Form>
                )
            },
            {
                title: 'Profile data',
                content: (
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem label='First name' {...formItemLayout}>
                            {getFieldDecorator('first_name', { rules: [{ required: true }] })(<Input />)}
                        </FormItem>
                        <FormItem label='Middle name' {...formItemLayout}>
                            {getFieldDecorator('middle_name', { rules: [{ required: true }] })(<Input />)}
                        </FormItem>
                        <FormItem label='Last name' {...formItemLayout}>
                            {getFieldDecorator('last_name', { rules: [{ required: true }] })(<Input />)}
                        </FormItem>
                        <FormItem label='Birthday' {...formItemLayout}>
                            {getFieldDecorator('birthday', { rules: [{ required: true }] })(<DatePicker format='YYYY/MMMM/Do' />)}
                        </FormItem>
                        <FormItem label='gender' {...formItemLayout}>
                            {getFieldDecorator('gender', { rules: [{ required: true }] })(
                                <Select>
                                    <Select.Option value={1}>male</Select.Option>
                                    <Select.Option value={0}>female</Select.Option>
                                </Select>)}
                        </FormItem>
                    </Form>
                )
            },
            {
                title: 'Finish'
            }
        ];
    }
}

export default Form.create()(RegistrationForm);
