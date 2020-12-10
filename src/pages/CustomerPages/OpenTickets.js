import CustomerSideBar from '../../components/SideBars/CustomerSideBar';

const CustomerOpenTickets = (props) => {

    return (

        <div className="container-fluid">
    
            <div className="row">
            
                {/* TODO Add conditional render depending on users auth level. */}
                
                <CustomerSideBar active={'openTickets'} />

                <div className="col-sm-9">
                    <h1> Customer Open Tickets </h1>
    
                </div>

            </div>
        </div>
    )
}

export default CustomerOpenTickets;