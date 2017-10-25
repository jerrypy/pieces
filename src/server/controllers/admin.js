import db from '../models/index';
import crypto from 'crypto';

function password(pass) {
    const hash = crypto.createHash('md5');
    hash.update(pass);
    return hash.digest('hex');
}

const login = async (ctx, next) => {
    if (ctx.method == 'GET') {
        await ctx.render('index.html');
    } else {
        let postData = ctx.request.body;
        let user = await db['user'].findOne({
            where: {
                username: postData['username'],
                password: password(postData['password'])
            }
        });
        if (user !== null) {
            ctx.body = JSON.stringify(
                {status: 'ok'}
            )
        } else {
            ctx.body = JSON.stringify(
                {status: 'failed'}
            )
        }
        
    }
};

const logout = (ctx, next) => {
    ctx.body = 'logout page';
};

module.exports = {
    login,
    logout
}
