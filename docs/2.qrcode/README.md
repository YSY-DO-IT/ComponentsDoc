# VUE2 二维码生成组件(qrcode-v2)

- 基于 VUE 2.x

## 安装与使用

### 安装

```
npm install qrcode-v2
```

### 引用 qrcode-v2

```ts
import Vue from 'vue';
import App from './App.vue';

import QrcodeV2 from '2.qrcode-v2';

Vue.use(QrcodeV2);
```

### 使用组件

```html

<QrCode :margin="2" :width="200" showContent value="测试202402020090"></QrCode>
```

<img src="https://raw.githubusercontent.com/YSY-DO-IT/ysy-docs/main/docs/2.qrcode/demo.png"  />

# 开发文档（API）

## Attributes属性列表

| 名称                   | 类型      | 默认值         | 描述                                         |
|----------------------|---------|-------------|--------------------------------------------|
| value                | String  | ''          | 二维码值(汉字,英文,数字)                             |
| width                | Number  | 80          | 大小                                         |
| id                   | String  | '随机值'       | 默认唯一id                                     |
| margin               | Number  | 1           | 边距,数值                                      |
| color                | String  | '#000000ff' | 二维码颜色,默认黑色,必须为十六进制格式 （RGBA）                |
| light                | String  | '#ffffffff' | 边距外周边颜色,默认白色,必须为十六进制格式 （RGBA）              |
| errorCorrectionLevel | String  | 'M'         | 纠错级别,low, medium, quartile, highL, M, Q, H |
| showContent          | Boolean | false       | 是否在底部显示二维码内容                               |

color和light属性，样式搞复杂了，可能会影响扫码扫不出来！

### 参考

具体使用的qrcode.js，可以参考如下链接
https://www.npmjs.com/package/qrcode#api
