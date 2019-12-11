
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
// import MarketDashboard from '../../features/dashboards/MarketDashboard';\
var sMedia = sMedia || {};



 class App extends Component {


   get_smedia_uuid =()=> {
    if (typeof sMedia.XDomainCookie !== 'undefined') {
        console.log("Requesting for uuid and session id");
        sMedia.XDomainCookie.get('smedia_uuid', function(uuid) {
            console.log("sMedia UUID: " + uuid);
            console.log("sMedia Session Id: " + sMedia.Context.Browser.sessionId);
        });
    } else {
        console.log("Waiting for Cookie to load smart offer");
        setTimeout(this.get_smedia_uuid, 1000);
    }
  }


  async componentDidMount(){
   
    await this.get_smedia_uuid()

   
      }



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
