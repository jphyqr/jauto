import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Header, Segment } from 'semantic-ui-react';



const query = ({match}) => {
    const {params} = match || {}
 
    console.log(params.id)
    return [
      {
        collection: "jauto_used_inventory",
        where: [["id", "==", `${match.params.id}`]],
        storeAs: "vdp"
      }
    ];
  };
  
  const mapState = state => ({
    vdp: state.firestore.ordered.vdp&&state.firestore.ordered.vdp[0] || {},
  });




//history.match.params.id
 class VDPPage extends Component {
    render() {
        const {vdp} = this.props || {}
        const exterior = "black"
        const interior = "black"
        const {   heading, vin, stock_no, engine, transmission,  miles, price, drivetrain, content, id   }  = vdp || {}

        let contentString = content&&content.split("[")[1].replace("\"", "")
        return (
            <div>
          <Segment>
             <Header as='h5'>
                    {heading || ""}
                </Header>
                 <img
            
            src={contentString}
          />


<Header className='vin' as='h6'> 
          
          {`vin: ${vin}`}
         </Header>
          <Header className='engine' as='h6'> 
          
           {`engine: ${engine}`}
          </Header>

        
          <Header className='transmission' as='h6'> 
          
          {`transmission: ${transmission}`}
         </Header>


         <Header className='drivetrain' as='h6'> 
          
          {`drivetrain: ${drivetrain}`}
         </Header>


         <Header className='exterior' as='h6'> 
          
          {`exterior: ${exterior}`}
         </Header>


         <Header className='interior' as='h6'> 
          
          {`interior: ${interior}`}
         </Header>

         <Header className='kilomters' as='h6'> 
          
          {`kilomters: ${miles}`}
         </Header>


         <Header className='Retail Price' as='h6'> 
          
          {`Retail Price: ${price}`}
         </Header>
      


        
      
      


                </Segment> 
            </div>
        )
    }
}





export default compose(
    connect(mapState),
    firestoreConnect(props => query(props))
  )(VDPPage);
  