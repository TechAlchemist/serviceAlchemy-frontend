import EngineerSideBar from '../../components/SideBars/EngineerSideBar';
import { getEngineersOpenTickets } from '../../services/ticketService';
import { useState, useEffect } from "react";
import CloseModal from '../../components/Modal/CloseTicketModal' 

const EngineerOpenTicketsPage = (props) => {

    const user = props.user;
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        if (props.user) {
            getOpenTickets();
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user] )

    async function getOpenTickets() {
        const ticketData = await getEngineersOpenTickets(props.user._id);
        setTickets(ticketData);
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
            <EngineerSideBar active={'engineersTickets'} />
            <div className="container">

                <div className="col-sm-9">
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
                                <p className="card-text"></p>
                                <footer className="blockquote-footer">Created: <cite title="Source Title"> {new Date(ticket.createdAt).toLocaleDateString()} </cite></footer>
                                <br/>
                                <button  
                                    className="btn"
                                    data-toggle="modal" 
                                    data-target="#closeTicket"> 
                                    Close 
                                </button>
                                <CloseModal 
                                    modalId={'closeTicket'}
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

export default EngineerOpenTicketsPage;