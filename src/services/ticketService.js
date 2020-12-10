const BASE_URL = 'http://localhost:3001/api/tickets/';

function submitTicket(ticket) {
    console.log(ticket);
    return fetch(BASE_URL + 'newTicket', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(ticket)
    })
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('something went wrong ticketService.js line 12');
    })
}

export {
    submitTicket
};