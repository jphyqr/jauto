import React, { Component } from "react";
import { Menu, Dropdown, Feed, Icon } from "semantic-ui-react";
import { connect } from "react-redux";


class InventorySearchMenuItem extends Component {
  render() {
    const { loading, notifications, auth } = this.props;
    return (
     


        <Menu.Item position="right">
        <Dropdown icon="bell" pointing="top left">
          <Dropdown.Menu>
          <Dropdown.Item>Test</Dropdown.Item>
          <Dropdown.Item>Test2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>


   

    );
  }
}

export default (InventorySearchMenuItem);


