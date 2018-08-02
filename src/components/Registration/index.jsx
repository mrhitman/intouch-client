import { Button, DatePicker, Form, Input, message, Select, Steps } from 'antd';
import React, { Component, Fragment } from 'react';

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
            message.success('Registration complete!');
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
                <div className="steps-action" style={{ margin: 40 }}>
                    {current < steps.length - 1 && <Button type="primary" onClick={this.next}>Next</Button>}
                    {current === steps.length - 1 && <Button type="primary" onClick={this.handleSubmit}>Done</Button>}
                    {current > 0 && (<Button style={{ marginLeft: 8 }} onClick={this.prev}>Previous</Button>)}
                </div>
                <div className="steps-content">
                    <Form onSubmit={this.handleSubmit}>
                        {steps[current].content}
                    </Form>
                </div>
                <Steps current={current} style={{ margin: 60, marginTop: 180 }}>
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
                    <Fragment>
                        <FormItem label='email' {...formItemLayout}>
                            {getFieldDecorator('email', { rules: [{ required: true }] })(<Input />)}
                        </FormItem>
                        <FormItem label='password' {...formItemLayout}>
                            {getFieldDecorator('password', { rules: [{ required: true }] })(<Input type="password" />)}
                        </FormItem>
                    </Fragment>
                )
            },
            {
                title: 'Profile data',
                content: (
                    <Fragment>
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
                    </Fragment>
                )
            },
            {
                title: 'Additional info',
                content: (
                    <Fragment>
                        <FormItem label='Hobbies' {...formItemLayout}>
                            {getFieldDecorator('hobbies')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                        </FormItem>
                        <FormItem label='Priorities' {...formItemLayout}>
                            {getFieldDecorator('priorities')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                        </FormItem>
                    </Fragment>
                )
            },
            {
                title: 'Finish'
            }
        ];
    }
}

export default Form.create()(RegistrationForm);
