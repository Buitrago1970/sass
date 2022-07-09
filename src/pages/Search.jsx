import React from "react";

export default function search() {
  return (
    <>
      <div class="buscador">
        <form>
          <input
            class="buscador__input"
            type="text"
            placeholder="Playstation"
          />
        </form>
      </div>
      <header class="encabezado--con-filtros">
        <h2>20 Resultados para "PlayStation"</h2>
        <div class="filtros">
          <span>Filtrar Por</span>
          <a class="fa fa-th-large" href="#"></a>
          <a class="fa fa-bars" href="#"></a>
        </div>
      </header>
      <section class="contenido">
        <div class="caja">
          <a class="caja__imagen" href="#">
            <img src="../../resources/images/apex.jpg" />
          </a>
          <div class="caja__contenido">
            <span class="caja__categoria">Video</span>
            <h3>
              Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa
            </h3>
            <p>
              Dos nuevos trailers de Apex Legends muestran lo que nos espera en
              la Temporada 2 del battle royale de Respawn.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="caja">
          <a class="caja__imagen" href="#">
            <img src="../../resources/images/crash.jpg" />
          </a>
          <div class="caja__contenido">
            <span class="caja__categoria">Video</span>
            <h3>Ya salio la reseña de Crash Team Racing Nitro Fueled</h3>
            <p>
              Veinte años después del lanzamiento del original, Crash Team
              Racing ha recibido un remake total que logra mantener todos los
              aspectos originales.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="caja">
          <a class="caja__imagen" href="#">
            <img src="../../resources/images/ff.jpg" />
          </a>
          <div class="caja__contenido">
            <span class="caja__categoria">Video</span>
            <h3>
              Final Fantasy XIV recibirá una serie live-action en televisión{" "}
            </h3>
            <p>
              Final Fantasy XIV Online recibirá una adaptación aTV de parte de
              Square Enix con Sony Pictures Television y Hivemind.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="caja">
          <div class="caja__contenido">
            <span class="caja__categoria">noticias</span>
            <h3>pes 2020 obtiene acuerdo con el manchester united</h3>
            <p>
              Konami ha anunciado que han firmado un acuerdo con el club de
              futbol inglés Manchester United para ser incluido en el juego.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="caja">
          <div class="caja__contenido">
            <span class="caja__categoria">noticias</span>
            <h3>cyberpunk: habrá dos juegos más</h3>
            <p>
              El estudio polaco de videojuegos CD Projekt está trabajando no en
              uno, sino en tres juegos ubicados en el universo RPG de Cyberpunk.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="caja">
          <div class="caja__contenido">
            <span class="caja__categoria">noticias</span>
            <h3>Mortal Kombat 11: Filtración confirma al Joker como DLC</h3>
            <p>
              Usuarios han investigado el más reciente parche de la versión para
              PC de Mortal Kombat 11 donde se incluyen datos del Joker,
              Terminator.
            </p>
          </div>
          <div class="estadistica--articulos">
            <ul>
              <li>
                <i class="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i class="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
