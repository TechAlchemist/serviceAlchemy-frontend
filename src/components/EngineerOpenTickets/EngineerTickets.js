import { fetchSingleTicket } from '../../services/ticketService';
import { useState, useEffect } from "react";
import EngineerSideBar from '../../components/SideBars/EngineerSideBar';

import Modal from '../Modal/DeleteTicketModal';

const EngineerTicketDetails = (props) => {

    console.log(props.match)

    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        getTicket()
    }, [props.match.params.ticketId] )

    async function getTicket() {
        const ticketData = await fetchSingleTicket(props.match.params.ticketId);
        setTicket(ticketData);        
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
        }
    }

    return (
        <div className="container-fluid">

            <div className="row">   
            <EngineerSideBar  />
                <div className="col-sm-9">
                    <h1> Service Alchemy Ticket Queue </h1>
                    {ticket && ticket.map((ticket, idx) => 

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
                                <button disabled="disabled">Fart</button>
                            </div>
                        </div>





     
                        )}
                </div>
             </div>
        </div>
    )
    

}

export default EngineerTicketDetails;