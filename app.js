// Apple风格App Store应用控制器
class AppleAppStoreApp {
    constructor() {
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentView = 'grid';
        this.allSoftware = this.flattenSoftwareData();
        this.init();
    }

    // 初始化应用
    init() {
        this.initTheme();
        this.bindEvents();
        this.renderFeaturedApps();
        this.renderAll();
        this.updateStats();
    }

    // 将嵌套数据扁平化
    flattenSoftwareData() {
        const flattened = [];
        Object.entries(softwareData).forEach(([categoryKey, categoryData]) => {
            if (categoryData.subcategories) {
                // 新的子分类结构
                Object.entries(categoryData.subcategories).forEach(([subCategoryKey, subCategoryData]) => {
                    subCategoryData.software.forEach(software => {
                        flattened.push({
                            ...software,
                            categoryKey,
                            categoryTitle: categoryData.title,
                            categoryIcon: categoryData.icon,
                            subCategoryKey,
                            subCategoryTitle: subCategoryData.title,
                            subCategoryIcon: subCategoryData.icon
                        });
                    });
                });
            } else if (categoryData.software) {
                // 兼容旧的单层结构
                categoryData.software.forEach(software => {
                    flattened.push({
                        ...software,
                        categoryKey,
                        categoryTitle: categoryData.title,
                        categoryIcon: categoryData.icon
                    });
                });
            }
        });
        return flattened;
    }

