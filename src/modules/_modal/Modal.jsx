import React from 'react';
import './Modal.scss';
import data from '../../data.json';

import People from '../../res/modal/people.png';
import Close from '../../res/common/Close';

const Modal = (props) => {

    return(
        <div className="modal">
            <div className="content">
                <div className="box" style={{ backgroundImage : `url(${People})`}}></div>
                <div className="box">
                    <Close onClick={props.modal}/>
                    <p className="disclaimer">
                    Envie sua <em>ideia/marca/produto</em> criativo que entraremos em contato!
                    </p>
                    <form action={data.config.formspark}>
                        <input type="checkbox" name="_honeypot" style={{ display: "none" }} tabindex="-1" autocomplete="off" />

                        <label htmlFor="name">Seu nome</label>
                        <input type="text" id="name" name="Nome" required/>
                        
                        <label htmlFor="email">Seu email</label>
                        <input type="email" id="email" name="Email" required/>

                        <label htmlFor="idea">Site ou Rede Social da sua ideia/produto</label>
                        <input type="text" id="idea" name="Site/Rede Social" required/>

                        <label htmlFor="images">Link para imagens do seu produto (Insta, Face etc)</label>
                        <input type="text" id="images" name="Imagens do Produto" required/>

                        <label htmlFor="category">Sua categoria</label>
                        <select id="category" name="Categoria" required>
                            <option value="arte">Arte</option>
                            <option value="gastronomia">Gastronomia</option>
                            <option value="moda">Moda</option>
                            <option value="fotografia">Fotografia</option>
                            <option value="oficina">Oficina</option>
                            <option value="música">Música</option>
                        </select>

                        <label htmlFor="description">Descreva o que sua ideia/produto faz</label>
                        <textarea id="description" name="Descrição" cols="30" rows="5" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;