import Header from "../components/header";
import Meta from "../components/meta";

export default function Layout({ preview, children, email }) {
  return (
    <>
      <Meta />
      <div className="antialiased bg-back leading-normal font-text text-front">
        <Header email={email}/>
        <main>{children}</main>
      </div>
    </>
  );
}
