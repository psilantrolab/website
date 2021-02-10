import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import Navigation from "./pages/navigation";
import Footer from "./pages/footer";
import PeoplePage from "./pages/people";
import CollaboratorsPage from './pages/collaborators';
import PublicationsPage from  "./pages/publications";
import ResourcesPage from  "./pages/resources";
import ContactPage from  "./pages/contact";

function App() {
  return (
      <Router>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/people" component={PeoplePage}/>
            <Route exact path="/publications" component={PublicationsPage}/>
            <Route exact path="/resources" component={ResourcesPage}/>
            <Route exact path="/collaborators" component={CollaboratorsPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
