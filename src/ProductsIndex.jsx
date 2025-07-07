export function ProductsIndex({products, onShow, onAddToCart}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div key={product.id} classNam="col">
          <div className="card h-100">
            <img src={product.primary_image_url} className="card-img=top" alt="..." />
            <div className="card=body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price} |</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-info" onClick={() => onShow(product)}>More Info</button>
              <button className="btn btn-primary"onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
      {/* <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <img src={product.primary_image_url}/>
          <p>{product.description}</p>
          <button onClick={() => onShow(product)}>More Info</button>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))} */}
    </div>
  );
}