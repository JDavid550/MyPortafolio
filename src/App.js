
import './App.css';
import Home from './pages/Home.jsx'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Layout from './components/Layout.jsx'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Work" component={Work}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
