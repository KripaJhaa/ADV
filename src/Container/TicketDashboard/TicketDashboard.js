import {useState} from 'react'
import { CreateTicket,Check } from '../../Component/CreateTicketForm/CreateTicket'
import { DataGridview } from '../../Component/DataGridview/DataGridview'
import "./TicketDashboard.scss";
import Button from "@mui/material/Button";

export const TicketDashboard = () => {
    const [ticketsArray, setTicketsArray] = useState([]);
    const setTicketRow = (data)=>{
        console.log(data);
        setTicketsArray([...ticketsArray,data])
    }



    return (
        <div className="ticket-dashboard">
        <DataGridview className="data-grid" rowData={ticketsArray} />
        <CreateTicket setTicketFormData = {setTicketRow} className="create-ticket"/>
      </div>
    )


    // return (  <Button variant="contained">Contained</Button>)
}       
