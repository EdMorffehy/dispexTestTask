import instanceApi from "../config/instanse";
import ServiceEnum from "../enums";
import { IApartmentsData, IApartmentsParams } from "../types/apartments.types";
import { IHousesData } from "../types/houses.types";
import { IStreetData } from "../types/streets.types";
import { IAssignedClientDTO, IClientsData, ICreateClientData, ICreateClientDTO } from "../types/clients.types";

export const Services = instanceApi.injectEndpoints({
  endpoints: build => ({
    getStreets: build.query<IStreetData[], void>({
      query: () => ({
        url: ServiceEnum.STREETS
      })
    }),
    getHouses: build.query<IHousesData[], number>({
      query: streetId => ({
        url: `${ServiceEnum.HOUSES}/${streetId}`
      })
    }),
    getApartments: build.query<IApartmentsData[], IApartmentsParams>({
      query: params => ({
        url: ServiceEnum.APARTMENT,
        params
      })
    }),
    getClientsByAddress: build.query<IClientsData[], string>({
      query: addressId => ({
        url: ServiceEnum.CLIENTS,
        params: {
          addressId
        }
      }),
      providesTags: [ServiceEnum.CLIENTS]
    }),
    createClient: build.mutation<ICreateClientData, ICreateClientDTO>({
      query: body => ({
        url: ServiceEnum.CREATE_CLIENT,
        method: "POST",
        body
      })
    }),
    assignedClient: build.mutation<void, IAssignedClientDTO>({
      query: body => ({
        url: ServiceEnum.ASSIGNED_CLIENT,
        method: "PUT",
        body
      }),
      invalidatesTags: (_, error) => (error ? [] : [ServiceEnum.CLIENTS])
    }),
    deleteClient: build.mutation<void, number>({
      query: clientId => ({
        url: `${ServiceEnum.ASSIGNED_CLIENT}/${clientId}`,
        method: "DELETE"
      }),
      invalidatesTags: (_, error) => (error ? [] : [ServiceEnum.CLIENTS])
    })
  })
});

export const {
  useGetStreetsQuery,
  useGetHousesQuery,
  useGetApartmentsQuery,
  useGetClientsByAddressQuery,
  useCreateClientMutation,
  useAssignedClientMutation,
  useDeleteClientMutation
} = Services;
