import React from 'react';
import _ from 'lodash';
import { Sparklines,SparklinesBars,SparklinesReferenceLine} from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length)
}

export default (props) => {
	return (
		<div>
		<Sparklines height={120} width={180} data={props.data}>
		<SparklinesBars style={{ fill: props.color, fillOpacity: ".5" }}  />
		 <SparklinesReferenceLine type="mean" />
		</Sparklines>
		<div>{average(props.data)} {props.units}</div>
		</div>
		);
   
}