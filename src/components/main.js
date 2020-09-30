import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import AuthService from '../services/auth.service';


class Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mobile: "",
        };
      }
    
      handleChange = (event) => {
        this.setState(
          {
            [event.target.name]: event.target.value
          },
          () => console.log(this.state.mobile)
        );
      };
    
      handleRegister = (event) => {
        event.preventDefault();
        let dial_code= "+91"
        AuthService.register(this.state.mobile,dial_code)
        .then(() => {
            localStorage.setItem("mobile", JSON.stringify(this.state.mobile));
            this.props.history.push("/register");
        });
      };
    
      render() {
        return (
          <>
            <div className="container mt-5">
              <Form onSubmit={this.handleRegister}>
                <Form.Group controlId="mobile">
                  <Form.Label>Mobile No.:</Form.Label>
                  <Form.Control
                    name="mobile"
                    type="mobile"
                    placeholder="Enter mobile number"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                {/* <Link to={"/register"} > */}
                {/* <Link to={{ pathname: '/register',
                    mobile: {
                        mobile: this.state.mobile
                    }
                }} > */}
                <Button variant="primary" className="btn-block" type="submit">
                  Enter OTP
                </Button>
                {/* </Link> */}
              </Form>
            </div>
          </>
        );
      }
}

export default Main;