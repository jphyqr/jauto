import React, { Component } from 'react'
import {connect} from 'react-redux'
import {uploadedCSVToJAuto} from './testActions'
import { Header } from 'semantic-ui-react'
import CSVReader from 'react-csv-reader'


const actions = {uploadedCSVToJAuto}
 class TestComponent extends Component {
    render() {
        return (
            <div>
                  <Header>Load JAuto Used Inventory</Header>
               <CSVReader onFileLoaded={data => this.props.uploadedCSVToJAuto(data)} />
          
            </div>
        )
    }
}

export default  connect(null, actions)(TestComponent)
