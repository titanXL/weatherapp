import api from "@/utils/api";

export const getForecastForCity = async (city: string): Promise<unknown> => {
  try {
    const response = await api.get(`/forecast`, {
      params: {
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    // Handle Error
    console.error(error);
  }
};
