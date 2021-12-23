import { getForecastForCity } from "@/services/weather/forecast";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getForecastForCity("Sofia", process.env.WEATHER_KEY);
  res.status(200).json({ data });
}
