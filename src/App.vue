<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
html {
  font-size: 20px;
}
body {
  transform-origin: left top;
  background-size: 100% 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// 引入的样式

.title {
  position: absolute;
  display: inline-block;
  color: #6eddf1;
  background: #14418e;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;

  .title-4 {
    display: inline-block;
    padding: 5px 14px;
    background: radial-gradient(
      2.4rem 1rem ellipse,
      rgba(7, 9, 34, 0.8) 60%,
      rgb(21, 67, 145)
    );
  }
  .title-6 {
    display: inline-block;
    padding: 5px 14px;
    background: radial-gradient(
      3rem 0.9rem ellipse,
      rgba(7, 9, 34, 0.8) 60%,
      rgb(21, 67, 145)
    );
  }

  .title-8 {
    display: inline-block;
    padding: 5px 14px;
    background: radial-gradient(
      3.75rem 0.9rem ellipse,
      rgba(7, 9, 34, 0.8) 60%,
      rgb(21, 67, 145)
    );
  }

  .title-10 {
    display: inline-block;
    padding: 5px 14px;
    background: radial-gradient(
      4.75rem 0.9rem ellipse,
      rgba(7, 9, 34, 0.8) 60%,
      rgb(21, 67, 145)
    );
  }
}
.angle1 {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  left: 0;
  border-top: 1px solid #1c5ab3;
  border-left: 1px solid #1c5ab3;
}

.angle2 {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
  border-top: 1px solid #1c5ab3;
  border-right: 1px solid #1c5ab3;
}

.angle3 {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #1c5ab3;
  border-left: 1px solid #1c5ab3;
}

.angle4 {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid #1c5ab3;
  border-right: 1px solid #1c5ab3;
}
</style>
