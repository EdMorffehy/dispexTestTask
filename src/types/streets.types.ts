export interface IPrefix {
  id: number;
  name: string;
  shortName: string;
}
export interface IStreetData {
  id: number;
  prefix: IPrefix;
  name: string;
  cityId: number;
  city: string;
  nameWithPrefix: string;
}
