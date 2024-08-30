# VUE2 二维码生成组件(code-diff-v2)

- 基于 VUE

## 安装与使用

### vue2 安装

```
npm install code-diff-v2
```

```ts
import Vue from 'vue';
import App from './App.vue';

import CodeDiffV2 from 'code-diff-v2';
import 'code-diff-v2/CodeDiffV2.css';

Vue.use(CodeDiffV2);
```

### vue3 安装

```
npm install code-diff-v3
```

```ts
import App from './App.vue';
const app = createApp(App);

import CodeDiffV3 from 'code-diff-v3';
import 'code-diff-v3/CodeDiffV3.css';

app.use(CodeDiffV3);
```


### 使用组件

```html

<CodeDiff ref="codeDiff" :new-string="newString" :old-string="oldString" @newStrToReply="showStr" @oldStrToNew="showStr">
  <template #leftTitle> 标准</template>
  <template #rightTitle> 实际</template>
</CodeDiff>

showStr(str) {
  console.log('str ----- ', str);
},
```

# 开发文档（API）

## Attributes属性列表

| 名称         | 类型      | 默认值   | 描述     |
|------------|---------|-------|--------|
| oldString  | String  | ''    | 文本原始值  |
| newString  | String  | ''    | 文本新值   |      |
| hideHeader | Boolean | false | 是否影藏头部 |

## Events事件列表

| 事件            | 说明              | 回调参数      |
|---------------|-----------------|-----------|
| oldStrToNew   | 点击左侧，文本新值,还原原始值 | newString |            
| newStrToReply | 点击右侧，文本新值,还原原始值 | newString |         

## Methods方法列表

| 方法              | 说明       | 参数        | 回调参数      | 
|-----------------|----------|-----------|-----------|
| reloadNewString | 文本新值重新复制 | newString |           |
| getNewString    | 文本新值     |           | newString |

## Slot插槽列表

| 插槽         | 说明     | 参数 |
|------------|--------|----|
| leftTitle  | 左侧头部标题 | -  |
| rightTitle | 右侧头部标题 | -  |

