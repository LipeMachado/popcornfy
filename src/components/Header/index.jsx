import React from 'react';
import './style.css';
import './app.js';

export default function Header() {
    return (
        <div>
            <div className="container">
                <div className="box">
                    <div className="interior">
                        <a className="btn" href="#open-modal"><span className="btnText">Netfy</span></a>
                    </div>
                </div>
            </div>
            
            <div id="open-modal" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">
                        Close    
                    </a>
                        <h1>Welcome</h1>
                    <div className="formArea">
                        <div id="input-area">
                            <div class="f-inp">
                                <input type="text" placeholder="Email Address"/>
                            </div>
                            <div class="f-inp">
                                <input type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <button type="submit" id="submit-button">LOGIN</button>
                        </div>
                        <div id="forgot-pass">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}