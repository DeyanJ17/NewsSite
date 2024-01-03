const Navbar = ({setCategory}) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">My Dashboard</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("home")}>Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports News</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Tech News</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("weather")}>Weather App</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("virginia")}>Virginia Elections Tool</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("todo")}>To-Do List</div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>    
      </div>
    )
}
  
export default Navbar;