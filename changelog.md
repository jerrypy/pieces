2017.10.20
=====

1. 跟着网上的一些教程，写了个简单的hello world的例子；
2. router使用koa-router，模板引擎使用ejs；
3. koa-ejs的用法layout的配置不是很清楚，看文档貌似没有koa-views好用？
4. 还是需要了解一下async/await的用法，以及koa2返回的ctx,next的含义。


2017.10.21
=====

1. 使用react的话，可以不使用ejs了，重构了一下项目结构；
2. nodejs的导入没有python的灵活，需要用相对路径来实现，没有python3按模块搜索的概念？
3. koa-router可以设置prefix，有点相当于flask的blueprint的prefix；
4. `sudo npm install -g cnpm --registry=https://registry.npm.taobao.org` 用了cnpm，不然每次都得加--registry


2017.10.23
====
1. 加入了babel和webpack，preset用的es2015，可以正常运行;
2. 碰到一个`module.js Cannot find module 'source-map-support'`的问题，居然要`rm -rf node_modules; npm install`来解决，这是为什么。。。npm老出问题？
3. 使用element-react 和 element-theme-default需要在webpack config里设置css loader, style loader和url loader（这是个啥？）
4. 目前bundle.js大小为7.5M（不加css为7M），怎么缩小？怎么把css和js分开来？
5. ES6 语法下，类的每个成员函数在执行时的 this 并不是和类实例自动绑定的

2017.10.25
====
1. sequelize最基本的关系终于搞清楚了，user和post是一对多，post和tag是多对多关系
2. bodyparser一定要在route之前添加进中间件栈！ 为什么？
3. 用的fetch api来提交请求
4. 学习react-router用法，前端路由控制
5. 使用了React-router-dom v4的BrowerRouter来进行前端路由。对前后端路由的区别有了一定的了解：前端路由就是不发起请求，通过url的变换了改变前端组件的渲染；而后端路由在这里完全只取一个api区分作用，如果用上了graphQL，是不是一个api就够了？

2017.10.26
====
1. 更换ant design，~~ant desing文档示例是用typescript写的  很坑~~。。编译之后13.4M
2. 用react框架的时候，如何优雅地写css?
3. 每次都要手动重启，是时候研究一下webpack-dev-server了
4. 目前login发送请求的逻辑是放在是LoginForm这个Component的模块里的，不知道这样是否合适？开始学习Flux(Redux)

2017.10.27
====
1. 跟着《深入浅出React和Redux》来学习Flux的概念，这本书讲的不错，对于我这种初学者来说还是比较通俗易懂的，看到了第四章利用react-redux完成了一个最基本的todo，一些概念还是模棱两可，所有打算从零开始自己实现一个，不一行一行地写代码很难理解，所以博客的进度需要暂缓；
2. 跟着官方文档把babel, webpack仔细看了一下，研究了webpack的一些常用plugi，用上了webpack-dev-server。 目前的每次更改浏览器会刷新，这样react之前的所有状态就没有了，有解决方法就是用react-hot-loader，但是这个方法要修改app的代码，暂时不考虑，待研究一下如何在生产环境中使用；

2017.11.2
====
1. ant design文档用的是一个还在stage 2的提案，[class properties](https://babeljs.io/docs/plugins/transform-class-properties/)，babel添加这个plugin就可以使用了；

2017.11.10
====
1. 终于把《深入浅出React和Redux》看完了（优化和扩展、动画没有细看），项目结构又改了一遍，用上了react-redux；
2. 发现一个问题：后端json过来的字段，前端是要严格遵守的，前后端分离接口文档还是要清楚；

2017.11.13
====
1. 用上了react-router-v4，遇到了很多问题：1.完全不知道react-router-redux是干嘛的，所以没用它；2. home和about页面都用到了nav，切换的时候怎么可以让nav不重新render呢？ 每次切换到home都会发起获取所有post的请求，有办法优化吗？
2. nav提出来放在routes最上层，这样切换页面就不会造成nav重新render了；

2017.11.14
====
1. react-router的route、redirect等，不是一定要放在router里，可以放在任何地方；
2. 加入了登录和post内容的页面，post内容的state还需要设计；
3. eslint不能识别class property特性，加入了plugin还是报错，不知道怎么改；

2017.11.15
====
1. 开始增加后端db操作的controller，sequelize findAll返回的是meta数据，有很多额外字段，需要posts.map(post => post.toJSON()) 才能获取到原始数据；
2. findAll include db.tag的时候，tag里会带有PostTag这个关联表的数据，如何不返回这个呢？
3. sequelize timestamp返回的都是datetime的对象；

2017.11.16
====
1. about其实也是post的一种，所以没有必要用一个单独的页面，按post的逻辑实现即可；
2. connect的component 需要外层加上withRouter ，不然不能获取到match这些Props，这个withRouter起了什么作用？

2017.11.18
====
1. mapStateToProps中获取到的state和redux-thunk中action获取的getState 都是直接获得的全局的state，不是reducer分配之后的，这应该为操作其它模块的state提供了可能；
2. postContent在store中的存储逻辑仍需要设计；