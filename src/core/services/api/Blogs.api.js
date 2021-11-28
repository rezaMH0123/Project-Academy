import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SiteBlogs = async (props) => {
	try {
		//console.log(props);
		console.log("TEST BEFORE REQ");
		const response = await http.get(
			`${MainUrl}news/list?pagenumber=${props}&pagesize=4&category=article`,
		);
		console.log("TEST AFTER REQ");

		return response.data;
	} catch (error) {
		console.log(error.response);
		return null;
	}
};

export { SiteBlogs };
