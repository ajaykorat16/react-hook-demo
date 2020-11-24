import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path='/' component={Home} exact />
    </Router>
  );
}

export default App;
