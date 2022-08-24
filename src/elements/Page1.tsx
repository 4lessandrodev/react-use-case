import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../service/fetch";

export default function Page2() {
	const navigate = useNavigate();
	const [hasError, setHasError] = useState<boolean>(false);
	const [fetchError, setFetchError] = useState<string>('');
	
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
			setFetchError("Erro: payload inesperado");
			setHasError(true);
		} catch (error: any) {
			setFetchError("Erro inesperado: " + error.message);
			setHasError(true);
		}
	}

	return (
		<div className="App">
		<header className="App-header">
			<h1>Page 1</h1>
			{hasError ? (<div className="error">{ fetchError }</div>) : null }
			<button onClick={makeRequest}>Fetch</button>
			<button onClick={() => navigate('/page2')}>Go to page2</button>
			<button onClick={() => navigate('/')}>Go to home</button>
		</header>
	  </div>
	)
}
