import React from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../service/fetch";

export default function Page2() {
	const navigate = useNavigate();
	
	const redirect = () => {
		return navigate('/page2');
	}

	const isOk = (res: any): boolean => {
		console.log(res);
		return res && res.data !== null;
	}

	const makeRequest = async () => {
		try {			
			const res = await request();
			if (isOk(res)) return redirect();
			return alert("Erro: payload inesperado");
		} catch (error: any) {
			alert("Erro inesperado: " + error.message);
		}
	}

	return (
		<div className="App">
		<header className="App-header">
			<h1>Page 1</h1>
			<button onClick={makeRequest}>Fetch</button>
			<button onClick={() => navigate('/page2')}>Go to page2</button>
			<button onClick={() => navigate('/')}>Go to home</button>
		</header>
	  </div>
	)
}
