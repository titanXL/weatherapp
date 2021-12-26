import { getForecastForSofia } from "@/services/weather/forecast";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getForecastForSofia();
  res.status(200).json({ data });
}
