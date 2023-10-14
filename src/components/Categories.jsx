import { categories } from '../../src/data.js'
import '../Styles/Categories.css'
const Categories = () => {
  return (
    <div className="category">
      {categories.map((item) => {
        return (
          <section key={item.id} className="category__item">
            <div className="category__image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="category__info">
              <h3 className="category__title">{item.title}</h3>
              <button>Shop Now</button>
            </div>
          </section>
        )
      })}
    </div>
  )
}
export default Categories
