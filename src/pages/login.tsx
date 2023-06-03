import  prisma from '../../prisma/prisma';
import { useState } from "react";
import form from './api/getPost';

// import { useForm } from "react-hook-form";



const Login_temp = () => {

    // const pr = new PrismaClient();

    const [reg, handle] = useState({
        id:'',
        passw:''
    });

    const handler = (e: { target: { name: any; value: any; }; }) => {

        handle({ ...reg, [e.target.name]: [e.target.value] })

    }
    
    const data = () => console.log(reg)
    



    return (
        <>
<form className="form__user" action={form}
    // async () => {

// const data = await prisma.client.findUnique({
//     where : {
//         email : ,
//         // password : true,
//     }

    
// })

// }} onSubmit={e => {
//     e.preventDefault();
// }}
>
    
            <div className="form__user--name">
                <p className="form__user--name__text">username</p>
                <input type="email" id="name" name="form-mail" className="form__user--name__mail" placeholder="Enter your email"  onChange={handler} required/>
            </div>

        <div className="form__user--pass">
            <p className="form__user--pass__text">password</p>
            <input type="password" id="passw" name="form-pass" className="form__user--pass__box" placeholder="Enter your password"  onChange={handler} required/>
        </div> 

        <div className="form__user--submit">
            <input type="submit" value="login" onClick={data}/>
        </div>

</form>

        
        </>
    )

    

}


const Login =()=> {
return(
    <>

        <div className="form container">
            <Login_temp />
        </div>
    
    </>
)
}


export default Login;