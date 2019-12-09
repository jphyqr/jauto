import React, { Component } from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
 class InventoryCard extends Component {
    render() {

        const {item} = this.props || {}
        const exterior = "black"
        const interior = "black"
        const {   heading, vin, stock_no, engine, transmission,  miles, price, drivetrain, content, id   }  = item || {}

        let contentString = content&&content.split("[")[1].replace("\"", "")
        console.log({contentString})

        console.log("id", item.id)
     
        const {        }  = this.props || []
        return (
            <div>

<Link to={{pathname: '/vdp/' + id}}>
             <Segment>
             <Header as='h5'>
                    {item.heading || ""}
                </Header>
                 <img
            
            src={contentString}
          />


<Header className='vin' as='h6'> 
          
          {`vin: ${vin}`}
         </Header>y


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
                </Link>
               
            </div>
        )
    }
}


export default InventoryCard