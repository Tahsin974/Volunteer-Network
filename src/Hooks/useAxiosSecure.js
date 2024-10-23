import axios from "axios";
import useAuthContext from "../Context/useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://volunteer-network-server-rose-xi.vercel.app',
    withCredentials:true
  })
const useAxiosSecure = () => {
    const {setUser,logOut} = useAuthContext();
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(function (response) {
       
        return response;
      }, function (error) {
        console.log(error.response)
        if(error.response.status === 401 || error.response.status === 403){
            logOut()
        .then(() => {
          setUser();
          navigate('/login')
    
        })
        }
      });
    return axiosSecure
};

export default useAxiosSecure;