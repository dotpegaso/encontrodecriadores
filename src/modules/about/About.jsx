import React from 'react';
import './About.scss';
import data from '../../data.json';

import HandShake from '../../res/about/HandShake';
import People from '../../res/about/People';
import Star from '../../res/about/Star';
import Coin from '../../res/about/Coin';
import PaintBrush from '../../res/about/PaintBrush';

const About = (props) => {

    function yearDiff() {
        let diff = (new Date().getTime() - new Date('09/19/2015').getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff/365.25));
    }

    let yearsAgo = yearDiff();
    
    return(
        <section id="about">
            <div className="header">
                <p>Saca só <b>o que é</b> o nosso rolê</p>
            </div>
            <div className="container">
                
                <div className="box">
                    <div className="icon">
                        <HandShake />
                    </div>
                    <div className="title">
                        <p>+ {data.organizacao.empreendedores}</p>
                    </div>
                    <div className="content">
                        <p>Empreendedores criativos e artistas já participaram de algum dos nossos projetos</p>
                        <br/>
                        <p>Gostaria de participar de futuras edições?</p>

                        <button className="btn" onClick={props.modal}>
                            <b>JOGA TUA IDEIA NA RODA</b>
                        </button>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <People />
                    </div>
                    <div className="title">
                        <p>+ {data.organizacao.publico_indireto}</p>
                    </div>
                    <div className="content">
                        <p>Pessoas já foram em alguns de nossos projetos</p>
                        <br/>
                        <p className="subtitle">
                            + {data.organizacao.publico_direto}
                        </p>
                        <p>Pessoas impactadas diretamente</p>
                        <br/>
                        <p className="subtitle">
                            + {data.organizacao.publico_midias_sociais}
                        </p>
                        <p>Pessoas impactadas indiretamente pelas mídias sociais</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <Star />
                    </div>
                    <div className="title">
                        <p>
                            { yearsAgo } anos<br/>
                            + {data.organizacao.edicoes} edições<br/>
                            + {data.organizacao.colabs.length} colabs
                        </p>
                    </div>
                    <div className="content">
                        <p>
                            {`${data.organizacao.colabs.map(x => '\n' + x)}`}
                        </p>
                        <br/>
                        <p className="subtitle">
                            Projetos Paralelos
                        </p>
                        <p>
                            {`${data.organizacao.paralelos.map(x => '\n' + x)}`}
                        </p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <Coin />
                    </div>
                    <div className="title">
                        <p>+ {data.organizacao.arrecadacao_direta}</p>
                    </div>
                    <div className="content">
                        <p>Reais (R$) gerados diretamente nas relações comerciais realizadas nos projetos</p>
                        <br/>
                        <p className="subtitle">
                            + {data.organizacao.arrecadacao_indireta}
                        </p>
                        <p>Reais (R$) gerados indiretamente (transporte, estrutura, meios de produção, design, turismo, mídia, etc)</p>
                    </div>
                </div>
                
                <div className="box">
                    <div className="icon">
                        <PaintBrush />
                    </div>
                    <div className="title">
                        <p>+ {data.organizacao.atividades}</p>
                    </div>
                    <div className="content">
                        <p>Atividades gratuitas entre shows, cinemas, oficinas, rodas de conversa e outras</p>
                    </div>
                </div>
            </div>

            <form action="https://art.us16.list-manage.com/subscribe/post?u=e12e297993805c8d490959b51&amp;id=e8fdb4a991" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="mailchimp validate" target="_blank">
                <p>Boas novas quentinhas</p>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Digite seu email" required></input>
                <input type="text" name="b_e12e297993805c8d490959b51_e8fdb4a991" tabIndex="-1" style={{display: 'none'}}></input>
                <input type="submit" value="Enviar" name="subscribe" id="mc-embedded-subscribe" className="button subscribe"></input>
            </form>
        </section>
    )
}

export default About;