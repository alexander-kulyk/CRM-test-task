import type { GridColDef } from '@mui/x-data-grid'

export interface IUser {
  id: number
  name: string
  secondName: string
  email: string
  phone: string
}

export const USERS: IUser[] = [
  { id: 1, name: 'Olivia', secondName: 'Bennett', email: 'olivia.bennett@example.com', phone: '+1 202 555 0114' },
  { id: 2, name: 'Liam', secondName: 'Carter', email: 'liam.carter@example.com', phone: '+1 202 555 0192' },
  { id: 3, name: 'Sophia', secondName: 'Nguyen', email: 'sophia.nguyen@example.com', phone: '+1 415 555 0148' },
  { id: 4, name: 'Noah', secondName: 'Khan', email: 'noah.khan@example.com', phone: '+1 415 555 0173' },
  { id: 5, name: 'Emma', secondName: 'Rodriguez', email: 'emma.rodriguez@example.com', phone: '+1 312 555 0126' },
  { id: 6, name: 'James', secondName: 'OConnor', email: 'james.oconnor@example.com', phone: '+1 312 555 0188' },
  { id: 7, name: 'Ava', secondName: 'Kowalski', email: 'ava.kowalski@example.com', phone: '+1 646 555 0139' },
  { id: 8, name: 'William', secondName: 'Ferreira', email: 'william.ferreira@example.com', phone: '+1 646 555 0205' },
  { id: 9, name: 'Mia', secondName: 'Andersson', email: 'mia.andersson@example.com', phone: '+1 503 555 0157' },
  { id: 10, name: 'Benjamin', secondName: 'Schmidt', email: 'benjamin.schmidt@example.com', phone: '+1 503 555 0211' },
]

export const USER_COLUMNS: GridColDef<IUser>[] = [
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 120 },
  { field: 'secondName', headerName: 'Second name', flex: 1, minWidth: 140 },
  { field: 'email', headerName: 'Email', flex: 1.6, minWidth: 220 },
  { field: 'phone', headerName: 'Phone number', flex: 1, minWidth: 160 },
]
