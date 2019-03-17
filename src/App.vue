<template>
  <div id="app">
    <album v-if="isShow" :files="albumList" :index="current" :name="'image'" :close="() => isShow=false">
      <!-- 相册组件 -->
      <!-- name: 图片路径对应展示的字段  -->
      <!-- prefix: 前缀 -->
      <!-- albumList: 数据源 -->
      <!-- current: 当前页 -->
      <!-- close: 关闭的Function-->
    </album>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      albumList: [
        {
          "id": "410000197801293236",
          "author": "Frank Perez",
          "createTime": "2004-09-21 11:20:14",
          "image": "http://dummyimage.com/120x600",
          "title": "Lgjgvgpr Wkvwt Ilhbubh Lryliyjrzu Gmduoemzz"
        },
        {
          "id": "340000199411170514",
          "author": "Jessica Gonzalez",
          "createTime": "2007-03-03 13:11:41",
          "image": "http://dummyimage.com/120x240",
          "title": "Jkfjmdpil Bwozajvenk Pgbwdqd Wiscshedmx Ufdwfspph"
        },
        {
          "id": "310000197003311686",
          "author": "Christopher Lee",
          "createTime": "1986-10-06 02:49:13",
          "image": "http://dummyimage.com/160x600",
          "title": "Oqgx Gtlgvumy Pirfnnrbf"
        },
        {
          "id": "220000197708244848",
          "author": "Amy Miller",
          "createTime": "1973-10-19 23:39:15",
          "image": "http://dummyimage.com/120x240",
          "title": "Lfeq Zuyxsk Mboilomk Hehibkcxy Mnomfyrvv Yaxs"
        },
        {
          "id": "350000201311277471",
          "author": "Helen Gonzalez",
          "createTime": "1979-07-31 16:03:36",
          "image": "http://dummyimage.com/336x280",
          "title": "Nmujtk Vbdjem Mvinxjsw Nuaecylry"
        },
        {
          "id": "520000200808153754",
          "author": "Sharon Wilson",
          "createTime": "2000-11-15 16:13:43",
          "image": "http://dummyimage.com/120x90",
          "title": "Qqgkvhw Oghi Hjfwmnhovj Ligxftw"
        },
        {
          "id": "210000198901284625",
          "author": "Patricia Martinez",
          "createTime": "1998-08-14 09:53:08",
          "image": "http://dummyimage.com/180x150",
          "title": "Eijabinhm Wgmmrfuh Yie"
        },
        {
          "id": "360000197312254733",
          "author": "Sandra Rodriguez",
          "createTime": "1977-12-04 10:46:34",
          "image": "http://dummyimage.com/180x150",
          "title": "Lqplqn Czgj Llvlauxs Orttsjc"
        },
        {
          "id": "640000199804088221",
          "author": "Michelle Wilson",
          "createTime": "1998-06-24 00:49:45",
          "image": "http://dummyimage.com/120x90",
          "title": "Vmpvw Ydhs Xhtsmsuj Ldpnhwi Ncw Hlcr"
        },
        {
          "id": "420000199706138669",
          "author": "Linda Gonzalez",
          "createTime": "1977-09-26 03:13:36",
          "image": "http://dummyimage.com/468x60",
          "title": "Kwpncgyxu Bpm Angvjlo Gzcxfhno Emgrpfakv"
        },
        {
          "id": "220000197108034417",
          "author": "John Lewis",
          "createTime": "1990-10-15 03:50:31",
          "image": "http://dummyimage.com/468x60",
          "title": "Ngvfo Jwdkovby Dmnivgvxs Qojdisj Fdge Udixllj"
        },
        {
          "id": "360000199307145179",
          "author": "John Harris",
          "createTime": "1995-08-29 20:56:26",
          "image": "http://dummyimage.com/468x60",
          "title": "Fscw Bcrttiky Ialjd Eityjulst Fmpopfyh Ocrkrcgdv"
        }
      ],
      current: 0
    }
  },
  components: {
  }
}
</script>

<style>
</style>
