import React from "react";

export default function SecaoSobre(){
    return (
        <section className="secao-sobre">
            <div className="limitar-secao">
                <h2>Quem somos nós</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div>
                    <img src="./assets/loja.png"></img>
                    <div>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="./assets/atendimento.png"></img>
                </div>
            </div>
        </section>
    )
}