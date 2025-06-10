

import axios from "axios";

const isAuthenticated = async ()=>{
    try{
        const res = await axios.get("https://zerodhaapp-ajjs.onrender.com/api/client/verify",{withCredentials:true});
        console.log("cooooo - ", res.cookie);
        return res.data.user
    }catch(err){
        console.log("auth - ",err);
        return null
    }
}

export default isAuthenticated;
