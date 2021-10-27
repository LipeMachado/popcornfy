import React from 'react';
import './style.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function LoginPage() {
    return (
        <div>
            <div className="modal-window">
                <div>
                    <a href="/" className="modal-close">
                        <ExitToAppIcon />
                    </a>
                        <h1>Login</h1>
                    <div className="formArea">
                        <div id="input-area">
                            <div className="f-inp">
                                <input type="text" placeholder="Email Address"/>
                            </div>
                            <div className="f-inp">
                                <input type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <a href="/home">
                                <button type="submit" id="submit-button">LOGIN</button>
                            </a>
                        </div>
                        <div id="forgot-pass">
                            <a href="/login">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}