import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import { useState, useEffect } from "react";
import { fetchMyTickets } from '../../services/ticketService';
import { Link } from 'react-router-dom';


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
                    <h1> Customer Open Tickets </h1>
                    {tickets && tickets.map((ticket, idx) => 
                        <div key={idx}> 
                        Title:<Link to={`/dashboard/openTickets/${ticket._id}`} >
                             {ticket.ticketTitle}
                         </Link>
                        <br/> 
                        Ticket Type:{ticket.ticketType}---Priority:{ticket.ticketPriority}
                        <br/>
                        Description:{ticket.ticketDescription}
                        <br/>
                        Created:{new Date(ticket.createdAt).toLocaleDateString()}
                        <br />
                        <Link to={`/dashboard/openTickets/${ticket._id}/update`}> Update Ticket </Link>
                        <hr/>
                        </div>
                    )}
                </div>
 
            </div>
        </div>
    )
}

export default CustomerOpenTickets;