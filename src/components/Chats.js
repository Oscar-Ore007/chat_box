import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';


const Chats = () => {

    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Chatbox

                </div>
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