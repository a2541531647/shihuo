<template>
  <div id="app" class="creafix">
    <div id="nav" >
      <div class="a" @mouseover="homeshow()" @mouseout="homehide()">
        <router-link to="/"><i class="on"><img :src="homeimg"  alt="#"></i>首页</router-link>
      </div>
      <div class="a" @mouseover="discountsimgshow()" @mouseout="discountsimghide()">
        <router-link to="/discounts"> <i class="on"><img :src="discountsimg" alt="#"></i> 优惠</router-link>
      </div>
      <div class="a" @mouseover="findshow()" @mouseout="findhide()">
        <router-link to="/find"><i class="on"><img :src="find" alt="#"></i>发现</router-link>
      </div>
      <div class="a" @mouseover="equipmentshow()" @mouseout="equipmenthide()">
        <router-link to="/equipment"><i class="on"><img :src="equipment" alt="#"></i>装备</router-link>
      </div>
      <div class="a" @mouseover="moreshow()" @mouseout="morehide()">
        <router-link to="/more"><i class="on"><img :src="more" alt="#"></i>更多</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html body {
  background-color: #f0f3f5;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.creafix::after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

#nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  vertical-align: bottom;
  padding-bottom: 0.1rem;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.51);
  text-align: center;
  background-color: #fff;
  margin-top: 0.2rem;
}

#nav a {
  color: #606266;
  font-size: 0.5rem;
}

#nav a:hover {
  color: #dd1712;
}

#nav .on {
  display: block;
  background-image: url("");
}

#nav .on img {
  width: 1.5rem;
  height: 1.5rem;
}

.swiper .mint-search {
  height: 3rem;
  width: 20rem;
}

.mint-search .mint-searchbar {
  background-color: rgba(255, 255, 255, 0);
}

.mint-searchbar .mint-searchbar-cancel {
  font-size: 0.5rem;
  padding: 0;
  margin: 0;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #ffff;
  font-weight: bold;
  margin-left: 0.5rem;
}

.swiper .el-carousel .el-carousel__indicators button {
  width: 1.5rem;
  height: 0.5rem;
}
</style>

<script>
import homeimg from "./image/home.png";
import homeimg2 from "./image/homeimg2.png";
import discountsimg from "./image/discounts.png";
import discountsimg2 from "./image/discounts2.png";
import find from "./image/find.png";
import find2 from "./image/find2.png";
import equipment from "./image/equipment.png";
import equipment2 from "./image/equipment2.png";
import more from "./image/more.png";
import more2 from "./image/more2.png";

export default {
  name: "App",
  data() {
    return {
      homeimg,
      homeimg2,
      discountsimg,
      discountsimg2,
      find,
      find2,
      equipment,
      equipment2,
      more,
      more2
    };
  },
  methods: {
    homeshow() {
      this.homeimg = this.homeimg2;
    },
    homehide() {
      this.homeimg = homeimg;
    },
    discountsimgshow() {
      this.discountsimg = this.discountsimg2;
    },
    discountsimghide() {
      this.discountsimg = discountsimg;
    },
    findshow() {
      this.find = this.find2;
    },
    findhide() {
      this.find = find;
    },
    equipmentshow() {
      this.equipment = this.equipment2;
    },
    equipmenthide() {
      this.equipment = equipment;
    },
    moreshow() {
      this.more = this.more2;
    },
    morehide() {
      this.more = more;
    }
  }
};
</script>