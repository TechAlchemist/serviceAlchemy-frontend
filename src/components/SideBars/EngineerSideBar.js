import "./SideBar.css";
// import logo from  '../../logoV3.gif';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
  
  const activeLinkSrc = 'https://img.icons8.com/ios/50/000000/water-bottle.png';

  return (
    // <>
    <div className="col-sm-3" id="sidebar">
    

          <div className="card" id="nav-card">
            <Link to='/dashboard'>
              {
              props.active === 'dashboard' ?
                <p id='active'>
                  <img alt="active link" src={activeLinkSrc} />
                  &nbsp;Dashboard 
                </p>
              :
              <p> &nbsp;Dashboard </p>  
              } 
            </Link>
          </div>

          <div className="card" id="nav-card">
            <Link to='/dashboard/engineersOpenTickets'>
              {
              props.active === 'engineersTickets' ?
                <p id='active'>
                  <img alt="active link" src={activeLinkSrc} />
                  &nbsp;Current Tickets 
                </p>
              :
              <p> &nbsp;Current Tickets </p>  
              } 
            </Link>
          </div>

          <div className="card" id="nav-card">
          <Link to='/dashboard/engineersClosedTickets'>
              {
              props.active === 'engineersClosedTickets' ?
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
          <Link to='/dashboard/surveys'>
              {
              props.active === 'surveys' ?
                <p id='active'>
                  <img alt='active link icon' src={activeLinkSrc}/>
                  &nbsp;Satisfaction Surveys 
                </p>
              :
              <p> &nbsp;Satisfaction Surveys </p>  
              } 
            </Link>
          </div>


   </div>
  );
};

export default SideNav;
