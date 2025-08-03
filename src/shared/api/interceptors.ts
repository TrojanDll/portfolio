import axios, { type CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: "https://6853ea20a2a37a1d6f4a6574.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosClassic = axios.create(options);
