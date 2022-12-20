import React, { useRef } from "react";
import { email } from "@config";
// import "../../styles/components/sections/contact.scss";

export default function Contact() {
  const revealContainer = useRef(null);
  return (
    <section id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">¿Nuevos Retos?</h2>

      <h2 className="title">Contactame</h2>

      <p>
        Actualmente estoy buscando nuevas oportunidades y retos, si quieres
        contactarme mi bandeja de entrada siempre está disponible. ¡Haré lo
        posible por responderte pronto!
      </p>

      <a className="button button--big" href={`mailto:${email}`}>
        Hello World
      </a>
    </section>
  );
}
