import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    };

    chaneEmail(event) {
        this.setState({
            email: event.target.value
        });
    };
    chanePassword(event) {
        this.setState({
            password: event.target.value
        });
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="form-div">
                        <form>
                            <input type="text"
                                placeholder="E-mail"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />

                            <input type="password"
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />

                            <input type="submit"
                                className="btn btn-danger btn-block"
                                value="Submit" />
                        </form>
                    </div>
                </div>
            </>
        );
    };
};