import "../styles/Navbar.css"
import { AiOutlineSearch } from 'react-icons/ai'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__Wrapper">
        <section className="Navbar__Left">
          <span>EN</span>
          <div className="Navbar__Search">
            <input type="text" style={{backgroundColor: '#EDEDE9'}} />
            <AiOutlineSearch
              style={{
                color: 'gray',
                fontSize: '16px',
                
              }}
            />
          </div>
        </section>
        <section className="Navbar__Center">
          <h1> My Apparel.</h1>
        </section>
        <section className="Navbar__Right">
          <span style={{ marginRight: '10px' }}>Register</span>
          <span style={{ marginRight: '10px' }}>Sign In</span>
          <Badge badgeContent={5} color="secondary">
            <ShoppingCartOutlinedIcon color="action" fontSize="small" />
          </Badge>
        </section>
      </div>
    </nav>
  )
}
export default Navbar
