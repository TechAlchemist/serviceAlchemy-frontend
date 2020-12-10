import SideBar from '../../components/SideBars/CustomerSideBar';
import BannerImage from '../../components/BannerImage/BannerImage';
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle';

const Dashboard = (props) => {
    
    return (
        <>
                
        <div className="container-fluid">
    
            <div className="row">
            
                {/* TODO Add conditional render depending on users auth level. */}
                
                <SideBar />

                <div className="col-sm-9">
                    <FeaturedArticle />
                </div>

            </div>
        </div>
    </>
    );
}

export default Dashboard;