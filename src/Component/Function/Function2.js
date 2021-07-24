import React, { Component } from "react";
import {  Card } from "react-bootstrap";
import moment from "moment";


export default class Homes extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format(),
      spl: moment().format('DD/MM/YYYY HH:MM').split("T"),
      spl2: moment().format('L').split("T"),
      Tdate:'',
      dmonth:'',
      ddate:moment(new Date()).format("M"),
      mdate:moment(new Date()).format("YYYY"),
      times:'',
      quarter: Math.floor((moment(new Date()).format("M") / 3)),
    };
  }

  
    componentDidMount() {
      var olddate = this.state.spl[0].toString();
      var olddate2 = this.state.spl2[0].toString();
      var newdate = olddate.replaceAll("-", "/");
      const dates = new Date(olddate2.replaceAll("-", ","));

      const result = dates.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      var days = function(month,year) {
        return new Date(year, month, 0).getDate();
     };
      var nday = days(this.state.ddate,this.state.mdate);


      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);


      this.setState({ date : newdate});
      this.setState({Tdate: result});
      this.setState({dmonth: nday});
      this.setState({times:timestamp});
      

      
    }
    
    
    
    
    
    
    render() {
      return (
        <Card className="bg-dark text-white" style={{ width: '110rem', top:'1rem',left:'5rem'}}>
        <Card.Body>
        <Card.Text>
        <h3 class="text-center"  >Test F2</h3>
        Current Time: {this.state.time}<br/>
        Date:<br/> 
        {this.state.date}<br/>
        {this.state.Tdate}<br/>
        {this.state.dmonth}<br/>
        {this.state.quarter}<br/>
        {this.state.times}<br/>

        </Card.Text>
        </Card.Body>
    </Card>
      );
  
    }
  }