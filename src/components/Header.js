import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'} className="button">
            Inicio
          </Link>
          <Link to={'/Projects'} className="button">
            Proyectos
          </Link>
          <Link to={"/MyConfig"}className="button">
            Entorno GNU/Linux
          </Link>
        </nav>
      </header>
    </>
  );
}
