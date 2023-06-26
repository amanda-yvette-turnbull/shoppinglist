// import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'

interface Props {
  recipe: RecipeModel
}

function Recipe({ recipe }: Props) {
  return (
    <div className="rec-container">
      <div>
        <img src={`/images${recipe.image}`} alt="{{name}}" />
      </div>
      <div>
        <h1 className="rec-labels">{recipe.name}</h1>
        <h2>Ingredients:</h2>
        {/* <ul>
          {{#each ingredients}}
            <li>{{name}} ({{amount}})</li>
          {{/each}}
        </ul> */}
        <h2>Instructions:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Recipe
