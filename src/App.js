import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import data1 from './data.json';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setState({loading:false, users: data1})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{
      Header: "game_pk",
      accessor: "game_pk"
    },
    {
      Header: "game_id",
      accessor: "game_id"
    },
    {
      Header: "away_team_name",
      accessor: "away_team_name"
    },
    {
      Header: "away_team_code",
      accessor: "away_team_code"
    },
    {
      Header: "home_team_name",
      accessor: "home_team_name"
    },
    {
      Header: "home_team_code",
      accessor: "home_team_code"
    },
    {
      Header: "play_id",
      accessor: "play_id"
    },
    {
      Header: "sv_pitch_id",
      accessor: "sv_pitch_id"
    },
    {
      Header: "sequence_number",
      accessor: "sequence_number"
    }
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

