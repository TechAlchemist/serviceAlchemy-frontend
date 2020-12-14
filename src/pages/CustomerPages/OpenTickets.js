import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import { useState, useEffect } from "react";
import { fetchMyTickets } from '../../services/ticketService';
import Ticket from '../../components/Ticket/Ticket';
import './OpenTickets.css';

const CustomerOpenTickets = (props) => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        if (props.user) {
            getMyTickets();
        } 
    }, [props.user] )

    async function getMyTickets() {
        const ticketData = await fetchMyTickets(props.user._id);
            setTickets(ticketData);
    }

    return (

        <div className="container-fluid">
    
            <div className="row">
                            
                <CustomerSideBar active={'openTickets'} />

                <div className="col-sm-9">
                    <h1 id="title"> Customer Open Tickets </h1>
                        <div className="container" id="ticket-container">
                            {tickets && tickets.map((ticket, idx) => 
                                <Ticket key={idx} ticket={ticket}/> 
                            )}
                        </div>
                    </div>

                </div>
 
            </div>
    )
}

export default CustomerOpenTickets;