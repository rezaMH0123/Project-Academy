import { setItem, isLogged } from '../storage/storage'
import http from '../interceptor/Interceptor'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const panelGetId = async (props) => {
  try {
    // console.log(props) 
    const response = await http.get(`${MainUrl}student/${props}`)
    
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export  {  panelGetId}