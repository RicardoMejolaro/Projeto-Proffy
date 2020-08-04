import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/56407810?s=460&u=928b5353390601f2e44f39f5dc8c646cd152b300&v=4" alt="Ricardo Mejolaro"/>
      <div>
        <strong>Ricardo Mejolaro</strong>
        <span>Programação</span>
      </div>
    </header>

    <p>Formado em Sistemas de Informação.
        <br/><br/>  
      Apaixonado por desenvolvimento Web, e todo o universo JavaScript.
    </p>

    <footer>
      <p>Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;