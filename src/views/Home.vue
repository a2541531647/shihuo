<template>
  <div class="home">
   <homeheader></homeheader>
   <headerswiper></headerswiper>
   <homecommodity></homecommodity>
   <homediscounts></homediscounts>
  </div>
</template>

<script>
import homeheader from "../components/HomeComponents/HomeHead";
import headerswiper from "../components/HomeComponents/HeaderSwiper";
import homecommodity from "../components/HomeComponents/HomeCommodity";
import homediscounts from "../components/HomeComponents/HomeDiscounts";

export default {
  name: "home",
  components: {
    homeheader,
    headerswiper,
    homecommodity,
    homediscounts
  }
};
</script>

<style scoped>
.home {
  margin-bottom: 3.5rem;
}
</style>

