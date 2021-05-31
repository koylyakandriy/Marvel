import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MoviesPage from './modules/MoviesPage'
import { Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Container style={{ marginTop: '20px' }}>
          <Row>
            <Switch>
              <Route exact path="/">
                <MoviesPage />
              </Route>
              <Route path="/comics">
                <h1>Comics</h1>
              </Route>
            </Switch>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
