<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h1 class="demo-home__title">
        <span> VUE H5模板 -高先生的猫</span>
      </h1>
    </div>
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Vue-cli4',
        '配置多环境变量',
        'VantUI 组件按需加载',
        ' rem 适配方案',
        ' VM 适配方案',
        'Sass 全局样式',
        'Webpack 4',
        'Vuex 状态管理',
        'Axios 封装及接口管理',
        'Vue-router',
        'day-js',
        'lodash',
        'g-zip',
        '全局filters',
        '全局mixins',
        'directives 自定义指令',
        'vant初始化tab菜单',
        'Webpack 4 vue.config.js 基础配置',
        '配置 proxy 跨域',
        '配置 alias 别名',
        '配置 打包分析',
        '配置 externals 引入 cdn 资源',
        '生产 去掉 console.log',
        'splitChunks 单独打包第三方模块',
        '添加 IE 兼容',
        'Eslint+Pettier 统一开发规范'
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 20px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
