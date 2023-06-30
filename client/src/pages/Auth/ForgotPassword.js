import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import "../../styles/AuthStyles.css"

const ForgotPassword = () => {
    const [email , setEmail] = useState("")
    const [newPassword , setNewPassword] = useState("")
    const [answer , setAnswer] = useState("")
    const navigate = useNavigate();

     // form function 
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
        const res = await axios.post(
                `/api/v1/auth/forgot-password`,
                { email , newPassword , answer }
            );
            if(res && res.data.success){
                    toast.success(res.data.message);
                    navigate('/login');
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
    <Layout title={"Forgot Password - Ecommerce App"}>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h1 className='title'>Reset Password</h1>

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
            type="text" className="form-control" 
            id="exampleInputPassword" 
            placeholder='Enter Your Favourite Fruit' 
            value={answer} 
            onChange={(e)=>setAnswer(e.target.value)}
            required />
        </div>
        <div className="mb-3">
            <input
            type="password" className="form-control" 
            id="exampleInputPassword" 
            placeholder='Enter Password' 
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)}
            required />
        </div>
        
        


        <button type="submit" className="btn btn-primary">
            Reset
        </button>
        </form>

    </div>
</Layout>
  )
}

export default ForgotPassword