import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';

const FormItem = Form.Item;

class LoginForm extends Component {
    state = { loginError: false };

    handleSubmit = (e) => {
        const { login } = this.props;
        this.setState({ loginError: false });
        this.props.form.validateFields((err, values) => {
            const { email, password } = values;
            api.login(email, password)
                .then(login)
                .catch(response => this.setState({ loginError: true }));
        });
        e.preventDefault();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { account } = this.props;
        const { loginError } = this.state;
        return (
            <Layout>
                {!!account.id && <Redirect to={`/${account.id}`} />}
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
                            {loginError && <div>No such user/password!</div>}
                            <FormItem>
                                {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="" style={{ float: 'right' }}>Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                    Log in
                                </Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col offset={1} span={15} style={{ margin: 20 }}>
                        <Link to='/registrate'>Registrate</Link>
                    </Col>
                </Row>
            </Layout>
        );
    }

}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    login: payload => {
        dispatch({ type: Actions.login, payload: payload.data });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form.create()(LoginForm));
