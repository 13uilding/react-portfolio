import React, { useState, useEffect } from "react";
import "./style.css";

// Variables
const pi = 3.14;
var time = 0;

// Functions
function determinePosition (time, radius, initPosArr=[45, 45]) {
  // The moon completes a rotation every minute
  let theta = pi / 2 + ((time * pi) / 30);
  let xPos = Math.round((initPosArr[0] + radius * Math.sin(theta) + Number.EPSILON) * 100) / 100;
  let yPos = Math.round((initPosArr[1] + radius * Math.cos(theta) + Number.EPSILON) * 100) / 100;
  return [xPos, yPos];
};
function convertUnits ([xPos, yPos]) {
	return [ xPos + "vw", yPos + "vh" ];
};
// function setPosition (time, radius) {
// 	let [ xPos, yPos ] = convertUnits(determinePosition(time, radius))
// 	return [ xPos, yPos]
// }
// React Export
export default function Solar() {

  // // Will run for 5 minutes
  // setTimeout(() => {
	useEffect(() => {
		var rotationInterval = setInterval(() => {
			// A bar to increase this increment
			time += 0.2;
			if (time >= 3000) {
				clearTimeout(rotationInterval);
			}
			console.log(time);
			let earthPos = determinePosition((time / 13), 35, [45, 45])
			setMatter({ 
				...matter,
				earth: convertUnits(earthPos),
				mars: convertUnits(determinePosition((time / 24.5), 45, [45, 45])),
				mercury: convertUnits(determinePosition((time / 3.1), 15, [45, 45])),
				moon: convertUnits(determinePosition(time, 5, earthPos)),
				venus: convertUnits(determinePosition((time / 8), 25, [45, 45])),
			})
		}, 20);
	}, [])

	// Get initial position from API call corresponding with the date
	// Display the date on the top
  const [matter, setMatter] = useState({
		earth: [],
		date: "DD-MM-YYYY",
		mars: [],
		mercury: [],
		moon: [],
		venus: []
	});
	const earthStyle = {
		right: matter.earth[0],
		top: matter.earth[1]
	}
	const marsStyle = {
		right: matter.mars[0],
		top: matter.mars[1]
	}
	const mercuryStyle = {
		right: matter.mercury[0],
		top: matter.mercury[1]
	}
	const moonStyle = {
		right: matter.moon[0],
		top: matter.moon[1]
	}
	const venusStyle = {
		right: matter.venus[0],
		top: matter.venus[1]
	}
  return (
    <div class="sunEarth">
      <span class="matter sun"></span>
			<span style={earthStyle} class="matter earth"></span>
			<span style={marsStyle}class="matter mars"></span>
			<span style={mercuryStyle}class="matter mercury"></span>
			<span style={moonStyle}class="matter moon"></span>
			<span style={venusStyle}class="matter venus"></span>
    </div>
  );
}
