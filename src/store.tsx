import { action, makeAutoObservable } from "mobx";
import { createContext } from "react";
import dbSqLite from "src/helpers/dbSQLite";
import {
  DEFAULT_SETTINGS,
  DEFAULT_TRIP,
  LOCALE,
  SETTINGS,
  TRIP_STEPS,
} from "src/assets/constants";

export interface IConfig {
  [SETTINGS.city]?: number;
  [SETTINGS.highway]?: number;
  [SETTINGS.cost]?: number;
  [SETTINGS.locale]?: LOCALE;
}

export interface ISettings {
  city: number;
  highway: number;
  cost: number;
  locale: string;
}

export class SettingsStore {
  settings: ISettings = DEFAULT_SETTINGS;
  settingsLoaded = false;

  constructor() {
    makeAutoObservable(this);
    this.initDB();
  }

  initDB() {
    dbSqLite.createTables().then(
      action("fetchSuccess", () => {
        this.getSettings();
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  getSettings() {
    dbSqLite.getSettingsDB().then(
      action("fetchSuccess", (settings) => {
        console.log("settings", settings);
        this.settings = settings.length ? settings[0] : DEFAULT_SETTINGS;
        this.settingsLoaded = true;
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  async updateSettings(settings: ISettings) {
    console.log("updateSettings", settings);
    dbSqLite.updateSettings(settings).then(
      action("fetchSuccess", (settings) => {
        console.log("fetchSuccess settings", settings);
        this.settings = settings;
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  get getSet() {
    console.log("this.settings", this.settings);
    return this.settings;
  }
}

export class TripStore {
  trip = TRIP_STEPS.start;

  constructor() {
    makeAutoObservable(this);
    this.initDB();
  }

  initDB() {
    dbSqLite.createTables().then(
      action("fetchSuccess", () => {
        this.getTrip();
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  getTrip() {
    dbSqLite.getTripDB().then(
      action("fetchSuccess", (trip) => {
        this.trip = trip.length ? trip[0] : TRIP_STEPS.start;
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  async updateTrip(trip: TRIP_STEPS) {
    console.log("updateTrip", trip);
    dbSqLite.updateTrip(trip).then(
      action("fetchSuccess", (trip) => {
        console.log("fetchSuccess settings", trip);
        this.trip = trip;
      }),
      action("fetchError", (error) => {
        console.log(error);
      })
    );
  }

  get getTr() {
    console.log("this.trip", this.trip);
    return this.trip;
  }
}

export class CoreStore {
  settings: SettingsStore;
  trip: TripStore;

  constructor() {
    this.settings = new SettingsStore();
    this.trip = new TripStore();
  }
}

export const coreStore = new CoreStore();

export const StoreContext = createContext(coreStore);
export const StoreProvider = StoreContext.Provider;
