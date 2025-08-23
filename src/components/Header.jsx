import SOFullLogo from '../assets/svg/SOFullLogo.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiSquarePlus } from "react-icons/ci";
import userAvatar from '../data/dataAssets/userAvatar/32.jpg';

export default function Header() {
  const [aut, setAut] = useState(null);
  const [username, setUsername] = useState(null);
  const [elemHide, setElemHide] = useState('');
  const [userHide, setUserHide] = useState('');

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    const storedUsername = sessionStorage.getItem('username');

    setAut(authToken);
    setUsername(storedUsername);

    if (authToken === "CLB3938F31") {
      setElemHide('hidden');
      setUserHide('');
    } else {
      setElemHide('');
      setUserHide('hidden');
    }
  }, []); // run only once

  const searchNavigate = useNavigate();
  const [search, setSearch] = useState(null);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchNavigate('/search');
  };

  return (
    <header className="flex p-8 bg-[#f8f9fa] border-2 border-b-[#e3e6e8] items-center md:sticky top-0 flex-col gap-5 lg:flex-row lg:h-[56px]">
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
        <input
          onChange={handleSearchInput}
          type="text"
          name="query"
          placeholder="Search..."
          className='w-full p-1 border-2 border-[#babfc4] rounded-sm text-[15px]'
        />

        <NavLink to='/login' className={`${elemHide} shrink-0 text-[#39739d] flex items-center text-[13px] bg-[#e1ecf4] border-[#7aa7c7] border-2 px-2 py-2 rounded-sm`}>Log In</NavLink>
        <NavLink to="/signup" className={`${elemHide} shrink-0 flex items-center text-[#ffffff] text-[13px] bg-[#0a95ff] px-2 py-2 border-[#0a95ff] rounded-sm`}>Sign Up</NavLink>

        <NavLink to='user?id=1' className={`${userHide} cursor-pointer shrink-0 hover:bg-[#e0e0e0] p-2`}>
          <div className="user-profile flex items-center gap-2">
            <img src={userAvatar} className="w-[40px] rounded-full" alt="" />
            <span className="username">{username}</span>
          </div>
        </NavLink>

        <NavLink to="/post/new" className='shrink-0 flex items-center gap-2 text-[#ffffff] text-[16px] bg-[#0a95ff] px-2 py-2 border-[#0a95ff] rounded-sm font-bold'>
          <CiSquarePlus size={30} />Ask a Question
        </NavLink>
      </form>
    </header>
  );
}
