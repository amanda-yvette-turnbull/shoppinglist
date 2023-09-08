import { Recipe } from '../../models/Recipes'
import { useAppSelector } from '../hooks/hook'
import { Link } from 'react-router-dom'

function Shoppinglist() {
  const shoppingList = useAppSelector((state) => state.shoppingList as Recipe[])
  const list = [] as string[]
  shoppingList.forEach((recipe) =>
    recipe.ingredients?.forEach((ingredient) => {
      if (!list.includes(ingredient.name)) {
        list.push(ingredient.name)
      }
    })
  )

  return (
    <div className="page">
      <button>+</button>
      <button>-</button>
      <div className="sl-page">
        <div className="sl-list">
          <p>Shopping List:</p>
          <div className="paper">
            <ul>
              {list.map((recipe) => (
                <li key="">{recipe}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sl-recipes">
          <p>This Weeks Recipes:</p>
          {shoppingList && shoppingList.length > 0 ? (
            shoppingList.map((recipe) => (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                <div className="single-recipe">
                  <img
                    className="recipe-img"
                    src={`/images${recipe.image}`}
                    alt={recipe.name}
                  />
                  <p className="recipe-name">{recipe.name}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>Shopping list is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shoppinglist
