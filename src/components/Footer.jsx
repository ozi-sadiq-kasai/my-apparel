import "../Styles/Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const Footer = () => {
  return (
    <section className="footer">
      <ul>
        <div className="footer__knows">
          <li>
            <h2>Get to Know Us</h2>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">The Apparel</a>
          </li>
        </div>
        <div className="footer__makemoney">
          <h2>Make Money With Us</h2>
          <li>
            <a href="#">Sell Products</a>
          </li>
          <li>
            <a href="#">Become an Affiliate</a>
          </li>
          <li>
            <a href="#">Advertise your Projects</a>
          </li>
        </div>
        <div className="footer__socials">
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </div>
      </ul>
    </section>
  )
}
export default Footer