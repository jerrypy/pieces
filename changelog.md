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
1. 更换ant design，ant desing文档示例是用typescript写的。。很坑。。编译之后13.4M
2. 用react框架的时候，如何优雅地写css?
3. 每次都要手动重启，是时候研究一下webpack-dev-server了