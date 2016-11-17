import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart.js'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp) // for each list item return a ref to the main.temp value and add it to temps array

    return(
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    )
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


// function mapStateToProps( state ) {
//   return { weather: state.weather };
// }
//  ES6 version - 
function mapStateToProps( { weather }) {
  return { weather };
}


export default connect(mapStateToProps)(WeatherList)