    // 事件绑定
    bindEvents() {
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.toggleSearchClear();
            this.renderAll();
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            this.toggleSearchClear();
            searchInput.focus();
            this.renderAll();
        });

        // 分类筛选
        const categoryPills = document.querySelectorAll('.category-pill');
        categoryPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                this.handleFilterChange(e.currentTarget.dataset.category);
            });
        });

        // 视图切换
        const viewToggles = document.querySelectorAll('.view-toggle');
        viewToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                this.handleViewChange(e.currentTarget.dataset.view);
            });
        });

        // 主题切换
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.handleThemeToggle();
            });
        }

        // 搜索按钮（移动端）
        const searchToggle = document.getElementById('searchToggle');
        if (searchToggle) {
            searchToggle.addEventListener('click', () => {
                searchInput.focus();
            });
        }
    }

    // 切换搜索清除按钮显示
    toggleSearchClear() {
        const searchClear = document.getElementById('searchClear');
        if (this.searchTerm) {
            searchClear.classList.add('show');
        } else {
            searchClear.classList.remove('show');
        }
    }

    // 处理分类筛选
    handleFilterChange(category) {
        this.currentFilter = category;
        
        // 更新按钮状态
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.renderAll();
        this.updateStats();
    }

    // 处理视图切换
    handleViewChange(view) {
        this.currentView = view;
        
        // 更新按钮状态
        document.querySelectorAll('.view-toggle').forEach(toggle => {
            toggle.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        // 更新网格样式 - 包括软件网格和精选网格
        const grids = document.querySelectorAll('.software-grid, .featured-grid');
        grids.forEach(grid => {
            if (view === 'list') {
                grid.classList.add('list-view');
            } else {
                grid.classList.remove('list-view');
            }
        });
    }

    // 处理主题切换
    handleThemeToggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // 切换主题
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // 更新图标
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // 保存主题偏好
        localStorage.setItem('theme', newTheme);
    }

    // 初始化主题
    initTheme() {
        // 获取保存的主题或系统偏好
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        // 应用主题
        document.documentElement.setAttribute('data-theme', initialTheme);
        
        // 更新图标
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    // 获取筛选后的软件
    getFilteredSoftware() {
        let filtered = this.allSoftware;

        // 分类筛选
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(software => software.categoryKey === this.currentFilter);
        }

        // 搜索筛选
        if (this.searchTerm) {
            filtered = filtered.filter(software => {
                return software.name.toLowerCase().includes(this.searchTerm) ||
                       software.description.toLowerCase().includes(this.searchTerm) ||
                       software.category.toLowerCase().includes(this.searchTerm) ||
                       (software.developer && software.developer.toLowerCase().includes(this.searchTerm));
            });
        }

        return filtered;
    }

    // 按分类组织数据
    groupSoftwareByCategory(softwareList) {
        const grouped = {};
        softwareList.forEach(software => {
            const categoryKey = software.categoryKey;
            const subCategoryKey = software.subCategoryKey;
            
            if (!grouped[categoryKey]) {
                grouped[categoryKey] = {
                    title: software.categoryTitle,
                    icon: software.categoryIcon,
                    subcategories: {}
                };
            }
            
            if (subCategoryKey) {
                // 有子分类的情况
                if (!grouped[categoryKey].subcategories[subCategoryKey]) {
                    grouped[categoryKey].subcategories[subCategoryKey] = {
                        title: software.subCategoryTitle,
                        icon: software.subCategoryIcon,
                        software: []
                    };
                }
                grouped[categoryKey].subcategories[subCategoryKey].software.push(software);
            } else {
                // 兼容旧结构，没有子分类的情况
                if (!grouped[categoryKey].software) {
                    grouped[categoryKey].software = [];
                }
                grouped[categoryKey].software.push(software);
            }
        });
        return grouped;
    }

    // 渲染精选应用
    renderFeaturedApps() {
        const featuredGrid = document.getElementById('featuredGrid');
        if (!featuredGrid) return;
        
        // 使用全局函数获取精选应用
        const featuredApps = getFeaturedApps();
        
        if (featuredApps.length === 0) {
            const featuredSection = document.getElementById('featuredSection');
            if (featuredSection) {
                featuredSection.style.display = 'none';
            }
            return;
        }

        const html = featuredApps.map(app => this.createFeaturedCardHTML(app)).join('');
        featuredGrid.innerHTML = html;
        
        // 应用当前视图模式
        if (this.currentView === 'list') {
            featuredGrid.classList.add('list-view');
        } else {
            featuredGrid.classList.remove('list-view');
        }
    }

    // 渲染所有内容
    renderAll() {
        const filteredSoftware = this.getFilteredSoftware();
        const groupedSoftware = this.groupSoftwareByCategory(filteredSoftware);
        
        // 控制精选区域显示
        this.toggleFeaturedSection();
        
        this.renderCategories(groupedSoftware);
        this.updateStats(filteredSoftware.length);
    }

    // 控制精选区域显示/隐藏
    toggleFeaturedSection() {
        const featuredSection = document.getElementById('featuredSection');
        if (!featuredSection) return;
        
        // 只有在显示全部内容且没有搜索时才显示精选区域
        const shouldShow = this.currentFilter === 'all' && !this.searchTerm;
        featuredSection.style.display = shouldShow ? 'block' : 'none';
    }

    // 渲染分类和软件卡片
    renderCategories(groupedSoftware) {
        const container = document.getElementById('categoriesContainer');
        
        if (Object.keys(groupedSoftware).length === 0) {
            container.innerHTML = this.createEmptyState();
            return;
        }

        const html = Object.entries(groupedSoftware)
            .map(([categoryKey, categoryData]) => this.createCategoryHTML(categoryData))
            .join('');
        
        container.innerHTML = html;
    }

    // 创建精选卡片HTML
    createFeaturedCardHTML(software) {
        const typeClass = this.getSoftwareTypeClass(software.type);
        const typeText = this.getSoftwareTypeText(software.type);
        const linksHTML = this.createLinksHTML(software.links);

        return `
            <div class="software-card featured-card" data-name="${software.name.toLowerCase()}">
                <div class="software-header">
                    <h3 class="software-name">${software.name}</h3>
                    <span class="software-type ${typeClass}">${typeText}</span>
                </div>
                <p class="software-description">${software.description}</p>
                <div class="software-links">
                    ${linksHTML}
                </div>
            </div>
        `;
    }

    // 创建分类HTML
    createCategoryHTML(categoryData) {
        if (categoryData.subcategories && Object.keys(categoryData.subcategories).length > 0) {
            // 有子分类的情况
            const subcategoriesHTML = Object.entries(categoryData.subcategories)
                .map(([subCategoryKey, subCategoryData]) => {
                    const softwareCards = subCategoryData.software
                        .map(software => this.createSoftwareCardHTML(software))
                        .join('');
                    
                    return `
                        <div class="subcategory-section">
                            <h3 class="subcategory-title">
                                <span style="margin-right: var(--spacing-sm);">${subCategoryData.icon}</span>
                                ${subCategoryData.title}
                                <span style="font-size: 0.75em; color: var(--color-secondary-label); font-weight: normal; margin-left: var(--spacing-sm);">
                                    ${subCategoryData.software.length} 个应用
                                </span>
                            </h3>
                            <div class="software-grid ${this.currentView === 'list' ? 'list-view' : ''}">
                                ${softwareCards}
                            </div>
                        </div>
                    `;
                })
                .join('');

            const totalCount = Object.values(categoryData.subcategories)
                .reduce((total, sub) => total + sub.software.length, 0);

            return `
                <div class="category-section">
                    <h2 class="category-title">
                        <span style="margin-right: var(--spacing-sm);">${categoryData.icon}</span>
                        ${categoryData.title}
                        <span style="font-size: 0.8em; color: var(--color-secondary-label); font-weight: normal; margin-left: var(--spacing-sm);">
                            ${totalCount} 个应用
                        </span>
                    </h2>
                    <div class="subcategories-container">
                        ${subcategoriesHTML}
                    </div>
                </div>
            `;
        } else {
            // 兼容旧结构，没有子分类的情况
            const softwareCards = (categoryData.software || [])
                .map(software => this.createSoftwareCardHTML(software))
                .join('');

            return `
                <div class="category-section">
                    <h2 class="category-title">
                        <span style="margin-right: var(--spacing-sm);">${categoryData.icon}</span>
                        ${categoryData.title}
                        <span style="font-size: 0.8em; color: var(--color-secondary-label); font-weight: normal; margin-left: var(--spacing-sm);">
                            ${(categoryData.software || []).length} 个应用
                        </span>
                    </h2>
                    <div class="software-grid ${this.currentView === 'list' ? 'list-view' : ''}">
                        ${softwareCards}
                    </div>
                </div>
            `;
        }
    }

    // 创建软件卡片HTML
    createSoftwareCardHTML(software) {
        const typeClass = this.getSoftwareTypeClass(software.type);
        const typeText = this.getSoftwareTypeText(software.type);
        const linksHTML = this.createLinksHTML(software.links);

        return `
            <div class="software-card" data-name="${software.name.toLowerCase()}" data-category="${software.categoryKey}">
                <div class="software-header">
                    <h3 class="software-name">${software.name}</h3>
                    <span class="software-type ${typeClass}">${typeText}</span>
                </div>
                <p class="software-description">${software.description}</p>
                <div class="software-links">
                    ${linksHTML}
                </div>
            </div>
        `;
    }

    // 创建链接HTML
    createLinksHTML(links) {
        return links.map((link, index) => {
            const isSecondary = index > 0;
            return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                class="software-link ${isSecondary ? 'secondary' : ''}">
                ${link.text} ↗
            </a>`;
        }).join('');
    }

    // 获取软件类型样式类
    getSoftwareTypeClass(type) {
        const typeMapping = {
            'free': 'free',
            'paid': 'paid',
            'freemium': 'freemium'
        };
        return typeMapping[type] || 'free';
    }

    // 获取软件类型显示文本
    getSoftwareTypeText(type) {
        const typeMapping = {
            'free': '免费',
            'paid': '付费',
            'freemium': '免费增值'
        };
        return typeMapping[type] || '免费';
    }

    // 创建空状态HTML
    createEmptyState() {
        return `
            <div style="text-align: center; padding: var(--spacing-3xl); color: var(--color-secondary-label);">
                <div style="font-size: 64px; margin-bottom: var(--spacing-lg); opacity: 0.6;">🔍</div>
                <h3 style="font-size: var(--font-size-title-3); margin-bottom: var(--spacing-md); color: var(--color-label);">未找到相关应用</h3>
                <p style="font-size: var(--font-size-body); opacity: 0.8;">尝试调整搜索关键词或选择不同的分类</p>
            </div>
        `;
    }

    // 更新统计信息
    updateStats(count = null) {
        const totalCount = count !== null ? count : this.getFilteredSoftware().length;
        const totalAll = this.allSoftware.length;
        const statsElement = document.getElementById('totalCount');
        
        if (this.currentFilter === 'all' && !this.searchTerm) {
            statsElement.textContent = `共收录 ${totalAll} 款精选应用`;
        } else {
            const filterText = this.currentFilter !== 'all' ? categoryMapping[this.currentFilter].name : '';
            const searchText = this.searchTerm ? `"${this.searchTerm}"` : '';
            let statusText = '';
            
            if (filterText && searchText) {
                statusText = `在 ${filterText} 中搜索 ${searchText}`;
            } else if (filterText) {
                statusText = `筛选 ${filterText}`;
            } else if (searchText) {
                statusText = `搜索 ${searchText}`;
            }
            
            const statsText = `${statusText}，找到 ${totalCount} 款应用`;
            statsElement.textContent = statsText;
        }
    }
}

// 工具函数
const utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 检查URL有效性
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
};

// 应用启动
document.addEventListener('DOMContentLoaded', () => {
    // 检查数据完整性
    if (typeof softwareData === 'undefined') {
        console.error('软件数据未加载');
        return;
    }

    // 启动应用
    window.app = new AppleAppStoreApp();
    
    // 添加键盘快捷键支持
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K 聚焦搜索框
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
        
        // ESC 清空搜索
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput === document.activeElement) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('🍎 Apple风格App Store已启动');
});