import React, { useRef } from "react";
import Image from 'next/image'
import photo from '../../components/images/photo.jpeg'
// import photo from '../../components/images/photo1.jpg'
// import { StaticImage } from "gatsby-plugin-image";

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
              Inicie en el mundo de la programación en el año 2021, apoyando
              (.....).
              Esto, desperto mi interes en este nuevo mundo, e inicie mi formacion
              autonoma con diferentes cursos en platzi y busqueda en la web. Busqueda
              que me llevo a postular y posteriormente a ingresar a Laboratoria, alli
              curse el programa intensivo de 6 meses para Front-end Developer, enfocado
              al desarrollo de habilidades técnicas y socioemocionales, en la simulación
              de un ambiente laboral basado en el desarrollo de proyectos y trabajo colaborativo.
            </p>

            <p>
              Mi propósito es contribuir de manera activa con acciones que permitan mejorar
              la calidad de vida de las personas; mediante la mejora continua de mis practicas,
              logrando productos optimizados, accecisbles, con excelente experiencia, que logre
              unir usuarios a kilometros con un solo click.
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
            {/* <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
