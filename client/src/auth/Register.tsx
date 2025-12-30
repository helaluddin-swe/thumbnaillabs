import { Link } from "react-router-dom"
import SoftBackground from "../components/SoftBackground"


const Register = () => {
  return (<> 
  <SoftBackground/>
    <div className="w-full md:w-100 border rounded-xl m-2 md:block inset-0 shadow-md shadow-pink-500 bg-gradient-to-r from-indigo-600 to-black mt-30 p-8 mx-auto">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Register First</h2>
      <p className="text-gray-500 text-xs text-center">Please Register to continue</p>
      <input type="text"  placeholder="Name" className="w-full mt-10 border rounded-full px-4 py-4 text-white"/>
      <input type="email"  placeholder="Email id" className="w-full mt-4 border rounded-full px-4 py-4 text-white"/>
      
      <input type="password"  placeholder="password" className="w-full border mt-4 rounded-full px-4 py-4 text-white"/>
      <p className="text-pink-400 mb-2 mt-4 ">Forgot password?</p>
      <button className="bg-pink-500 text-2xl font-bold hover:bg-pink-400 w-full rounded-full px-4 py-2">Login</button>
      <p className="text-center mt-2"> have already account? <span className="text-pink-400"><Link to={"/login"}>click here</Link></span></p>
    </div>
    </>
  )
}

export default Register
