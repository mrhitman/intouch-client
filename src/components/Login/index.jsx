import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../common/Layout';
import RegistrationForm from '../Registration';

const FormItem = Form.Item;

class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const { email, password } = values;
            api.login(email, password)
                .then(this.props.login)
                .catch(response => this.setState({ loginError: true }));
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { id, status } = this.props;
        return (
            <Layout>
                {status && <Redirect to={`/${id}`} />}
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
                    <Col offset={1} span={15} style={{ margin: 20 }}>
                        <RegistrationForm />
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
