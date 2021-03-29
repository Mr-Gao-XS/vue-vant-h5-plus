# vue-h5-template

基于 vue-cli3.0+webpack 4+vant ui + sass+ rem 适配方案+axios 封装，构建手机端模板脚手架

#### 介绍

1.  vuecli3.0
2.  多环境开发
3.  axios 封装
4.  rem 适配方案
5.  生产环境 cdn 优化首屏加速
6.  babel 低版本浏览器兼容
7.  环境发布脚本

#### 多环境

基本思路不变在 src 的文件里新建 config 根据不同的环境去引用不同的配置文件，不同的是在根目录下有三个设置环境变量的文件这
里可以参考 vue-admin-template

#### rem 适配方案

还是那句话，用 vw 还是用 rem，这是个问题？

选用 rem 的原因是因为 vant 直接给到了这个适配方案，个人也比较喜欢这个方案

[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)

#### 总结

因为项目刚刚构建起来，后面还会持续更新，实际使用过程中一定还有很多问题，如果文章中有错误希望能够被指正，一起成长
