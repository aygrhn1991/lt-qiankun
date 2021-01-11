<template>
  <div id="app">
    <div class="top">LOGO-vueapp</div>
    <div class="left">
      <div>
        <router-link to="/page1">vueapp-page1</router-link>
      </div>
      <div>
        <router-link to="/page2">vueapp-page2</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.top {
  background: #ccc;
  font-size: 30px;
}

.left {
  float: left;
  background: #ddd;
  width: 200px;
  text-align: center;
}

.content {
  background: #eee;
  margin-left: 200px;
}
</style>