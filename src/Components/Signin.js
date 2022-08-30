import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerHeader } from '../Elements/Header';
import Button from '../Elements/Button';
import { Form, Input, BigInput, ButtonContainer } from '../Elements/FormElements';
import { ReactComponent as SvgPikachu } from '../Images/pikachu2.svg';
import styled from 'styled-components';

const Svg = styled(SvgPikachu)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 0rem;
`

const Signin = () => {
    return (
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>

            <Header>
                <ContainerHeader>
                    <Title>Iniciar Sesion</Title>
                    <div>
                        <Button to="/login">Registrarse</Button>
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

                <ButtonContainer>
                    <Button primario as="button" type="submit">Iniciar Sesion</Button>
                </ButtonContainer>
            </Form>

        </>
    );
}
 
export default Signin;