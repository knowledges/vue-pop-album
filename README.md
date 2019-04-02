# vue-pop-album
> Photo pop-up layer
## Build Setup
```bash
# Clone project
git clone https://github.com/knowledges/ManagementMaster.git

# Install dependencies
npm install vue-pop-album --save

# main.js import
import Album from 'vue-pop-album'
Vue.use(Album, {})
```
## params
> 
```bash
#-----------------------------------------------
|    参数   |           描述                  |
-----------------------------------------------
| name      | 图片对象中展示的字段名称        |
| prefix    | url 前缀，如果没有就空          | 
| albumList | 数据源                          | 
| current   | 从第几个开始展示                |  
| close     | 关闭的FUNCTION                  | 
-----------------------------------------------
 <album v-if="isShow" :files="albumList" :index="current" :name="'image'" :close="() => isShow=false">
      <!-- 相册组件 -->
      <!-- name: 图片路径对应展示的字段  -->
      <!-- prefix: 前缀 -->
      <!-- albumList: 数据源 -->
      <!-- current: 当前页 -->
      <!-- close: 关闭的Function-->
 </album>
```


