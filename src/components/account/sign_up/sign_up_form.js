import React from 'react';
import {reduxForm, Field} from "redux-form";
import Input from "../../general/input";
import './sign_up.scss';

const SignUpForm = props => {

    const {handleSubmit, signUp} = props;
    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">

                <div className="col s12 m6 offset-m3">
                    <Field id="username" name="username" label="Username" component={Input}/>
                </div>

                <div className="col s12 m6 offset-m3">
                    <Field id="password" name="password" type="password" label ="Password" component={Input}/>
                </div>

                <div className="input-field col s12 m6 offset-m3">
                    <Field id="passwordconfirm" name="passwordconfirm" type="password" label ="Confirm Password" component={Input}/>
                </div>

            </div>

            <div className="row">
                <button className="btn green col s12 m4 offset-m4" >Sign Up</button>
            </div>
        </form>
    );
}

function validate({ username, password, passwordconfirm }) {
    const errors = {};

    if (!username) {
        errors.username = 'Please enter your email';
    }

    if (!password) {
        errors.password = 'Please enter your password';
    }

    if (!passwordconfirm) {
        errors.passwordconfirm = 'Required';
    } else if (passwordconfirm !== password) {
        errors.passwordconfirm = 'Error: Password did not match';
    }

    return errors;
}

export default reduxForm({
    form: "sign-up-form",
    validate: validate
})(SignUpForm);
