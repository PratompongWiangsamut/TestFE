import React, { Component } from "react";
import {  Form,Button,Row,Col,Card } from "react-bootstrap";
export default class Homes extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      status: 0,
      output:''
      
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
        
        console.log(this.state);
        var arrays = this.state.input.array;
        console.log('state',this.state.input.array);
        let sort = arrays.split(",");
        //var myint = parseFloat(sort);
        var myint = sort.sort().filter(function(el,i,a){return i==a.indexOf(el);});
        console.log('sort',sort);
        console.log('myint',myint);
        var lolonglong = 0;
        if(myint.length>1){
          lolonglong = myint.length-2;
        }
        

        
        this.setState({output: myint[lolonglong]});

        this.setState({status:1});
  }
  
  // validate(){
  //     let input = this.state.input;
  //     let errors = {};
  //     let isValid = true;
  
  //     if (!input["array"]) {
  //       isValid = false;
  //       errors["array"] = "Please enter array.";
  //     }


  
  //     if (typeof input["array"] !== "undefined") {
          
  //       var pattern = new RegExp(/,/);
  //       if (!pattern.test(input["array"])) {
  //         isValid = false;
  //         errors["array"] = "valid array format.";
  //       }
  //     } 
  //     this.setState({
  //       errors: errors
  //     });
  
  //     return isValid;
  // }
    
    render() {
      return (
        <Card className="bg-dark text-white" style={{ width: '110rem', top:'1rem',left:'5rem'}}>
        <Card.Body>
        <Card.Text>
        <div style={{ margin:'25px'}}>
        <Form onSubmit={this.handleSubmit}>

            <Form.Group as={Row} className="mb-3" controlId="array">
                <Form.Label column sm="2">
                    Input Array
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="1,2,3,4,5,6,7,8,9" name="array" 
                        value={this.state.input.name}
                        onChange={this.handleChange}/>
                </Col>
                <div className="text-danger">{this.state.errors.array}</div>
            </Form.Group>
  
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            
        </Form>
        {this.state.status == 1 ? (
            <div>
              <h4 >Result: </h4> <br></br>
              Array input : {this.state.input.array}<br></br>
              Array output : {this.state.output}
            </div> 
            
          ) : null}
        
        </div>

           
        
        </Card.Text>
        </Card.Body>
    </Card>
      );
  
    }
  }