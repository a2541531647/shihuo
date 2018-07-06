<template>
  <div class="home_header">
    <mt-swipe :auto="2500" class="header_carousel" :showIndicators="false" :speed="1500">
      <mt-swipe-item class="header_carousel_discount" v-for="(item,index) in xinxi" :key="index">
        <div class="warp_img">
          <img :src="item.img" alt="#">
        </div>
        <div class="chanpinx">
          <div class="chanpinming">{{item.pai}}</div>
          <div>
            <span>{{item.jia}}</span>
            <span class="zhekou">{{item.zhe}}</span>
            <span class="yuanjia">{{item.yuanjie}}</span>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="oppen">
      打开
    </div>
    <div class="guan">
      x                     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xinxi: [
        {
          img:
            "http://shihuo.hupucdn.com/def/20180614/05b273a914fe05dbd2cedb78090940921528973233.jpg",
          pai: "李宁 驭帅12",
          jia: "￥259",
          zhe: "5.5折",
          yuanjie: "469"
        },

        {
          img:
            "http://shihuo.hupucdn.com/def/20180614/05b273a914fe05dbd2cedb78090940921528973233.jpg",
          pai: "安踏 驭帅12",
          jia: "￥259",
          zhe: "5.5折",
          yuanjie: "469"
        },

        {
          img:
            "http://shihuo.hupucdn.com/def/20180614/05b273a914fe05dbd2cedb78090940921528973233.jpg",
          pai: "阿迪达斯 驭帅12",
          jia: "￥259",
          zhe: "5.5折",
          yuanjie: "469"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home_header {
  position: relative;
}

.header_carousel {
  width: 100%;
  height: 3rem;
  background-color: #000;
  color: #fff;
  line-height: 1.5;
  position: relative;
}

.header_carousel_discount {
  padding: 0.3rem 0 0 0.7rem;
  vertical-align: middle;
}

.header_carousel_discount img {
  display: inline-block;
  width: 2rem;
  border-radius: 0.2rem;
}

.header_carousel_discount .warp_img {
  display: inline-block;
}

.chanpinx {
  display: inline-block;
  font-size: 0.5rem;
  margin-left: 0.5rem;
}

.zhekou {
  background-color: #dd1712;
  border-radius: 0.1rem;
  margin: 0.2rem;
}

.yuanjia {
  text-decoration: line-through;
  color: #5e5e5e;
}

.oppen {
  font-size: 0.5rem;
  position: absolute;
  right: 2rem;
  top: 0.5rem;
  color: #fff;
  background-color: #dd1712;
  border-radius: 0.1rem;
  padding: 0.3rem;
}

.guan {
  position: absolute;
  right: 0.5rem;
  top: 0;
  color: #fff;
  font-size: 1rem;
}

</style>