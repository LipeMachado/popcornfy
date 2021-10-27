import React from 'react';
import './style.css';

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ' '}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://fontmeme.com/permalink/211027/179cba729689a99d8dce70daf62b8bba.png" alt="Moviefy" />
                </a>
            </div>

            <div className="header--user">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"/>
            </div>
        </header>
    );
}