import { Sequelize } from 'sequelize';
import config from './config.js'
let oderInstall = null;
export const getOderSq = () => {
  async function init() {
    const sequelize = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle:30000
      }
    })
    const oder = sequelize.define('order', {
      uid: Sequelize.BIGINT,
      orderName: Sequelize.STRING(50),
      total:Sequelize.BIGINT
    })
    await oder.sync();
    return oder
  }
   
  return oderInstall ? oderInstall : oderInstall = init();
}

