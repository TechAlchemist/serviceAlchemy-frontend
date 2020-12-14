import { engineerCloseTicket } from '../../services/ticketService';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const CloseModal = (props) => {
// eslint-disable-next-line
    const history = useHistory();


    const [formState, setFormState] = useState({
        closeDescription: '',
        engineerId: '',
        ticketId: ''
      });
    
      function handleChange(e) {
        updateMessage('');
        setFormState(prevState => ({
          // Using ES2015 Computed Property Names
          ...prevState,
          [e.target.name]: e.target.value
        }));
      }
        // eslint-disable-next-line
      const [messageState, setMessageState] = useState({
        msg: ''
      });
    
      function updateMessage(msg) {
        setMessageState({message: msg});
      }

    async function handleTicketClose(event) {
        event.preventDefault(); // disable default behavior

        formState.engineerId = props.user._id;
        formState.ticketId = props.ticket._id;
        console.log(formState)
        // console.log(props.ticket._id);
        // console.log(formState.closeDescription);
        try {
            history.push('/dashboard');
            await engineerCloseTicket(formState);
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="modal" id={props.modalId}>
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">{props.ticket.ticketType}&nbsp;-&nbsp;{props.ticket.ticketTitle}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body" style={{color: 'black'}}>
                        Hey there, are you sure you are done with this ticket? Make sure the customer is satisfied, as soon as you close this we will ask them for a satisfaction survey.
                        <br />
                        <hr/>
                        <form className="form-horizontal" >
                            <div className="form-group">
                                <div className="col-auto">
                                <textarea 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Your Closing Description..." 
                                value={formState.closeDescription} 
                                name="closeDescription" 
                                onChange={handleChange}>
                                </textarea>
                                </div>
                            </div>  
                        </form>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Nevermind</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleTicketClose}> Yes, Close! </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CloseModal;