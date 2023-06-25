function Ingredients(){
  return(
    <div className="ingredients">
      <div className="searchbar">
        <form>
          <label htmlFor="search">search</label>
          <input type="text" id="search" name="searched-for"/>
        </form>
      </div>

      <ul>
        {{#each ingredients}}
        <li><a href="ingredients/{{id}}">{{name}}</a></li>
        {{/each}}
      </ul>
    </div>
  )
}

export default Ingredients