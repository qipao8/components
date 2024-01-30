function drawLine(ctx, { width, top, left, type, tickHeight = 4, lineType, color, tickColor = '#333', lineWidth = 1 }) {
    if (lineWidth === 0) return
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(left, top)
    if (type === 'Horizontal') {
        ctx.lineTo(left + width, top)
    } else {
        ctx.lineTo(left,top+tickHeight)
    }
    if (lineType) {
        const dash = getLineDash(lineWidth, lineType)
        ctx.setLineDash(dash)
        ctx.strokeStyle=color
    } else ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
}

// 虚线模板数组
function getLineDash(lineWidth, lineType) {
    if(lineWidth==null) lineWidth=1
    let dotSize = Math.max(lineWidth, 2)
    let dashSize = lineWidth * 4
    return (lineType==='solid'||lineType==null)?[]:lineType==='dashed'?[dashSize,dashSize]:[dotSize,dotSize]
}