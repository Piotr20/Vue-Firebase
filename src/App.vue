<template>
  <header id="header-component">
    <img src="./assets/images/app-logo.png" alt="" />
  </header>
  <nav id="nav">
    <router-link to="/">
      <img src="./assets/images/Icons/home.png" alt="Home icon" />
    </router-link>
    <router-link to="/search">
      <img src="./assets/images/Icons/search.png" alt="Search icon" />
    </router-link>
    <router-link to="/add">
      <img src="./assets/images/Icons/plus.png" alt="Plus icon" />
    </router-link>
    <router-link to="/">
      <img src="./assets/images/Icons/bookmark.png" alt="Bookmark icon" />
    </router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 8vh 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#header-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background-color: #070613;
  border-bottom: #2c3e50 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70%;
  }
}
body {
  background-color: #070613;
}

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #070613;
  border-top: #2c3e50 2px solid;
  a {
    text-decoration: none;
    padding: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &.router-link-exact-active {
      img {
        filter: brightness(300%);
      }
      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 50%;
        bottom: -40%;
        left: 50%;
        border-radius: 50%;
        transform: translateX(-50%);
        background-color: #2c2670;
        filter: blur(12px);
      }
    }
    img {
      width: 32px;
      transition: all 0.3s ease;
    }
  }
}
</style>
