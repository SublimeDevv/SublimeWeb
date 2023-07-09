import React from 'react';
import Header from '../components/Header';
import '../styles/styles.css';
import icons from '../utils/icons.json';

export default function Home() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="card">
          <img
            src={require('../images/image1.jpg')}
            alt="Imagen"
            className="circle-image"
          />
          <div className="heading-container">
            <h1 className="typing-effect">
              <i className="nf nf-md-hand_wave"> </i>¡Hola! Soy Sublime_Const
            </h1>
            <p>
              <img
                alt="gamer"
                src="https://img.shields.io/badge/-Gamer-FF0000?style=flat-square&logo=youtubegaming&logoColor=white"
              />
              <img
                alt="student"
                src="https://img.shields.io/badge/-Estudiante-005FED?style=flat-square&logo=xdadevelopers&logoColor=white"
              />
            </p>
            <h2>
              <i className="nf nf-md-code_braces_box"></i> Tecnologías con las
              que trabajo:
            </h2>
            <h1>
              <div className="languages-icons">
                {icons.languages.map((language) => (
                  <i className={Object.values(language)[0]}></i>
                ))}
              </div>
            </h1>
            <p>
              {icons.tools.map((tool, index) => (
                <img
                  key={index}
                  alt={Object.keys(tool)[0]}
                  src={Object.values(tool)[0]}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
