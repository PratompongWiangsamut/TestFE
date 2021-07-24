import React, { Component } from 'react';
import { Card,Button} from "react-bootstrap";
import {
    Route,
    /*NavLink,
    Switch,
    Redirect,*/
    BrowserRouter as Router,
  } from "react-router-dom";
  import Home from "../Home/Homes";
  import Pokemon from "../Pokemon/Pokemons";
  import Function1 from "../Function/Function1";
  import Function2 from "../Function/Function2";
  import Function3 from "../Function/Function3";
  

export default class Headers extends Component {
   
    
  
    render() {
     
    
    return (
        <Router>
    <div>
        <header>
        <Card className="bg-dark text-white" style={{ width: '110rem',height:'5rem', top:'1rem',left:'5rem'}}>
            <Card.Body>
            <Card.Text>
            <h1 class="text-center"  >Test Frontend</h1>
            </Card.Text>
            </Card.Body>
        </Card>
        <br />
        <br />

        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Button variant="outline-secondary"  color="primary" onClick={() => { this.setState({ posttype: 1 }) }} href={"/home"}>
                Home
            </Button>
            <Button variant="outline-secondary" color="primary" onClick={() => { this.setState({ posttype: 2 }) }}href={"/pokemon"}>
                Pokemon
            </Button>
            <Button variant="outline-secondary" color="primary" onClick={() => { this.setState({ posttype: 3 }) }}href={"/function1"}>
                Fuction1
            </Button>
            <Button variant="outline-secondary" color="primary" onClick={() => { this.setState({ posttype: 4 }) }}href={"/function2"}>
                Fuction2
            </Button>
            <Button variant="outline-secondary" color="primary" onClick={() => { this.setState({ posttype: 5 }) }}href={"/function3"}>
                Fuction3
            </Button>
            
            
        </div>
        </header>
        <Route path="/home" component={Home} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/function1" component={Function1} />
        <Route path="/function2" component={Function2} />
        <Route path="/function3" component={Function3} />
    </div>
    </Router>
        
    );
  }
  }