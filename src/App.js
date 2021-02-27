import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import MainPage from "./pages";
import NotFoundPage from "./pages/404";

import PeoplePage from "./pages/people";
import CollaboratorsPage from './pages/collaborators';
import PublicationsPage from  "./pages/publications";
import ResourcesPage from  "./pages/resources";
import ContactPage from  "./pages/contact";
import About_es from "./pages/es/home";
import ContactPage_es from "./pages/es/contact";
import ResourcesPage_es from "./pages/es/resources";
import CollaboratorsPage_es from "./pages/es/collaborators";
import PeoplePage_es from './pages/es/people';
import PublicationsPage_es from './pages/es/publications';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/people" component={PeoplePage}/>
            <Route exact path="/publications" component={PublicationsPage}/>
            <Route exact path="/resources" component={ResourcesPage}/>
            <Route exact path="/collaborators" component={CollaboratorsPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/home_es" component={About_es}/>
            <Route exact path="/people_es" component={PeoplePage_es}/>
            <Route exact path="/publications_es" component={PublicationsPage_es}/>
            <Route exact path="/resources_es" component={ResourcesPage_es}/>
            <Route exact path="/collaborators_es" component={CollaboratorsPage_es}/>
            <Route exact path="/contact_es" component={ContactPage_es}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>
        </Switch>
      </Router>
  );
}

export default App;
