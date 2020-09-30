import React, {Component} from 'react';
import { Button, Form } from "react-bootstrap";
import AuthService from '../services/auth.service';

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          otp: "",
        };
    }



    handleChange = (event) => {
    this.setState(
        {
        [event.target.name]: event.target.value
        },
        () => console.log(this.state.otp)
    );
    };

    handleLogin = (event) => {
        event.preventDefault();
        const mobile = JSON.parse(localStorage.getItem("mobile"));
        console.log(mobile)
        let dial_code= "+91"
        AuthService.login(mobile, this.state.otp, dial_code)
        .then(() => {
          this.props.history.push("/resturants");
        });
      };

    render() {
        
        return (
          <>
            <div className="container mt-5">
              <Form onSubmit={this.handleLogin}>
                <Form.Group controlId="otp">
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    name="otp"
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" className="btn-block" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </>
        );
      }
}

export default Register;