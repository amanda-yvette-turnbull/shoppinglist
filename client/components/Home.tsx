// import List from './List'
// import Header from './Header'
import { useAppSelector, useAppDispatch } from '../hooks/hook'

function Home() {
  const dispatch = useAppDispatch()

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <main className="main">
        <p>hello</p>
      </main>
    </>
  )
}

export default Home
