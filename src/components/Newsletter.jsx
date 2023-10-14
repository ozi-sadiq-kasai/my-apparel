import '../Styles/Newsletter.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const Newsletter = () => {
  return (
    <section className="news">
      <div className="news__info">
        <h1 className="news__header">NEWSLETTER</h1>
        <p className="news__desc">
          Get timely updates from your favorite products.
        </p>
        <div className="news__input-div">
          <input type="text" placeholder="Your email" className="news__input" />
          <button>
            <SendOutlinedIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
export default Newsletter