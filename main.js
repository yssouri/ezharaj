// ===== Sub Categories Data =====
const subCategories = {
    'cars': ['تويوتا', 'هيونداي', 'نيسان', 'فورد', 'كيا', 'شيفروليه', 'لكزس', 'مرسيدس', 'جي ام سي', 'هوندا', 'بي ام دبليو', 'دودج', 'مازدا', 'ميتسوبيشي', 'لاند روفر', 'فولكس واجن', 'جيب', 'سوزوكي', 'كرايسلر', 'بورش', 'اودي', 'همر', 'كاديلاك', 'قطع غيار', 'شاحنات', 'دبابات', 'سيارات تراثية', 'سيارات مصدومة', 'سيارات للتنازل'],
    'devices': ['جوالات', 'لابتوبات', 'كمبيوتر', 'تلفزيون', 'كاميرات', 'أجهزة لوحية', 'ساعات ذكية', 'اكسسوارات', 'شاشات', 'طابعات', 'راوترات', 'بلايستيشن', 'اكس بوكس', 'نينتندو'],
    'real estate': ['شقق للإيجار', 'شقق للبيع', 'فلل للبيع', 'فلل للإيجار', 'عمارات', 'محلات', 'مزارع', 'استراحات', 'بيوت', 'أدوار', 'أراضي', 'مخازن', 'مخيمات'],
    'furniture': ['كنب', 'غرف نوم', 'طاولات', 'كراسي', 'ستائر', 'سجاد', 'مطابخ', 'أجهزة منزلية', 'أدوات منزلية', 'نباتات', 'إضاءة', 'تحف'],
    'services': ['نقل عفش', 'تنظيف', 'صيانة', 'سباكة', 'كهرباء', 'نجارة', 'دهانات', 'تكييف', 'حدادة', 'مقاولات', 'تصميم داخلي', 'تنسيق حدائق', 'رعاية أطفال', 'خياطة'],
    'fashion': ['ملابس رجالية', 'ملابس نسائية', 'ملابس أطفال', 'عطور', 'ساعات', 'نظارات', 'حقائب', 'أحذية', 'مجوهرات', 'اكسسوارات', 'مستحضرات تجميل'],
    'animals': ['قطط', 'كلاب', 'طيور', 'أسماك', 'حيوانات مزرعة', 'خيول', 'إبل', 'أغنام', 'أبقار', 'أرانب', 'سلاحف', 'زواحف', 'أعلاف', 'مستلزمات'],
    'jobs': ['وظائف إدارية', 'وظائف تقنية', 'وظائف هندسة', 'وظائف طبية', 'وظائف تعليم', 'وظائف مبيعات', 'وظائف سائقين', 'وظائف حراس', 'وظائف مطاعم', 'وظائف منزلية', 'تدريب', 'عمل حر'],
    'games': ['بلايستيشن', 'اكس بوكس', 'نينتندو', 'ألعاب كمبيوتر', 'ألعاب أطفال', 'ألعاب خارجية', 'دراجات', 'سكوتر', 'تزلج', 'سباحة', 'صيد', 'رياضة'],
    'training': ['لغات', 'كمبيوتر', 'تصميم', 'محاسبة', 'قيادة', 'طبخ', 'خياطة', 'موسيقى', 'رسم', 'رياضة', 'تعليم', 'تطوير ذات'],
    'food': ['مطاعم', 'مخابز', 'حلويات', 'مكسرات', 'تمور', 'عسل', 'بهارات', 'مشروبات', 'أغذية مجمدة', 'خضروات', 'لحوم', 'أسماك'],
    'events': ['أعراس', 'حفلات', 'تخرج', 'ولائم', 'خيام', 'كراسي', 'طاولات', 'إضاءة', 'صوت', 'تصوير', 'موسيقى', 'مكياج', 'فساتين'],
    'programming': ['تصميم مواقع', 'تطبيقات', 'برامج', 'قواعد بيانات', 'شبكات', 'أمن سيبراني', 'ذكاء اصطناعي', 'تسويق رقمي', 'SEO', 'جرافيك'],
    'garden': ['نباتات', 'أشجار', 'زهور', 'تربة', 'سماد', 'أدوات زراعية', 'مكائن رش', 'برك', 'نوافير', 'عشب صناعي', 'أثاث حدائق'],
    'rare': ['عملات', 'طوابع', 'تحف', 'ساعات قديمة', 'سيارات كلاسيكية', 'كتب نادرة', 'مخطوطات', 'أنتيكات', 'مجوهرات قديمة'],
    'investments': ['مشاريع صغيرة', 'امتياز تجاري', 'أسهم', 'عقارات استثمارية', 'محلات تجارية', 'مزارع', 'مصانع', 'شركات'],
    'arts': ['لوحات', 'تماثيل', 'فن تشكيلي', 'خط عربي', 'فن إسلامي', 'تصوير', 'موسيقى', 'عزف', 'غناء', 'تمثيل'],
    'trips': ['رحلات داخلية', 'رحلات خارجية', 'عروض سفر', 'فنادق', 'شاليهات', 'مخيمات', 'كشتات', 'صيد', 'غوص', 'تسلق'],
    'tourism': ['فنادق', 'شقق فندقية', 'منتجعات', 'مطاعم سياحية', 'أماكن ترفيه', 'مواقع أثرية', 'متاحف', 'أسواق', 'مهرجانات'],
    'lost': ['مفقودات', 'موجودات', 'حيوانات ضالة', 'أشخاص', 'مستندات', 'سيارات', 'أجهزة', 'مجوهرات', 'نقود']
};

