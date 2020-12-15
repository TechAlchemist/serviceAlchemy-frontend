import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import { fetchMyClosedTickets } from '../../services/ticketService';
import { useState, useEffect } from "react";
import SurveyTicketModal from "../../components/Modal/SurveyTicketModal"

const CustomerClosedTickets = (props) => {

    const user = props.user;
    const [tickets, setTickets] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        if (props.user) {
            getMyTickets();
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user] )

    async function getMyTickets() {
        const ticketData = await fetchMyClosedTickets(props.user._id);
        setTickets(ticketData);
    }

    function ticketTypeLogo(type) {
        return type === 'Incident' ? 
        "https://img.icons8.com/ios/50/000000/medium-risk.png" 
        :
        "https://img.icons8.com/pastel-glyph/64/000000/bell-service--v2.png"
    }

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
            default: 
                return '#fff';
        }
    }

    return (

        <div className="container-fluid">
    
            <div className="row">
                            
                <CustomerSideBar active={'closedTickets'} />

                <div className="col-sm-9">
                    <h1 id="title"> Customer Closed Tickets </h1>
                        <div className="container" id="ticket-container">
                            {tickets && tickets.map((ticket, idx) => 
                                <div className="card" id="card" key={idx}>
                                    <div className="card-header" style={{backgroundColor: priorityColor(ticket.ticketPriority)}}>
                                        <h4>
                                        <img src={ticketTypeLogo(ticket.ticketType)} alt='ticket type logo' style={{width: 30}} />
                                            <strong> {ticket.ticketType} </strong> 
                                        </h4> 
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{ticket.ticketTitle}</h5>
                                        <p className="card-text">{ticket.ticketDescription}</p>
                                       
                                        <footer className="blockquote-footer">Created: <cite title="Source Title"> {new Date(ticket.createdAt).toLocaleDateString()} </cite></footer>
                                        <button  
                                            className="btn"
                                            data-toggle="modal" 
                                            data-target="#submitSurvey"> 
                                            Take Survey 
                                        </button>
                                        <SurveyTicketModal 
                                            modalId={'submitSurvey'}
                                            user={user}
                                            ticket={ticket}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
 
            </div>
    )
}

export default CustomerClosedTickets;