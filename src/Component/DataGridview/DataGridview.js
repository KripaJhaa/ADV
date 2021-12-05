import { DataGrid } from "@mui/x-data-grid";
import "./DataGridview.scss";

const defaultRows = [
  { id: 1, lastName: "Riya", firstName: "Patel", source: "chat" },
];

const columns = [
  {
    field: "ticketname",
    headerName: "Ticket Name",
    width: 170,
    editable: true,
  },
  { field: "pipeline", headerName: "Pipeline", width: 130, editable: true },
  {
    field: "ticketstatus",
    headerName: "Ticket Status",
    width: 170,
    editable: true,
  },
<<<<<<< HEAD
  
  {
    field: "ticketOwner",
=======
  {
    field: "ticketdescription",
    headerName: "Ticket Discription",
    width: 190,
    editable: true,
  },
  { field: "source", headerName: "Source", width: 130, editable: true },
  {
    field: "ticketowner",
>>>>>>> 84e236ec68c6acf2dce13cf42fe682c318ee0b60
    headerName: "Ticket Owner",
    width: 170,
    editable: true,
  },
<<<<<<< HEAD
  
  { field: "priority", headerName: "Priority", width: 130, editable: true },
  { field: "date", headerName: "Date", width: 130, editable: true },
  {
    field: "ticketdescription",
    headerName: "Ticket Discription",
    width: 190,
    editable: true,
  },
{ field: "source", headerName: "Source", width: 130, editable: true },
{ field: "company", headerName: "Company", width: 140, editable: true },
=======
  { field: "priority", headerName: "Priority", width: 130, editable: true },
  { field: "date", headerName: "Date", width: 130, editable: true },
  { field: "company", headerName: "Company", width: 140, editable: true },
>>>>>>> 84e236ec68c6acf2dce13cf42fe682c318ee0b60
  { field: "contact", headerName: "Contact", width: 130, editable: true },
  {
    field: "firstName",
    headerName: "Full name",
    width: 160,
    editable: true,
  },
<<<<<<< HEAD

=======
>>>>>>> 84e236ec68c6acf2dce13cf42fe682c318ee0b60
];

export const DataGridview = ({rowData}) => {
 

  return (
<<<<<<< HEAD
    <div className="data-grid-view" style={{ height: 600, width: "100%" }}>
        <DataGrid  rows={rowData} columns={columns}/>
    </div>   
=======
    <div className="data-grid-view" style={{ height: 600, width: "90%" }}>
        <DataGrid  rows={rowData} columns={columns}/>
    </div>
>>>>>>> 84e236ec68c6acf2dce13cf42fe682c318ee0b60
  );
};