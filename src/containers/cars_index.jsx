import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link }from 'react-router-dom';

import { fetchCars } from '../actions/index';
import Aside from '../components/aside';


class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet !</div>
      ];
    }

    return(
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div className="car-smallad" key={car.id}>
              <Link to={`/cars/${car.id}`} key={car.id}></Link>
              <img className="car-logo" src="/assets/images/car-logo.svg" />
              <div className="car-details">
                <h3>{car.brand} - {car.model}</h3>
                <p><strong>Owner:</strong> {car.owner}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
