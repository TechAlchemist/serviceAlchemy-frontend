import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = ( {location} ) => {
    return (
        <div className="jumbotron" id='not-found-jumbotron'>
            <h1 className="display-4">You open the old wooden door.</h1>
            <p className="lead">It creaks as it opens. An old computer sits at a dusty desk. Mugs of past coffees littered around the chair are dimly illuminated by a bulky CRT monitor. A hunched over figure looms over a mechanical keyboard muttering to himself. He looks up eyes wide, just noticing someone has dared to enter his domicile. Anger flashes in his eyes. The figure stands abruptly, the chair tumbling to the floor in his haste. “Seems you have taken a wrong turn friend. This is not the page you are looking for. “ </p>
            <hr className="my-4" />
            
            <p className="lead">
                <Link to='/'> That was weird. We should go now... </Link>
            </p>
        </div>
    );
}

export default NotFound;