import { createContext, useContext } from "react";

export interface AuthInterface {
	token: string | null;
	setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthInterface>({
	token: null,
	setToken: (token: string | null) => {}
});

export function useAuth(): AuthInterface {
	return useContext(AuthContext);
}

export default AuthContext;
