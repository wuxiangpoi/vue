<template>
	<div class="app">
		<router-view class="content"></router-view>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
	  
    };
  },
  computed: mapGetters({
    
  }),
  components: {}
};
</script>

<style lang="less">
.app {
  height: 100%;
}
.content {
  margin-top: 60px;
}
</style>