// ===== Translations =====
const translations = {
    'ar': {
        'welcome': '🎉 أهلاً بك في إزي حراج!',
        'search': 'ابحث...',
        'login': '🔐 دخول',
        'all': '🏠 الكل',
        'cars': '🚗 سيارات',
        'devices': '📱 أجهزة',
        'real estate': '🏠 عقارات',
        'furniture': '🪑 أثاث',
        'services': '🔧 خدمات',
        'fashion': '👕 أزياء',
        'animals': '🐪 حيوانات',
        'jobs': '💼 وظائف',
        'games': '🎮 ألعاب',
        'training': '📚 تدريب',
        'food': '🍔 أطعمة',
        'events': '🎉 مناسبات',
        'programming': '💻 برمجة',
        'garden': '🌳 حدائق',
        'rare': '🏺 نوادر',
        'investments': '📈 مشاريع',
        'arts': '🎨 فنون',
        'trips': '✈️ رحلات',
        'tourism': '🏖️ سياحة',
        'lost': '🔍 مفقودات',
        'banner_title': 'بيع واشتري بكل سهولة',
        'banner_desc': 'أكبر منصة إعلانات مبوبة في المملكة',
        'add_ad': '📢 أنشر إعلانك مجاناً',
        'filter_title': '👈 اسحب للتصفح',
        'filter_desc': 'تصفح أحدث الإعلانات المضافة',
        'latest': 'الأحدث',
        'cheapest': 'الأرخص',
        'expensive': 'الأغلى',
        'home': 'الرئيسية',
        'categories': 'الأقسام',
        'add': 'أضف',
        'favorites': 'المفضلة',
        'account': 'حسابي'
    },
    'en': {
        'welcome': '🎉 Welcome to Ezharaj!',
        'search': 'Search...',
        'login': '🔐 Login',
        'all': '🏠 All',
        'cars': '🚗 Cars',
        'devices': '📱 Devices',
        'real estate': '🏠 Real Estate',
        'furniture': '🪑 Furniture',
        'services': '🔧 Services',
        'fashion': '👕 Fashion',
        'animals': '🐪 Animals',
        'jobs': '💼 Jobs',
        'games': '🎮 Games',
        'training': '📚 Training',
        'food': '🍔 Food',
        'events': '🎉 Events',
        'programming': '💻 Programming',
        'garden': '🌳 Garden',
        'rare': '🏺 Rare',
        'investments': '📈 Investments',
        'arts': '🎨 Arts',
        'trips': '✈️ Trips',
        'tourism': '🏖️ Tourism',
        'lost': '🔍 Lost',
        'banner_title': 'Buy & Sell with Ease',
        'banner_desc': 'Largest classifieds platform in the Kingdom',
        'add_ad': '📢 Post Your Ad Free',
        'filter_title': '👈 Swipe to Browse',
        'filter_desc': 'Browse latest added ads',
        'latest': 'Latest',
        'cheapest': 'Cheapest',
        'expensive': 'Most Expensive',
        'home': 'Home',
        'categories': 'Categories',
        'add': 'Add',
        'favorites': 'Favorites',
        'account': 'Account'
    },
    'ur': {
        'welcome': '🎉 ازی حراج میں خوش آمدید!',
        'search': 'تلاش کریں...',
        'login': '🔐 داخلہ',
        'all': '🏠 تمام',
        'cars': '🚗 گاڑیاں',
        'devices': '📱 آلات',
        'real estate': '🏠 جائیداد',
        'furniture': '🪑 فرنیچر',
        'services': '🔧 خدمات',
        'fashion': '👕 فیشن',
        'animals': '🐪 جانور',
        'jobs': '💼 نوکریاں',
        'games': '🎮 کھیل',
        'training': '📚 تربیت',
        'food': '🍔 کھانا',
        'events': '🎉 تقریبات',
        'programming': '💻 پروگرامنگ',
        'garden': '🌳 باغ',
        'rare': '🏺 نایاب',
        'investments': '📈 سرمایہ کاری',
        'arts': '🎨 فنون',
        'trips': '✈️ سفر',
        'tourism': '🏖️ سیاحت',
        'lost': '🔍 گمشدہ',
        'banner_title': 'آسانی سے خریدو اور بیچو',
        'banner_desc': 'مملکت کی سب سے بڑی اشتہارات پلیٹ فارم',
        'add_ad': '📢 مفت اشتہار شائع کرو',
        'filter_title': '👈 براؤز کرنے کے لیے سوائپ کرو',
        'filter_desc': 'تازہ ترین اشتہارات براؤز کرو',
        'latest': 'تازہ ترین',
        'cheapest': 'سب سے سستا',
        'expensive': 'سب سے مہنگا',
        'home': 'گھر',
        'categories': 'زمرے',
        'add': 'شامل کرو',
        'favorites': 'پسندیدہ',
        'account': 'اکاؤنٹ'
    }
};

