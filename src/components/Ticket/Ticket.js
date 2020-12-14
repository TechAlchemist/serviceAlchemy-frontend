import './Ticket.css';
import { Link, Route } from 'react-router-dom';


const Ticket = (props) => {
    const ticket = props.ticket;
    const engineerId = props.user._id;
    console.log('engineer id here ' + engineerId);
    function priorityColor(priority) {
        switch (priority) {
            case 1: 
                return '#f55d1e';
            case 2:
                return '#fd9800';
            case 3: 
                return '#fef99b';
            case 4: 
                return '#b5d6a7';
        }
    }

    function ticketTypeLogo(type) {
        return type === 'Incident' ? 
        "https://img.icons8.com/ios/50/000000/medium-risk.png" 
        :
        "https://img.icons8.com/pastel-glyph/64/000000/bell-service--v2.png"
    }

    // determine what the current user can do to the ticket
    function availableActions() {
        if (props.user.authLevel === 'engineer') {
            return (
                <>
                    <Link to={{pathname: `/dashboard/ticketDetails/${ticket._id}`, engineerId : engineerId}}> Details </Link> 
                </>
            )
        }
        else {
            return (
                <>
                    <Link to={`/dashboard/openTickets/${ticket._id}`}> Details </Link> 
                    <Link to={`/dashboard/openTickets/${ticket._id}/update`}> Update </Link> 
                </>
            )
        }
    }

    return (
        <>
            <div className="card" id="card">
                <div className="card-header" style={{backgroundColor: priorityColor(ticket.ticketPriority)}}>
                    <h4>
                    <img src={ticketTypeLogo(ticket.ticketType)} alt='ticket type logo' style={{width: 30}} />
                         <strong> {ticket.ticketType} </strong> 
                    </h4> 
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ticket.ticketTitle}</h5>
                    <p className="card-text"></p>
                    <footer className="blockquote-footer">Created: <cite title="Source Title"> {new Date(ticket.createdAt).toLocaleDateString()} </cite></footer>
                    {availableActions()}
                </div>
            </div>
        </>
    )
}

export default Ticket;