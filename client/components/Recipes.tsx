function Recipes(){
  return(
    <div className="recipes">
      <div className="searchbar">
        <form>
          <label htmlFor="search">search</label>
          <input type="text" id="search" name="searched-for"/>
        </form>
      </div>
      <div className="recipes-box">
      {{#each recipes}}
        <div className="one-recipe">
          <a href="/recipes/{{id}}">
          <img className="img-cirlce" src="images{{image}}" alt="{{name}}"/></a>
          <p><a href="/recipes/{{id}}">{{name}}</a></p>
        </div>
      {{/each}}
      </div>
    </div>
  )
}