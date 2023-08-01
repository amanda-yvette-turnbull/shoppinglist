import { ChangeEvent, useState } from 'react'

function Search() {
  //* functionality pseudocode
  //gets passed down an array of objects to search for
  // filter those objects looking for all that contains those letters types in
  //    this means it will need to save input of the form as its being written and change the store on what is in the search bar
  // say no results if nothing is returned

  const [input, setInput] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  return (
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
  )
}

export default Search
