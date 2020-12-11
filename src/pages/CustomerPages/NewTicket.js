import CustomerSideBar from '../../components/SideBars/CustomerSideBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitTicket } from '../../services/ticketService'
import { useHistory } from 'react-router-dom';

const CustomerNewTicket = (props) => {

    const history = useHistory();

    const [formState, setFormState] = useState({
        ticketTitle: '',
        ticketDescription: '',
        ticketType: '',
        ticketPriority: '',
        ticketCreator: props.user._id
        

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
        try {
            history.push('/dashboard');
            await submitTicket(formState);
        } catch (err) {
          // Invalid ticket data
          updateMessage(err.message);
        }
      }
    
      function isFormInvalid() {
        return !(formState.ticketTitle && formState.ticketDescription && formState.ticketType && formState.ticketPriority);
      }

    return (

        <div className="container-fluid">
    
            <div className="row">
        
                <CustomerSideBar active={'newTicket'} />

                <div className="col-sm-9">
                    <h1> Customer New Ticket </h1>
                    <div className='container'>

                        <form className="form-horizontal" onSubmit={handleSubmit} >
                            {/* TICKET TITLE */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    Give your ticket a brief title.
                                <input type="text" 
                                className="form-control" 
                                placeholder="Ticket Title" 
                                value={formState.ticketTitle} 
                                name="ticketTitle" 
                                onChange={handleChange} />
                                </div>
                            </div>

                            {/* TICKET TYPE */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    Select your ticket type. If something broke choose Incident. If you need something, <em>( eq. new laptop )</em> choose service request. 
                                <select 
                                className="form-control" 
                                value={formState.ticketType} 
                                name="ticketType" 
                                onChange={handleChange}>
                                    <option> - </option>
                                    <option> Incident </option>
                                    <option> Service Request </option>
                                </select>
                                </div>
                            </div>

                            {/* TICKET DESCRIPTION */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    Give us a detailed description of the problem/request. The more details and accurate descriptions helps with fast incident resolution.
                                <textarea 
                                className="form-control"  
                                rows="3"
                                placeholder="Ticket Description" 
                                value={formState.ticketDescription} 
                                name="ticketDescription" 
                                onChange={handleChange}
                                >                               
                                </textarea> 
                                </div>
                            </div>
                            {/* TICKET PRIORITY */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    How dire is this? 5 is Not Important - 1 is A Server Exploded!
                                <select 
                                className="form-control" 
                                value={formState.ticketPriority} 
                                name="ticketPriority" 
                                onChange={handleChange}>
                                    <option> - </option>
                                    <option> 5 </option>
                                    <option> 4 </option>
                                    <option> 3 </option>
                                    <option> 2 </option>
                                    <option> 1 </option>
                                </select>
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                <button className="btn btn-default" disabled={isFormInvalid()}>Create Ticket</button>&nbsp;&nbsp;
                                <Link to='/dashboard'>Cancel</Link>
                                </div>
                            </div>


                        </form>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerNewTicket;