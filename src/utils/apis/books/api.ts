import { Response, Request, PayloadPagination } from "../../types/api";

export const getBooks = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/books?${query}` : "/books";

    const response = await fetch(
      "https://hells-kitchen.onrender.com/api/v1" + url
    );

    return response.json();
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
