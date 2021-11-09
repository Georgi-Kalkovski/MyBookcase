import React, { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitChangeHanfler = (e) => {
        console.log(e.target[0]);
        console.log(e.target[1]);
        setEmail(e.target[0]);
        setPassword(e.target[1]);
    };
    return (
        <>
            <div className="container">
                <div className="form-div">
                    <form>
                        <input type="text"
                            placeholder="E-mail"
                            className="form-control form-group"
                            onChange={setEmail}
                            value={email} />

                        <input type="password"
                            placeholder="Password"
                            className="form-control form-group"
                            onChange={setPassword}
                            value={password} />

                        <input type="submit"
                            className="btn btn-danger btn-block"
                            value="Submit"
                            onClick={submitChangeHanfler} />
                    </form>
                </div>
            </div>
        </>
    );
};