
import { getConnectionManager } from "typeorm";

if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL.indexOf("sslmode=require") === -1) {
  process.env.DATABASE_URL += "?sslmode=require";
}

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
    ssl: process.env.NODE_ENV === 'production'
  });
  await connection.connect();
  return connection;
}


// import pg from "pg";

// const { Pool } = pg;

// const dbConfig = {
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "123456",
//   database: "repoprovas",
// };

// url: 'postgres://postgres:123456@localhost:5432/repoprovas'

// const connection = new Pool(dbConfig);

// export default connection;