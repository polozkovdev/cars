import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface ISettingsStore {
  city: number;
  highway: number;
  cost: number;
}

const DEFAULT_SETTINGS = {
  city: 0,
  highway: 0,
  cost: 0,
};

export class SettingsStore {
  settingsStore: ISettingsStore = DEFAULT_SETTINGS;

  constructor() {
    makeAutoObservable(this);
  }

  get getSettings(): ISettingsStore {
    return this.settingsStore;
  }

  setSettings(props: ISettingsStore) {
    this.settingsStore = props;
  }
}

export class CoreStore {
  settingsStore: SettingsStore;

  constructor() {
    this.settingsStore = new SettingsStore();
  }
}

export const coreStore = new CoreStore();

export const StoreContext = createContext(coreStore);
export const StoreProvider = StoreContext.Provider;
