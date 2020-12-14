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
                SLA Warning
            </div>
        </li>

        <li className="list-group-item">
          <div className="card">
          <Link to='/'>
              {
              props.active === 'closedTickets' ?
                <p id='active'>
                  <img alt='active link icon' src="https://img.icons8.com/ios-filled/24/000000/here.png"/>
                  &nbsp;Completed Tickets 
                </p>
              :
              <p> &nbsp;Completed Tickets </p>  
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
                  &nbsp;Overall Satisfaction 
                </p>
              :
              <p> &nbsp;Overall Satisfaction </p>  
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
                  &nbsp;Account Management 
                </p>
              :
              <p> &nbsp;Account Management </p>  
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
                  &nbsp;Customer Chat 
                </p>
              :
              <p> &nbsp;Customer Chat </p>  
              } 
            </Link>
          </div>
        </li>

      </ul>

   </div>
  );
};

export default SideNav;
