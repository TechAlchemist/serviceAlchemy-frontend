// import { getToken } from './tokenService';
const BASE_URL = 'http://localhost:3001/api/tickets/';



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
    const options = {
        method: 'GET',
        headers: new Headers({userId: userId})
      };
      return fetch(BASE_URL + 'myTickets', options).then(res => res.json());
}

function fetchOpenTickets() {
    console.log('fetchMyTickets from ticketService was called. ')
    const options = {
        method: 'GET'
      };
      return fetch(BASE_URL + 'openTickets', options).then(res => res.json());
}

function fetchSingleTicket(ticketId) {
    const options = {
        method: 'GET',
        headers: new Headers({ticketId: ticketId})
      };
      return fetch(BASE_URL + 'singleTicket', options).then(res => res.json());
}

function deleteSingleTicket(ticketId) {
    const options = {
        method: 'DELETE',
        headers: new Headers({ticketId: ticketId})
    };
    return fetch(BASE_URL + 'deleteTicket', options).then(res => res.json());
}

function updateSingleTicket(ticketBody, ticketId) {
    return fetch(BASE_URL + 'updateTicket', {
        method: 'POST',
        headers: new Headers(
        {
            'Content-Type': 'application/json',
            ticketId: ticketId
        
        }),
        body: JSON.stringify(ticketBody)
    })
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('something went wrong ticketService.js line 12');
    })
}

export {
    submitTicket,
    fetchMyTickets,
    fetchSingleTicket,
    deleteSingleTicket,
    updateSingleTicket,
    fetchOpenTickets
};

