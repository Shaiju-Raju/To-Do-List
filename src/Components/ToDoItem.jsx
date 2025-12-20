export default function ToDoItem (props) {

return (
    <li 
    
    onClick={() => props.toCheck(props.id)} > 
    {props.text} </li>
)

}