// import { getToken } from './tokenService';
const BASE_URL = 'http://localhost:3001/api/tickets/';
const temp = 'http://localhost:3001/api/tickets/myTickets';

function submitTicket(ticket) {
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

function fetchMyTickets(userId) {
    console.log('fetchMyTickets from ticketService was called. ')
    const options = {
        method: 'GET',
        headers: new Headers({userId: userId})
      };
      return fetch(temp, options).then(res => res.json());
}

export {
    submitTicket,
    fetchMyTickets
};

