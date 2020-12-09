// import "./Nav.css";
// import logo from  '../../logoV3.gif';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
  return (
    // <>
    <div className="col-sm-3">
      <h1> Sidebar </h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="card">
            <Link to='/'>
              <p> Open Tickets </p>  
            </Link>
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
          <Link to='/'>
              <p> Closed Tickets </p>  
            </Link>
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
            <Link to='/'>
              <p> New Ticket </p>  
            </Link>
          </div>
        </li>
      </ul>

   </div>
  );
};

export default SideNav;
