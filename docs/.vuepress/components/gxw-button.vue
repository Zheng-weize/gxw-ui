<template>
  <button class="gxw-button" :class="getClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "gxw-button",
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed:{
    getClass(){
      let type = '';
      let size = '';
      if (this.type == 'default'){
        type = 'gxw-btn-' + this.type;
      }
      if (this.size == 'normal' || this.size == 'small' || this.size == 'large'){
        size = 'gxw-btn-' + this.size;
      }
      let str = type + ' ' + size;
      return str
    }
  }
}
</script>

<style scoped lang="scss">
@import "css/button";
</style>
