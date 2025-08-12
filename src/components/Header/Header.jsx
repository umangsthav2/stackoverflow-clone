import SOFullLogo from '../../assets/svg/SOFullLogo.svg'
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


            {/* For MOBILES */}
            <header className="sm:hidden flex flex-col p-5 sticky md:top-0 flex-row border-b-4 border-[#e3e6e8] items-center bg-[#f8f9fa]">
                <NavLink to="/">
                    <img src={SOFullLogo} alt="StackOverflow Logo" className='h-[50px]' />
                </NavLink>
                <nav className='flex flex-wrap gap-5'>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/questions">Questions</NavLink>
                    <NavLink to="/tags">Tags</NavLink>
                    <NavLink to="/users">Users</NavLink>
                </nav>
                <form onSubmit={handleSearch} className='flex w-full p-5'>
                    <input onChange={handleSearchInput} type="text" name="query" placeholder="Search..." className='w-full p-1 border-2 border-[#babfc4] rounded-sm text-[15px]' />
                </form>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 24 }}>
                    <NavLink className="text-[#39739d] text-[13px] bg-[#e1ecf4] border-[#7aa7c7] border-2 px-2 py-2 rounded-sm" to='/login'>Log In</NavLink>
                    <NavLink to="/signup" className='text-[#ffffff] text-[13px] bg-[#0a95ff] px-2 py-2 border-[#0a95ff] rounded-sm'>Sign Up</NavLink>
                </div>
            </header>






            <header className="hidden sm:flex p-5 sticky h-[56px] md:top-0 flex-row border-b-4 border-[#e3e6e8] items-center bg-[#f8f9fa]">
                <NavLink to="/">
                    <img src={SOFullLogo} alt="StackOverflow Logo" className='h-[32px]' />
                </NavLink>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '16px', marginRight: 24 }}>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/questions">Questions</NavLink>
                    <NavLink to="/tags">Tags</NavLink>
                    <NavLink to="/users">Users</NavLink>
                </nav>
                <form onSubmit={handleSearch} style={{ flex: 1, display: 'flex', alignItems: 'center', maxWidth: 600 }}>
                    <input onChange={handleSearchInput} type="text" name="query" placeholder="Search..." className='w-full p-1 border-2 border-[#babfc4] rounded-sm text-[15px]' />
                </form>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 24 }}>
                    <NavLink className="text-[#39739d] text-[13px] bg-[#e1ecf4] border-[#7aa7c7] border-2 px-2 py-2 rounded-sm" to='/login'>Log In</NavLink>
                    <NavLink to="/signup" className='text-[#ffffff] text-[13px] bg-[#0a95ff] px-2 py-2 border-[#0a95ff] rounded-sm'>Sign Up</NavLink>
                </div>
            </header>
        </>
    );
}