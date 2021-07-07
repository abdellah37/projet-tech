import React from "react";
import { Chart, Line, Point, Tooltip } from "bizcharts";


const LineChart = ({ data }) => {
	return (<>
		<Chart
			appendPadding={[10, 0, 0, 10]}
			autoFit
			height={500}
			data={data}
			scale={{ value: { min: 0, alias: '人均年收入', type: 'linear-strict' }, year: { range: [0, 1] } }}
		>

			<Line position="year*value" />
			<Point position="year*value" />
			<Tooltip showCrosshairs />
		</Chart>
	);
	</>)
}

export default LineChart