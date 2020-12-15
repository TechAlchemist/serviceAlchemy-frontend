import { fetchSingleTicket, claimTicket } from '../../services/ticketService';
import { useState, useEffect } from "react";
import EngineerSideBar from '../../components/SideBars/EngineerSideBar';


const EngineerTicketDetails = (props) => {

    const engineerId = props.location.engineerId;

    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        getTicket()
    // eslint-disable-next-line react-hooks/exhaustive-deps    
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
            default: 
                return '#fff';
        }
    }

    async function handleClaimSubmit() {
        if (engineerId === 'undefined' || ticket[0]._id === 'undefined') {
            console.error('Undefined Error in submission. ');
        }
        else {
            await claimTicket(engineerId, ticket[0]._id);
        }
    }

    function areHeadersValid() {
        return !(engineerId && ticket[0]._id);
      }

    return (
        <div className="container-fluid">

            <div className="row">   
            <EngineerSideBar  />
                <div className="col-sm-9">
                    
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
                                <p className="card-text">{`- From ${ticket.ticketCreatorName} in ${ticket.ticketCreatorBusinessUnit}`}</p>
                                <footer className="blockquote-footer">Created: <cite title="Source Title"> {new Date(ticket.createdAt).toLocaleDateString()} </cite></footer>
                                <button disabled={areHeadersValid()} onClick={handleClaimSubmit}>Take Ticket</button>
                            </div>
                        </div>

                        )}
                </div>
             </div>
        </div>
    )
    

}

export default EngineerTicketDetails;