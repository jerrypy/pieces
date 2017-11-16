import crypto from 'crypto';
import db from '../models/index';

// TODO: 这个函数user model也要用到，放到一个util里比较合适
function password(pass) {
  const hash = crypto.createHash('md5');
  hash.update(pass);
  return hash.digest('hex');
}

const login = async (ctx) => {
  const postData = ctx.request.body;
  const user = await db.user.findOne({
    where: {
      username: postData.username,
      password: password(postData.password),
    },
  });
  if (user !== null) {
    ctx.body = JSON.stringify({ status: 'ok' });
  } else {
    ctx.body = JSON.stringify({ status: 'failed' });
  }
};

const logout = (ctx) => {
  ctx.body = 'logout page';
};

module.exports = {
  login,
  logout,
};
