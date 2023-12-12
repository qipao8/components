#### 20231124
1. **window.devicePixelRatio**:像素比(物理像素/css像素)，像素比高则越清晰
```
var scale = window.devicePixelRatio;
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

ctx.scale(scale, scale);
```

2. **drawImage**
```
ctx.drawImage(image, dx, dy)
ctx.drawImage(image, dx, dy, dWidth, dHeight)
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
image:图片，从图片的(sx,sy)开始画，图片从画布的(dx,dy)开始画
```

3. **save&restore**:restore通过弹出绘图状态堆栈中的顶部条目来恢复最近保存的画布状态。如果没有保存的状态，此方法不执行任何操作。

