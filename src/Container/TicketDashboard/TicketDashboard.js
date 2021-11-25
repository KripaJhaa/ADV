import {React,useState} from 'react'
import { CreateTicket,Check } from '../../Component/CreateTicketForm/CreateTicket'
import { DataGridview } from '../../Component/DataGridview/DataGridview'
import "./TicketDashboard.scss";


export const TicketDashboard = () => {


    const [ticketsArray, setTicketsArray] = useState([]);

    const setTicketRow = (data)=>{
        setTicketsArray([...ticketsArray,data])
    }

    return (
        <div className="ticket-dashboard">
        <DataGridview className="data-grid"/>
        <CreateTicket setTicketRow ="setTicketFormData" className="create-ticket"/>
        {/* <Check/> */}
      </div>
    )
}       
