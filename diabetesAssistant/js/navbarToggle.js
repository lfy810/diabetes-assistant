// 导航栏自动隐藏/显示功能
class NavbarToggle {
    constructor() {
        this.lastScrollTop = 0;
        this.scrollThreshold = 50;
        this.topBar = null;
        this.tabBar = null;
        this.isVisible = true;
        this.init();
    }

    init() {
        this.topBar = document.querySelector('.top-bar');
        this.tabBar = document.querySelector('.tab-bar');
        
        if (this.topBar || this.tabBar) {
            window.addEventListener('scroll', this.handleScroll.bind(this));
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 上滑隐藏导航栏
        if (scrollTop > this.lastScrollTop && scrollTop > this.scrollThreshold) {
            if (this.isVisible) {
                this.hideNavbars();
                this.isVisible = false;
            }
        } 
        // 下滑显示导航栏
        else if (scrollTop < this.lastScrollTop) {
            if (!this.isVisible) {
                this.showNavbars();
                this.isVisible = true;
            }
        }
        
        this.lastScrollTop = scrollTop;
    }

    hideNavbars() {
        if (this.topBar) {
            this.topBar.style.transform = 'translateY(-100%)';
            this.topBar.style.transition = 'transform 0.3s ease';
        }
        if (this.tabBar) {
            this.tabBar.style.transform = 'translateY(100%)';
            this.tabBar.style.transition = 'transform 0.3s ease';
        }
    }

    showNavbars() {
        if (this.topBar) {
            this.topBar.style.transform = 'translateY(0)';
            this.topBar.style.transition = 'transform 0.3s ease';
        }
        if (this.tabBar) {
            this.tabBar.style.transform = 'translateY(0)';
            this.tabBar.style.transition = 'transform 0.3s ease';
        }
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    window.navbarToggle = new NavbarToggle();
});