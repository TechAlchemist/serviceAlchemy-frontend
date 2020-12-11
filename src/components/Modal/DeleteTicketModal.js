import {camelCase} from '../../services/helperFunctions';
import { deleteSingleTicket } from '../../services/ticketService';
import { Redirect } from 'react';
import { useHistory } from 'react-router-dom';

const Modal = (props) => {

    const history = useHistory();

    async function handleDeletion(event) {
        event.preventDefault(); // disable default behavior
        try {
            history.push('/dashboard/openTickets');
            await deleteSingleTicket(props.ticket._id);
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
                    <h4 className="modal-title">{camelCase(props.ticket.ticketType)}&nbsp;-&nbsp;{props.ticket.ticketTitle}</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                    Hey there, are you sure you want to do this? You'll be deleting the {props.ticket.ticketType} you submitted on {new Date(props.ticket.createdAt).toLocaleDateString()}. This means a Support Engineer will NOT be reaching out. 
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Nevermind</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleDeletion}> Yes, Delete</button>

                </div>


                </div>
            </div>
        </div>
    )
}

export default Modal;