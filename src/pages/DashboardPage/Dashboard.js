import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import EngineerSideBar from '../../components/SideBars/EngineerSideBar';

// import BannerImage from '../../components/BannerImage/BannerImage';
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle';
import TicketQueue from '../../components/TicketQueue/TicketQueue';
import ManagerVisuals from '../../components/ManagerVisuals/ManagerVisuals';
// import { Route, Switch, Redirect } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {



    function dashboardLevel() {
        if (props.user.authLevel === 'customer') {
            return <FeaturedArticle />;
        }
        else if (props.user.authLevel === 'engineer') {
            return <TicketQueue />
        }
        else {
            return <ManagerVisuals />
        }
    }

    function sideBarLevel() {
        if (props.user.authLevel === 'customer') {
            return <CustomerSideBar />
        }
        else if (props.user.authLevel === 'engineer') {
            return <EngineerSideBar />
        }
    }

    return (
        <>
        <div className="container-fluid" id="dashboard">
    
            <div className="row">
                {sideBarLevel()}
                <div className="col-sm-9" id="test">
                    { dashboardLevel() }
                </div>

            </div>
        </div>
    </>
    );
}

export default Dashboard;