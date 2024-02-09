import './App.css';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import LeftSidebar from './layouts/LeftSidebar';
function App() {
  return (

    <div className="App">
      <Container fluid>
        <Grid padded >

          <GridRow>
            <GridColumn width={16}><Navi></Navi> </GridColumn>
          </GridRow>
          <GridRow >
            <GridColumn width={2}><LeftSidebar /></GridColumn>
            <GridColumn width={14}> <Dashboard /> </GridColumn>

          </GridRow>
        </Grid>
      </Container>









    </div>
  );
}

export default App;
