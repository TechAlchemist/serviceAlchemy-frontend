import CustomerSideBar from '../../components/SideBars/CustomerSideBar';

const CustomerNewTicket = (props) => {

    return (

        <div className="container-fluid">
    
            <div className="row">
            
                
                <CustomerSideBar active={'newTicket'} />

                <div className="col-sm-9">
                    <h1> Customer New Ticket </h1>
    
                </div>

            </div>
        </div>
    )
}

export default CustomerNewTicket;