import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Comments from './Comments';
import Switch from 'react-switch';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const cards = useLoaderData();

  const themeClass = isDarkMode ? 'dark' : 'light';
  const bgColorClass = isDarkMode ? 'dark-bg' : 'light-bg';
  const textColorClass = isDarkMode ? 'text-white' : 'text-black';

  return (
    <div className={`home ${themeClass} ${textColorClass} ${bgColorClass}`}>
      <div className="toggle-container flex justify-center items-center text-center gap-3 py-3">
        <span className="font-bold text-3xl">Dark Mode</span>
        <label>
          <Switch
            onChange={toggleTheme}
            checked={isDarkMode}
            onColor="#007BFF"
            offColor="#aaa"
          />
        </label>
      </div>

      <Banner />

      <div className={` ${textColorClass} ${bgColorClass}`}>
        <h3 className={`text-4xl font-bold text-center my-5 ${textColorClass}`}>
          <span
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ${bgColorClass}`}
          >
            Our Brands
          </span>
        </h3>
        <h3 className={`text-xl text-slate-400 mb-4 text-center font-semibold ${textColorClass}`}>
          Explore our trusted brands across various categories such as smartphones, electronics, home appliances, and more.
        </h3>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 ${bgColorClass}`}>
          {cards.map((card, index) => (
            <Link to={`/brand/${card.brand_name}`} key={index}>
              <div data-aos="flip-down" className={`card ${bgColorClass}`}>
                <figure className="pt-8">
                  <img className="h-52 w-full" src={card.img} alt="" />
                </figure>
                <div className="card-body w-full text-center">
                  <h2 className={`card-title text-center flex items-center justify-center ${textColorClass}`}>
                    {card.brand_name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
       <div>
       <h3 data-aos="flip-right" className={`text-4xl font-bold text-center my-5 ${textColorClass}`}>
          <span
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ${bgColorClass}`}
          >
            Our Blogs
          </span>
        </h3>
        <Link to="/blog">
          <div data-aos="flip-up" className='w-full'>
            <img className='w-full' src="https://i.ibb.co/VTbKQ72/tech-blogs.jpg" alt="" />
          </div>
        </Link>
       </div>

       <Comments isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
