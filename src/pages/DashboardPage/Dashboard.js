import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import EngineerSideBar from '../../components/SideBars/EngineerSideBar';
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle';
import TicketQueue from '../../components/TicketQueue/TicketQueue';
import ManagerVisuals from '../../components/ManagerVisuals/ManagerVisuals';
import './Dashboard.css';

const Dashboard = (props) => {



    function dashboardLevel() {
        if (props.user.authLevel === 'customer') {
            return <FeaturedArticle />;
        }
        else if (props.user.authLevel === 'engineer') {
            return <TicketQueue user={props.user}/>
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
                <div className="col-sm-9">
                    { dashboardLevel() }
                </div>

            </div>
        </div>
    </>
    );
}

export default Dashboard;