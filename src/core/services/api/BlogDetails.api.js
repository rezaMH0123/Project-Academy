import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const NewsDetails = async (props) => {
	try {
		console.log("TEST BEFORE REQ");
		const response = await http.get(`${MainUrl}news/${props}`);
		console.log("TEST AFTER REQ");

		return response.data;
	} catch (error) {
		console.log(error.response);
		return null;
	}
};

export { NewsDetails };
