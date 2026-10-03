import { Link } from "react-router";
import Navbar from "./components/navbar";
import "./App.css";

function App({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Wasif Tai home">
          <span>Wasif Tai</span>
        </Link>
        <Navbar />
        <span className="header-spacer" aria-hidden="true" />
      </header>

      <main className="site-main">
        {children}
      </main>
    </div>
  );

}

export default App;