import { popularProducts } from '../../src/data.js'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import "../Styles/Products.css"

const Products = () => {
  return (
    <section className="products">
     {popularProducts.map((product)=>{
      return (
        <div key={product.id} className="products__wrapper">
          <div className="products__image">
            <img src={product.img} alt="" />
          </div>
          <div className="products__info">
            <ShoppingCartOutlinedIcon/>
            <SearchOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      )
     
     })}
    </section>
  )
}
export default Products