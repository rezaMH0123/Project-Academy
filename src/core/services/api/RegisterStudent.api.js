import { setItem, isLogged } from "../storage/storage";
import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const RegisterUser = async (user) => {
	try {
		const result = await http.post(`${MainUrl}auth/register`, {
			fullName: user.fullName,
			email: user.email,
			password: user.password,
			phoneNumber: user.phoneNumber.toString(),
			birthDate: user.birthDate,
			nationalId: user.nationalId.toString(),
		});
		console.log("TEST BEFORE REQ");

		console.log(result.data.message[0].message);
		console.log("//register", result.data.result);
		return result.data;
	} catch (error) {
		console.log("TEST CATCH");
		return null;
	}
};

export { RegisterUser };
