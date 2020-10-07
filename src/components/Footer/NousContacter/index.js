import React from 'react';
import { Link } from 'react-router-dom';

import Arnaud from 'src/assets/images/team/0.jpeg';
import Alexis from 'src/assets/images/team/0 (1).jpeg';
import Mathieu from 'src/assets/images/team/0 (2).jpeg';
import Aurelien from 'src/assets/images/team/0 (3).jpeg';
import Github from 'src/assets/images/github-logo (2).png';
import LinkedIn from 'src/assets/images/linkedin (1).png';

import './styles.scss';

const NousContacter = () => (
  <div className="nouscontacter">
    <div className="cardsid">
      <div className="cardid">
        <img src="https://ca.slack-edge.com/T01084J5A8G-U011E6L4L0M-d217008a9e6f-512" alt=""/>
        <h1>Benjamin Trioullier</h1>
        <h2>Lead Dev Back</h2>
        <h2>Product Owner</h2>
        <div className="cardid__poste">
          <h3>Développeur Backend</h3>
          <h3>Spécialisé Symfony</h3>
        </div>
        <p>benjamin.trioullier@gmail.com</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/trioullier-benjamin-8b55791b4/"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/Benjamin-TRIOULLIER"><img src={Github} alt="" /></a>
        </div>
      </div>
      <div className="cardid">
        <img src={Mathieu} alt=""/>
        <h1>Mathieu Llegou</h1>
        <h2>Référent Technique Back</h2>
        <div className="cardid__poste">
          <h3>Développeur Backend</h3>
          <h3>Spécialisé Symfony</h3>
        </div>
        <p>mathieullegou@hotmail.fr</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/mathieullegou/"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/MatLLG"><img src={Github} alt="" /></a>
        </div>
      </div>
      <div className="cardid">
        <img src={Alexis} alt=""/>
        <h1>Alexis Cabillic</h1>
        <h2>Scrum Master</h2>
        <div className="cardid__poste">
          <h3>Développeur Backend</h3>
          <h3>Spécialisé Symfony</h3>
        </div>
        <p>alexis.cabillic@gmail.com</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/alexis-cabillic/"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/CabAlexis"><img src={Github} alt="" /></a>
        </div>
      </div>
      <div className="cardid">
        <img src={Arnaud} alt=""/>
        <h1>Arnaud Soulabaille</h1>
        <h2>Lead Dev Front</h2>
        <div className="cardid__poste">
          <h3>Développeur Frontend</h3>
          <h3>Spécialisé React.js</h3>
        </div>
        <p>soulabaille.arnaud@gmail.com</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/arnaudsoulabaille/"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/ArnoSlb"><img src={Github} alt="" /></a>
        </div>
      </div>
      <div className="cardid">
        <img src={Aurelien} alt=""/>
        <h1>Aurélien Nicolet</h1>
        <h2>Référent Technique Front</h2>
        <div className="cardid__poste">
          <h3>Développeur Frontend</h3>
          <h3>Spécialisé React.js</h3>
        </div>
        <p>n.aurelien06@gmail.com</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/aur%C3%A9lien-nicolet-4b1a001a6/"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/Aurelienn06"><img src={Github} alt="" /></a>
        </div>
      </div>
    </div>
  </div>
);

export default NousContacter;
