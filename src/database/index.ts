import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.HOST,
      database:
        process.env.NODE_ENV === "test"
          ? process.env.DATABASE_TEST
          : defaultOptions.database,
    })
  );
};
