import { Sequelize } from 'sequelize';
import config from './config.js'
let userInstall = null;
export const getUserSq = () => {
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
    const user = sequelize.define('kaka', {
      username: Sequelize.STRING(50),
      password:Sequelize.STRING(50),
    })
    await user.sync();
    return user
  }
   
  return userInstall ? userInstall : userInstall = init();
}

