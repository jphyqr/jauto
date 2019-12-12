import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import InventoryCard from '../../common/InventoryCard/InventoryCard'
import { Header } from 'semantic-ui-react';






const query = () => {
    return [
      {
        collection: "jauto_used_inventory",
        storeAs: "used_inventory"
      }
    ];
  };
  
  const mapState = state => ({
    used_inventory: state.firestore.ordered.used_inventory || [],
  });



 class UsedDashboard extends Component {
    render() {

        const {used_inventory} = this.props || []
        return (
            <div>
              
                <div id="smatp_trade_tool" data-dealerid="5df0c6998d900c1e4fbfbb7c"></div>
            <Header>Used Cards for Sale in Regina, SK</Header>
             
             {used_inventory&&used_inventory.map(inventory=>(
                 <InventoryCard item={inventory}/> 
             ))}
            
            </div>
        )
    }
}





export default compose(
    connect(mapState),
    firestoreConnect(props => query(props))
  )(UsedDashboard);
  