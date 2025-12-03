import { Outlet } from "react-router-dom";

/**
 * Contenedor — top-level layout wrapper for pages.
 *
 * Renders a semantic <main> element that centers page content and a <section>
 * for the main page content. If the optional `titulo` prop is provided, an
 * accessible <h1> is rendered (id="main-section-title") and referenced by the
 * section via aria-labelledby. Nested route content is expected to be rendered
 * via react-router's <Outlet /> inside the section.
 *
 * Accessibility notes:
 * - The main element includes id="main-content", role="main" and tabIndex="-1"
 *   to support skip-link and programmatic focus management.
 * - The section uses aria-labelledby to connect to the heading when present.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.titulo] - Optional title text to display as the page heading.
 * @returns {JSX.Element} The layout container element containing the optional heading and nested content outlet.
 *
 * @example
 * // Usage:
 * // <Contenedor titulo="Página principal" />
 */

function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;