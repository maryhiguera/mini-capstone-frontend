
export function NewProducts({onCreate}) {
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
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
            <label htmlFor="floatingInput">Name of Product:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="integer" className="form-control" id="floatingInput" placeholder="price"/>
            <label htmlFor="floatingInput">Price:</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave description here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
            <label htmlFor="floatingTextarea2">Description:</label>
          </div>
          <div className="form-floating mp-3">
            <input type="integer" className="form-control" id="floatingInput"placeholder="supplier_id"/>
            <label htmlFor="floatingInput">Supplier ID:</label>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button className="btn btn-primary" type="button">Create New Product</button>
          </div>
          {/* <button type="submit">Create</button> */}
      </form>
    </div>
  );
}