import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import Layout from '../common/Layout';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <Row>
                    <Col offset={1} span={7} style={{ margin: 12 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: 300 }}>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true })
                                    (<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="" style={{ float: 'right' }}>Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                    Log in
                                </Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        );
    }

}

const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
    login: payload => {
        dispatch({ type: Actions.login, payload: payload.data });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form.create()(LoginForm));
