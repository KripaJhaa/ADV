import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const defaultRows = [ { id: 1, lastName: 'Riya', firstName: 'Patel' ,source : "chat"},];


const columns = [
 
  {  field: 'ticketname', headerName: 'Ticket Name', width: 170, editable: true},
  {  field: 'pipeline', headerName: 'Pipeline', width: 130, editable: true},
  {  field: 'ticketstatus', headerName: 'Ticket Status', width: 170, editable: true},
  {  field: 'ticketdescription', headerName: 'Ticket Discription', width: 190, editable: true},
  {  field: 'source', headerName: 'Source', width: 130, editable: true, 
  },
  {  field: 'ticketowner', headerName: 'Ticket Owner', width: 170, editable: true},
  {  field: 'priority', headerName: 'Priority', width: 130, editable: true},
  {  field: 'date', headerName: 'Date', width: 130, editable: true},
  {  field: 'company', headerName: 'Company', width: 140, editable: true},
  {  field: 'contact', headerName: 'Contact', width: 130, editable: true},
   {
     field: 'firstName',
     headerName: 'Full name',
     width: 160,
     editable: true,
   },
 ];



export const DataGridview = () =>
 {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={defaultRows} columns={columns} />
    </div>
  );
}




