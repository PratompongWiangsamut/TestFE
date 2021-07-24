import React, { Component } from "react";
import {  Form,Button,Row,Col,Card } from "react-bootstrap";
export default class Homes extends Component {
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {},
          status: 0
          
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
      
        if(this.validate()){
            console.log(this.state);
      
            console.log('allahu : ',this.state.input.firstname)

            this.setState({status:1});
            
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["firstname"]) {
            isValid = false;
            errors["firstname"] = "Please enter your firstname.";
          }

          if (!input["lastname"]) {
            isValid = false;
            errors["lastname"] = "Please enter your lastname.";
          }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }

          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }

          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }

          if (!input["gender"]) {
            isValid = false;
            errors["gender"] = "Please enter your gender.";
          }


      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }

          if (!input["verifypassword"]) {
            isValid = false;
            errors["verifypassword"] = "Please enter your verify password.";
          }
      
          if (typeof input["password"] !== "undefined" && typeof input["verifypassword"] !== "undefined") {
              
            if (input["password"] != input["verifypassword"]) {
              isValid = false;
              errors["password"] = "Passwords don't match.";
            }
          } 
          this.setState({
            errors: errors
          });
      
          return isValid;
      }
  


  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div >
        <br/>
        <Card className="bg-light text-black" style={{ width: '50rem'}}>
            <br/>
            <div style={{ margin:'25px'}}>
        <Form onSubmit={this.handleSubmit}>

            <Form.Group as={Row} className="mb-3" controlId="firstname">
                <Form.Label column sm="2">
                    First Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="doll" name="firstname" 
                        value={this.state.input.name}
                        onChange={this.handleChange}/>
                </Col>
                <div className="text-danger">{this.state.errors.firstname}</div>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="lastname">
                <Form.Label column sm="2">
                    Last Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="doll" name="lastname" 
                        value={this.state.input.name}
                        onChange={this.handleChange}/>
                </Col>
                <div className="text-danger">{this.state.errors.lastname}</div>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Email">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="Email" placeholder="email@example.com" name="email" 
                        value={this.state.input.name}
                        onChange={this.handleChange} />
                </Col>
                <div className="text-danger">{this.state.errors.email}</div>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Password">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" name="password" 
                        value={this.state.input.name}
                        onChange={this.handleChange}/>
                </Col>
                <div className="text-danger">{this.state.errors.password}</div>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="VerifyPassword">
                <Form.Label column sm="2">
                    Verify Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Verifypassword" name="verifypassword" 
                        value={this.state.input.name}
                        onChange={this.handleChange}/>
                </Col>
                <div className="text-danger">{this.state.errors.verifypassword}</div>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Gender">
                <Form.Label column sm="2">
                    Gender
                </Form.Label>
                <Col sm="10">
                <Form.Select aria-label="Default select example" name="gender" 
                    value={this.state.input.name}
                    onChange={this.handleChange}>
                    <option>select </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="LGBT">LGBT</option>
                </Form.Select>
                </Col>
                <div className="text-danger">{this.state.errors.gender}</div>
            </Form.Group>
  
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            
        </Form>
        {this.state.status == 1 ? (
            <div>
              <h4 >Result: </h4> <br></br>
              First name : {this.state.input.firstname}<br></br>
              Last name : {this.state.input.lastname}<br></br>
              Email : {this.state.input.email}<br></br>
              Gender: {this.state.input.gender}<br></br>
            </div> 
            
          ) : null}
        
        </div>
        </Card>

        
        </div>
        <register />

      </div>
      
    );

  }
}

