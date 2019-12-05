<template>
  <div>
    <div id="nav">
      <h1>NO Header</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <slot />
    <h1>NO Footer</h1>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
