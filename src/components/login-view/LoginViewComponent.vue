<template>
  <div>
    <van-row gutter="20">
      <van-col span="8" offset="8">
        <van-field v-model="name" label="用户名" placeholder="请输入用户名" />
      </van-col>
    </van-row>
    <van-row gutter="20">
      <van-col span="8" offset="8">
        <van-field v-model="password" label="密码" placeholder="请输入密码" />
      </van-col>
    </van-row>
    <van-row gutter="20">
      <van-col span="8" offset="8">
        <van-button type="primary">登录</van-button>
        <van-button type="primary">注册</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  }
}
</script>
<style>

</style>
