import { useState, useEffect } from "react";
import { fetchOpenTickets } from '../../services/ticketService';
import Ticket from '../Ticket/Ticket';
// import Ticket from '../../components/Ticket/Ticket';
import './TicketQueue.css';

const TicketQueue = (props) => {
    let user = props.user;
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        if (props.user) {
            getOpenTickets();
        } 
    }, [props.user] )

    async function getOpenTickets() {
        const ticketData = await fetchOpenTickets();
        setTickets(ticketData);
    }

    return (
        <div className="container">
            <h1> Service Alchemy Ticket Queue </h1>
            <div className="container" id="ticket-container">
            
                {tickets && tickets.map((ticket, idx) => 
                    <Ticket key={idx} user={user} ticket={ticket}  /> 
                )}
            </div>
        </div>
    )
}

export default TicketQueue;