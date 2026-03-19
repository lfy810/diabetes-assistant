// 页面转场动画系统
class PageTransition {
    constructor() {
        this.transitionElement = null;
        this.init();
    }

    init() {
        // 创建转场层
        this.createTransitionElement();
        
        // 页面加载完成动画
        this.pageLoadAnimation();
        
        // 监听页面跳转
        this.setupNavigation();
    }

    createTransitionElement() {
        this.transitionElement = document.createElement('div');
        this.transitionElement.className = 'page-transition';
        this.transitionElement.innerHTML = `
            <div class="content">
                <i class="fas fa-heartbeat" style="margin-right: 12px;"></i>
                <span>加载中...</span>
            </div>
        `;
        document.body.appendChild(this.transitionElement);
    }

    pageLoadAnimation() {
        setTimeout(() => {
            document.body.classList.add('page-loaded');
            
            // 触发元素进入动画
            this.triggerElementAnimations();
        }, 100);
    }

    triggerElementAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            }, 100 + (index * 100));
        });
    }

    setupNavigation() {
        // 监听所有链接的点击
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href')) {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.navigateTo(href);
            }
            
            // 监听包含跳转函数的元素
            const elementWithNavigate = e.target.closest('[onclick*="navigateTo"], [onclick*="window.location"]');
            if (elementWithNavigate) {
                const onclick = elementWithNavigate.getAttribute('onclick');
                const urlMatch = onclick.match(/["']([^"']+)["']/);
                if (urlMatch) {
                    e.preventDefault();
                    this.navigateTo(urlMatch[1]);
                }
            }
        });
    }

    navigateTo(url) {
        // 显示转场动画
        this.transitionElement.classList.add('active');
        
        // 延迟跳转
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }
}

// 导航到指定页面的函数
function navigateTo(url) {
    if (window.pageTransition) {
        window.pageTransition.navigateTo(url);
    } else {
        window.location.href = url;
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    window.pageTransition = new PageTransition();
});
