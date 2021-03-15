import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer'
import Home from './components/home';
import Resume from './components/resume';
import Biography from './components/biography';
import Projects from './components/projects';
import Tech from './components/tech';
import Interests from './components/interests';
import Contact from './components/contact/contact';
import ComingSoon from './components/comingSoon';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path = '/' exact component={Home}></Route>
          <Route path = '/resume' exact component={Resume}></Route>
          <Route path = '/biography' exact component={Biography}></Route>
          <Route path = '/projects' exact component={Projects}></Route>
          <Route path = '/tech' exact component={Tech}></Route>
          <Route path = '/interests' exact component={Interests}></Route>
          <Route path = '/contact' exact component={Contact}></Route>
          <Route path = '/comingSoon' exact component={ComingSoon}></Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
