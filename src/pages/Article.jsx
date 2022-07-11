import React from "react";

export default function () {
  return (
    <>
      <section class="intro">
        <div class="intro__imagen">
          <img src={require("../resources/images/intro.jpg")} />
        </div>
        <div class="intro__contenido">
          <span class="intro__categoria">Noticias</span>
          <h1 class="intro__titulo">
            Cyberpunk 2077 tiene tres prólogos distintos
          </h1>
        </div>
        <div class="intro__autor">
          <img src={require("../resources/images/avatar.jpg")} />
          <span class="intro__autor-titulo">Autor</span>
          <span class="intro__autor-nombre">John Wick</span>
        </div>
      </section>
      <article class="articulo--principal">
        <p class="articulo--principal__intro">
          En Cyberpunk 2077 los jugadores podrán seleccionar entre tres
          historias de origen diferentes, cada una presentando una ubicación de
          partida distinta para su personaje.
        </p>
        <p>
          Conversando con VG247, el diseñador Pawel Sasko explicó un sistema que
          CD Projekt RED llama "Lifepaths" (caminos de vida), que en la práctica
          suena muy similar a las historias sobre el origen del personaje de
          Dragon Age: Origins.
        </p>
        <p>
          Uno de estos caminos de vida comienza en los Badlands, las áridas
          tierras que rodean Night City (suponemos que es el Nomad). CD Projekt
          RED no ha ofrecido descripción de las otras áreas, pero parece sensato
          suponer que los personajes de Corpo podrían comenzar en un distrito
          más corporativo de Night City, mientras que Street Kids podrían
          provenir de áreas de barrios marginales.
        </p>
        <h3>Noticias, fecha de lanzamiento y plataformas de Cyberpunk 2077</h3>
        <p>
          En otras noticias, recientemente descubrimos que CD Projekt RED tiene
          planes de desarrollar tres juegos Cyberpunk, y que Cyberpunk 2077
          contará con tramas románticas similares a las que vimos en The Witcher
          3. Si el romance no es su estilo, no se preocupen, podrán ser tan
          malvados como deseen gracias a que Cyberpunk 2077 no tendrá un sistema
          de moralidad.
        </p>
        <p>
          Cyberpunk 2077 se pondrá disponible el 16 de abril de 2020 y se
          lanzará en versiones para PC, PlayStation 4 y Xbox One.
        </p>
        <h2>No te Pierdas...</h2>
      </article>
      <section class="contenedor--cajas">
        <div class="caja">
          <div class="caja__imagen">
            <img src={require("../resources/images/xbox.jpg")} />
          </div>
          <div class="caja__contenido">
            <span class="caja__categoria">Xbox</span>
            <h3>Conoce las actualizaciones de Game Pass</h3>
            <p>
              A una semana terminado el E3, Microsoft anunció la 1era rotación
              de juegos para Xbox
            </p>
            <a>Leer Mas </a>
          </div>
        </div>
        <div class="caja">
          <div class="caja__imagen">
            <img src={require("../resources/images/fortnite.jpg")} />
          </div>
          <div class="caja__contenido">
            <span class="caja__categoria">Fortnite</span>
            <h3>Fortnite une fuerzas con Stranger Things</h3>
            <p>
              Portales hacia el Upside Down han aparecido dentro de Fortnite, y
              aunque no funcionan igual.
            </p>
            <a>Leer Mas </a>
          </div>
        </div>
        <div class="caja">
          <div class="caja__imagen">
            <img src={require("../resources/images/cuphead.jpg")} />
          </div>
          <div class="caja__contenido">
            <span class="caja__categoria">Cuphead</span>
            <h3>Cuphead se atrasa hasta el año 2020</h3>
            <p>
              Los miembros de Studio MDHR revelan la razón detrás del atraso de
              la fecha de lanzamiento.
            </p>
            <a>Leer Mas </a>
          </div>
        </div>
      </section>
    </>
  );
}
