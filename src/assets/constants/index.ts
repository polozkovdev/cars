export const HELP_LIST = [
  "Enter the consumption of your car per 100 km",
  "Enter the cost of 1 liter of fuel",
  "Start your journey",
  "The app will calculate the distance using GPS (including engine idle)",
  "Upon arrival at the destination, press Finish button for the final result",
  "Track your trip history and total spend",
  "Share the cost if you are traveling with friends",
];

export enum SETTINGS {
  city = "city",
  highway = "highway",
  cost = "cost",
  locale = "locale",
}

export const DEFAULT_SETTINGS = {
  [SETTINGS.city]: 0,
  [SETTINGS.highway]: 0,
  [SETTINGS.cost]: 0,
  [SETTINGS.locale]: "EU",
};

export enum TRIP_STEPS {
  start,
  continue,
  finish,
  result,
}

export interface ITrip {
  trip: TRIP_STEPS;
}

export const DEFAULT_TRIP = {
  trip: TRIP_STEPS.start,
};
