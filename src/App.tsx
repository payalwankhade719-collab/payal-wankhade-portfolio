import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Examination from "./components/Examination/Examination";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Profile />
        <About />
        <Skills />
        <Certifications />
        <Examination />
        <Contact />
      </main>
    </>
  );
}

export default App;
