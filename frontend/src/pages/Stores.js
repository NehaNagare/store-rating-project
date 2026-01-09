
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Stores(){
 const [s,setS]=useState([]);
 useEffect(()=>{
  axios.get('http://localhost:5000/api/stores',
  {headers:{Authorization:'Bearer '+localStorage.getItem('token')}})
  .then(r=>setS(r.data));
 },[]);
 return <ul>{s.map(x=><li key={x.id}>{x.name} ⭐{x.avgRating}</li>)}</ul>;
}
