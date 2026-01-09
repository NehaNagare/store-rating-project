
import axios from 'axios';
export default function Login(){
 const login=async()=>{
  const r=await axios.post('http://localhost:5000/api/auth/login',
  {email:'admin@test.com',password:'Admin@123'});
  localStorage.setItem('token',r.data.token);
  window.location='/stores';
 };
 return <button onClick={login}>Login (demo)</button>;
}
