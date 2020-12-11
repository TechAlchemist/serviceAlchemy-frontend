import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import { useState, useEffect } from "react";
import { fetchMyTickets } from '../../services/ticketService';


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
            
                {/* TODO Add conditional render depending on users auth level. */}
                
                <CustomerSideBar active={'openTickets'} />

                <div className="col-sm-9">
                    <h1> Customer Open Tickets </h1>
                    {tickets && tickets.map((ticket, idx) => 
                        <div key={idx}> 
                        Title:{ticket.ticketTitle}
                        <br/> 
                        Ticket Type:{ticket.ticketType}---Priority:{ticket.ticketPriority}
                        <br/>
                        Description:{ticket.ticketDescription}
                        <br/>
                        Created:{new Date(ticket.createdAt).toLocaleDateString()}
                        <hr/>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CustomerOpenTickets;