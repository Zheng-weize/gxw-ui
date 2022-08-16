<template>
  <div class="gxw-card" :style="width? {width: width + 'px'}:{}">
    <div class="gxw-card-img" :style="imgHeight? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="gxw-card-summary">
      {{summary}}
    </div>
    <div v-else class="gxw-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "gxw-card",
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ""
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
