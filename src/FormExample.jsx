import { useState } from 'react';
 
const FormExample = () => {
    
        const [UserName, setUserName] = useState("");
        const User=(e)=>{
            
            setUserName(e.target.value);

        }
         
        const [submituser,setsubmituser]=useState();
        const Submiton=(e)=>{
            e.preventDefault();
            setsubmituser(UserName);
            

        }
return (
    <form onClick={Submiton}>
        <div className="form-example">
            <h1>Form Example</h1>
           
            <div className='common'><h3>Hello,{submituser}</h3></div>
            <input type='text' placeholder="enter your name" onChange={User}/>
            <br/>
            <button className="submitbtn" type='submit'>submit</button>
            </div>
            </form>
    );
}
export default FormExample;