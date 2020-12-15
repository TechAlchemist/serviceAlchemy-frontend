import { fetchSingleTicket } from '../../services/ticketService';
import { useState, useEffect } from "react";
import CustomerSideBar from '../SideBars/CustomerSideBar';
import {  updateSingleTicket } from '../../services/ticketService'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CustomerOpenTicket = (props) => {

    const history = useHistory();

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

    const [formState, setFormState] = useState({
        ticketTitle: '',
        ticketDescription: '',
      });
    // eslint-disable-next-line
    const [messageState, setMessageState] = useState({
        msg: ''
    });

    function updateMessage(msg) {
        setMessageState({message: msg});
    }
    
    function handleChange(e) {
        updateMessage('');
        setFormState(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
    }
    
    
    async function handleSubmit (e) {
        e.preventDefault();
        // Why am I not using formState? Good question future self?
        // We had problems pre-populating the form without refactoring the entire form. 
        // The solution was to check which of the fields were untouched.
        // If untouched then assume it stays the same and set the formState to the tickets old value. Voila!
        let updatedTicket = formState;
        // If a field is left blank we assume we are not updatig it.
        // Bracket notation becuase we are accessing all of the results from the fetch. 
        if (formState.ticketTitle === '' && formState.ticketDescription.length > 0) {
            updatedTicket.ticketTitle = ticket[0].ticketTitle;
        }
        if (formState.ticketDescription === '' && formState.ticketTitle.length > 0) {
            updatedTicket.ticketDescription = ticket[0].ticketDescription;
        }
        
        try {
            history.push('/dashboard');
            await updateSingleTicket(updatedTicket, ticket[0]._id);
            window.location.reload();
        } catch (err) {
          // Invalid ticket data
          updateMessage(err.message);
        }
      }
    
      

    return (
        <div className="container-fluid">
            <div className="row">   
            <CustomerSideBar active={'openTickets'} />
                <div className="col-sm-9">
                    
                    {ticket && ticket.map((ticket, idx) => 
                            <div key={idx}>
 
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">

                                        <h1> Update Ticket </h1>
                                        <p> Click Edit for the field you want to change.</p>
                                        {/* TICKET TITLE */}
                                        <div className="col-sm-12">
                                        <h3> Ticket Title</h3>
                                        <p> <em> Original Title </em> <br/> { ticket.ticketTitle } </p>
                                        
                                        <input 
                                            onChange={handleChange}
                                            value={formState.ticketTitle}
                                            name='ticketTitle' 
                                            className="form-control" 
                                            type="text"/>
                                        </div>

                                        <br/>

                                        {/* TICKET DESCRIPTION */}
                                        <div className="col-sm-12">
                                        <h3> Ticket Description</h3>
                                        <p> <em> Original Description </em> <br/> { ticket.ticketDescription } </p>
                                            <textarea 
                                            onChange={handleChange}
                                            value={formState.ticketDescription} 
                                            name='ticketDescription' 
                                            className="form-control" 
                                            type="text">
                                            </textarea>
                                        </div>

                                        <br/>
                                        {/* SUBMIT BUTTON */}
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                            <button className="btn btn-default">Update Ticket</button>&nbsp;&nbsp;
                                            <Link to='/dashboard/openTickets'>Cancel</Link>
                                            </div>
                                        </div>

                                    </div>
                                 </form>
                            </div>
                        )}
                </div>
             </div>
        </div>
    )
    

}

export default CustomerOpenTicket;