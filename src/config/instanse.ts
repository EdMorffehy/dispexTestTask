import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import baseURL from "./configurations";
import ServiceEnum from "../enums";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL
});

const instanceApi = createApi({
  reducerPath: "API",
  baseQuery,
  tagTypes: [ServiceEnum.CLIENTS],
  endpoints: () => ({})
});

export default instanceApi;
