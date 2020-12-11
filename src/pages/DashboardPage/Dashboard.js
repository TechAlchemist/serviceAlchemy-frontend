import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
// import BannerImage from '../../components/BannerImage/BannerImage';
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle';
// import { Route, Switch, Redirect } from 'react-router-dom';

const Dashboard = (props) => {



    return (
        <>
                
        <div className="container-fluid">
    
            <div className="row">
            
                
                <CustomerSideBar />

                <div className="col-sm-9">

                    <FeaturedArticle />
                </div>

            </div>
        </div>
    </>
    );
}

export default Dashboard;