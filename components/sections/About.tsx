import React, { useRef } from "react";
import Image from 'next/image'
import photo from '../../components/images/photo.jpeg'

export default function About() {
  const revealContainer = useRef(null);
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "TypeScript",
    "NextJs",
    "Node.js",
    "firebase",
    "Sass",
    "Html",
    "Css",
  ];

  return (
    <section className="aboutSection" id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className="styledText">
          <div>
            <p>
              Hola! Mi nombre es Ximena Anzola, soy Ingeniera Ambiental de
              la Universidad Santo Tomas y Desarrolladora Frontend.
            </p>

            <p>
              Inicie en el mundo de la programación a en el año 2021, apoyando pequeños
              proyectos enfocados al diseño de páginas web. Esto, despertó mi interés en
              este nuevo mundo, e inicie mi formación autónoma con diferentes cursos en
              Platzi y búsqueda en la web. Búsqueda que me llevó a postular y posteriormente
              a ingresar a Laboratoria, allí cursé el programa intensivo de 6 meses para
              Front-end Developer, enfocado al desarrollo de habilidades técnicas y
              socioemocionales, en la simulación de un ambiente laboral basado en el
              desarrollo de proyectos y trabajo colaborativo.
            </p>

            <p>
              Mi propósito es contribuir de manera activa con acciones que permitan mejorar
              la calidad de vida de las personas; mediante la mejora continuá de mis prácticas,
              logrando productos optimizados, accecisbles, con excelente experiencia, que logre
              unir usuarios a kilómetros, con un solo click.
            </p>

            <p>
              Estas son algunas de las tecnologías con las que he trabajado:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        <div className="styledPic">
          <div className="wrapper">
            <Image src={photo} alt='Headshot' className="img" width={300} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
