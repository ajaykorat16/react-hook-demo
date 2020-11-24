import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Table from './components/Table'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path='/list' component={Table} exact />
      <Route path='/' component={Home} exact />
    </Router>
  );
}

export default App;
