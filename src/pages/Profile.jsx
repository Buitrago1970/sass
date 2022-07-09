import React from "react";

export default function Profile() {
  return (
    <>
      <main>
        <section class="perfil">
          <img class="perfil__avatar" src="../images/avatar.jpg" />
          <h2 class="perfil__nombre">John Wick</h2>
          <h3 class="perfil__titulo">Asesino Legendario</h3>
          <a class="perfil__boton" href="#">
            Seguir
          </a>
          <div class="estadistica--perfil">
            <div class="estadistica_elemento">
              <h3>12k</h3>
              <span>Seguidores</span>
            </div>
            <div class="estadistica_elemento">
              <h3>1.7k</h3>
              <span>Siguiendo</span>
            </div>
            <div class="estadistica_elemento">
              <h3>48</h3>
              <span>Articulos</span>
            </div>
          </div>
          <div class="perfil__minibio">
            <h2>Acerca de Mi</h2>
            <h3>Asesino a sueldo retirado y amante de perros</h3>
          </div>
          <div class="ubicacion--perfil">
            <i class="fas fa-map-marker-alt"></i>
            <h2>Estados Unidos</h2>
            <h3>227km Cerca</h3>
          </div>
          <div class="galeria">
            <h2>Mis Fotos</h2>
            <div class="galeria__foto-principal">
              <img src="../images/galeria1.jpg" />
            </div>
            <div class="galeria__fotos-adicionales">
              <img src="../images/galeria2.jpg" width="160" />
              <img src="../images/galeria3.jpg" />
              <img src="../images/galeria4.jpg" />
            </div>
          </div>
        </section>
        <aside class="articulos">
          <div class="articulo">
            <span class="articulo__categoria">Playstation</span>
            <h2 class="articulo__titulo">
              GTA VI: Filtraciones que son bastante dudosas
            </h2>
            <p class="articulo__descripcion">
              Recientemente se filtró en Internet una importante cantidad de
              supuesta información sobre Grand Theft Auto VI (GTA VI) que nos
              ofrece una muy buena idea de lo que podemos esperar.
            </p>
          </div>
          <hr />
          <div class="articulo">
            <span class="articulo__categoria">Switch</span>
            <h2 class="articulo__titulo">
              Secuela de The Legend of Zelda: Breath of the Wild anunciada en el
              E3 2019
            </h2>
            <p class="articulo__descripcion">
              Nintendo anunció la secuela de The Legend of Zelda: Breath of the
              Wild en el E3 2019 y todos estamos más que emocionados con esto.
            </p>
          </div>
          <hr />

          <div class="articulo">
            <span class="articulo__categoria">Xbox</span>
            <h2 class="articulo__titulo">
              Red Dead Online recibe actualización masiva y sale de Beta
            </h2>
            <p class="articulo__descripcion">
              Rockstar lanzó el día de hoy la actualización más grande de Red
              Dead Online desde que el componente online de Red Dead Redemption
              2 se lanzó en noviembre.
            </p>
          </div>
          <hr />
          <footer>
            <a href="https://juan-buitrago.netlify.app" target="_blank">
              <h3 class="firma">🔗 By:Juan Buitrago</h3>
            </a>
          </footer>
        </aside>
      </main>
    </>
  );
}
