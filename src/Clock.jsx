import {useState,useEffect} from "react"

function Clock()
{

    const [time,setTime]=useState(new Date().toLocaleTimeString());
    const [show,setShow]=useState(true);
    useEffect(()=>{
    
    if(!show)
    return;

    const intervalId=setInterval(()=>{
     setTime(new Date().toLocaleTimeString());
    },1000)

    //return callback before dependency array change
    
    return ()=>{
        clearInterval(intervalId);
    }

    },[show])
  

    return(
        <div className="clock">
        <h1 >Digital Clock: </h1>
        <h2 style={{visibility:show?"visible":"hidden"}}>
            Current Time:{time}
        </h2>
        {/* {  
            show&&<h2>Current Time:{time}</h2>//run only when both true
        } */}
        <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
      
        </div>
    )

}
export default Clock;