import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page2() {
	const navigate = useNavigate();

	return (
		<div className="App">
		<header className="App-header">
			<h1>Page 2</h1>
			<button onClick={() => navigate('/page1')}>Go to page1</button>
			<button onClick={() => navigate('/')}>Go to home</button>
		</header>
	  </div>
	)
}
