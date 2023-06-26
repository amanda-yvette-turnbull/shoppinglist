function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="nav" id="nav1">
          <a href="/recipes">
            <h1 className="nav">RECIPES</h1>
          </a>
        </div>
        <div className="nav" id="nav2">
          <a href="/ingredients">
            <h1 className="nav">INGREDIENTS</h1>
          </a>
        </div>
        <div className="nav" id="nav3">
          <a href="/shoppinglist">
            <h1 className="nav">SHOPPING-LIST</h1>
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav
