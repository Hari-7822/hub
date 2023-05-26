
const Login_temp = () => {
    return (
        <>

        <label for="form-mail">email</label>
        <input type="email" name="form-mail" className="mail" placeholder="Enter your email" />

        <lable for="form-pass">Password</lable>
        <input type="password" name="form-pass" className="pass" placeholder="Enter your password" />
        
        </>
    )
}


const Login =()=> {
return(
    <>
        <Login_temp />
    </>
)
}


export default Login;