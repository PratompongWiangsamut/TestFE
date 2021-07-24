import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Data from "../../exam-data.json";
export default class Homes extends Component {
  // componentDidMount(){
  //   var myobj = JSON.parse(Data);
  //   console.log(myobj);
  // }

  render() {
    var sum = Data.filter((post) => post.is_editable_price == false).map(
      (post) => {
        return {
          name: post.name,
          totalSubProductWeight:
            post.weight +
            post.products.map((prod) => prod.weight).reduce((a, b) => a + b),
        };
      }
    );
    console.log("ssssssssssssss", sum);

    return (
      <Card
        className="bg-dark text-white"
        style={{ width: "110rem", top: "1rem", left: "5rem" }}
      >
        <Card.Body>
          <Card.Text>
            <h3 class="text-center">Test F1</h3>
            <div className="App">
              <div className="posts">
                {sum.map((list) => {
                  return (
                    <>
                      <p>name: {list.name} - totalSubProductWeight: {list.totalSubProductWeight}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
