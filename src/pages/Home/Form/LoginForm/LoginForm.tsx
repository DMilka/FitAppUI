import React, {useReducer, useState} from 'react';
import GridContainer from "../../../../components/grid/GridContainer/GridContainer";
import GridItem from "../../../../components/grid/GridItem/GridItem";
import TextField from "../../../../components/form/inputs/TextField/TextField";
import Button from "../../../../components/buttons/Button/Button";
import Container from "../../../../components/container/Container/Container";
import Translation from "../../../../components/translate/Translation";
import {loginFormReducer} from "./LoginFormReducer";
import {LOGIN_FORM_CONSTANTS} from "./LoginFormConstants";


const LoginForm = () => {
    const [emailAddressState, dispatchEmailAddressState] = useReducer(loginFormReducer, {
        type: LOGIN_FORM_CONSTANTS.EMAIL,
        value: '',
        touched: false,
        valid: false
    })
    const [passwordState, dispatchPasswordState] = useReducer(loginFormReducer, {
        type: LOGIN_FORM_CONSTANTS.PASSWORD,
        value: '',
        touched: false,
        valid: false
    })

    const changeEmailCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmailAddressState({
            type: LOGIN_FORM_CONSTANTS.EMAIL,
            value: event.target.value
        })
    }
    const changePasswordCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchPasswordState({
            type: LOGIN_FORM_CONSTANTS.PASSWORD,
            value: event.target.value
        })
    }

    const login = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    }

    return (
        <GridContainer justifyContent={'center'} >
            <GridItem xs={12} sm={8} md={4} lg={2} margin={2}>
                <Container height={300}>
                    <form onSubmit={login}>
                        <GridContainer padding={2} justifyContent={'space-between'}>
                            <GridItem xs={12} marginTop={2}>
                                <TextField label={<Translation trans={'form:input.email'}/>} value={emailAddressState.value} onChange={changeEmailCallback} name={'email-address'} error={!emailAddressState.valid && emailAddressState.touched}/>
                            </GridItem>
                            <GridItem xs={12}  marginTop={2}>
                                <TextField label={<Translation trans={'form:input.password'}/>} value={passwordState.value} onChange={changePasswordCallback} type={'password'} name={'password'} error={!passwordState.valid && passwordState.touched}/>
                            </GridItem>
                            <GridItem xs={12} textAlign={'center'} marginTop={10}>
                                <Button type="submit" label={<Translation trans={'translation:button.login'}/>} disabled={!emailAddressState.valid || !passwordState.valid}/>
                            </GridItem>
                        </GridContainer>
                    </form>
                </Container>
            </GridItem>
        </GridContainer>
    );
};

export default LoginForm;
