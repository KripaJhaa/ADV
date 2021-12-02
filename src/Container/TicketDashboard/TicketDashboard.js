import {React,useState} from 'react'
import { CreateTicket,Check } from '../../Component/CreateTicketForm/CreateTicket'
import { DataGridview } from '../../Component/DataGridview/DataGridview'
import "./TicketDashboard.scss";


export const TicketDashboard = () => {


    const [ticketsArray, setTicketsArray] = useState([]);

    const setTicketRow = (data)=>{
        console.log(data);

        setTicketsArray([...ticketsArray,{"firstName:":data.source,id:"12",source:"papa"}])
    }



    return (
        <div className="ticket-dashboard">
        <DataGridview rowData={ticketsArray} className="data-grid"/>
        <CreateTicket setTicketFormData = {setTicketRow} className="create-ticket"/>
        {/* <Check/> */}
      </div>
    )
}       
