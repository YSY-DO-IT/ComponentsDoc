# VUE3 div分割(div-splitter-v3)

- 基于 VUE

## 安装与使用

### vue2 安装引用

```
npm install div-splitter-v2
```
引用 div-splitter-v2

```ts
import DivSplitterV2 from 'div-splitter-v2'
import 'div-splitter-v2/DivSplitterV2.css'

Vue.use(DivSplitterV2);
```

### vue3 安装引用
```
npm install div-splitter-v3
```
引用 div-splitter-v3

```ts
import App from './App.vue';

const app = createApp(App);
import '../node_modules/1.div-splitter-v3/style.css'; //引入组件样式
import DivSplitterV3 from '1.div-splitter-v3';

app.use(DivSplitterV3);
```

### 使用组件

```html

<DivLR leftWidth="260px" border width="900px" maxLeftWidth="300">
  <template #left="{ width, rate, totalWith }"></template>
  <template #right="{ width, rate, totalWith }">
    <DivUD minUpHeight="50">
      <template #up="{ height, rate, totalHeight }"></template>
      <template #dowm="{ height, rate, totalHeight }"></template>
    </DivUD>
  </template>
</DivLR>
```

<img src="https://gitee.com/ysy-do-it_admin/DivSplitterV3/raw/master/public/divsplitter.gif"  />

# 开发文档（API）

## DivLR Attributes属性列表

| 名称           | 类型             | 默认值        | 描述                                |
|--------------|----------------|------------|-----------------------------------|
| width        | String         | '100%'     | 宽度，可选值px，%                        |
| height       | String         | '100%'     | 高度，可选值px，%                        |
| leftWidth    | String         | '100px'    | 左侧区域加载时宽度，可选值px，%                 |
| minLeftWidth | Number, String | 0          | 左侧区域最小宽度，单位px，数值                  |
| maxLeftWidth | Number, String | 0          | 左侧区域最大宽度，单位px，数值                  |
| leftFixed    | Boolean        | false      | 左侧区域是否固定住                         |
| splitLine    | String         | 'fullLine' | 区域分割线 dashed虚线 fullLine实线 none不显示 |
| border       | Boolean        | false      | 外层边框实现显示，默认不显示                    |
| disabled     | Boolean        | false      | 禁止拖拽                              |
| collapse     | Boolean        | false      | 是否开启折叠功能                          |

## DivLR Events事件列表

| 事件         | 说明                  | 回调参数                       |
|------------|---------------------|----------------------------|
| closeLeft  | 关闭左侧，不受最大最小左侧宽度参数影响 | —                          |
| openLeft   | 打开左侧，还原到上次打开的位置     | —                          |
| changeLeft | 左侧区域变化              | leftWidthPx, leftWidthRate |

## DivLR Methods方法列表

| 方法        | 说明   | 参数 |
|-----------|------|----|
| closeLeft | 关闭左侧 | —  |
| openLeft  | 打开左侧 | —  |

## DivLR Slot插槽列表

| 插槽    | 说明     | 参数                       |
|-------|--------|--------------------------|
| left  | 左侧区域内容 | ｛width, rate, totalWith｝ |
| right | 右侧区域内容 | ｛width, rate, totalWith｝ |

---

---

---

---

## DivUD 属性列表

| 名称          | 类型             | 默认值        | 描述                                |
|-------------|----------------|------------|-----------------------------------|
| width       | String         | '100%'     | 宽度，可选值px，%                        |
| height      | String         | '100%'     | 高度，可选值px，%                        |
| upHeight    | String         | '50px'     | 上方区域加载时宽度，可选值px，%                 |
| minUpHeight | Number, String | 0          | 上方区域最小宽度，单位px，数值                  |
| maxUpHeight | Number, String | 0          | 上方区域最大宽度，单位px，数值                  |
| upFixed     | Boolean        | false      | 上方区域是否固定住                         |
| splitLine   | String         | 'fullLine' | 区域分割线 dashed虚线 fullLine实线 none不显示 |
| border      | Boolean        | false      | 外层边框实现显示，默认不显示                    |
| disabled    | Boolean        | false      | 禁止拖拽                              |
| collapse    | Boolean        | false      | 是否开启折叠功能                          |

## DivUD Events事件列表

| 事件       | 说明                  | 回调参数                     |
|----------|---------------------|--------------------------|
| closeUp  | 关闭上方，不受最大最小上方高度参数影响 | —                        |
| openUp   | 打开上方，打开到上次的位置       | —                        |
| changeUp | 上方区域变化              | upHeightPx, upHeightRate |

## DivUD Methods方法列表

| 方法      | 说明   | 参数 |
|---------|------|----|
| closeUp | 关闭上方 | —  |
| openUp  | 打开上方 | —  |

## DivUD Slot插槽列表

| 插槽   | 说明     | 参数                       |
|------|--------|--------------------------|
| up   | 上方区域内容 | ｛width, rate, totalWith｝ |
| down | 下方区域内容 | ｛width, rate, totalWith｝ |
