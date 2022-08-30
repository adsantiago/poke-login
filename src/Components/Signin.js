import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Header, Title, ContainerHeader } from '../Elements/Header';
import Button from '../Elements/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Input, BigInput, ButtonContainer } from '../Elements/FormElements';
import { ReactComponent as SvgPikachu } from '../Images/pikachu2.svg';
import styled from 'styled-components';
import { auth } from '../firebase/firebaseConfig';
import Alert from '../Elements/Alert';

const Svg = styled(SvgPikachu)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 0rem;
`

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, changeAlertState] = useState(false);
    const [alert, changeAlert] = useState({});

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);
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

        if (email === '' || password === '') {
            changeAlertState(true)
            changeAlert({
                type: 'error',
                message: 'Porfavor rellene todos los datos'
            })
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            changeAlertState(true)
            let message;
            switch (error.code) {
                case 'auth/wrong-password':
                    message = 'La contraseña no es correcta.'
                    break;
                case 'auth/user-not-found':
                    message = 'No se encontro ninguna cuenta con este correo electronico.'
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

                <ButtonContainer>
                    <Button primario as="button" type="submit">Iniciar Sesion</Button>
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
 
export default Signin;