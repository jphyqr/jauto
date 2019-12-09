
import React, { Component, Fragment } from 'react'
import {Button, Container} from 'semantic-ui-react'
import { Route } from 'react-router'
import HomePage from '../../features/home/HomePage';
// import ToolsDashboard from '../../features/tools/ToolsDashboard/ToolsDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import TestComponent from '../../features/test/TestComponent';
import UsedDashboard from '../../features/used/UsedDashboard/UsedDashboard';
import VDPPage from '../../features/common/VDP/VDPPage/VDPPage';
// import HomePage from '../../features/home/HomePage';
// import TestComponent from '../../features/testarea/TestComponent';
// import MarketDashboard from '../../features/dashboards/MarketDashboard';
 class App extends Component {
  render() {
    return (
      <Fragment>
       
     <NavBar></NavBar>
     <Container className='main'>

      
       <Route exact path='/' component={HomePage}></Route>
       <Route path='/test' component={TestComponent}></Route>
       <Route path='/used-vehicles' component={UsedDashboard}></Route>
       <Route path='/vdp/:id' component={VDPPage}></Route>
     </Container>
   </Fragment>
     

    );
  }
}



export default App;
