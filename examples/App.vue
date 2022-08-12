<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <Demo />
    <card imgSrc="img.png" summary="兼职java"></card>
    <br>
    <card imgSrc="img.png" summary="兼职javaxxx">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级</div>
          <div class="price">$299.00</div>
        </div>
      </template>
    </card>
    <br>
    <card imgSrc="img.png" :width="370" :imgHeight="90">
      你好的事实是事实ds
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">中级</div>
          <div class="price">$299.00</div>
        </div>
      </template>
    </card>
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
