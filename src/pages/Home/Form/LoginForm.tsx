import React, {useState} from 'react';
import GridContainer from "../../../components/grid/GridContainer/GridContainer";
import GridItem from "../../../components/grid/GridItem/GridItem";
import TextField from "../../../components/form/inputs/TextField/TextField";
import Button from "../../../components/buttons/Button/Button";
import Container from "../../../components/container/Container/Container";
import Translation from "../../../components/translate/Translation";


const LoginForm = () => {
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = (): void => {

    }

    return (
            <GridContainer justifyContent={'center'} >
                <GridItem xs={12} sm={8} md={4} lg={2} margin={2}>
                    <Container height={300}>
                        <GridContainer padding={2} justifyContent={'space-between'}>
                            <GridItem xs={12} marginTop={2}>
                                <TextField label={<Translation trans={'form:input.email'}/>} value={emailAddress} name={'email-address'}/>
                            </GridItem>
                            <GridItem xs={12}  marginTop={2}>
                                <TextField label={<Translation trans={'form:input.password'}/>} value={password} name={'password'}/>
                            </GridItem>
                            <GridItem xs={12} textAlign={'center'}  marginTop={10}>
                                <Button label={<Translation trans={'translation:button.login'}/>} onClick={login} />
                            </GridItem>
                        </GridContainer>
                    </Container>
                </GridItem>
            </GridContainer>
    );
};

export default LoginForm;
