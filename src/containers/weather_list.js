import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

 class WeatherList extends Component{
	renderWeather(cityData) {
		const name = cityData.city.name;
       const temps = cityData.list.map(weather => weather.main.temp);
       const Pressures = cityData.list.map(weather => weather.main.pressure);
       const Humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
			  <td className="span3">{name}</td>
			  <td className="span3">
              <Chart data={temps} color="orange" units="K"/>
			  </td>
			  <td className="span3">
              <Chart data={Pressures} color="gray" units="hPa"/>
			  </td>
			  <td className="span3">
              <Chart data={Humidities} color="blue" units="%" />
			  </td>
			</tr>
			);
	}

	render() {
		return(
			<table className="table table-hover">
			 <thead>
		    	<tr>
			     <th>     City     </th>	
			     <th>Temperature(K)</th>
			     <th>Pressure (hPa)</th>
			     <th>Humidities (%)</th>		       
			    </tr>
			  </thead>
			  <tbody>{this.props.weather.map(this.renderWeather)} </tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);