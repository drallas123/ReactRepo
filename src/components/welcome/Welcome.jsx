import "./Welcome.css"


const Welcome = function(props) {
        
    const { name, age } = props
    // = EQUIVALENT :
    // const name = props.name
    // const age = props.age

    return (
        <div>

        <h1>Bienvenue {name} sur l'application React! </h1>
        
        <p>Vous avez {age} ans! </p>

        </div>
    )
}

Welcome.defaultProps = {
    name: "Jean", age: "18"
}

export default Welcome