import React, { useState } from "react";
import "./Styles.css";
const telas = [
  {
    nombre: "TESTGabardina",
    descripcion: "Resistente y versátil para prendas y uniformes.",
    imagen:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=80",
  },
  {
    nombre: "Lino",
    descripcion: "Fresco, elegante y perfecto para prendas de verano.",
    imagen:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    nombre: "Algodón",
    descripcion: "Suave, cómodo y disponible en diferentes colores.",
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    nombre: "Jean",
    descripcion: "Denim de excelente calidad para todo tipo de prendas.",
    imagen:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
  },
];
function App() {
  const [menu, setMenu] = useState(false);
  const whatsapp =
    "https://wa.me/5491136048804?text=Hola!%20Quiero%20consultar%20por%20telas.";
  const mapa =
    "https://www.google.com/maps?q=-34.6076994,-58.4048583&z=15&output=embed";
  const googleMaps =
    "https://www.google.com/maps/search/?api=1&query=-34.6076994,-58.4048583";
  return (
    <div className="app">
      {" "}
      {/* NAVBAR */}{" "}
      <header className="navbar">
        {" "}
        <div className="logo">
          {" "}
          <span>TEXTIL</span> <strong>ONCE</strong>{" "}
        </div>{" "}
        <nav className={menu ? "nav active" : "nav"}>
          {" "}
          <a href="#inicio" onClick={() => setMenu(false)}>
            {" "}
            Inicio{" "}
          </a>{" "}
          <a href="#telas" onClick={() => setMenu(false)}>
            {" "}
            Telas{" "}
          </a>{" "}
          <a href="#ofertas" onClick={() => setMenu(false)}>
            {" "}
            Ofertas{" "}
          </a>{" "}
          <a href="#nosotros" onClick={() => setMenu(false)}>
            {" "}
            Nosotros{" "}
          </a>{" "}
          <a href="#contacto" onClick={() => setMenu(false)}>
            {" "}
            Contacto{" "}
          </a>{" "}
        </nav>{" "}
        <a
          className="nav-button"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Consultar{" "}
        </a>{" "}
        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
          aria-label="Abrir menú"
        >
          {" "}
          ☰{" "}
        </button>{" "}
      </header>{" "}
      {/* HERO */}{" "}
      <section className="hero" id="inicio">
        {" "}
        <div className="hero-overlay"></div>{" "}
        <div className="hero-content">
          {" "}
          <span className="small-title">
            {" "}
            TELAS EN ONCE · BUENOS AIRES{" "}
          </span>{" "}
          <h1>
            {" "}
            La tela que <br /> <span>imaginás.</span>{" "}
          </h1>{" "}
          <p>
            {" "}
            Encontrá telas de calidad, variedad de colores y precios especiales
            para emprendedores, talleres y mayoristas.{" "}
          </p>{" "}
          <div className="hero-buttons">
            {" "}
            <a href="#telas" className="primary-button">
              {" "}
              Ver telas{" "}
            </a>{" "}
            <a
              href={whatsapp}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Consultar por WhatsApp{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="hero-badge">
          {" "}
          <strong>+100</strong>{" "}
          <span>
            {" "}
            variedades <br /> de telas{" "}
          </span>{" "}
        </div>{" "}
      </section>{" "}
      {/* CATEGORIAS */}{" "}
      <section className="categories" id="telas">
        {" "}
        <div className="section-title">
          {" "}
          <span>CONOCÉ NUESTRA VARIEDAD</span> <h2>Telas para cada proyecto</h2>{" "}
          <p>
            {" "}
            Seleccionamos telas para indumentaria, decoración, emprendimientos y
            producción.{" "}
          </p>{" "}
        </div>{" "}
        <div className="fabric-grid">
          {" "}
          {telas.map((tela, index) => (
            <article className="fabric-card" key={index}>
              {" "}
              <div className="fabric-image">
                {" "}
                <img src={tela.imagen} alt={tela.nombre} />{" "}
              </div>{" "}
              <div className="fabric-info">
                {" "}
                <span> {String(index + 1).padStart(2, "0")} / 04 </span>{" "}
                <h3>{tela.nombre}</h3> <p>{tela.descripcion}</p>{" "}
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  {" "}
                  Consultar →{" "}
                </a>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* PROMOCION */}{" "}
      <section className="offer" id="ofertas">
        {" "}
        <div className="offer-content">
          {" "}
          <span>OFERTA ESPECIAL</span>{" "}
          <h2>
            {" "}
            Precios especiales <br /> para mayoristas{" "}
          </h2>{" "}
          <p>
            {" "}
            Comprá por cantidad y accedé a precios especiales. Consultanos por
            disponibilidad y colores.{" "}
          </p>{" "}
          <a
            href={whatsapp}
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Quiero consultar{" "}
          </a>{" "}
        </div>{" "}
        <div className="offer-number">
          {" "}
          <span>HASTA</span> <strong>30%</strong> <span>DESCUENTO</span>{" "}
        </div>{" "}
      </section>{" "}
      {/* NOSOTROS */}{" "}
      <section className="about" id="nosotros">
        {" "}
        <div className="about-image">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80"
            alt="Telas"
          />{" "}
        </div>{" "}
        <div className="about-content">
          {" "}
          <span>POR QUÉ ELEGIRNOS</span>{" "}
          <h2>
            {" "}
            Calidad, variedad <br /> y atención personalizada.{" "}
          </h2>{" "}
          <p>
            {" "}
            Somos una tienda dedicada a la venta de telas en el corazón de Once.
            Trabajamos con clientes particulares, emprendedores, talleres y
            mayoristas.{" "}
          </p>{" "}
          <div className="features">
            {" "}
            <div>
              {" "}
              <strong>01</strong> <span>Gran variedad</span>{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>02</strong> <span>Precios mayoristas</span>{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>03</strong> <span>Atención personalizada</span>{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>04</strong> <span>Ubicación estratégica</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section className="cta">
        {" "}
        <span>¿BUSCÁS UNA TELA EN PARTICULAR?</span>{" "}
        <h2>Hablemos de tu próximo proyecto.</h2>{" "}
        <p>
          {" "}
          Mandanos una foto o contanos qué tela necesitás y te ayudamos a
          encontrarla.{" "}
        </p>{" "}
        <a
          href={whatsapp}
          className="primary-button"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Hablar por WhatsApp{" "}
        </a>{" "}
      </section>{" "}
      {/* CONTACTO */}{" "}
      <section className="contact" id="contacto">
        {" "}
        <div>
          {" "}
          <span>VISITANOS</span> <h2>Estamos en Once</h2>{" "}
          <p>📍 Once, Ciudad de Buenos Aires</p> <p>📞 +54 9 11 3604-8804</p>{" "}
          <p>🕐 Lunes a viernes · 9:00 a 18:00</p>{" "}
          <a
            href={googleMaps}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
            style={{ marginTop: "20px" }}
          >
            {" "}
            Cómo llegar →{" "}
          </a>{" "}
        </div>{" "}
        <div className="map-placeholder">
          {" "}
          <iframe
            src={mapa}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "350px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Once, Buenos Aires"
          ></iframe>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
      <footer>
        {" "}
        <div className="logo">
          {" "}
          <span>TEXTIL</span> <strong>ONCE</strong>{" "}
        </div>{" "}
        <p>Telas · Diseño · Calidad · Once</p> <span>© 2026 Textil Once</span>{" "}
      </footer>{" "}
      {/* WHATSAPP */}{" "}
      <a
        href={whatsapp}
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        {" "}
        <span>◉</span>{" "}
      </a>{" "}
    </div>
  );
}
export default App;
