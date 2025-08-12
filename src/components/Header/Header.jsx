import { NavLink } from "react-router-dom";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

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
        <header className="so-header" style={{
            display: 'flex',
            alignItems: 'center',
            background: '#f8f9fa',
            borderBottom: '1px solid #e3e6e8',
            padding: '0 16px',
            height: '56px',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
                <img
                    src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e"
                    alt="StackOverflow Logo"
                    style={{ height: 32 }}
                />
            </NavLink>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '16px', marginRight: 24 }}>
                <NavLink to="/" style={{ color: '#525960' }}>Home</NavLink>
                <NavLink to="/questions" style={{ color: '#525960' }}>Questions</NavLink>
                <NavLink to="/tags" style={{ color: '#525960' }}>Tags</NavLink>
                <NavLink to="/users" style={{ color: '#525960' }}>Users</NavLink>
            </nav>
            <form onSubmit={handleSearch} style={{ flex: 1, display: 'flex', alignItems: 'center', maxWidth: 600 }}>
                <input
                    onChange={handleSearchInput}
                    type="text"
                    name="query"
                    placeholder="Search..."
                    style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #babfc4',
                        borderRadius: 3,
                        fontSize: 15,
                        outline: 'none'
                    }}
                />
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 24 }}>
                <NavLink to="/login" style={{
                    color: '#39739d',
                    background: '#e1ecf4',
                    border: '1px solid #7aa7c7',
                    borderRadius: '3px',
                    padding: '8px 10px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 13
                }}>Log in</NavLink>
                <NavLink to="/signup" style={{
                    color: '#fff',
                    background: '#0a95ff',
                    border: '1px solid #0a95ff',
                    borderRadius: '3px',
                    padding: '8px 10px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 13
                }}>Sign up</NavLink>
            </div>
        </header>
    );
}