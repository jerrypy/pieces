import React from 'react';

import { Form, Button, Input } from 'element-react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                password: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.postForm();

    }

    async postForm() {
        let res = await fetch("/admin/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        });

        let resJson = await res.json();
        console.log(resJson);
    }

    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }

    render() {
        return (
            <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="用户名">
                    <Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} />
                </Form.Item>
                <Form.Item label="密码">
                    <Input value={this.state.form.password} type="password" onChange={this.onChange.bind(this, 'password')} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" nativeType="submit">登录</Button>
                </Form.Item>
            </Form>
        )
    }

}

export default LoginForm;