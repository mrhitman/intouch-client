import { Button, Checkbox, DatePicker, Form, Input, message, Select, Steps } from 'antd';
import React, { Component, Fragment } from 'react';
import api from '../../services/api';

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
            api.register(values);
            message.success('Registration complete!');
        });
    }

    next = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const current = this.state.current;
            const step = this.getSteps()[current];
            const errors = step.content.props.children.filter(item => err[item.props.label]);
            if (errors.length) {
                return;
            }
            this.setState({ current: current + 1 })
        });
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
                        {steps.map(({ title, content }, i) => (
                            <div
                                key={title}
                                style={{ display: i === this.state.current ? '' : 'none' }}
                            >
                                {content}
                            </div>
                        ))}
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
                            {getFieldDecorator('last_name')(<Input />)}
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
                title: 'Additional info && Finish',
                content: (
                    <Fragment>
                        <FormItem label='Hometown' {...formItemLayout}>
                            {getFieldDecorator('town')(<Input />)}
                        </FormItem>
                        <FormItem label='Relationships' {...formItemLayout}>
                            {getFieldDecorator('relationship')(
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
                            {getFieldDecorator('language')(
                                <Select mode='multiple' style={{ width: 200 }} allowClear>
                                    <Select.Option value='English'>English</Select.Option>
                                    <Select.Option value='Russian'>Russian</Select.Option>
                                </Select>)}
                        </FormItem>
                        <FormItem label='Company' {...formItemLayout}>
                            {getFieldDecorator('company')(<Input />)}
                        </FormItem>
                        <FormItem label='Hobbies' {...formItemLayout}>
                            {getFieldDecorator('hobbies')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                        </FormItem>
                        <FormItem label='Priorities' {...formItemLayout}>
                            {getFieldDecorator('priorities')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', { valuePropName: 'checked', rules: [{ required: true }] })(<Checkbox>I have read the <a href="">agreement</a></Checkbox>)}
                        </FormItem>
                    </Fragment>
                )
            }
        ];
    }
}

export default Form.create()(RegistrationForm);
