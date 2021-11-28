import http from '../interceptor/Interceptor'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const UpdateUserProfile = async (props) => {
  try {
    const response = await http.put(`${MainUrl}student/${props.id}`,{
        fullName:props.name,
        email:props.email,
        phoneNumber:props.phoneNumber,
        birthDate:props.birthDate,
        nationalId:props.nationalId,
    })
    
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export  { UpdateUserProfile}