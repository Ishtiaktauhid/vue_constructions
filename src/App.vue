<template>
  <nav class="site-nav">
    <div class="container">
      <div class="menu-bg-wrap">
        <div class="site-navigation">
          <a href="index.html" class="logo m-0 float-start">Constructions</a>

          <ul
            class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
          >
            <li class="active" >
              <router-link :to="'/home/'" class="btn btn-primary py-2 px-3"
                >Home
              </router-link>
            </li>
            <li>
              <router-link :to="'/properties/'">Properties</router-link>
            </li>
            <li>
              <router-link :to="'/service/'">Service</router-link>
            </li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
          <a
            href="#"
            class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3 my-5 py-5">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
