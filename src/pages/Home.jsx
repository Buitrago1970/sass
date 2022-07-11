import React from "react";

export default function Home() {
  return (
    <>
      <main className="contenedor--home">
        <a className="caja--con-fondo caja--grande">
          <div className="caja__imagen">
            <img
              src={require("../resources/images/cyberpunk-2077.jpg")}
              alt="why?"
            />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">Destacadas</span>
            <h2>Cyberpunk 2077 tiene tres prólogos distintos</h2>
            <p>
              En Cyberpunk 2077 los jugadores podrán seleccionar entre tres
              historias de origen diferentes, cada una presentando una ubicación
              de partida distinta para su personaje.
            </p>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <a className="caja--con-fondo caja--pequena caja-rdr2">
          <div className="caja__imagen">
            <img src={require("../resources/images/rdr2.jpg")} />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">PS4</span>
            <h2>Red Dead Redemption 2 llegará a PC</h2>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <div className="banner--homepage">
          <h3>
            Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa.
          </h3>
          <p>
            Dos nuevos trailers de Apex Legends muestran lo que nos espera en la
            Temporada 2 del battle royale de Respawn.
          </p>
          <a className="button">Leer mas</a>
        </div>
        <a className="caja--con-fondo caja--pequena caja-ff">
          <div className="caja__imagen">
            <img src={require("../resources/images/ff.jpg")} />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">PS4</span>
            <h2>
              Final Fantasy XIV recibirá una serie live-action en televisión
            </h2>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <a className="caja--con-fondo caja--pequena caja-xbox">
          <div className="caja__imagen">
            <img src={require("../resources/images/xbox.jpg")} />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">XBOX</span>
            <h2>Conoce las actualizaciones de XBOX Game Pass</h2>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <a className="caja--con-fondo caja--pequena caja-fortnite">
          <div className="caja__imagen">
            <img src={require("../resources/images/fortnite.jpg")} />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">FORTNITE</span>
            <h2>Fortnite une fuerzas con Stranger Things</h2>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <a className="caja--con-fondo caja--mediana caja-zelda">
          <div className="caja__imagen">
            <img src={require("../resources/images/zelda.jpg")} />
          </div>
          <div className="caja--con-fondo__contenido">
            <span className="caja--con-fondo__categoria">Switch</span>
            <h2>
              Secuela de The Legend of Zelda: Breath of the Wild anunciada en el
              E3 2019
            </h2>
          </div>
          <div className="caja--con-fondo__stats">
            <ul>
              <li>
                <i className="fas fa-share"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-eye"></i>
                <span>275</span>
              </li>
              <li>
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
              </li>
            </ul>
          </div>
        </a>
        <div className="sidebar--listado">
          <h3>Noticias Destacadas</h3>
          <ul>
            <li>
              <a href="#">
                <span className="sidebar--listado__numero">1</span>
                <span className="sidebar--listado__titulo">
                  GTA VI: Filtraciones que son bastante dudosas
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="sidebar--listado__numero">2</span>
                <span className="sidebar--listado__titulo">
                  Secuela de The Legend of Zelda: Breath of the Wild anunciada
                  en el E3 2019
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="sidebar--listado__numero">3</span>
                <span className="sidebar--listado__titulo">
                  Red Dead Online recibe actualización masiva y sale de Beta
                </span>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
