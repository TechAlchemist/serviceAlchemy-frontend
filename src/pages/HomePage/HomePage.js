import './HomePage.css';
import BannerImage from '../../components/BannerImage/BannerImage';

const HomePage = (props) => {
    
    return (
        <>
            <BannerImage />
            <div id="home" className="container-fluid">
                <div className='row'>
                    <div className="col-sm-8">
                        <h2>Welcome, Home.</h2>
                        <br/>
                        <h4> 
                            Is your computer slow? Can't send an email? Spill water on your laptop and then 'accidentally' drop it in the mud? Good! Service Alchemy is your medium to get help from your companies IT Services. Your companies IT Services wants to help you as best they can. We want to help them do it. Service Alchemy exists to transmute lackluster customer service into cutting edge, easy to use MAGIC! 
                        </h4>
                        <br/>
                    </div>
                    <div className="col-sm-4">
                        <img 
                            alt='broken computer' 
                            src="https://img.icons8.com/dotty/480/000000/broken-computer.png"
                            id='home-logo'
                            />
                    </div>
    
                </div>
                <hr />

                <div id='testimony-title' className='row'>
                    <h2> Customer Testomonies </h2>
                </div>

                <div className='row'>
                    
                    <div className="col-sm-4">
                        <div className='testimony-content'>
                            <p> Brandon Myers </p>
                            <em> Service Alchemy Founder </em>
                            <p> Service Alchemy is an awesome tool, I love it! I am not biased at all. You can trust me! 
                            </p>
                        </div>
                        <div  className='testimony'>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>

                            <br/>
                            <em> 5 of 5 </em>
                        </div>
                    </div>
                    <div className="col-sm-4">
                       <div className='testimony-content'>
                            <p> George Lucas </p>
                            <em> American Film Director </em>
                            <p> I would use this. It looks so easy to use, yet so powerful. Alright, is that all you wanted me to say? Get lost kid. </p>
                        </div>
                        <div  className='testimony'>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <br />
                            <em> 5 of 5 </em>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='testimony-content'>
                            <p> Will Smith </p>
                            <em> Actor / Rapper </em>
                            <p> Man, how did you get in my house! Get out! I'm calling the police right now! No, I won't review your web app! LEAVE!!! </p>
                        </div>
                        <div className='testimony'>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <img alt='star' src="https://img.icons8.com/ios-glyphs/30/000000/star.png"/>
                            <br/>
                            <em> 5 of 5 </em>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;