const config = {

  app: {
    port: 3000
  },
  // 数据库配置
  db: {
    DATABASE: 'pieces_db',
    USERNAME: 'root',
    PASSWORD: 'swing4life',
    PORT: '3306',
    HOST: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
}

module.exports = config
