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
    const options = {
        method: 'GET'
      };
      return fetch(BASE_URL + 'openTickets', options).then(res => res.json());
}


function fetchMyClosedTickets(userId) {
    const options = {
        method: 'GET',
        headers: new Headers({userId: userId})
      };
      return fetch(BASE_URL + 'closedTickets', options).then(res => res.json());
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

        throw new Error('something went wrong in ticketService');
    })
}

function claimTicket(engineerId, ticketId) {
    return fetch(BASE_URL + 'claimTicket', {
        method: 'POST',
        headers: new Headers(
        {
            ticketId: ticketId,
            engineerId: engineerId
        }),
       
    })
}

function getEngineersOpenTickets(engineerId) {
    const options = {
        method: 'GET',
        headers: new Headers({engineerId: engineerId})
      };
      return fetch(BASE_URL + 'engineersOpenTickets', options).then(res => res.json());
}

function getEngineersClosedTickets(engineerId) {
    const options = {
        method: 'GET',
        headers: new Headers({engineerId: engineerId})
      };
      return fetch(BASE_URL + 'engineersClosedTickets', options).then(res => res.json());
}

function engineerCloseTicket(ticketBody) {
    return fetch(BASE_URL + 'closeTicket', {
        method: 'POST',
        headers: new Headers(
        {
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ticketBody)
    })
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('something went wrong in ticketService');
    })
}

function submitSatisfactionSurvey(ticketBody) {
    console.log(ticketBody)
    return fetch(BASE_URL + 'satisfactionSurvey', {
        method: 'POST',
        headers: new Headers(
        {
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ticketBody)
    })
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('something went wrong in ticketService');
    })
}

export {
    submitTicket,
    fetchMyTickets,
    fetchSingleTicket,
    deleteSingleTicket,
    updateSingleTicket,
    fetchOpenTickets,
    claimTicket,
    getEngineersOpenTickets,
    engineerCloseTicket,
    getEngineersClosedTickets,
    fetchMyClosedTickets,
    submitSatisfactionSurvey
};

