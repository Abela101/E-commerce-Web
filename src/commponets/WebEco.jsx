import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

// Components for different pages
const HomePage = () => <div className="p-6"><h1 className="text-3xl font-bold mb-4">Home</h1><p>Welcome to the home page.</p></div>;
const ServicesPage = () => <div className="p-6"><h1 className="text-3xl font-bold mb-4">Services</h1><p>Here are the services we offer.</p></div>;
const AboutUsPage = () => <div className="p-6"><h1 className="text-3xl font-bold mb-4">About Us</h1><p>Learn more about us.</p></div>;
const BlogPage = () => <div className="p-6"><h1 className="text-3xl font-bold mb-4">Blog</h1><p>Read our latest blog posts.</p></div>;
const ContactPage = () => <div className="p-6"><h1 className="text-3xl font-bold mb-4">Contact</h1><p>Get in touch with us.<br/> Developer <a href="https://t.me/abela_messi101" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        @abela_messi101</a></p></div>

// Example data for items
const itemsData = {
  jeans: [
    { id: 1, name: ' Jeans 1', image: '/images/jeans1.jpg' },
    { id: 2, name: ' Jeans 2', image: '/images/jeans2.jpg' },
    { id: 3, name: ' Jeans 3', image: '/images/jeans3.jpg' },
    { id: 4, name: ' Jeans 4', image: '/images/jeans4.jpg' },
    { id: 4, name: ' Jeans 5', image: '/images/jeans4.jpg' },
    { id: 4, name: ' Jeans 6', image: '/images/jeans4.jpg' },
    { id: 4, name: ' Jeans 7', image: '/images/jeans4.jpg' },
    { id: 4, name: ' Jeans 8', image: '/images/jeans4.jpg' },
  ],
  shirts: [
    { id: 1, name: ' Shirt 1', image: '/images/shirt1.jpg' },
    { id: 2, name: ' Shirt 2', image: '/images/shirt2.jpg' },
    { id: 3, name: ' Shirt 3', image: '/images/shirt3.jpg' },
    { id: 4, name: ' Shirt 4', image: '/images/shirt4.jpg' },
    { id: 4, name: ' Shirt 5', image: '/images/shirt4.jpg' },
    { id: 4, name: ' Shirt 6', image: '/images/shirt4.jpg' },
    { id: 4, name: ' Shirt 7', image: '/images/shirt4.jpg' },
    { id: 4, name: ' Shirt 8', image: '/images/shirt4.jpg' },
  ],
  sweaters: [
    { id: 1, name: ' Sweater 1', image: '/images/sweater1.jpg' },
    { id: 2, name: ' Sweater 2', image: '/images/sweater2.jpg' },
    { id: 3, name: ' Sweater 3', image: '/images/sweater3.jpg' },
    { id: 4, name: ' Sweater 4', image: '/images/sweater4.jpg' },
    { id: 4, name: ' Sweater 5', image: '/images/sweater4.jpg' },
    { id: 4, name: ' Sweater 6', image: '/images/sweater4.jpg' },
    { id: 4, name: ' Sweater 7', image: '/images/sweater4.jpg' },
    { id: 4, name: ' Sweater 8', image: '/images/sweater4.jpg' },
  ],
  shorts: [
    { id: 1, name: ' Shorts 1', image: '/images/shorts1.jpg' },
    { id: 2, name: ' Shorts 2', image: '/images/shorts2.jpg' },
    { id: 3, name: ' Shorts 3', image: '/images/shorts3.jpg' },
    { id: 4, name: ' Shorts 4', image: '/images/shorts4.jpg' },
    { id: 4, name: ' Shorts 5', image: '/images/shorts4.jpg' },
    { id: 4, name: ' Shorts 6', image: '/images/shorts4.jpg' },
    { id: 4, name: ' Shorts 7', image: '/images/shorts4.jpg' },
    { id: 4, name: ' Shorts 8', image: '/images/shorts4.jpg' },
  ],
  suits: [
    { id: 1, name: ' Suit 1', image: '/images/suit1.jpg' },
    { id: 2, name: ' Suit 2', image: '/images/suit2.jpg' },
    { id: 3, name: ' Suit 3', image: '/images/suit3.jpg' },
    { id: 4, name: ' Suit 4', image: '/images/suit4.jpg' },
    { id: 4, name: ' Suit 5', image: '/images/suit4.jpg' },
    { id: 4, name: ' Suit 6', image: '/images/suit4.jpg' },
    { id: 4, name: ' Suit 7', image: '/images/suit4.jpg' },
    { id: 4, name: ' Suit 8', image: '/images/suit4.jpg' },
  ]
};

