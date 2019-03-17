<!--qiu.bl-->
<style scoped>
  .photoview-container {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    z-index: 100001;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-drag: none;
  }
  .photoview-tools .button {
    padding-left: 28px;
    box-sizing: border-box;
    float: left;
    width: 135px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgba(0,0,0,.8);
    color: #fff;
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
  }
  .photoview-tools .return {
    background-repeat: no-repeat;
    background-image: url(//webmap1.bdimg.com/wolfman/static/poidetail/images/return-2x_ecd03df.png);
    background-size: 9px 16px;
    background-position: 30px 17px;
  }
  .photoview-tools .return:hover {
    color: #3284fb;
    background-repeat: no-repeat;
    background-image: url(//webmap0.bdimg.com/wolfman/static/poidetail/images/return-hover-2x_8095c72.png);
    background-size: 9px 16px;
    background-position: 30px 17px;
  }
  .photoview-tools{
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .photoview-window {
    position: fixed;
    top: 50%;
    width: 100%;
    height: 65%;
    -webkit-transform: translateY(-60%);
    -ms-transform: translateY(-60%);
    transform: translateY(-60%);
  }
  .photoview-window .prev-photo {
    position: absolute;
    height: 100%;
    width: 25%;
    left: 0;
    top: 0;
  }
  .photoview-window .arrow-container-left {
    width: 90px;
    height: 90px;
    position: absolute;
    border-radius: 50px;
    top: 41%;
    right: 10%;
    background-color: rgba(0,0,0,.9);
    cursor: pointer;
  }
  .photoview-window .arrow-left {
    width: 26px;
    height: 50px;
    position: relative;
    background-repeat: no-repeat;
    background-image: url(//webmap1.bdimg.com/wolfman/static/poidetail/images/view-arrow-2x_653a7ee.png);
    background-size: 116px 50px;
    top: 20px;
    left: 28px;
  }
  .photoview-window .next-photo {
    position: absolute;
    height: 100%;
    width: 25%;
    right: 0;
    top: 0;
  }
  .photoview-window .arrow-container-right {
    width: 90px;
    height: 90px;
    position: absolute;
    border-radius: 50px;
    top: 41%;
    left: 10%;
    background-color: rgba(0,0,0,.9);
    cursor: pointer;
  }
  .photoview-window .arrow-right {
    width: 26px;
    height: 50px;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url(//webmap1.bdimg.com/wolfman/static/poidetail/images/view-arrow-2x_653a7ee.png);
    background-size: 116px 50px;
    background-position: -60px;
    top: 20px;
    left: 37px;
  }
  .photoview-window .window-viewport {
    position: relative;
    margin: auto;
    height: 100%;
    width: 50%;
  }
  .photoview-window .window-viewport .picture-container {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .photoview-window .window-viewport .viewport {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .15s ease-in-out;
    transition: .15s ease-in-out;
    border: 3px solid #fff;
    border-radius: 5px;
    background: url(//webmap1.bdimg.com/wolfman/static/poidetail/images/loading_d0c0773.gif) no-repeat center center;
    background-size: 40px;
    background-color: darkgrey;
    -webkit-animation: move .25s;
    animation: move .25s;
  }
  .photoview-scroll {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    height: 116px;
    bottom: 0;
    background-color: rgba(0,0,0,.8);
  }
  .notices{
    position: absolute;
    display: inline-block;
    width: 250px;
    height: 100px;
    background: #000;
    z-index: 10000003;
    bottom: 10%;
    left: 50%;
    margin-left: -125px;
    border-radius: 4px;
  }
  .notices p {
    margin: 0 0;
    color: #FFF;
    text-align: center;
    line-height: 100px;
  }
</style>
<template>
  <div class="photoview-container">
    <div class="photoview-tools" @click="close">
      <div class="button return">返回</div>
    </div>
    <div class="photoview-window">
      <div class="prev-photo">
        <div class="arrow-container-left" @click="leftClk">
          <div class="arrow-left">
            <!-- 左边 -->
          </div>
        </div>
      </div>
      <div class="window-viewport">
        <div class="picture-container">
          <img :src="viewportUrl" alt="图片" class="viewport">
        </div>
      </div>
      <div class="next-photo">
        <div class="arrow-container-right" @click="rightClk">
          <div class="arrow-right">
            <!-- 左边 -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="current == 0 || current == files.length - 1" class="notices">
      <p>{{ message }}</p>
    </div>
    <!--<div class="photoview-scroll">胶片卷功能赞不提供</div>-->
  </div>
</template>
<script>
  export default {
    name: 'Album',
    components: {},
    props: {
      name: {
        type: String, // 要展示的图片字段名称
        required: true,
        default: ''
      },
      prefix: {
        type: String, // 前缀
        default: ''
      },
      files: {
        type: Array,
        default: () => []
      },
      index: {
        type: Number,
        default: 0
      },
      close: {
        type: Function,
        required: true,
        default: () => {}
      }
    },
    data() {
      return {
        viewportUrl: '', // 图片显示的地址
        current: 0 // 当前页
      }
    },
    computed: {
      message: {
        get: function() {
          if (this.current === 0) {
            return '当前为第一页'
          }
          if (this.current === this.files.length - 1) {
            return '当前为最后一页'
          }
        },
        set: function(v) { }
      }
    },
    watchs: {
      index(val) {
        this.current = val
      },
      name(val) {
        this.viewportUrl = this.prefix + this.files[Number(this.current)][this.name]
      },
      prefix(val) {
        this.viewportUrl = this.prefix + this.files[Number(this.current)][this.name]
      }
    },
    mounted() {
      this.current = this.index
      this.init()
    },
    methods: {
      init() {
        this.viewportUrl = this.prefix + this.files[Number(this.current)][this.name]
      },
      leftClk() {
        if (Number(this.current) > 0) {
          --this.current
          this.viewportUrl = this.prefix + this.files[Number(this.current)][this.name]
        }
      },
      rightClk() {
        if (Number(this.current) < (Number(this.files.length) - 1)) {
          ++this.current
          this.viewportUrl = this.prefix + this.files[Number(this.current)][this.name]
        }
      }
    }
  }
</script>
