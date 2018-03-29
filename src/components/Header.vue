<template>
<header class="wrapper-header">
  <div class="wrapper-header-nav">
<div class="wrapper-header-nav-list">
    <Menu mode="horizontal" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
    </Menu>
  </div>
  </div>
  
  </header>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapGetters({}),
  methods: {}
};
</script>

<style lang="less">
.wrapper-header {
  position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
.wrapper-header-nav {
  width: 95%;
  height: 65px;
  margin: 0 auto;
}
.wrapper-header-nav-list {
  float: right;
  height: inherit;
  .ivu-menu {
    height: 65px;
    line-height: 65px;
    &::after {
      background: none;
    }
  }
}
</style>
