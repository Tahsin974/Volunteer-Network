import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../../logos/Group 1329.png'
import useAuthContext from '../../../../Context/useAuthContext'
const Login = () => {
    const {googleSignIn,setUser} = useAuthContext();
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location)
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) => {
            console.log(result.user)
            setUser(result.user);
            navigate(location.state ? location.state : '/home')
          })
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen my-5 px-4" >
        <img src={logo} alt="" className="w-4/12 lg:w-2/12 md:w-3/12" />
        <div className="card bg-white lg:w-full md:w-full sm:w-full max-w-sm shrink-0 shadow-2xl my-8 mx-4 border border-gray-500 p-10">
            <h2 className="lg:text-2xl md:text-xl font-bold text-center my-5">Login With</h2>
            <button onClick={handleGoogleSignIn} className='btn bg-white border border-gray-500 hover:border-gray-500'>Continue With Google</button>
          
        </div>
    </div>
    );
};

export default Login;