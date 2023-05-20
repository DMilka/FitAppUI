import React, {useReducer, useRef} from 'react';
import GridItem from "../../../../components/grid/GridItem/GridItem";
import Container from "../../../../components/container/Container/Container";
import GridContainer from "../../../../components/grid/GridContainer/GridContainer";
import TextField from "../../../../components/form/inputs/TextField/TextField";
import Translation from "../../../../components/translate/Translation";
import {Link} from "react-router-dom";
import Button from "../../../../components/buttons/Button/Button";
import {loginFormReducer} from "../LoginForm/LoginFormReducer";
import { REGISTER_FORM_CONSTANTS} from "../LoginForm/LoginFormConstants";
import ReCaptcha from "../../../../components/recaptcha/ReCaptcha";

const RegisterForm = () => {
    const recaptchaRef = useRef(null);

    const [emailAddressState, dispatchEmailAddressState] = useReducer(loginFormReducer, {
        type: REGISTER_FORM_CONSTANTS.EMAIL,
        value: '',
        touched: false,
        valid: false
    })
    const [passwordState, dispatchPasswordState] = useReducer(loginFormReducer, {
        type: REGISTER_FORM_CONSTANTS.PASSWORD,
        value: '',
        touched: false,
        valid: false
    })

    const changeEmailCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmailAddressState({
            type: REGISTER_FORM_CONSTANTS.EMAIL,
            value: event.target.value
        })
    }
    const changePasswordCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchPasswordState({
            type: REGISTER_FORM_CONSTANTS.PASSWORD,
            value: event.target.value
        })
    }

    return (
        <div>
            <GridContainer justifyContent={'center'}>
                <GridItem xs={12} sm={8} md={4} lg={2} margin={2}>
                    <Container width={335}>
                        <GridContainer padding={2} justifyContent={'space-between'}>
                            <GridItem xs={12} marginTop={2}>
                                <TextField label={<Translation trans={'form:input.email'}/>} value={emailAddressState.value} onChange={changeEmailCallback} name={'email-address'} error={!emailAddressState.valid && emailAddressState.touched}/>
                            </GridItem>
                            <GridItem xs={12}  marginTop={2}>
                                <TextField label={<Translation trans={'form:input.password'}/>} value={passwordState.value} onChange={changePasswordCallback} type={'password'} name={'password'} error={!passwordState.valid && passwordState.touched}/>
                            </GridItem>
                            <GridItem xs={12}  marginTop={2}>
                                <ReCaptcha recaptchaRef={recaptchaRef}/>
                            </GridItem>
                            <GridItem xs={12} marginTop={2}>
                                <Link to="/">
                                    <Translation trans={'form:link.account_exist_login'}/>
                                </Link>
                            </GridItem>
                            <GridItem xs={12} textAlign={'center'} marginTop={10}>
                                <Button type="submit" label={<Translation trans={'translation:button.register'}/>} disabled={!emailAddressState.valid || !passwordState.valid}/>
                            </GridItem>
                        </GridContainer>
                    </Container>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default RegisterForm;
