import "./App.css";

// IMPORTING COMPENENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
// IMPORTING PAGES
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
// import './assets/css/fonts.css'

const App = () => {
    const URL = "https://full-stack-portfolio-mp.herokuapp.com/";

    return (
        <div className="Maindiv">
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
            <Home />
            </Route>
                <Route path="/projects">
                <Projects URL={URL} />
            </Route>
            <Route path="/about">
                <About URL={URL} />
            </Route>
            <Route path="/work">
                <Work URL={URL} />
            </Route>
            </Switch>
            <Footer />
            
        </div>
       
        </div>
    );
}

export default App;
