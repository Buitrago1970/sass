import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <h1>s</h1>
    </>
  );
}
