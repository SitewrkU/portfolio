import './contact.css'
import icons from '../../styles/icons'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2><icons.MdMessage/> Let's Connect — I Don’t Bite</h2>
      <h3 className='region'><icons.FaLocationDot/> Ukraine, Lviv region</h3>
      <div className="contacts">
        <a href="mailto:ivanbattiex@gmail.com">
        <button className='contact-btn' data-name="mail">
          <icons.MdEmail size={38}/>
        </button>
        </a>
        <a href="https://t.me/likebattw" target="_blank">
        <button className='contact-btn' data-name="telegram">
          <icons.BsTelegram size={38}/>
        </button>
        </a>
        <a href="https://github.com/SitewrkU" target="_blank">
        <button className='contact-btn' data-name="github">
          <icons.FaGithubSquare size={38}/>
        </button>
        </a>
      </div>
      <h3 className='mailText'><icons.MdEmail/> ivanbattiex@gmail.com</h3>
    </div>
  )
}

export default Contact