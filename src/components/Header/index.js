import React from 'react';
import './style.css';

export default function Header() {
    return (
        <header>
            <div className='topo-container limitar-secao'>
                <img className='topo-logo' src='./assets/logo.png'></img>
                <nav className='topo-menu'>
                        <a href='#produtos'>PRODUTOS</a>
                        <a href='#sobre'>SOBRE</a>
                        <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}