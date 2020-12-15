import { submitSatisfactionSurvey } from '../../services/ticketService'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const CloseModal = (props) => {
// eslint-disable-next-line
    const history = useHistory();


    const [formState, setFormState] = useState({
        satisfactionSurvey: '',
        satisfaction: '',
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

    async function handleSurveySubmit(event) {
        event.preventDefault(); // disable default behavior

        
        formState.ticketId = props.ticket._id;
        

        try {
            history.push('/dashboard');
            await submitSatisfactionSurvey(formState);
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    function isFormInvalid() {
        return !(formState.satisfactionSurvey && formState.satisfaction !== '-');
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
                        Hiya, I hope your tech was able to get you squared away. If you thought they did a great job please leave a comment letting them know what you loved. If they didn't do so well, please let them know what they can improve on. Thanks!!!
                        <br />
                        <hr/>
                        <form className="form-horizontal" >
                            <div className="form-group">
                                <div className="col-auto">
                                <textarea 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Your Satisfaction Survey..." 
                                value={formState.satisfactionSurvey} 
                                name="satisfactionSurvey" 
                                onChange={handleChange}>
                                </textarea>
                                </div>
                            </div>  

                            <div className="form-group">
                                <div className="col-sm-12">
                                <select className="form-control" value={formState.satisfaction} name="satisfaction" onChange={handleChange}>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal" disabled={isFormInvalid()} onClick={handleSurveySubmit}> Submit Survey </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Nevermind</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CloseModal;