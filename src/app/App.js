import Header from '../components/header/header';
import Slogan from '../components/slogan/slogan';
import OurAdvantages from '../components/OurAdvantages/OurAdvantages';
import OurProjects from '../components/OurProjects/OurProjects';
import Process from '../components/process/Process';
import AboutCompany from "../components/AboutCompany/AboutCompany";
import Footer from '../components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slogan/>
      <OurAdvantages/>
      <OurProjects/>
      <Process/>
      <AboutCompany/>
      <Footer/>
    </div>
  );
}

export default App;
