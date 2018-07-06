<template>
    <div class="swiper">
      <div class="creafix sou">
         <div class="left">
         <mt-search placeholder="搜索"></mt-search>
       </div>
       <div class="right">
         <i class="el-icon-goods"></i>
       </div>
      </div>
 <el-carousel height="11.5rem" class="swiper_img">
      <el-carousel-item v-for="(item,index) in swiper" :key="index">
        <a href=""><img :src="item.url" alt=""></a>
      </el-carousel-item>
    </el-carousel>
   
</div>
  
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        {
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0417/60b333eb12391ea9f5ca7cfb79de037d.jpg?imageView2/2/w/750/h/380/interlace/1"
        },
        {
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0417/944feb07af09428622c6962f7d66a5b6.jpg?imageView2/2/w/750/h/380/interlace/1"
        },
        {
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0515/dcf008dc54a554adb3522e05735a697c.jpg?imageView2/2/w/750/h/380/interlace/1"
        },
        {
          url:
            "http://shihuo.hupucdn.com/appHome/201807/0520/fe59db4d9d1162cc1ae158a99ba40c60.jpg?imageView2/2/w/750/h/380/interlace/1"
        },
        {
          url:
            "http://shihuo.hupucdn.com/appHome/201806/2917/25e8fad2b1d2ab2f2beb924a04785a77.jpg?imageView2/2/w/750/h/380/interlace/1"
        }
      ]
    };
  }
};
</script>

<style scoped>
.swiper {
  position: relative;
  line-height: 3rem;
}

.swiper .left {
  float: left;
}

.swiper .right {
  float: right;
}

.el-icon-goods {
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
}

.sou {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100000;
}

.swiper_img img {
  width: 100%;
  height: 11.5rem;
}
.swiper_img{
  height: 11.5rem;
}
</style>


