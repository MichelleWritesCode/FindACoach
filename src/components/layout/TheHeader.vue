<template>
  <header>
    <h1><router-link to="/">Find a coach</router-link></h1>
    <nav>
      <router-link class="menuItem" to="/coaches">all coaches</router-link>
      <router-link class="menuItem" to="/requests">requests</router-link>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

a.router-link-active.router-link-exact-active.menuItem,
a:active,
a:hover {
  border-bottom: 3px solid white;
}

header {
  display: flex;
  flex-wrap: nowrap;
  text-align: right;
  justify-content: space-between;
  padding: 10px 60px;
  padding-left: 200px;
  background-color: rgb(25, 32, 65);
}

header .menuItem {
  display: inline;
  justify-content: center;
  margin: 10px;
  padding: 5px 15px;
  vertical-align: middle;
  color: white;
  background-color: goldenrod;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
}

nav {
  margin-top: 20px;
}
</style>
