// 简化的页面转场动画系统
function showPageTransition() {
    let transitionElement = document.querySelector('.page-transition');
    if (!transitionElement) {
        transitionElement = document.createElement('div');
        transitionElement.className = 'page-transition';
        transitionElement.innerHTML = `
            <div class="content">
                <i class="fas fa-heartbeat"></i>
                <span>加载中...</span>
            </div>
        `;
        document.body.appendChild(transitionElement);
    }
    transitionElement.classList.add('active');
}

function hidePageTransition() {
    let transitionElement = document.querySelector('.page-transition');
    if (transitionElement) {
        transitionElement.classList.remove('active');
    }
}

// 导航到指定页面的函数
function navigateTo(url) {
    showPageTransition();
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

// 返回上一页的函数
function goBack() {
    showPageTransition();
    setTimeout(() => {
        window.history.back();
    }, 200);
}

// 页面加载时自动隐藏转场动画
window.addEventListener('load', () => {
    setTimeout(() => {
        hidePageTransition();
    }, 100);
});

// 页面卸载前清理
window.addEventListener('beforeunload', () => {
    hidePageTransition();
});

// 监听浏览器后退/前进按钮
window.addEventListener('popstate', () => {
    showPageTransition();
    setTimeout(() => {
        hidePageTransition();
    }, 300);
});
