import CustomerSideBar from '../../components/SideBars/CustomerSideBar';

const CustomerClosedTickets = (props) => {

    return (

        <div className="container-fluid">
    
            <div className="row">
            
                {/* TODO Add conditional render depending on users auth level. */}
                
                <CustomerSideBar active={'closedTickets'} />

                <div className="col-sm-9">
                    <h1> Customer Closed Tickets </h1>
                </div>

            </div>
        </div>
    )
}

export default CustomerClosedTickets;