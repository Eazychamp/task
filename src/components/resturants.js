import React, {Component} from 'react';
import EventService from '../services/resturant-service';
import { Navbar, Container } from "react-bootstrap";
import '../static/main.css';

export default class Resturants extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data : []
        };
    }

    componentDidMount() {
        this.getData();
      }
    
      getData = () => {
        EventService.getSerives().then((response) => {
          this.setState(
            {
              data: response.data
            },
            () => console.log(this.state.data)
          );
        });
      };

    render() {
        let restaurants = '';
        if (this.state.data) {
            restaurants = this.state.data.map((data, index) => {
                return ( 
                    <div className="col-md-5 col-sm-12 box p-3 ml-5 mt-3 mb-3" key={index}>
                            <div className="media">
                            <img className="media-left" width="100" alt="Image" src={data.thumbnail_image} />
                            <div className="media-body">
                                <h4 className="card-title">{data.restaurant_name}</h4>
                                <p className="card-text">{data.address_complete}</p>
                                <div className="flex">
                                <p className="card-text"><i className="fa fa-star" aria-hidden="true"></i>{data.rating.restaurant_avg_rating}</p>
                                <p className="card-text"><i className="fa fa-usd" aria-hidden="true"></i>{data.avg_cost_for_two}</p>
                                  </div> 
                            </div>
                          </div>
                    </div>
                )
            } )
        }
        else {
            restaurants = <div className="col-12 alert alert-info mt-2">No records found</div>
          }
        return(
            <>
            <Navbar id="navbar" fixed="top" variant="light" bg="light">
              <Container>
                <Navbar.Brand href="#"><small>Pre Order From ++<br /><span style={{marginTop:'-20px'}}>Cannaught Place</span></small></Navbar.Brand>
                
              </Container>
            </Navbar>
              <div className="semi-top">
                <span className="name">Lets sjbfls</span>
                <span className="offer"><i className="fa fa-percent" aria-hidden="true"></i></span>
                <span className="wallet"><i className="fa fa-credit-card-alt" aria-hidden="true"></i></span>
              </div>
              <h5 className="heading">Popular Ones</h5>
            {restaurants}
            </>
        )
    }
}