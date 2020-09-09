const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync')

/*config low db*/
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: [],product: []})
  .write()

  module.exports = db