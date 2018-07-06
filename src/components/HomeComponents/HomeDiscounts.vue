<template>
    <div class="discounts">
        <div class="a">
 <div class="discounts_content" v-for="(item,index) in discounts" :key="index">
            <div class="discounts_content_title">
              {{item.title}}
            </div>
            <div class="discounts_content_sale">
              {{item.sale}}
            </div>
            <div class="discounts_content_img">
            <img :src="item.url" alt="">
            </div>
       </div>
        </div>
      
    </div>
</template>

<script>
export default {
  data() {
    return {
      discounts: [
        {
          title: "今日优惠",
          sale: "天猫狂暑季大牌5折",
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0416/6598e842d3dfc7776f5c2336e7240a73.jpg?imageView2/2/w/120/h/120/interlace/1"
        },
        {
          title: "限时团购",
          sale: "BYW好价",
          url:
            "http://shihuo.hupucdn.com/groupon/201806/2915/11c847720be27a88cc290d16a4580b0f.jpg"
        },
        {
          title: "一键海淘",
          sale: "詹姆斯骑士球衣清仓",
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0314/86a2e20f9873b975847547d7da47bb20.jpg?imageView2/2/w/120/h/120/interlace/1"
        }
      ]
    };
  }
};
</script>

<style scoped>
.a {
  margin: 0.2rem auto;
}
.discounts_content {
  width: 31%;
  margin: 0.1rem 0.2rem 0.2rem 0.3rem;
  background-color: #fff;
  text-align: center;
  display: inline-block;
  font-size: 0.7rem;
  color: #606266;
}
.discounts_content img {
  width: 4rem;
}
.discounts_content_title,
.discounts_content_sale,
.discounts_content_img {
  margin: 0.5rem .2rem .5rem .2rem;

}
</style>
