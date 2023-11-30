#### 20231124
1. **window.devicePixelRatio**:像素比(物理像素/css像素)，像素比高则越清晰
```
var scale = window.devicePixelRatio;
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

ctx.scale(scale, scale);
```

2. 

