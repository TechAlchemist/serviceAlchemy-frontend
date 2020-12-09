import SideBar from '../../components/SideBars/CustomerSideBar';
import BannerImage from '../../components/BannerImage/BannerImage';

const Dashboard = (props) => {
    
    return (
        <>

        <BannerImage />
        
        <div className="container-fluid">
    
            <div className="row">
            
                {/* TODO Add conditional render depending on users auth level. */}
                
                <SideBar />

                <div className="col-sm-9">
                    <h1 className="page-header">Home Page</h1>
                </div>

            </div>
        </div>
    </>
    );
}

export default Dashboard;