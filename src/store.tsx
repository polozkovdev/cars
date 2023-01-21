import { action, makeAutoObservable } from "mobx";
import { createContext } from "react";
import dbSqLite from "src/helpers/dbSQLite";
import { DEFAULT_SETTINGS } from "src/assets/constants";

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

  setSettings(props: ISettings) {
    this.settings = props;
  }
}

export class CoreStore {
  settings: SettingsStore;

  constructor() {
    this.settings = new SettingsStore();
  }
}

export const coreStore = new CoreStore();

export const StoreContext = createContext(coreStore);
export const StoreProvider = StoreContext.Provider;
