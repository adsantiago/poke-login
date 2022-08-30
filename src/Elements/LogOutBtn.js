import React from 'react';
import { ReactComponent as IconLogout } from '../Images/log-out.svg';
import Button from './Button';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LogOutBtn = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try{
            await signOut(auth);
            navigate('/Signin')
        } catch(error){
            console.log(error)
        }
    }

    return (
        <Button iconoGrande as="button" onClick={logout}>
            <IconLogout />
        </Button>
    );
}
 
export default LogOutBtn;