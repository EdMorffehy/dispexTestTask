export interface IClientsData {
  id: number;
  name: string;
  phone: string;
  email: string;
  bindId: number;
}

export interface ICreateClientDTO {
  Name: string;
  Phone: string;
  Email: string;
}

export interface ICreateClientData {
  id: number;
  result: string;
}

export interface IAssignedClientDTO {
  AddressId: number;
  ClientId: number;
}
