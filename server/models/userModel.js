import db from '../db';

const userModel = {};

userModel.fetch = () => db.query('SELECT * FROM "user"');
// console.log(`Model error at ${__dirname} : ${err}`);

export default userModel;
