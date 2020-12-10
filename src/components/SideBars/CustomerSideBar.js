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
            <Link to='/dashboard/openTickets'>
              {
              props.active === 'openTickets' ?
                <p id='active'>
                  <img alt='active link icon' src="https://img.icons8.com/ios-filled/24/000000/here.png"/>
                  &nbsp;Open Tickets 
                </p>
              :
              <p> &nbsp;Open Tickets </p>  
              } 
            </Link>
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
          <Link to='/dashboard/closedTickets'>
              {
              props.active === 'closedTickets' ?
                <p id='active'>
                  <img alt='active link icon' src="https://img.icons8.com/ios-filled/24/000000/here.png"/>
                  &nbsp;Closed Tickets 
                </p>
              :
              <p> &nbsp;Closed Tickets </p>  
              } 
            </Link>
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
          <Link to='/dashboard/newTicket'>
              {
              props.active === 'newTicket' ?
                <p id='active'>
                  <img alt='active link icon' src="https://img.icons8.com/ios-filled/24/000000/here.png"/>
                  &nbsp;New Ticket 
                </p>
              :
              <p> &nbsp;New Ticket </p>  
              } 
            </Link>
          </div>
        </li>
      </ul>

   </div>
  );
};

export default SideNav;
