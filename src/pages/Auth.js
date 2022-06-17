import { useEffect, useRef } from "react"

const Auth = ()=>{
    const signinRef = useRef(null)
    const loginRef = useRef(null)

    const toggleForm = (x,y)=>{
        x.style.display='block'
        y.style.display='none'
    }
    useEffect(()=>{
        signinRef.current.style.display='none'
        loginRef.current.style.display='block'
    },[])
    
    return(
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="change d-flex justify-content-center m-3">
                        <button className="btn mx-2" onClick={()=>toggleForm(signinRef.current,loginRef.current)}>Signin</button>
                        <button className="btn mx-2" onClick={()=>toggleForm(loginRef.current,signinRef.current)}>Login</button>
                    </div>
                    <div className="form-holder d-flex justify-content-center">
                        <div className="form bg-light p-5">
                            
                            <div className="login mx-5" ref={loginRef}>
                                <div className="h1 text-center mb-4">Log-in</div>
                                <form method="get">
                                    <input type="text" className="my-2 form-control" placeholder="Phone" />
                                    <input type="password" className="my-2 form-control" placeholder="Password" />
                                    <div className="text-center mt-4">
                                        <input type="button" className="btn" value="Login" />
                                    </div>
                                </form>
                            </div>
                            <div className="signin mx-5" ref={signinRef}>
                                <div className="h1 text-center mb-4">Sign-in</div>
                                <form method="get">
                                    <input type="text" className="my-2 form-control" placeholder="Name" />
                                    <input type="text" className="my-2 form-control" placeholder="Phone" />
                                    <input type="password" className="my-2 form-control" placeholder="Password" />
                                    <input type="file" className="my-2 form-control" />
                                    <div className="text-center mt-4">
                                        <input type="button" className="btn" value="Signin" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container-fluid{
                    height:100vh;
                }
                .container{
                    height:70vh;
                }
                .btn{
                    background-color:lightblue;
                }
                .btn:hover{
                    background-color:aqua;
                }
                
            `}</style>
        </>
    )
}

export default Auth