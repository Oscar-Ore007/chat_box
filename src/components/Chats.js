import React, { useRef, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios';


const Chats = () => {

    const history = useHistory();
    const { user } = useAuth();
    const [ loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile

    useEffect(() => {
        if(!user) {
            history.push('/');

            return; 
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "c9b25fb4-38b6-4d68-9b3d-c0f1980ae7e4",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false);
        })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username',user.displayName );
                formdata.append('secret', user.uid);
            })
    }, [user,history]);
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Chatbox

                </div>
                <br> </br>
                <div onClick={handleLogout} className="logo-tab">
                    Logout 
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="c9b25fb4-38b6-4d68-9b3d-c0f1980ae7e4"
                userName="."
                userSecret="."
                /> 

        </div>
    )
}

export default Chats 