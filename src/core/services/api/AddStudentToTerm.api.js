import { setItem, isLogged } from "../storage/storage";
import http from "../interceptor/Interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddStudentToTerm = async (obj) => {
    console.log(obj.id)
    console.log(obj.termId)
	try {
		const result = await http.post(`${MainUrl}term/addStudentToTerm/${obj.id}`, {termId:obj.termId});
		return result;
	} catch (error) {
		console.log("ارور",error.response);
		return null;
	}
};

export { AddStudentToTerm };