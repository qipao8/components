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

3. **save&restore**:restore在上一次保存状态重新画，save之后用restore是为了消除save到restore这个画的过程对后面画的影响。

4. **stroke** 描边


