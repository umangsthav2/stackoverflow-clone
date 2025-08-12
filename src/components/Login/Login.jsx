import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Login() {

    const [passwordMask, setPasswordMask] = useState(1);
    const [inputType, setInputType] = useState("password");


    const handlePasswordMask = () => {
        setPasswordMask(!passwordMask);
        if (passwordMask) {
            setInputType("text");
        }
        else {
            setInputType("password");

        }
        console.log(passwordMask);
    }





    return (
        <>
            <div className="login-page  h-[90vh] flex flex-col justify-center items-center bg-[#f0f0f0]">
                <form noValidate className='flex shadow-md  flex-col rounded-2xl w-[400px] h-[400px] p-10 bg-white' action="">
                    <h1 className="text-center text-3xl font-bold">LOGIN</h1>

                    <div className="mb-2 flex flex-col input-group">
                        <label className='p-2 font-bold text-xl' htmlFor="email">Email</label>
                        <input className='p-2 rounded-md border-2 bg-[#f0f0f0]' type="email" name="" id="email" />
                    </div>
                    <div className="mb-10 flex flex-col input-group relative">
                        <label className='p-2 font-bold text-xl' htmlFor="password">Password</label>
                        <input className='p-2 rounded-md border-2 bg-[#f0f0f0]' type={inputType} name="" id="password">
                        </input>
                        <span className="flex absolute top-16 right-3  flex-col border-3 items-center">
                            <button onClick={handlePasswordMask} type="button" id="togglePassword">
                                {passwordMask ? <FaRegEye /> : <FaEyeSlash />}
                            </button>
                        </span>
                    </div>
                    <button className=' mb-10  rounded-md hover:bg-blue-800 text-white font-semibold bg-blue-600 p-2' type="">Login</button>
                    <hr />
                </form>
            </div>
        </>
    );
}
