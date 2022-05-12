import Header from "../components/header";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="antialiased bg-back leading-normal font-text text-front">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
