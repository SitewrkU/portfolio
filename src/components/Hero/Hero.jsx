import { useState, useEffect } from 'react';
import './hero.css'
import icons from '../../styles/icons'

export default function Hero({ githuser }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.github.com/users/${githuser}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err);
        setLoading(false)
      });
  }, [githuser])
  
  if (loading) return <p>Loading...</p>;

  return (
    <div className="hero">
      <div className="image">
        <img src={user.avatar_url} alt="profilepic" className='profile-pic' />
        <p><icons.FaLocationDot/> Ukraine, Lviv</p>
      </div>
      <main>
        <h2>Hi! I’m <span className='myname-span'>{user.name}</span>,</h2>
        <h3>a frontend developer who builds cool things.</h3>
      </main>
      <a href="#about"><icons.IoIosArrowDown className='arrowDown'/></a>
    </div>
  )
}
