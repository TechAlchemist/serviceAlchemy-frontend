import './HomePage.css';
import BannerImage from '../../components/BannerImage/BannerImage';

const HomePage = (props) => {
    
    return (
        <>
            <BannerImage />
            <div id="about" class="container-fluid">
                <div className='row'>
                    <div class="col-sm-8">
                        <h2>Welcome, Home.</h2>
                        <br/>
                        <h4> 
                            Is your computer slow? Can't send an email? Spill water on your laptop and then 'accidentally' drop it in the mud? Good! Service Alchemy is the one stop shop to get help from your companies IT Services. Your companies IT Services wants to help you as best they can and we want to help them do it. Service Alchemy exists to transmute lackluster customer service into cutting edge, easy to use MAGIC! 
                        </h4>
                        <br/>
                        <button className="btn btn-default btn-lg">Register Now</button>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div>
    
                </div>
                <hr />
                <div className='row'>
                    <div className="col-sm-4">
                        Person 1 Card
                    </div>
                    <div className="col-sm-4">
                        Person 2 Card
                    </div>
                    <div className="col-sm-4">
                        Person 3 Card 
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;