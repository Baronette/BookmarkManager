import React, {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useUser } from '../UserContext'; 

const Logout = () =>{
    const history = useHistory();
    const {setUser} = useUser();

    useEffect(() => {
        const logout = async () => {
            setUser(null);
            await axios.post('/api/account/logout');
        }        
        logout();
        history.push('/');

    });

    return <></>
}
export default Logout;