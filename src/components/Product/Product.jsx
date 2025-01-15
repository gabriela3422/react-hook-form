import './Product.scss';
const Product = ({product, isActive, onClick}) => {
    return (
        <div onClick={onClick}
            className={`product-item ${isActive ? 'product-border' : ''} my-3`}>
            <img src={`/images/${product.image}`} title=""/>
        </div>
    )
}
export default Product