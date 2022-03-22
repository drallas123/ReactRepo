const TableauProduitItem = function(props) {

    const {name, price, promo} = props

    return (
        <ul>
            <li>Nom : {name}</li>
            <li>Prix : {price} €</li>
            <li className={ promo ? "red" : ""}>En promo : {promo ? "Oui" : "Non"}</li>
        </ul>
    )
}

export default TableauProduitItem