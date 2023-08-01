import { useAppSelector } from '../hooks/hook'
import { Ingredient } from '../../models/Ingredients'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

function Ingredients() {
  const ingredients = useAppSelector(
    (state) => state.ingredients
  ) as Ingredient[]

  //* Search input
  const [results, setResults] = useState(ingredients)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const res = ingredients.filter((ingredient) =>
      ingredient.name.includes(e.target.value)
    )
    setResults(res)
  }

  return (
    <div className="page">
      <div className="search-bar">
        <form>
          <label htmlFor="search">search</label>
          <input
            type="text"
            id="search"
            name="searched-for"
            onChange={handleChange}
          />
        </form>
      </div>
      <ul>
        {results && results.length > 0 ? (
          results.map((ingredient) => (
            <li key={ingredient.id}>
              <Link to={`/ingredients/${ingredient.id}`}>
                {ingredient.name}
              </Link>
            </li>
          ))
        ) : (
          <p>No results under search parameters</p>
        )}
      </ul>
    </div>
  )
}

export default Ingredients
