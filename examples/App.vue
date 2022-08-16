<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <gxw-card imgSrc="img.png" summary="兼职java"></gxw-card>
    <br>
    <gxw-button type="default" size="small">你好</gxw-button>
    <gxw-button type="default" size="normal">你是谁</gxw-button>
    <gxw-button type="default" size="large">你是谁</gxw-button>
    <gxw-button type="000" size="large1">你是谁</gxw-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #9199A1;
  margin-bottom: 8px;
}
.price{
  color: #f01414;
}

.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
