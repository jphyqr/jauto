import React, { Component } from 'react'
import { Container, Menu, Button, Dropdown } from 'semantic-ui-react'
import {NavLink,Link, withRouter} from 'react-router-dom'
import InventorySearchMenuItem from './InventorySearchMenuItem'
 class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top">
            <Container>
              <Menu.Item header>
               🚗
               Johns Auto
              </Menu.Item>
           
              <Menu.Item >
            
              <Dropdown text="Inventory Search" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>JAuto Vehicles</Dropdown.Item>
          <Dropdown.Item>Certified Pre-Owned</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              </Menu.Item>




              <Menu.Item >
            
                
              <Dropdown text="Model Overview" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Model 1</Dropdown.Item>
          <Dropdown.Item>Model 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            </Menu.Item>


            <Menu.Item >
            
                
            <Dropdown  onClick={()=>this.props.history.push('/used-vehicles')} text="Pre-Owned" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Discover Certified Pre Owned</Dropdown.Item>
          <Dropdown.Item>Pre-Owned Inventory</Dropdown.Item>
          <Dropdown.Item>Value your Trade</Dropdown.Item>
          <Dropdown.Item>Pre Owned Offers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>



          <Menu.Item >
            
                
            <Dropdown text="Current Offers" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>New Vehicle Offers</Dropdown.Item>
          <Dropdown.Item>Certified Pre Owned Offers</Dropdown.Item>
          <Dropdown.Item>Vans Offers</Dropdown.Item>
          <Dropdown.Item>Service Offers</Dropdown.Item>
          <Dropdown.Item>Parts Offers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>



          <Menu.Item >
            
                
            <Dropdown text="Financial Services" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Apply for Financing</Dropdown.Item>
          <Dropdown.Item>Financing Offers</Dropdown.Item>
          <Dropdown.Item>Leasing Options</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>
        
                
          <Menu.Item >
            
                
            <Dropdown text="Owners" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Apply for Financing</Dropdown.Item>
          <Dropdown.Item>Financing Offers</Dropdown.Item>
          <Dropdown.Item>Leasing Options</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>


          <Menu.Item >
            
                
            <Dropdown text="About Us" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Apply for Financing</Dropdown.Item>
          <Dropdown.Item>Financing Offers</Dropdown.Item>
          <Dropdown.Item>Leasing Options</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>
            </Container>
          </Menu>
        )
    }
}

export default withRouter(NavBar)