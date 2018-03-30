<template>
	<div class="app">
    <header class="app-header">
      <v-header></v-header>
    </header>
    <div class="app-content">
            {{userData.name}}
		  <router-view class="content"></router-view>
    </div>
    <div class="app-footer"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapGetters({
    userData: "userData"
  }),
  created() {
    this.fetch(this.api.auth + "getUserSrc", {}, (res) => {
      this.dispatch("login", res.content);
    });
  },
  methods: {},
  components: {}
};
</script>

<style lang="less">
.app {
  height: 100%;
  .app-header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
  .app-content {
    background: #fff;
    margin: 80px auto 15px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .app-footer {
    background: #fff;
    color: #666;
  }
}
</style>
