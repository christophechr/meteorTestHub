import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
        Accounts.createUser({ username, email, password });
    }

    return (
        <form onSubmit={submit} className="register-form">
            <div>
                <label htmlFor="username">Username</label>

                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>
        </form>
    );
};