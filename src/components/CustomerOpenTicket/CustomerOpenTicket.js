import { fetchSingleTicket } from '../../services/ticketService';
import { useState, useEffect } from "react";
import CustomerSideBar from '../SideBars/CustomerSideBar';
import Modal from '../Modal/DeleteTicketModal';


const CustomerOpenTicket = (props) => {

    const [ticket, setTicket] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        getTicket()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.ticketId] )

    async function getTicket() {
        const ticketData = await fetchSingleTicket(props.match.params.ticketId);
        setTicket(ticketData);        
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

    function ticketTypeLogo(type) {
        return type === 'Incident' ? 
        "https://img.icons8.com/ios/50/000000/medium-risk.png" 
        :
        "https://img.icons8.com/pastel-glyph/64/000000/bell-service--v2.png"
    }

    return (
        <div className="container-fluid">

            <div className="row">   
            <CustomerSideBar active={'openTickets'} />
                <div className="col-sm-9">
                    
                    {ticket && ticket.map((ticket, idx) => 
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
                                        <p className="card-text">{ticket.ticketDescription}</p>
                                        <footer className="blockquote-footer">Created: <cite title="Source Title"> {new Date(ticket.createdAt).toLocaleDateString()} </cite></footer>
                                        <br/>
                                        <button  
                                            data-toggle="modal" 
                                            data-target="#openTicket"
                                            className="btn"
                                            > 
                                            Delete 
                                        </button>
                                        <Modal 
                                            modalId={'openTicket'}
                                            ticket={ticket}
                                        />
                                            </div>
                                        </div>
                            </>
                        )}
                </div>
             </div>
        </div>
    )
    

}

export default CustomerOpenTicket;