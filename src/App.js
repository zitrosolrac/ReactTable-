import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
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
    const columns = [
    {
      Header: "Game ID",
      accessor: "game_id"
    },
    {
      Header: "Away Team",
      accessor: "away_team_name"
    },
    {
      Header: "Home Team",
      accessor: "home_team_name"
    },
    {
      Header: "Pitcher",
      accessor: "pitcher_name"
    },
    {
      Header: "Batter",
      accessor: "batter_name"
    },
    {
      Header: "Inning",
      accessor: "inning"
    },
    {
      Header: "Inning half",
      accessor: "inning_half"
    },
    {
      Header: "Balls",
      accessor: "balls"
    },
    {
      Header: "Strikes",
      accessor: "strikes"
    },
    {
      Header: "Outs",
      accessor: "outs"
    },
    {
      Header: "Pitch Type",
      accessor: "pitch_type"
    },
    {
      Header: "Pitch Name",
      accessor: "pitch_name"
    },
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

