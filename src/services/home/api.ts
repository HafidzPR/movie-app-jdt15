import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getTrending = async (page: number) => {
  try {
    const response = await axiosWithConfig.get(
      `trending/all/day?language=en-US&page=${page}`
    );

    return response.data as ResponseData | undefined;
  } catch (error) {}
};
