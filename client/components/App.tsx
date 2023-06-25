import { useEffect } from 'react'
// import { useAppDispatch } from '../hooks/hooks'
// import * as movieActions from '../actions/movies'
// import Movies from './Movies'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Movies />
      </section>
    </>
  )
}

export default App