// ===== Language Change (Site) =====
const languages = ['عربي', 'English', 'اردو'];
const langCodes = ['ar', 'en', 'ur'];
let currentLang = 0;

function changeLang() {
    currentLang = (currentLang + 1) % languages.length;
    const langCode = langCodes[currentLang];
    
    const btn = document.querySelector('.btn-lang-top');
    if(btn) btn.textContent = languages[currentLang];
    
    localStorage.setItem('siteLang', langCode);
    
    const html = document.documentElement;
    if(langCode === 'en') {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', langCode);
    }
    
    updatePageContent(langCode);
    showToast('اللغة: ' + languages[currentLang]);
}

function updatePageContent(lang) {
    const t = translations[lang];
    if(!t) return;
    
    const welcome = document.querySelector('.welcome-text');
    if(welcome) welcome.textContent = t.welcome;
    
    const searchInput = document.getElementById('searchInput');
    if(searchInput) searchInput.placeholder = t.search;
    
    const loginBtn = document.querySelector('.btn-login-top');
    if(loginBtn) loginBtn.textContent = t.login;
    
    const catButtons = document.querySelectorAll('.cats button');
    const catKeys = ['all', 'cars', 'devices', 'real estate', 'furniture', 'services', 'fashion', 'animals', 'jobs', 'games', 'training', 'food', 'events', 'programming', 'garden', 'rare', 'investments', 'arts', 'trips', 'tourism', 'lost'];
    
    catButtons.forEach((btn, idx) => {
        if(catKeys[idx] && t[catKeys[idx]]) {
            btn.textContent = t[catKeys[idx]];
        }
    });
    
    const bannerTitle = document.querySelector('.banner h1');
    if(bannerTitle) bannerTitle.textContent = t.banner_title;
    
    const bannerDesc = document.querySelector('.banner p');
    if(bannerDesc) bannerDesc.textContent = t.banner_desc;
    
    const bannerBtn = document.querySelector('.banner .btn-green');
    if(bannerBtn) bannerBtn.textContent = t.add_ad;
    
    const filterTitle = document.querySelector('.filter-box h3');
    if(filterTitle) filterTitle.textContent = t.filter_title;
    
    const filterDesc = document.querySelector('.filter-box p');
    if(filterDesc) filterDesc.textContent = t.filter_desc;
    
    const filterBtns = document.querySelectorAll('.filter-btns button');
    if(filterBtns[0]) filterBtns[0].textContent = t.latest;
    if(filterBtns[1]) filterBtns[1].textContent = t.cheapest;
    if(filterBtns[2]) filterBtns[2].textContent = t.expensive;
    
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const navKeys = ['home', 'categories', 'add', 'favorites', 'account'];
    
    navItems.forEach((item, idx) => {
        const textDiv = item.querySelector('div:last-child');
        if(textDiv && navKeys[idx] && t[navKeys[idx]]) {
            textDiv.textContent = t[navKeys[idx]];
        }
    });
}

