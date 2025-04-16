import { Dialect, Sequelize } from 'sequelize';
import { initItemModel } from './models/item.model';

const initDb = async () => {
    const config = {
        type: (process.env.DATABASE_TYPE as Dialect) ?? 'mysql',
        name: process.env.DATABASE_NAME ?? 'express',
        host: process.env.DATABASE_HOST ?? 'localhost',
        port: parseInt(process.env.DATABASE_PORT ?? '3306', 10),
        user: process.env.DATABASE_USER ?? 'root',
        password: process.env.DATABASE_PASSWORD ?? '',
    };

    const sequelize = new Sequelize(config.name, config.user, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.type,
    });

    try {
        await sequelize.authenticate();
        console.log('Database connection established.');
    } catch (error: any) {
        console.error('Failed to connect to database. Error: ', error);
    }

    initItemModel(sequelize);
};

export { initDb };
