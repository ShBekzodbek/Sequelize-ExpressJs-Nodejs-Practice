module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'bekzodbek01',
    DB: "crud",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};