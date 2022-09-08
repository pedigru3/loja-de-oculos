import React from 'react';
import './style.css';

export default function Header() {
    return (
        <header>
            <div className='topo-container limitar-secao'>
                <img className='topo-logo' src='./assets/logo.png'></img>
                <nav className='topo-menu'>
                        <a href=''>PRODUTOS</a>
                        <a href=''>SOBRE</a>
                        <a href=''>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}