const ItemPage = ({ title }) => {
  const items = itemsData[title.toLowerCase()] || [];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Description for {title}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {items.map(item => (
          <div key={item.id} className="border p-4 rounded bg-white shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    if (['services', 'about us', 'blog', 'contact'].includes(term)) {
      navigate(`/${term.replace(' ', '-')}`);
    } else if (itemsData[term]) {
      navigate(`/${term}`);
    } else {
      let found = false;
      for (const [key, items] of Object.entries(itemsData)) {
        if (items.some(item => item.name.toLowerCase().includes(term))) {
          navigate(`/${key}`);
          found = true;
          break;
        }
      }
      if (!found) {
        navigate('/home'); // Fallback if no match found
      }
    }
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded w-1/4 mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};


const LoginPage = ({ setIsLoggedIn }) => {
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedUserCode = localStorage.getItem('userCode');
    const storedPassword = localStorage.getItem('password');

    if (userCode === storedUserCode && password === storedPassword) {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid user code or password.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="User Code"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};






const handleLogin = () => {
  const trimmedUserCode = userCode.trim();
  const trimmedPassword = password.trim();
  const user = users.find(user => user.userCode === trimmedUserCode && user.password === trimmedPassword);

  if (user) {
    setError('');
    setIsLoggedIn(true);
  } else {
    setError('Invalid user code or password.');
  }
};

const RegisterPage = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    if (localStorage.getItem('userCode') === userCode) {
      setError('User code already exists.');
      return;
    }
  
    localStorage.setItem('userCode', userCode);
    localStorage.setItem('password', password);
  
    setError('');
    setIsLoggedIn(true);
  };
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <input
        type="text"
        placeholder="User Code"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};


const WebEco = ({ isLoggedIn, setIsLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">E-commerce Web</h1>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
          <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Register</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>
      <p>You are logged in. Navigate to other pages.</p>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          {isLoggedIn && (
            <nav className="flex justify-between items-center">
              <div className="space-x-4">
                <Link to="/home" className="text-white">Home</Link>
                <Link to="/services" className="text-white">Services</Link>
                <Link to="/about-us" className="text-white">About Us</Link>
                <Link to="/blog" className="text-white">Blog</Link>
                <Link to="/contact" className="text-white">Contact</Link>
              </div>
              <Link to="/search" className="bg-blue-500 text-white px-4 py-2 rounded">Search</Link>
            </nav>
          )}
        </header>

        {isLoggedIn && (
          <div className="flex justify-start bg-gray-200 p-4">
            {['JEANS', 'SHIRTS', 'SWEATERS', 'SHORTS', 'SUITS'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="bg-gray-500 text-white px-4 py-2 rounded mx-2 hover:bg-gray-600"
              >
                {item}
              </Link>
            ))}
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/home" element={isLoggedIn ? <HomePage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/services" element={isLoggedIn ? <ServicesPage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about-us" element={isLoggedIn ? <AboutUsPage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/blog" element={isLoggedIn ? <BlogPage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/contact" element={isLoggedIn ? <ContactPage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/search" element={isLoggedIn ? <SearchPage /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            {['jeans', 'shirts', 'sweaters', 'shorts', 'suits'].map((item, index) => (
              <Route
                key={index}
                path={`/${item}`}
                element={isLoggedIn ? <ItemPage title={item.charAt(0).toUpperCase() + item.slice(1)} /> : <WebEco isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
              />
            ))}
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

