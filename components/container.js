export default function Container({ children }) {
  return <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">{children}</div>
}
