import { createConnection, getConnectionOptions } from 'typeorm'; 
import { Connection } from 'typeorm/connection/Connection';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test'? "./src/database/database.test.sqlite" : defaultOptions.database
        })
    )
}