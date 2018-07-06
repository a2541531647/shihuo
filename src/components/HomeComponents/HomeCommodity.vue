<template>
    <div class="commodity">
        <div class="commodity_synopsis clearfix" v-for="(item,index) in commodity" :key="index">
            <div class="commodity_synopsis_left">
                 <div class="commodity_synopsis_jian">
                   {{item.title}}
                 </div>
                 <div class="commodity_synopsis_you">
                     {{item.style}}
                 </div>
            </div>
            <div class="commodity_synopsis_right clearfix">
                  <img :src="item.url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      commodity: [
        {
          title: "篮球",
          style: "纯白系列",
          url:
            "http://shihuo.hupucdn.com/def/20171003/fb81a20dfc722adedbc5fe9fa5e781621507024902.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        },
        {
          title: "跑步",
          style: "女王节秒杀",
          url:
            "http://shihuo.hupucdn.com/def/20171006/c3a949f38553dc10f44bac5dd0f602651507291579.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        },
        {
          title: "健身",
          style: "布瑞特装备秒杀",
          url:
            "http://shihuo.hupucdn.com/def/20170915/0446a5d97bf800d5322341aab554035d1505460763.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        },
        {
          title: "足球",
          style: "真假对比",
          url:
            "http://shihuo.hupucdn.com/def/20170913/5dc29f834528ddfaaf2c6e85769aa5451505294878.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        },
        {
          title: "潮流",
          style: "78元短袖秒杀",
          url:
            "http://shihuo.hupucdn.com/def/20180614/0eaec35ad7efad2120c81df788e36d8a1528945874.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        },
        {
          title: "数码",
          style: "米兔卡片学习机",
          url:
            "http://shihuo.hupucdn.com/def/20180108/d46c35eb43ed513783e8db72e97e06a71515391268.jpg?imageView2/0/w/160/h/160/interlace/1%7cimageMogr2/format/jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.commodity {
  margin-top: 0.5rem;
  font-size: 0;
}

.commodity_synopsis {
  width: 50%;
  display: inline-block;
  background-color: #fff;
  border-left: none;
}

.commodity_synopsis_left {
  float: left;
  padding: 1rem;
}
.commodity_synopsis_right {
  float: right;
  padding: 0.9rem;
}
.commodity_synopsis_right img {
  width: 2.5rem;
  float: right;
}

.commodity_synopsis_jian {
  font-size: 1rem;
  font-weight: bolder;
  color: #303133;
}

.commodity_synopsis_you {
  font-size: 0.5rem;
  color: #909399;
}

</style>
