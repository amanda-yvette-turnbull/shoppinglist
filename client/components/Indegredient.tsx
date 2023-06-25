
interface Props(){

}
//! fix this whole section 
function Ingredient(props: Props) {
  return (
    <ul>
    {props.map((ingre))}
    <li><a href="ingredients/{{id}}">{{name}}</a></li>
    {{/each}}
  </ul>
  )
}