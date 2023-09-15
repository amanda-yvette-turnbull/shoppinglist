import { useState } from 'react'
import ShoppingListView from './ShoppingListView'
import ShoppingListEdit from './ShoppingListEdit'

function Shoppinglist() {
  const [edit, setEdit] = useState('hide')
  return (
    <div className="page">
      {edit === 'hide' ? (
        <ShoppingListView setEdit={setEdit} />
      ) : (
        <ShoppingListEdit setEdit={setEdit} />
      )}
    </div>
  )
}

export default Shoppinglist
