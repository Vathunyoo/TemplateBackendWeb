import userModel from '../models/userModel';

const userController = {};

userController.fetch = async (req, res, next) => {
  const fetchResult = await userModel.fetch();
  res.status(200).send(fetchResult);
};

export default userController;
