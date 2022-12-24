import React from 'react';

export default function Hero() {
  return (
    <section className='heroSection'>
      <h1>Hola, mi nombre es </h1>
      <h2 className="big-heading">Ximena Anzola</h2>
      <h3 className="big-heading">Front-End Developer</h3>

      <p>
        Soy Ingeniera Ambiental y Desarrolladora Frontend, me apasioná la construcción de proyectos basados en soluciones optimás. Fiel creyente que la planeación es el primer paso del éxito.
      </p>
      <a
        className="button button--big"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer">
        Contactame!
      </a>
    </section>
  );
};
