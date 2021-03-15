import './App.css';

import NavBar from './components/navBar';
import Footer from './components/footer'
import ComingSoon from './components/comingSoon';

import Home from './containers/home';
import Resume from './containers/resume';
import Biography from './containers/biography';
import Projects from './containers/projects';
import Tech from './containers/tech';
import Interests from './containers/interests';
import Contact from './containers/contact';

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
