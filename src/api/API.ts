import { IData, IItemById } from "@app/types/types";
import axios from "axios";

const API = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
  },
});

const fetchItems = async (search: string, page: number) => {
  const response: { data: IData } = await API.post("/inmuebles", {
    search,
    page,
  });

  return response.data;
};

const getItemById = async (id: number) => {
  const response: { data: { data: IItemById[] } } = await API.get(
    `/inmueble/${id}`
  );
  return response.data;
};

export { fetchItems, getItemById };
