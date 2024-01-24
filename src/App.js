import './App.css';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
function App() {
  return (

    <div className="App">
      <Container>
        <Navi></Navi>
        <Container className="ui main container">
          <Dashboard></Dashboard>
        </Container>


      </Container>

    </div>
  );
}

export default App;
