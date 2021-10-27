import React from 'react';
import './style.css';

export default function LoginPage() {
    return (
        <div>
            <div className="modal-window">
                <div>
                    <a href="/" className="modal-close">
                        Close    
                    </a>
                        <h1>Welcome</h1>
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
                            <button type="submit" id="submit-button">LOGIN</button>
                        </div>
                        <div id="forgot-pass">
                            <a href="/">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}