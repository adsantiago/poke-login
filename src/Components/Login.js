import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Title, ContainerHeader} from '../Elements/Header';
import Button from '../Elements/Button';
import { Form, Input, BigInput, ButtonContainer } from '../Elements/FormElements';
import { ReactComponent as SvgPikachu } from '../Images/pikachu.svg';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Alert from '../Elements/Alert';

const Svg = styled(SvgPikachu)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 0rem;
`

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [alertState, changeAlertState] = useState(false);
    const [alert, changeAlert] = useState({});

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
              setEmail(e.target.value);
              break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        changeAlertState(false);
        changeAlert({});
    
        const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!regularExpression.test(email)) {
            changeAlertState(true)
            changeAlert({
                type: 'error',
                message: 'Ingrese un correo electronico valido'
            })
            return;
        }

        if(email === '' || password === '' || password2 === ''){
            changeAlertState(true)
            changeAlert({
                type: 'error',
                message: 'Porfavor rellene todos los datos'
            })
            return;
        }

        if(password !== password2){
            changeAlertState(true)
            changeAlert({
                type: 'error',
                message: 'Las contraseñan no coniciden'
            })
            return;
        }

        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch(error){
            changeAlertState(true)
            let message;
            switch (error.code) {
                case 'auth/weak-password':
                    message = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    message = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    break;
                case 'auth/invalid-email':
                    message = 'El correo electrónico no es válido.'
                    break;
                default:
                    message = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }
            changeAlert({ type: 'error', message: message })
        }

    }

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

            <Form onSubmit={handleSubmit}>
                <Svg />
                <Input 
                    type="email"
                    name="email"
                    placeholder='Correo Electronico'
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder='Repite la contraseña'
                    value={password2}
                    onChange={handleChange}
                />

                <ButtonContainer>
                    <Button primario as="button" type="submit">Crear cuenta</Button>
                </ButtonContainer>
            </Form>

            <Alert
                type={alert.type}
                message={alert.message}
                alertState={alertState}
                changeAlertState={changeAlertState}
            />

        </>
    );
}
 
export default Login;