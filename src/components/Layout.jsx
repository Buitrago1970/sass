import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <footer id="footer">
        <div className="whit-love">
          <h3>Acerca de esta pagina</h3>
          <p>Parte de un curso!</p>
          <p>Echa en React y sass </p>
        </div>
        <a
          href="https://juan-buitrago.netlify.app"
          className="footer__principal-text"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Desing developed by Juan Buitrago.
        </a>
      </footer>
    </>
  );
}
