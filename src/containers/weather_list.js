import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart.js'
import GoogleMap from '../components/google_maps.js'
class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp) // for each list item return a ref to the main.temp value and add it to temps array
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // or ES6 version
    const {lon, lat} = cityData.city.coord;

    return(
      <tr key={id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
