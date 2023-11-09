export interface IApartmentsParams {
  companyId: number;
  streetId: number;
  houseId: number;
}

export interface IType {
  id: number;
  name: string;
}

export interface IAccount {
  bindId: number;
  account: string;
  type: IType;
}

export interface IApartmentsData {
  clients: unknown;
  accounts: IAccount[];
  addressId: number;
  streetId: number;
  houseId: number;
  streetName: string;
  building: string;
  flat: string;
}
