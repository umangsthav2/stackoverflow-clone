import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import SOFullLogo from '../assets/svg/SOFullLogo.svg';
import { Link } from "react-router-dom";

export default function Signup() {
    document.title = "Signup | Stackoverflow Clone";
    const [passwordMask, setPasswordMask] = useState(false);
    const [inputType, setInputType] = useState("password");


    const handlePasswordMask = () => {
        setPasswordMask(!passwordMask);
        if (passwordMask) {

            setInputType("password");
        }
        else {
            setInputType("text");
        }
    }

    return (
        <>
            <div className="login-page h-screen flex flex-col xl:flex-row justify-center xl:justify-evenly items-center bg-[#f0f0f0]">
                <div className="design-container hidden sm:block p-5">
                    <img className="w-full mb-5" src={SOFullLogo} alt="" />
                    <ul className="text-3xl leading-[2] mb-8">
                        <li>Get Unstuck - Ask a Question</li>
                        <li>Save your favorite posts, tags and filters</li>
                        <li>Answer questions and earn reputation</li>
                    </ul>
                    <p className="text-xl">
                        Collaborate and share knowledge with a private group for FREE.<br />
                        <Link className="text-blue-500" to={"#"}>Get Stack Overflow for Teams free for up to 50 users.</Link>
                    </p>
                </div>
                <div className="login-container p-3">
                    <form noValidate className='flex shadow-md  flex-col rounded-2xl min-w-[200px] w-[600px] p-10 bg-white' action="">
                        <h1 className="text-center text-3xl font-bold flex justify-center"><Link to='/'><img className="h-[60px] text-center" src={SOFullLogo} alt="" /></Link></h1>

                        <div className="mb-2 flex flex-col  input-group">
                            <label className='p-2 font-bold text-xl' htmlFor="email">Email</label>
                            <input className='p-2 rounded-md border-2 bg-[#f0f0f0]' type="email" name="" id="email" />
                        </div>
                        <div className="mb-10 flex flex-col input-group relative">
                            <label className='p-2 font-bold text-xl' htmlFor="password">Password</label>
                            <input className='p-2 rounded-md border-2 bg-[#f0f0f0]' type={inputType} name="" id="password">
                            </input>
                            <span className="flex absolute top-[60px] right-3 flex-col border-3 items-center">
                                <button onClick={handlePasswordMask} type="button" id="togglePassword">
                                    {passwordMask ? <FaRegEye /> : <FaEyeSlash />}
                                </button>
                            </span>
                        </div>
                        <button className=' mb-10 rounded-md hover:bg-blue-800 text-white font-semibold bg-blue-600 p-2' type="">Signup</button>
                        <hr />

                    </form>
                </div>
            </div>
        </>
    );
}
