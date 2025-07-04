import MsSql from "mssql";

const sqlConfig = {
  server: process.env.MSSQL_HOST,
  database: process.env.MSSQL_NAME,
  port: 1433,
  user: process.env.MSSQL_USERNAME,
  password: process.env.MSSQL_PASSWORD,
  connectionTimeout: 20000,
  requestTimeout: 20000,
  options: {
    appName: "corso-its",
    encrypt: false,
  },
};

const poolPromise = new MsSql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log(
      `Connected to MSSQL (${sqlConfig.server}) database name: ${sqlConfig.database}!`
    );

    return pool;
  })
  .catch((err) => {
    throw new ErrorWithStatus(`Database connection failed! Bad config: ${err}`);
  });

export default poolPromise;
