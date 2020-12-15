import './FeaturedArticle.css';

const FeaturedArticle = (props) => {

    
    return (
        <>
            <h1 className="page-header">Dashboard</h1>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 id='article-title'> Learning to use Zoom. </h1>      
                    <p id='article-sub-title'> Some quick tips to become a Zoom guru. </p>
                    <ol>
                        <li> Change your background. </li> 
                        <li> Mute your audio and turn off your camera by default. </li>
                        <li> Mute and unmute with the space bar. </li>
                        <li>  Turn on the beauty filter. </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default FeaturedArticle;