import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MoviesPage from './modules/ComicsPage'
import { Container, Row } from 'react-bootstrap'
import DetailsPage from './modules/DetailsPage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Container style={{ marginTop: '20px' }}>
          <Row style={{ alignItems: 'flex-start' }}>
            <Switch>
              <Route exact path="/">
                <MoviesPage />
              </Route>
              <Route path="/comics/:id">
                <DetailsPage />
              </Route>
              <Route path="/stories">
                <h1>Stories</h1>
              </Route>
            </Switch>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
