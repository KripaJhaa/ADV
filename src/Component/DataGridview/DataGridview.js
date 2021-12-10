import { DataGrid } from "@mui/x-data-grid";
import "./DataGridview.scss";

const defaultRows = [
  { id: 1, lastName: "Riya", firstName: "Patel", source: "chat" },
];

const columns = [
  {
    field: "ticketname",
    headerName: "Ticket Name",
    width: 130,
    editable: true,
  },
  { field: "pipeline", headerName: "Pipeline", width: 130, editable: true },
  {
    field: "ticketstatus",
    headerName: "Ticket Status",
    width: 140,
    editable: true,
  },
  {
    field: "ticketdescription",
    headerName: "Ticket Discription",
    width: 160,
    editable: true,
  },
  { field: "source", headerName: "Source", width: 110, editable: true },
  {
    field: "ticketowner",
    headerName: "Ticket Owner",
    width: 130,
    editable: true,
  },
  { field: "priority", headerName: "Priority", width: 110, editable: true },
  { field: "date", headerName: "Date", width: 110, editable: true },
  {
    field: "ticketdescription",
    headerName: "Ticket Discription",
    width: 150,
    editable: true,
  },
{ field: "source", headerName: "Source", width: 110, editable: true },
{ field: "company", headerName: "Company", width: 110, editable: true },
 
  { field: "contact", headerName: "Contact", width: 110, editable: true },

];

export const DataGridview = ({rowData}) => {
 

  return (
    <div className="data-grid-view" style={{ height: 450, width: "100%" }}>
        <DataGrid  rows={rowData} columns={columns}/>
    </div>
  );
};