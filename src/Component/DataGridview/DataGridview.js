import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const defaultRows = [
  { id: 1, lastName: 'Riya', firstName: 'Patel' },
  { id: 2, lastName: 'Jiya', firstName: 'Soni' },
  { id: 3, lastName: 'Priya', firstName: 'Mehta' },
  { id: 4, lastName: 'Tiya', firstName: 'Parmar' },
  { id: 5, lastName: 'Diya', firstName: 'Gohil' },
  { id: 6, lastName: 'siya', firstName: 'Patel' },
  { id: 7, lastName: 'Jiya', firstName: 'Soni' },
  { id: 8, lastName: 'Priya', firstName: 'Mehta' },
  { id: 9, lastName: 'Tiya', firstName: 'Parmar' },
  { id: 10, lastName: 'Diya', firstName: 'Gohil' },
];

function getFullName(params) {
  return `${params.getValue(params.id, 'firstName') || ''} ${
    params.getValue(params.id, 'lastName') || ''
  }`;
}

function setFullName(params) {
  const [firstName, lastName] = params.value.toString().split(' ');
  return { ...params.row, firstName, lastName };
}
export const DataGridview = () =>
 {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={defaultRows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 130, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    editable: true,
    valueGetter: getFullName,
    valueSetter: setFullName,
    sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
  },
];


