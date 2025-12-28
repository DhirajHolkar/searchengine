import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className='navbar'>

      <div className='left'>
        <a href="/" className='logo'>
          <img src="/protoncave-logo.png" alt="Logo" />
          {/* <span>YourSearch</span> */}
        </a>
      </div>

      {/* <nav className='right'>
        <a href="/login">Login</a>
        <a href="/signup" className='signup'>
          Sign up
        </a>
      </nav> */}

    </header>
  );
}





