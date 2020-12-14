// import { Link } from 'react-router-dom'
import { fetchSingleTicket } from '../../services/ticketService';
import { useState, useEffect } from "react";
import CustomerSideBar from '../SideBars/CustomerSideBar';
import Modal from '../Modal/DeleteTicketModal';

const CustomerOpenTicket = (props) => {

    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        getTicket()
    }, [props.match.params.ticketId] )

    async function getTicket() {
        const ticketData = await fetchSingleTicket(props.match.params.ticketId);
        setTicket(ticketData);        
    }

    return (
        <div className="container-fluid">

            <div className="row">   
            <CustomerSideBar active={'openTickets'} />
                <div className="col-sm-9">
                    
                    {ticket && ticket.map((ticket, idx) => 
                            <div key={idx}> 
                
                            <h1> {ticket.ticketTitle} </h1>
                            <br/> 
                            Ticket Type:{ticket.ticketType}---Priority:{ticket.ticketPriority}
                            <br/>
                            Description:{ticket.ticketDescription}
                            <br/>
                            Created:{new Date(ticket.createdAt).toLocaleDateString()}
                            <br/>
                            <button  data-toggle="modal" data-target="#openTicket"> Delete </button>
                            <Modal 
                                modalId={'openTicket'}
                                ticket={ticket}
                            />
                            </div>
                        )}
                </div>
             </div>
        </div>
    )
    

}

export default CustomerOpenTicket;