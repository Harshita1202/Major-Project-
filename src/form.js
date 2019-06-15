import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
// import SignUp from './signup.js';
import './App.css';

class Login extends React.Component{
    render(){
        return(
    <div>
              <div style={{textAlign:"center", fontSize:18}}/>
              <center>
              <Card style={{width: "20rem"}}>
                <Card.Title>Login</Card.Title>
                <br></br>
             
        
        <Form id ="Login1">
              <Form.Group  controlId="formGroupEmail"  >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group   controlId="formGrouPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
           
              <Form.Group  controlId="formHorizontalCheck" sm={{ span: 10, offset: 2 }}>
               <Form.Check label="Remember me" />
              </Form.Group>

            <Button variant="outline-success" type="submit" >
              Submit
            </Button>

            <div style={{textAlign:"center", fontSize:18}}>
              <p1>new user?</p1>
              <Link to ="/s"><Button variant="outline-info">SignUp</Button></Link>          
            </div>       
           
        
        </Form>
        <br></br>
        <br></br>
        </Card>
     </center>
     <br></br>
</div>
)
            }
}

export default Login;