// ===== Search Language Change =====
const searchLangs = ['عربي', 'English', 'اردو'];
let currentSearchLang = 0;

function changeSearchLang() {
    currentSearchLang = (currentSearchLang + 1) % searchLangs.length;
    const btn = document.querySelector('.btn-search-lang');
    if(btn) btn.textContent = searchLangs[currentSearchLang];
    
    const placeholders = {
        'عربي': 'ابحث...',
        'English': 'Search...',
        'اردو': 'تلاش کریں...'
    };
    
    const input = document.getElementById('searchInput');
    if(input) input.placeholder = placeholders[searchLangs[currentSearchLang]] || 'ابحث...';
    
    showToast('لغة البحث: ' + searchLangs[currentSearchLang]);
}

// ===== Navigation Functions =====
function goHome() {
    window.location.href = 'index.html';
}

function goLogin() {
    window.location.href = 'login.html';
}

function toggleCategories() {
    const catsDiv = document.getElementById('mainCats');
    const subCatsDiv = document.getElementById('subCats');
    
    if(catsDiv.classList.contains('hidden')) {
        catsDiv.classList.remove('hidden');
        catsDiv.scrollIntoView({behavior: 'smooth'});
        showToast('الأقسام');
    } else {
        catsDiv.classList.add('hidden');
        subCatsDiv.classList.remove('show');
        subCatsDiv.innerHTML = '';
        showToast('تم إخفاء الأقسام');
    }
}

function goAdd() {
    showToast('أضف إعلان');
}

function goFavorites() {
    showToast('المفضلة');
}

function goAccount() {
    showToast('حسابي');
}

// ===== Search =====
function search() {
    const query = document.getElementById('searchInput').value;
    if(query) {
        showToast('بحث: ' + query);
    }
}

// ===== Category Filter =====
function showCategory(cat, btn) {
    const tabs = document.querySelectorAll('.cats button');
    tabs.forEach(tab => tab.classList.remove('active'));
    if(btn) btn.classList.add('active');
    
    const subCatsDiv = document.getElementById('subCats');
    subCatsDiv.innerHTML = '';
    
    if(cat === 'all') {
        subCatsDiv.classList.remove('show');
        loadItems();
        showToast('جميع الإعلانات');
        return;
    }
    
    if(subCategories[cat]) {
        subCategories[cat].forEach(sub => {
            const button = document.createElement('button');
            button.textContent = sub;
            button.onclick = function() {
                filterItemsBySub(sub);
                showToast('فلتر: ' + sub);
            };
            subCatsDiv.appendChild(button);
        });
        subCatsDiv.classList.add('show');
    }
    
    filterByCategory(cat);
}

