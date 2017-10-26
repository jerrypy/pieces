import React from 'react';

import { Form, Button, Input, Icon } from 'antd';

class LoginForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
              this.postForm(values);
            }
          });
    }

    async postForm(values) {
        let res = await fetch("/admin/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        let resJson = await res.json();
        console.log(resJson);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" style={{maxWidth: 300}}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                </Form.Item>
            </Form>
        )
    }

}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;