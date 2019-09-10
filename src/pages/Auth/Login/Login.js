import React, { Component } from 'react';
import { Input, Container } from 'reactstrap'
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container d-flex h-100">
                <div class="row align-items-center h-100">
                    <div className="broder-login product-item card__content mx-auto">
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;