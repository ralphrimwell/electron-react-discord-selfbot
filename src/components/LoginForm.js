import React from 'react';
import InputField from './InputField';
import Submit from './Submit';

class LoginForm extends React.Component {



    render() {
        return (
            <div className="LoginForm">
                <InputField
                    type='text'
                    placeholder='Email'


                />

                <InputField
                    type='password'
                    placeholder='Password'

                />

                <Submit
                    text='Login'

                    onClick=""
                />

            </div>
        );
    }
};

export default LoginForm;

