import { setItem, isLogged } from '../storage/storage'
import http from '../interceptor/Interceptor'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const TermsUser = async (props) => {
  try {
    // console.log(props) 
    const response = await http.get(`${MainUrl}term/list?pagenumber=${props}&pagesize=6`)
    
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export  { TermsUser }
