const SimpleListItem = function(props) {

    const {name, type, level} = props

    return (
        <ul>
            <li>Nom : {name}</li>
            <li>Type : {type}</li>
            <li>Niveau : {level}</li>
        </ul>
    )
}

export default SimpleListItem