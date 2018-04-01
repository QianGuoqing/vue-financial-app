# financial-app



## 安装使用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 总结

### 自定义组件

封装基础组件，诸如`Button`, `Panel`, `Slider`这类。用`stylus`写好公共的全局样式，再在各自的基础组件中引入。对于基础组件内部，要通过`props`定义好组件能接受的数据。
例如，对于`Button.vue`基础组件：

`stylus部分`

```css
button-default($size=14px, $color=#fff, $bgcolor=#f04752, $padding=5px, $radius=5px)
  padding: $padding;
  background-color: $bgcolor;
  border-radius: $radius;
  border: 1px solid $bgcolor;
  font-size: $size;
  color: $color;
  text-align: center;
  line-height: 1;
  display: inline-block;
```

`Button.vue部分`

```javascript
<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>
s
<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl"
  .button
    button-default()
</style>
```

通过以上方法就能封装一个基础的组件。
