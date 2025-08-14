import SOFullLogo from '../assets/svg/SOFullLogo.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Header() {
    const searchNavigate = useNavigate();
    const [search, setSearch] = useState(null);

    const handleSearchInput = (e) => {
        console.log(search);
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        searchNavigate('/search');
    }

    return (
        <>
            <header className="flex p-5 bg-[#f8f9fa] border-2 border-b-[#e3e6e8] items-center md:sticky top-0 flex-col gap-5 lg:flex-row lg:h-[56px]">
                <NavLink to="/">
                    <img src={SOFullLogo} alt="StackOverflow Logo" className='min-h-[60px]' />
                </NavLink>
                <nav className='flex text-center sm:flex-row flex-col w-full sm:w-auto'>
                    <NavLink className='p-3' to="/" >Home</NavLink>
                    <NavLink className='p-3' to="/questions">Questions</NavLink>
                    <NavLink className='p-3' to="/tags">Tags</NavLink>
                    <NavLink className='p-3' to="/users">Users</NavLink>
                </nav>
                <form onSubmit={handleSearch} className='text-center w-full flex-col md:flex-row gap-3 flex flex-row flex-nowrap justify-center'>
                    <input onChange={handleSearchInput} type="text" name="query" placeholder="Search..." className='w-full p-1 border-2 border-[#babfc4] rounded-sm text-[15px]' />
                    <hr className='my-5' />
                    <NavLink className=" shrink-0 text-[#39739d] text-[13px] bg-[#e1ecf4] border-[#7aa7c7] border-2 px-2 py-2 rounded-sm" to='/login'>Log In</NavLink>
                    <NavLink to="/signup" className=' shrink-0 text-[#ffffff] text-[13px] bg-[#0a95ff] px-2 py-2 border-[#0a95ff] rounded-sm'>Sign Up</NavLink>
                </form>

            </header>
        </>
    );
}