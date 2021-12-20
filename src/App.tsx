import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import MoviesPage from './modules/ComicsPage'
import DetailsPage from './modules/DetailsPage'

const App: FC = () => {
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
