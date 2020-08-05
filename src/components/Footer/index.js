import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="WorkarroundFlix" />
      </a>
      <p>
        Criado na
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> por <a href="mailto:juninhogpe@gmail.com">
          Edson Jr.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
