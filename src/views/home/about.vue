<!-- home -->
<template>
  <div class="about-container">
    <div class="warpper">
      <div class="list">
        <div class="demo-home__title">VUE H5 - 高先生的 猫</div>
        <van-button type="warning" size="small">这是一个按需引入的 vant 组件</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wechat: `${this.$cdn}/wx/640.gif`
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: '高先生的猫' }
      getUserInfo(params)
        .then(() => {})
        .catch(() => {})
    }
  }
}
</script>
<style lang="scss">
.about-container {
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
  .demo-home__title {
    font-size: 30px;
    text-align: center;
  }
}
</style>
