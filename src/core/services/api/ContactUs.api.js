import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ContactUs = async (user) => {
	try {
		console.log("TEST BEFORE REQ");
		const result = await http.post(`${MainUrl}contactUs`, {
			email: user.email,
			name: user.name,
			text: user.text,
		});

		console.log("TEST AFTER REQ");

		console.log(result.data.message[0].message);
		return result.data;
	} catch (error) {
		console.log("TEST CATCH");
		return null;
	}
};
export { ContactUs };
