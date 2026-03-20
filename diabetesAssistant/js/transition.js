// 页面转场动画系统
class PageTransition {
    constructor() {
        this.transitionElement = null;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.createTransitionElement();
        this.setupNavigation();
        this.pageLoadAnimation();
    }

    createTransitionElement() {
        this.transitionElement = document.createElement('div');
        this.transitionElement.className = 'page-transition';
        this.transitionElement.innerHTML = `
            <div class="content">
                <i class="fas fa-heartbeat"></i>
                <span>加载中...</span>
            </div>
        `;
        document.body.appendChild(this.transitionElement);
    }

    pageLoadAnimation() {
        setTimeout(() => {
            this.hideTransition();
        }, 300);
    }

    setupNavigation() {
        // 监听浏览器后退/前进按钮
        window.addEventListener('popstate', () => {
            this.showTransition();
            setTimeout(() => {
                this.hideTransition();
            }, 300);
        });
    }

    showTransition() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        this.transitionElement.classList.add('active');
    }

    hideTransition() {
        setTimeout(() => {
            this.transitionElement.classList.remove('active');
            setTimeout(() => {
                this.isTransitioning = false;
            }, 300);
        }, 100);
    }

    navigateTo(url) {
        if (this.isTransitioning) return;
        this.showTransition();
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
}

// 全局转场动画实例
let pageTransition = null;

// 导航到指定页面的函数
function navigateTo(url) {
    if (pageTransition) {
        pageTransition.navigateTo(url);
    } else {
        window.location.href = url;
    }
}

// 返回上一页的函数
function goBack() {
    // 直接返回，让popstate事件处理转场
    window.history.back();
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    pageTransition = new PageTransition();
});
