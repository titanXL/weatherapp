import {
  getDefaultLocation,
  getForecastForCity,
  getForecastForDefaultLocation,
} from "../forecast";
import { ForecastData } from "../types";

jest.mock("../forecast", () => ({
  getDefaultLocation: jest.fn().mockReturnValue("Test"),
  getForecastForCity: jest.fn().mockReturnValue({
    city: "Test",
    country: "Test",
    temp: 1,
    icon: "01d",
    description: "test",
    details: {
      "04/01": {
        temp_max: 2,
        temp_min: 0,
        icon: "01d",
      },
    },
    date: Date.now().toLocaleString(),
  } as ForecastData["forecast"]),
}));

describe("forecast service", () => {
  test("get forecast for location", async () => {
    const forecast = await getForecastForCity("Test");
    expect(getForecastForCity).toBeCalledWith("Test");
    expect(forecast).toBeDefined();
  });
});

export {};
