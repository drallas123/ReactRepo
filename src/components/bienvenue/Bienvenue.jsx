import "./Bienvenue.css"

const Bienvenue = function(props) {
    const { name, age, ageVisible } = props

    return (
        <div>

            <h1>Bonjour { name } bienvenue sur l'application React!</h1>
            {
                ageVisible ? 
                (<p>Vous avez { age } ans! </p>) : 
                (<p>Age caché</p>)
            }

            {
                (age < 18) && (<p>Mineur</p>) // si c'est faux il ne va rien afficher
            }
            


        </div>
    )
}

Bienvenue.defaultProps = {
    age: 18 , name: "Georges"
}

export default Bienvenue