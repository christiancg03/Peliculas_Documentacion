import Header from "./components/Header";
import Router from "./components/Router";

/**
 * Main application component.
 * Renders the Header and Router components to set up the application's layout and routing.
 *
 * @component
 * @returns {JSX.Element} The rendered application.
 */

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
