import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Table from './components/Table'
import Form from './components/Form'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path='/form' component={Form} />
      <Route path='/list' component={Table} />
      <Route path='/' component={Home} exact />
    </Router>
  );
}

export default App;
