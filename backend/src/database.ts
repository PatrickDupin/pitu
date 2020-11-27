import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:0000@localhost:3306');

export default sequelize;