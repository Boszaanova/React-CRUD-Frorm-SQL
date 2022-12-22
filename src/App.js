

function App() {
  return (
    <div className="App container mt-5">
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input className="form-control me-2" type="text" placeholder="Enter Name" ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Age:</label>
            <input className="form-control me-2" type="number" placeholder="Enter Age" ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Country:</label>
            <input className="form-control me-2" type="text" placeholder="Enter Country" ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Position:</label>
            <input className="form-control me-2" type="text" placeholder="Enter Position" ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Wage:</label>
            <input className="form-control me-2" type="number" placeholder="Enter Wage" ></input>
          </div>

          <btn className="btn btn-success">00000000000000000000000000000000000000000000000000000000000000000000000</btn>
        </form>
      </div>
      <hr/>

      <div className="employees">
      <btn className="btn btn-primary">Show employees</btn>
      </div>





    </div>
  );
}

export default App;
