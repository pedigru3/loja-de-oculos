import React from 'react';
import './style.css';

export default function SecaoContato(){
    return (
        <section className='secao-contato' id='contato'>
            <div className='limitar-secao'>
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className='contato-container'>
                    <div className='contato-card'>
                        <h4>Contato</h4>
                        <div className='social-icon'>
                            <img src='./assets/local.png'></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className='social-icon'>
                            <img src='./assets/telefone.png'></img>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className='social-icon'>
                            <img src='./assets/email.png'></img>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className='contato-card'>
                        <h4>Nossas Redes Sociais</h4>
                        <div className='social-icon'>
                            <img src='./assets/fb.png'></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className='social-icon'>
                            <img src='./assets/ig.png'></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className='social-icon'>
                            <img src='./assets/tt.png'></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}