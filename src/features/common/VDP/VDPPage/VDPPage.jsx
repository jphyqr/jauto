import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Header, Segment, Divider } from 'semantic-ui-react';

const images = [

  "https://00ef6d110699cd92e24c-9fbf02ab60dc3367cd1f1dd80b43c6c9.ssl.cf1.rackcdn.com/WDCTG4GBXFJ051395/2288435e0a3d5ac48043ab774cf61ea7.jpg",
  
"https://00ef6d110699cd92e24c-9fbf02ab60dc3367cd1f1dd80b43c6c9.ssl.cf1.rackcdn.com/WDCTG4GBXFJ051395/f412b4c02082bba65e6314fe1fd6d8f7.jpg",

"https://00ef6d110699cd92e24c-9fbf02ab60dc3367cd1f1dd80b43c6c9.ssl.cf1.rackcdn.com/WDCTG4GBXFJ051395/f412b4c02082bba65e6314fe1fd6d8f7.jpg",



]

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

  var sMedia = sMedia || {};




//history.match.params.id
 class VDPPage extends Component {

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
   

    // console.log('SCRIPT', window)
    // var sfn="//tm.smedia.ca/analytics/script.js"
    // var sref = document.createElement('script');
    // sref=document.createElement('script');
    // sref.setAttribute("type","text/javascript");
    // sref.setAttribute("src", sfn);
    // sref.setAttribute("async", "");
    // document.getElementsByTagName("head")[0].appendChild(sref);
    
   await this.get_smedia_uuid()
   
      }


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
                 <img className="main photo"
            
            src={contentString}
          />


          {images&&images.map((image, index)=>(
            <img className={`image ${index}`}
            src = {image}/>
          ))}


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
      

       <Divider></Divider>
        

       <Header className='Description' as='h3'> 
          
          Description
         </Header>
       


       <p>
       This 2015 GLA250 is very well equipped and is powered by a 208 HP turbocharged 2.0 litre engine. This vehicle has passed our 150 point Mercedes-Benz Star Certified Inspection. With a certified vehicle you receive powertrain warranty up to 6 years or 120,000 KM. During the inspection, this GLA received brand new tires all the way around, replaced brake fluid, cabin air filter & engine air filter followed by a complete clean-up at our detail department.
</p>


<p>

Top Features:  <br></br>
Back Up Camera <br></br>
Blind Spot Monitors <br></br>
Panoramic Sunroof & Sunshade <br></br>
Navigation <br></br>
Collision Prevention <br></br>
Attention Assist <br></br>
Heated Seats <br></br>
Bluetooth <br></br>
 </p>



 <p>
 Auxiliary Audio Input, All Wheel Drive, Turbocharged, Driver Adjustable Lumbar, Power Driver Seat, Tires - Front Performance, ABS, Rear Defrost, Bucket Seats, Aluminum Wheels, Power Passenger Seat, Rear Spoiler, AM/FM Stereo, Steering Wheel Audio Controls, Power Steering, Automatic Headlights, MP3 Player, Rain Sensing Wipers, Privacy Glass, 4-Wheel Disc Brakes, CD Player, Intermittent Wipers, Fog Lamps, Variable Speed Intermittent Wipers, Brake Assist, Daytime Running Lights, Seat Memory, Tires - Rear Performance, Integrated Turn Signal Mirrors, Heated Mirrors, Bluetooth Connection, Power Mirror(s), HD Radio, Mirror Memory, Leather Steering Wheel, Front Head Air Bag, Security System, Passenger Adjustable Lumbar, Driver Air Bag, Passenger Air Bag, Power Door Locks, Trip Computer, Stability Control, Cargo Shade, Tire Pressure Monitor, Child Safety Locks, Knee Air Bag, Pass-Through Rear Seat, Adjustable Steering Wheel, Driver Illuminated Vanity Mirror, Rear Head Air Bag, Traction Control, Power Windows, Rear Bench Seat, A/C, Front Side Air Bag, Passenger Air Bag Sensor, Smart Device Integration, Premium Synthetic Seats, Keyless Entry, Passenger Illuminated Visor Mirror, Passenger Vanity Mirror, Heated Front Seat(s), Driver Vanity Mirror, Engine Immobilizer, Cruise Control, Floor Mats


   
</p>


<p>
At Mercedes-Benz of Regina we are dedicated to having a high quality selection of new and used inventory. We strive for nothing but the best customer service. We want to provide a unique and memorable experience to everyone in the market for buying a vehicle. Our Certified Pre-Owned Vehicles are completely reconditioned mechanically, cosmetically and then taken to our detail department for a full cleanup. If you're not finding what your're looking for give us a call at 1-888-349-6324. Our staff would be more than happy to help you find the vehicle you're after.
</p>




                </Segment> 
            </div>
        )
    }
}





export default compose(
    connect(mapState),
    firestoreConnect(props => query(props))
  )(VDPPage);
  