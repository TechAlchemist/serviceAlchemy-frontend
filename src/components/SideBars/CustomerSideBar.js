import "./SideBar.css";
// import logo from  '../../logoV3.gif';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
  
  const activeLinkSrc = 'https://img.icons8.com/ios/50/000000/water-bottle.png';

  return (
    // <>
    <div className="col-sm-3" id="sidebar">
      

          <div className="card" id="nav-card">
            <Link to='/dashboard/openTickets'>
              {
              props.active === 'openTickets' ?
                <p id='active'>
                  <img alt="active link" src={activeLinkSrc} />
                  &nbsp;Open Tickets 
                </p>
              :
              <p> &nbsp;Open Tickets </p>  
              } 
            </Link>
          </div>

          <div className="card" id="nav-card">
          <Link to='/dashboard/closedTickets'>
              {
              props.active === 'closedTickets' ?
                <p id='active'>
                  <img alt='active link icon' src={activeLinkSrc}/>
                  &nbsp;Closed Tickets 
                </p>
              :
              <p> &nbsp;Closed Tickets </p>  
              } 
            </Link>
          </div>

          <div className="card" id="nav-card">
          <Link to='/dashboard/newTicket'>
              {
              props.active === 'newTicket' ?
                <p id='active'>
                  <img alt='active link icon' src={activeLinkSrc}/>
                  &nbsp;New Ticket 
                </p>
              :
              <p> &nbsp;New Ticket </p>  
              } 
            </Link>
          </div>


   </div>
  );
};

export default SideNav;
