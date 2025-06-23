export function ProductsIndex({products}) {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <img src={product.url}/>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}