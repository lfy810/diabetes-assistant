// 页面转场动画系统 - Flutter风格淡入淡出效果
function navigateTo(url) {
    // 为当前页面添加淡出动画
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // 淡出动画
    setTimeout(() => {
        document.body.style.opacity = '0';
        
        // 动画完成后跳转
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }, 10);
}

// 返回上一页的函数
function goBack() {
    // 为当前页面添加淡出动画
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // 淡出动画
    setTimeout(() => {
        document.body.style.opacity = '0';
        
        // 动画完成后返回
        setTimeout(() => {
            window.history.back();
        }, 300);
    }, 10);
}

// 页面加载时的淡入动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // 延迟一下确保DOM完全加载
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
