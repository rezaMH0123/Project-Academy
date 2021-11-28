import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SingelTerm = async (props) => {
	try {
		//console.log(props);
		const response = await http.get(`${MainUrl}term/${props}`);

		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
export { SingelTerm };
