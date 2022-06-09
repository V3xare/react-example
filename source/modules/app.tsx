import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Text } from "@components/Typography";
import { Icons } from "@components/Icons";

import "@styles/app"

export const App = ( props: any ) => {

	let [ counter, setCounter ] = useState( 44 );

	return (
		<div className="app">
			<Text>
				Hello World
				<Icons.pencil/>
			</Text>
			<button onClick={() => setCounter( counter + 1 ) }>Click Me:{ counter }</button>
			<div className="box"></div>
		</div>
	);
};