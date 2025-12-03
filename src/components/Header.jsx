import Nav from "./Nav";

/**
 * Header component that renders the top-level page header.
 *
 * Renders a header element containing the application title ("Películas")
 * and a Nav component. Utility classes are applied for background, shadow,
 * spacing and flex layout to position the title on the left and navigation
 * on the right.
 *
 * @component
 * @returns {JSX.Element} The header element containing the application title and navigation.
 */

function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
