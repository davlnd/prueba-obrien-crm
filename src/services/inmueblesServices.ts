import { fetchItems, getItemById } from "@app/api/API";
import { IData, IItemById } from "@app/types/types";
import { useCallback, useEffect, useState } from "react";

const useItems = (search: string, page: number) => {
  const [data, setState] = useState<IData | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetchItems(search, page);
    setState(response);
    setLoading(false);
  }, [page, search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading };
};

const useGetItemById = (id: number) => {
  const [data, setState] = useState<{ data: IItemById[] }>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getItemById(id);
      setState(response);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return { data, isLoading };
};

export { useItems, useGetItemById };
