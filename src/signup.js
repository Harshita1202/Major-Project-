import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

class SignUp extends React.Component{
    render(){
        return(
          <div>
          <div style={{textAlign:"center", fontSize:18}}/>
          <center>
          <Card style={{width: "60rem"}}>
            <Card.Title>Sign up</Card.Title>
            <br></br>
        <Form id="signup1">
          <Form.Row>
          <Form.Group  controlId="formGridname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name"/>
          </Form.Group>
          <Form.Group  controlId="formGridname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name"/>
          </Form.Group>
          </Form.Row>

          <Form.Group  controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="input"/>
          </Form.Group>

            
              <Form.Group  controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group  controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            
          
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          
            <Form.Row>
              <Form.Group  controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
          
              <Form.Group  controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
           
      </Form.Row>
    <Form.Group id="formGroupCheckbox">
              <Form.Check type="checkbox" label=" I agree to the terms and condition" />
            </Form.Group>

    <Button variant="outline-info" type="submit" size="sm" >
              Submit
            </Button>
</Form>
</Card>
</center>
</div>
)
        }
}
export default SignUp ;


