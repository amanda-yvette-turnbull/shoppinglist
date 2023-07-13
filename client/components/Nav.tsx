import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { Link } from 'react-router-dom'
import { setPage } from '../actions/page'

function Nav() {
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.page)

  return (
    <>
      <div className="navbar">
        <div
          className="nav"
          id={page == 'recipes' ? `selected` : 'not-selected'}
        >
          <Link to="/recipes" onClick={() => dispatch(setPage('recipes'))}>
            <h1 className="nav">RECIPES</h1>
          </Link>
        </div>
        <div
          className="nav"
          id={page == 'ingredients' ? `selected` : 'not-selected'}
        >
          <Link
            to="/ingredients"
            onClick={() => dispatch(setPage('ingredients'))}
          >
            <h1 className="nav">INGREDIENTS</h1>
          </Link>
        </div>
        <div
          className="nav"
          id={page == 'shoppinglist' ? `selected` : 'not-selected'}
        >
          <Link
            to="/shoppinglist"
            onClick={() => dispatch(setPage('shoppinglist'))}
          >
            <h1 className="nav">SHOPPING-LIST</h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Nav
