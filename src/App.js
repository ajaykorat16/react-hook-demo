import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useTranslation, withTranslation } from 'react-i18next'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Table from './components/Table'
import Form from './components/Form'
const Navigation = withTranslation()(NavBar)
const App = () => {
  const { i18n } = useTranslation()
  const manageLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <Router>
      <Navigation handleLanguage={(language) => manageLanguage(language)} />
      <Route path='/form' component={withTranslation()(Form)} />
      <Route path='/list' component={withTranslation()(Table)} />
      <Route path='/' component={withTranslation()(Home)} exact />
    </Router>
  )
}

export default App