// ===== Filter by Category =====
function filterByCategory(category) {
    const container = document.getElementById('itemsContainer');
    if(!container || typeof itemsData === 'undefined') return;
    
    const filtered = itemsData.filter(item => item.category === category);
    
    if(filtered.length === 0) {
        showToast('لا توجد إعلانات في هذا القسم');
        return;
    }
    
    container.innerHTML = '';
    filtered.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
    
    container.scrollIntoView({behavior: 'smooth'});
    showToast('تم تصفية: ' + category);
}

// ===== Filter Items by Sub Category =====
function filterItemsBySub(sub) {
    const container = document.getElementById('itemsContainer');
    if(!container || typeof itemsData === 'undefined') return;
    
    const filtered = itemsData.filter(item => 
        item.title.includes(sub) || 
        item.category === sub.toLowerCase()
    );
    
    if(filtered.length === 0) {
        loadItems();
        showToast('لا توجد إعلانات في هذا القسم');
        return;
    }
    
    container.innerHTML = '';
    filtered.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
}

// ===== Sort Items =====
function sortItems(type) {
    const container = document.getElementById('itemsContainer');
    if(!container || typeof itemsData === 'undefined') return;
    
    let sorted = [...itemsData];
    
    if(type === 'latest') {
        // Already sorted by time
        showToast('تم الترتيب: الأحدث');
    } else if(type === 'cheapest') {
        sorted.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^0-9]/g, '')) || 0;
            return priceA - priceB;
        });
        showToast('تم الترتيب: الأرخص');
    } else if(type === 'expensive') {
        sorted.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^0-9]/g, '')) || 0;
            return priceB - priceA;
        });
        showToast('تم الترتيب: الأغلى');
    }
    
    container.innerHTML = '';
    sorted.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
}

// ===== Create Item Card =====
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <div class="item-img">
            <span style="font-size:80px; text-align:center; display:block; line-height:200px;">${item.image || '📦'}</span>
            <div class="badge">مميز</div>
            <div class="fav-btn">🤍</div>
        </div>
        <div class="item-info">
            <div class="item-title">${item.title}</div>
            <div class="item-price">${item.price}</div>
            <div style="color:#888; font-size:13px;">📍 ${item.location} | ⏰ ${item.time}</div>
        </div>
    `;
    return card;
}

// ===== Dark Mode =====
function toggleDark() {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // تغيير العلامة حسب الوضع
    const darkBtn = document.querySelector('.btn-dark-top');
    if(darkBtn) {
        if(isDark) {
            darkBtn.textContent = '☀️'; // شمس في الوضع الداكن
        } else {
            darkBtn.textContent = '🌙'; // هلال في الوضع الفاتح
        }
    }
    
    showToast(isDark ? 'الوضع الداكن' : 'الوضع الفاتح');
}



// ===== Toast Notification =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if(existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 200;
        animation: fadeIn 0.3s;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// ===== Load Items =====
function loadItems() {
    const container = document.getElementById('itemsContainer');
    if(!container || typeof itemsData === 'undefined') return;
    
    container.innerHTML = '';
    itemsData.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
}

// ===== Register Page =====
function register() {
    window.location.href = 'register.html';
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
    loadItems();
    
    // تحديث علامة الـ Dark Mode عند فتح الصفحة
    const isDark = document.documentElement.classList.contains('dark-mode');
    const darkBtn = document.querySelector('.btn-dark-top');
    if(darkBtn) {
        if(isDark) {
            darkBtn.textContent = '☀️'; // شمس إذا كان داكن
        } else {
            darkBtn.textContent = '🌙'; // هلال إذا كان فاتح
        }
    }
    
    // Check saved language
    const savedLang = localStorage.getItem('siteLang');
    if(savedLang) {
        const idx = langCodes.indexOf(savedLang);
        if(idx !== -1) {
            currentLang = idx;
            const btn = document.querySelector('.btn-lang-top');
            if(btn) btn.textContent = languages[currentLang];
            updatePageContent(savedLang);
        }
    }
});
