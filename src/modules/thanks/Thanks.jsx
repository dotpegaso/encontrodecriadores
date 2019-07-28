import React from 'react'
import './Thanks.scss'
import Logo from '../../res/home/Logo';

const Thanks = () => {
    return(
        <section id="thanks">
            <div className="logo">
                <Logo fill="#ebff00" />
            </div>

            <div className="info">
                <h3>Email enviado!</h3>

                <p className="disclaimer">
                    Obrigado por compartilhar teu trampo com a gente! 
                    agora vamos analisar seu produto seguindo tais critérios:
                </p>

                <ul className="list">
                    <li><span>participação no processo criativo de construção do produto/ serviço</span></li>
                    <li><span>identidade visual</span></li>
                    <li><span>impacto social / ou sustentável (não obrigatório)</span></li>
                    <li><span>alinhamento com conceito do projeto</span></li>
                    <li><span>ticket médio</span></li>
                </ul>

                <p className="result">
                    Retornaremos contato em breve, valeu mesmo!
                </p>
            </div>
            
        </section>
    )
}

export default Thanks