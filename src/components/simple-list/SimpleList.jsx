import SimpleListItem from "./SimpleListItem"

const SimpleList = function(props) {
    const { pokemons } = props

    const pokemonsJSX = pokemons.map( // .map => prend tous les elements pokemons et les retournent dans la liste
        // p => 
        //     <li key={p.id}> 
            
        //     {p.name} : {p.type} (token : {p.id})
            
        //     </li>

        p => <SimpleListItem 
                key={p.id}
                name={p.name}
                type={p.type}
                level={p.level}>

                </SimpleListItem>

    ) 

    return (
        <div>
            {pokemonsJSX}
        </div>
    )
}

export default SimpleList