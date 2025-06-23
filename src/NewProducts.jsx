export function NewProducts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" />
          </div>
          <div>
            Price: <input name="price" type="integer"/>
          </div>
          <div>
            Description: <input name="description" type="text"/>
          </div>
          <div>
            Supplier ID: <input name="supplier_id" type="integer"/>
          </div>
          <button type="submit">Create</button>
      </form>
    </div>
  );
}