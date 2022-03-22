import TableauProduitItem from "./TableauProduitItem"
import "./TableauProduit.css"

const TableauProduit = function(props) {
    const { produits } = props

    const produitsJSX = produits.map(

        p => <TableauProduitItem 
        key={p.id}
        name={p.name}
        price={p.price}
        promo={p.promo}>
        </TableauProduitItem>

) 

return (
<div>
    {produitsJSX}
</div>
)
}

export default TableauProduit


    
