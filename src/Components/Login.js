import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Title, ContainerHeader} from '../Elements/Header';
import Button from '../Elements/Button';
import { Form, Input, BigInput, ButtonContainer } from '../Elements/FormElements';
import { ReactComponent as SvgPikachu } from '../Images/pikachu.svg';
import styled from 'styled-components';

const Svg = styled(SvgPikachu)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 0rem;
`

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>

            <Header>
                <ContainerHeader>
                    <Title>Crear cuenta</Title>
                    <div>
                        <Button to="/signin">Iniciar Sesión</Button>
                    </div>
                </ContainerHeader>
            </Header>

            <Form>
                <Svg />
                <Input 
                    type="email"
                    name="email"
                    placeholder='Correo Electronico'
                />
                <Input
                    type="password"
                    name="password"
                    placeholder='Contraseña'
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder='Repite la contraseña'
                />

                <ButtonContainer>
                    <Button primario as="button" type="submit">Crear cuenta</Button>
                </ButtonContainer>
            </Form>

        </>
    );
}
 
export default Login;