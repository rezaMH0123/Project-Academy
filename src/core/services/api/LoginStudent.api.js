import { setItem, isLogged } from "../storage/storage";
import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginUser = async (obj) => {
	try {
		console.log("TEST BEFORE CATCH");
		const result = await http.post(`${MainUrl}auth/login`, obj);
		console.log("TEST BEFORE CATCH");
		setItem("user", result.data.result.studentModel);
		setItem("token", result.data.result.jwtToken);

		return result;
	} catch (error) {
		console.log("ارور", error.response);
		return null;
	}
};

export { LoginUser };
