import React, { Component } from "react";
import {  Container,Row,Col,Card } from "react-bootstrap";
import axios from 'axios';


export default class Homes extends Component {
  constructor(){
    super();
    this.state = {
      post: [],
      pokemon:[],
      png:[],
      name:[]
    };
  }
 

  componentDidMount() {
    
    

    for (var i = 0; i < 105; i++){
      var listpng=[];
      axios.get('https://pokeapi.co/api/v2/pokemon/'+i).then((res) => {
      console.log('pre-data: ', res.data.name)
      this.setState({ post: res.data })
      //  console.log('post-data: ', this.state.post.sprites.front_default)
      var  png = res.data.sprites.front_default;
      var  name = res.data.name
      listpng=this.state.png
      listpng.push({name,png})
      this.setState({png:listpng})
    })
    

    }
    console.log('hhhhhhhhhhhh',listpng)
    console.log('ssssssssss', this.state.png)
    
  }
  
    
    render() {
      // var posts = this.state.post.map(item =>

      // <Col>
      // <Card.Img variant="top" src={item.sprites.front_default} />
      // <br/>
      // <Card.Title className="text-center">{item.name}</Card.Title>
      // </Col>
      
      // );
      const suba = this.state.png.map(item=>
                  <>
            <Card>
          <Card.Img variant="top" src={item.png} style={{ width: '100px', height:'100px', marginLeft: 'auto',
          marginRight: 'auto'}} ></Card.Img>
          <Card.Title className="text-center" style={{background:'black',color:'white',borderRadius: '25px'}}>{item.name}</Card.Title>
          </Card>
          </>
        
      )
      return (
        <Card className="bg-light text-black" style={{ width: '110rem', top:'1rem',left:'5rem'}}>
        <Card.Body>
        <Card.Text>
        <h3 class="text-center"  >Test fetch API</h3>
        <Container>
          <Row xs={2} md={4} lg={6} > 
            {suba}
            

          </Row>
          
        </Container>
        
        </Card.Text>
        </Card.Body>
    </Card>
      );
  
    }
  }
  
  