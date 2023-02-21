import * as SQLite from "expo-sqlite";
import { ISettings } from "src/store";
import { ITrip, TRIP_STEPS } from "src/assets/constants";

export class SQLiteDB {
  db: SQLite.WebSQLDatabase;

  constructor() {
    this.db = SQLite.openDatabase("db.db");
  }

  createTables = async () => {
    return Promise.all([this.createSettingsTable(), this.createTripTable()]);
  };

  createTripTable = async () => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists trip (id INTEGER primary key not null, name VARCHAR(255), trip INTEGER);"
          );
        },
        (error) => {
          reject(error.message);
        },
        () => {
          resolve(true);
        }
      );
    });
  };

  getTripDB = async (): Promise<TRIP_STEPS[]> => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            "SELECT * FROM trip",
            [],
            (_, { rows }: { rows: SQLite.SQLResultSetRowList }) => {
              resolve(
                rows._array.reverse().map((item) => item) as TRIP_STEPS[]
              );
            }
          );
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  };

  updateTrip = async (trip: TRIP_STEPS): Promise<TRIP_STEPS> => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          return tx.executeSql("UPDATE trip SET trip = ?", [trip], () => {
            resolve(trip);
          });
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  };

  createSettingsTable = async () => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists settings (id INTEGER primary key not null, name VARCHAR(255), city INTEGER, highway INTEGER, cost INTEGER, locale TEXT);"
          );
        },
        (error) => {
          reject(error.message);
        },
        () => {
          resolve(true);
        }
      );
    });
  };

  updateSettings = async (settings: ISettings): Promise<ISettings> => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          return tx.executeSql(
            "UPDATE settings SET city = ?, highway = ? , cost = ?, locale = ?",
            [settings.city, settings.highway, settings.cost, settings.locale],
            () => {
              resolve(settings);
            }
          );
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  };

  getSettingsDB = async (): Promise<ISettings[]> => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            "SELECT * FROM settings",
            [],
            (_, { rows }: { rows: SQLite.SQLResultSetRowList }) => {
              resolve(rows._array.reverse().map((item) => item) as ISettings[]);
            }
          );
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  };
}

const dbSqLite = new SQLiteDB();

export default dbSqLite;
