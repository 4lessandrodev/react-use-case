import { ReactComponentElement, useMemo, useState } from "react";
import AuthContext, { AuthInterface } from "./context";

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function AuthProvider ({ children }: Props) {
	
	const [token, setToken] = useState<string | null>(null);

	const context = useMemo((): AuthInterface => ({
		token: token,
		setToken: (token: string | null) => {
			setToken(token);
			if (token) return localStorage.setItem('token', token);
			localStorage.removeItem('token');
		},
	}), [token])

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	)
}
