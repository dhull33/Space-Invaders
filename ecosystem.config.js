/* ======================================
 * So PM2 will work with Heroku
 * ==================================
 */
module.exports = {
  apps: [
    {
      name: 'idm automation',
      script: './bin/www',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
