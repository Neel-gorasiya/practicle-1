import "./App.css";

import Header from "./header";
import About from "./about";
import Skills from "./skill";
import Footer from "./footer";

function App() {
  return (
    <div className="container">
      <Header
        name="Neel Gorasiya"
        role="Computer Science Student"
      />

      <About
        description="I am a Computer Science student interested in software development, networking and cybersecurity."
      />

      <Skills />

      <Footer
        email="neel@example.com"
        year="2026"
      />
    </div>
  );
}

export default App;