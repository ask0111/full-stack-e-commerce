import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css"

const Register = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address , setAddress] = useState("")
    const [answer , setAnswer] = useState("")
    const navigate = useNavigate();

    // form function 
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(
                `/api/v1/auth/register`,
                {name , email , password , phone , address , answer}
            );
            if(res.data.success){
                toast.success(res.data.message);
                navigate('/login')
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(error){
            console.log(error);
            toast.error("Something Went Wrong");
        }
    }
  return (
    <Layout title={"Register - Ecommerce App"}>
        <div className="form-container">
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                type="text" className="form-control"
                id="exampleInputName" 
                placeholder='Enter Name'
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                required />
            </div>
            <div className="mb-3">
                <input
                type="email" className="form-control"
                id="exampleInputEmail" 
                placeholder='Enter Email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                required />
            </div>
            <div className="mb-3">
                <input
                type="password" className="form-control" 
                id="exampleInputPassword" 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                required />
            </div>
            <div className="mb-3">
                <input 
                type="text" className="form-control"
                id="exampleInputPhone" 
                placeholder='Enter Phone No' 
                value={phone} 
                onChange={(e)=>setPhone(e.target.value)}
                required />
            </div>
            <div className="mb-3">
                <input 
                type="text" className="form-control"
                id="exampleInputAddress" 
                placeholder='Enter Address'
                value={address} 
                onChange={(e)=>setAddress(e.target.value)}
                required  />
            </div>
            <div className="mb-3">
                <input 
                type="text" className="form-control"
                id="exampleInputAddress" 
                placeholder='Enter Your favourite fruit'
                value={answer} 
                onChange={(e)=>setAnswer(e.target.value)}
                required  />
            </div>
            
            <button type="submit" className="btn btn-primary">
                Register
            </button>
            </form>

        </div>
    </Layout>
  )
}

export default Register