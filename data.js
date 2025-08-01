// 完整的软件数据 - Apple风格App Store (重构为子分类结构)
const softwareData = {
    // 系统工具与维护
    system: {
        title: "系统工具与维护",
        icon: "⚙️",
        subcategories: {
            packageManagers: {
                title: "包管理器",
                icon: "📦",
                software: [
                    {
                        name: "UniGetUI",
                        type: "free",
                        description: "图形化的 Windows 包管理器前端，整合了 Winget、Scoop、Chocolatey 等多个流行的包管理工具，方便统一管理软件安装与更新",
                        category: "包管理器",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/marticliment/UniGetUI/releases" }
                        ]
                    },
                    {
                        name: "Winget",
                        type: "free",
                        description: "微软官方的包管理器，Windows 系统自带",
                        category: "包管理器",
                        links: [
                            { text: "官网", url: "https://docs.microsoft.com/en-us/windows/package-manager/" }
                        ]
                    },
                    {
                        name: "Scoop",
                        type: "free",
                        description: "开源的命令行包管理器，侧重于便携式（Portable）软件安装，通常不会污染系统环境变量",
                        category: "包管理器",
                        links: [
                            { text: "官网", url: "https://scoop.sh/" }
                        ]
                    },
                    {
                        name: "Chocolatey",
                        type: "freemium",
                        description: "老牌的 Windows 包管理器，软件库庞大，更侧重于传统安装包形式的软件管理",
                        category: "包管理器",
                        links: [
                            { text: "官网", url: "https://chocolatey.org/" }
                        ]
                    }
                ]
            },
            systemOptimization: {
                title: "系统优化与清理",
                icon: "🧹",
                software: [
                    {
                        name: "WinUtil",
                        type: "free",
                        description: "开源，基于 PowerShell 的脚本工具集。提供程序安装、系统优化与去臃肿（Debloat）、配置管理、Windows 更新修复等功能",
                        category: "系统优化",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/ChrisTitusTech/winutil" }
                        ]
                    },
                    {
                        name: "CCleaner",
                        type: "freemium",
                        description: "老牌系统清理工具。适合追求全面优化和简单操作的用户。提供注册表清理、启动项管理、软件卸载等功能",
                        category: "系统清理",
                        links: [
                            { text: "官网", url: "https://www.ccleaner.com/ccleaner/download" }
                        ]
                    },
                    {
                        name: "BleachBit",
                        type: "free",
                        description: "开源、轻量的系统清理工具。适合极客，提供命令行界面，适合自动化清理，不提供注册表清理功能。相比 CCleaner 更注重隐私擦除",
                        category: "系统清理",
                        links: [
                            { text: "Github", url: "https://github.com/bleachbit/bleachbit" }
                        ]
                    },
                    {
                        name: "Dism++",
                        type: "free",
                        description: "强大的系统优化、清理维护工具。功能偏向系统深度优化（如系统备份还原、ESD转换等），需要一定的 Windows 系统知识",
                        category: "系统优化",
                        links: [
                            { text: "Github", url: "https://github.com/Chuyu-Team/Dism-Multi-language" }
                        ]
                    },
                    {
                        name: "Mem Reduct",
                        type: "free",
                        description: "轻量级的实时内存管理工具，用于监控和清理系统物理内存和虚拟内存",
                        category: "内存管理",
                        links: [
                            { text: "官网", url: "https://www.henrypp.org/product/memreduct" }
                        ]
                    }
                ]
            },
            uninstallConfig: {
                title: "卸载与配置管理",
                icon: "🗑️",
                software: [
                    {
                        name: "Geek Uninstaller",
                        type: "free",
                        description: "深度卸载工具，能有效清理残留文件和注册表。界面简洁，响应快速",
                        category: "卸载工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://geekuninstaller.com/" }
                        ]
                    },
                    {
                        name: "Revo Uninstaller",
                        type: "freemium",
                        description: "功能强大的卸载工具，提供猎人模式进行精准卸载。免费版功能有限，付费版提供更深度的残留清理和监控安装功能",
                        category: "卸载工具",
                        links: [
                            { text: "官网", url: "https://www.revouninstaller.com/" }
                        ]
                    },
                    {
                        name: "Autoruns",
                        type: "free",
                        description: "Microsoft 官方出品的启动项管理工具。可以显示几乎所有自动启动的程序、服务、驱动程序、编解码器等",
                        category: "启动项管理",
                        links: [
                            { text: "官网", url: "https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns" }
                        ]
                    },
                    {
                        name: "ContextMenuManager",
                        type: "free",
                        description: "开源工具，专门用于管理和清理 Windows 系统右键菜单项",
                        category: "右键菜单管理",
                        links: [
                            { text: "Github", url: "https://github.com/BluePointLilac/ContextMenuManager" }
                        ]
                    }
                ]
            },
            diskFile: {
                title: "磁盘与文件管理",
                icon: "💾",
                software: [
                    {
                        name: "WizTree",
                        type: "free",
                        description: "极速磁盘空间分析工具，通过读取 MFT（主文件表）快速定位大文件和文件夹占用情况",
                        category: "磁盘管理",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://diskanalyzer.com/download" }
                        ]
                    },
                    {
                        name: "Everything",
                        type: "free",
                        description: "基于文件名的最快速文件搜索工具，资源占用极低。仅搜索文件和文件夹名称",
                        category: "文件搜索",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.voidtools.com/downloads/" }
                        ]
                    },
                    {
                        name: "Listary",
                        type: "freemium",
                        description: "文件搜索与快速启动工具。搜索速度快，支持搜索文件、文件夹、应用。提供收藏夹、快速跳转、命令执行等附加功能",
                        category: "文件搜索",
                        links: [
                            { text: "官网", url: "https://www.listary.com/" }
                        ]
                    },
                    {
                        name: "Fluent Search",
                        type: "free",
                        description: "智能化的全局搜索工具。不仅搜索文件，还能搜索应用、进程、浏览器历史、应用内内容。支持屏幕搜索、文件预览和插件扩展",
                        category: "文件搜索",
                        links: [
                            { text: "官网", url: "https://fluentsearch.net/" }
                        ]
                    },
                    {
                        name: "Bulk Rename Utility",
                        type: "free",
                        description: "功能极为强大的批量重命名工具，支持正则表达式和复杂的重命名规则",
                        category: "文件管理",
                        links: [
                            { text: "官网", url: "https://www.bulkrenameutility.co.uk/" }
                        ]
                    },
                    {
                        name: "Duplicate Cleaner",
                        type: "freemium",
                        description: "专业的重复文件查找和删除工具，支持根据内容、名称、日期等多种方式比对",
                        category: "文件管理",
                        links: [
                            { text: "官网", url: "https://www.duplicatecleaner.com/" }
                        ]
                    },
                    {
                        name: "Beyond Compare",
                        type: "paid",
                        description: "专业的文件和文件夹比较工具。支持文件内容、文件夹结构、FTP、云存储等多种数据源的比较、合并和同步",
                        category: "文件管理",
                        links: [
                            { text: "官网", url: "https://www.scootersoftware.com/" }
                        ]
                    }
                ]
            },
            compression: {
                title: "压缩与解压缩",
                icon: "📁",
                software: [
                    {
                        name: "NanaZip",
                        type: "free",
                        description: "开源，基于 7-Zip 的现代化版本。专为 Windows 11 设计，完美支持新的右键菜单和 Mica 视觉效果",
                        category: "压缩工具",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/M2Team/NanaZip" }
                        ]
                    },
                    {
                        name: "Bandizip",
                        type: "freemium",
                        description: "支持格式广泛（包括 ZIP, RAR, 7Z 等），兼容性强，解压速度快。免费版有广告，付费版体验更佳",
                        category: "压缩工具",
                        links: [
                            { text: "官网", url: "https://www.bandisoft.com/bandizip/" }
                        ]
                    },
                    {
                        name: "7-Zip",
                        type: "free",
                        description: "开源，拥有最高的压缩率（7z 格式），无广告。界面极为简洁，不支持创建 RAR 格式",
                        category: "压缩工具",
                        links: [
                            { text: "官网", url: "https://www.7-zip.org/download.html" }
                        ]
                    }
                ]
            },
            hardware: {
                title: "硬件检测与性能",
                icon: "⚡",
                software: [
                    {
                        name: "图吧工具箱",
                        type: "free",
                        description: "集合了大量硬件检测和系统维护工具的工具箱，功能全面但体积庞大",
                        category: "硬件检测",
                        links: [
                            { text: "官网", url: "http://www.tbtool.cn/" }
                        ]
                    }
                ]
            },
            networkMonitor: {
                title: "网络监控与工具",
                icon: "📡",
                software: [
                    {
                        name: "GlassWire",
                        type: "freemium",
                        description: "美观的网络监控和防火墙工具，能可视化网络活动，帮助用户识别异常流量",
                        category: "网络监控",
                        links: [
                            { text: "官网", url: "https://www.glasswire.com/" }
                        ]
                    },
                    {
                        name: "TrafficMonitor",
                        type: "free",
                        description: "开源的网速监控悬浮窗软件，简洁实用，可显示当前网速、CPU 及内存利用率",
                        category: "网络监控",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/zhongyang219/TrafficMonitor" }
                        ]
                    },
                    {
                        name: "Acrylic DNS Proxy",
                        type: "free",
                        description: "Windows 本地 DNS 代理。通过缓存 DNS 响应提高网页加载性能，并支持自定义 HOSTS 文件来屏蔽广告",
                        category: "网络工具",
                        links: [
                            { text: "官网", url: "http://mayakron.altervista.org/wikibase/show.php?id=AcrylicHome" }
                        ]
                    }
                ]
            }
        }
    },

    // 办公与学习
    office: {
        title: "办公与学习",
        icon: "📚",
        subcategories: {
            officeSuite: {
                title: "办公套件",
                icon: "💼",
                software: [
                    {
                        name: "Microsoft Office",
                        type: "paid",
                        description: "行业标准的办公套件。建议安装 LTSC 版或绿色精简版。必装组件 {Word, Excel, PowerPoint}，可选组件 {Outlook, OneNote}",
                        category: "办公套件",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.office.com/" }
                        ]
                    }
                ]
            },
            noteMindMap: {
                title: "笔记与思维导图",
                icon: "🧠",
                software: [
                    {
                        name: "Obsidian",
                        type: "freemium",
                        description: "基于 Markdown 的双向链接笔记软件，适合构建个人知识库。数据本地储存，插件生态丰富",
                        category: "笔记管理",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://obsidian.md/download" }
                        ]
                    },
                    {
                        name: "X-Mind",
                        type: "freemium",
                        description: "流行的思维导图工具，界面美观，功能全面",
                        category: "思维导图",
                        links: [
                            { text: "官网", url: "https://www.xmind.net/" }
                        ]
                    }
                ]
            },
            documentBook: {
                title: "文档与电子书",
                icon: "📖",
                software: [
                    {
                        name: "VS Code",
                        type: "free",
                        description: "微软出品的现代化代码编辑器，也可作为优秀的 Markdown 编辑器使用，通过插件支持实时预览、语法高亮等",
                        category: "文档编辑",
                        links: [
                            { text: "官网", url: "https://code.visualstudio.com/download" }
                        ]
                    },
                    {
                        name: "Typora",
                        type: "paid",
                        description: "简洁优雅的 Markdown 编辑器，提供所见即所得的编辑体验",
                        category: "文档编辑",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://typora.io/" }
                        ]
                    },
                    {
                        name: "EmEditor",
                        type: "freemium",
                        description: "强大的文本编辑器，特别擅长处理大型文件（如日志文件）和多种编码，速度极快",
                        category: "文档编辑",
                        links: [
                            { text: "官网", url: "https://www.emeditor.com/" }
                        ]
                    },
                    {
                        name: "Calibre",
                        type: "free",
                        description: "开源、强大的电子书管理工具。支持图书馆管理、格式转换（EPUB, MOBI, PDF 等）和元数据编辑",
                        category: "电子书管理",
                        links: [
                            { text: "官网", url: "https://calibre-ebook.com/download" }
                        ]
                    },
                    {
                        name: "SumatraPDF",
                        type: "free",
                        description: "开源、极其轻量的文档阅读器。启动速度快，支持 PDF, EPUB, MOBI, XPS, DjVu, CHM 等格式",
                        category: "文档阅读",
                        links: [
                            { text: "官网", url: "https://www.sumatrapdfreader.org/download-free-pdf-viewer.html" }
                        ]
                    }
                ]
            },
            translateOCR: {
                title: "翻译与OCR",
                icon: "🌐",
                software: [
                    {
                        name: "Pot (Translator)",
                        type: "free",
                        description: "开源、跨平台的划词翻译和 OCR 软件。支持接入多种翻译源（如 DeepL, Google, OpenAI）",
                        category: "翻译工具",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/pot-app/pot-desktop" }
                        ]
                    },
                    {
                        name: "Umi-OCR",
                        type: "free",
                        description: "开源、免费的离线 OCR 工具。支持截屏识别、批量图片识别、PDF 文档识别，可排除水印/页眉页脚。内置多国语言库",
                        category: "OCR工具",
                        links: [
                            { text: "Github", url: "https://github.com/hiroi-sora/Umi-OCR" }
                        ]
                    }
                ]
            }
        }
    },

    // 媒体与娱乐
    media: {
        title: "媒体与娱乐",
        icon: "🎵",
        subcategories: {
            videoAudio: {
                title: "影音播放",
                icon: "🎬",
                software: [
                    {
                        name: "PotPlayer",
                        type: "free",
                        description: "Windows 平台最流行的全能视频播放器。支持格式广泛，解码能力强，设置选项丰富",
                        category: "视频播放",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://potplayer.daum.net/" }
                        ]
                    },
                    {
                        name: "mpv",
                        type: "free",
                        description: "开源、跨平台的多媒体播放器。极其轻量，高度可定制（通过配置文件和脚本），适合追求极简和高性能的用户",
                        category: "视频播放",
                        links: [
                            { text: "官网", url: "https://mpv.io/" }
                        ]
                    },
                    {
                        name: "Splayer",
                        type: "free",
                        description: "开源，基于 Electron 的第三方网易云音乐播放器，界面简洁美观",
                        category: "音乐播放",
                        links: [
                            { text: "Github", url: "https://github.com/SPlayerTeam/SPlayer" }
                        ]
                    },
                    {
                        name: "Listen1",
                        type: "free",
                        description: "开源的聚合音乐播放器，支持多个音乐平台（网易云、QQ音乐等）的歌单同步和播放",
                        category: "音乐播放",
                        links: [
                            { text: "官网", url: "http://listen1.github.io/listen1/" }
                        ]
                    },
                    {
                        name: "LX Music (洛雪音乐助手)",
                        type: "free",
                        description: "开源，基于 Electron 的跨平台音乐软件，聚合多个音乐平台资源搜索和下载",
                        category: "音乐播放",
                        links: [
                            { text: "Github", url: "https://github.com/lyswhut/lx-music-desktop" }
                        ]
                    }
                ]
            },
            imageProcessing: {
                title: "图片查看与处理",
                icon: "🖼️",
                software: [
                    {
                        name: "ImageGlass",
                        type: "free",
                        description: "开源、轻量的图片查看器。界面现代，速度快，支持多种图像格式（包括 RAW, WEBP）",
                        category: "图片查看",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://imageglass.org/download" }
                        ]
                    },
                    {
                        name: "GIMP",
                        type: "free",
                        description: "开源的图像编辑器，可视为 Adobe Photoshop 的免费替代品",
                        category: "图像编辑",
                        links: [
                            { text: "官网", url: "https://www.gimp.org/downloads/" }
                        ]
                    },
                    {
                        name: "FastStone Image Viewer",
                        type: "free",
                        description: "快速的图像查看和管理工具",
                        category: "图片查看",
                        links: [
                            { text: "官网", url: "https://www.faststone.org/FSViewerDetail.htm" }
                        ]
                    }
                ]
            },
            audioProcessing: {
                title: "音频处理",
                icon: "🎵",
                software: [
                    {
                        name: "Audacity",
                        type: "free",
                        description: "开源、跨平台的音频编辑和录音软件",
                        category: "音频编辑",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.audacityteam.org/download/" }
                        ]
                    }
                ]
            },
            screenCapture: {
                title: "录屏与截图",
                icon: "📸",
                software: [
                    {
                        name: "PixPin",
                        type: "freemium",
                        description: "新一代截图、贴图工具。功能全面，体验优秀，可视为 Snipaste 的上位替代。支持长截图、GIF 录制、OCR 文字识别等",
                        category: "截图工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://pixpinapp.com/" }
                        ]
                    },
                    {
                        name: "Snipaste",
                        type: "freemium",
                        description: "经典的截图和贴图工具。免费版基础功能扎实，但缺乏长截图、GIF 录制等高级功能",
                        category: "截图工具",
                        links: [
                            { text: "官网", url: "https://www.snipaste.com/" }
                        ]
                    },
                    {
                        name: "ShareX",
                        type: "free",
                        description: "开源、功能最强大的截图与录屏工具。支持丰富的自动化工作流和多种分享选项，适合技术用户和重度用户",
                        category: "截图工具",
                        links: [
                            { text: "官网", url: "https://getsharex.com/" }
                        ]
                    },
                    {
                        name: "FastStone Capture",
                        type: "freemium",
                        description: "经典的截图和录屏工具",
                        category: "截图工具",
                        links: [
                            { text: "官网", url: "https://www.faststone.org/FSCaptureDetail.htm" }
                        ]
                    },
                    {
                        name: "EV 录屏",
                        type: "freemium",
                        description: "国产录屏软件，轻量易用，适合简单的屏幕录制需求",
                        category: "录屏软件",
                        links: [
                            { text: "官网", url: "https://www.ieway.cn/evcapture.html" }
                        ]
                    },
                    {
                        name: "OBS Studio",
                        type: "free",
                        description: "开源、专业的视频录制和直播推流软件。功能强大，适合高质量录屏和流媒体制作",
                        category: "录屏软件",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://obsproject.com/download" }
                        ]
                    }
                ]
            },
            professionalEdit: {
                title: "专业多媒体编辑",
                icon: "🎨",
                software: [
                    {
                        name: "Adobe Photoshop 2024",
                        type: "paid",
                        description: "专业的图像编辑软件",
                        category: "图像编辑",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.adobe.com/products/photoshop.html" }
                        ]
                    },
                    {
                        name: "Adobe Premiere Pro 2024",
                        type: "paid",
                        description: "专业的视频编辑软件",
                        category: "视频编辑",
                        links: [
                            { text: "官网", url: "https://www.adobe.com/products/premiere.html" }
                        ]
                    },
                    {
                        name: "Adobe After Effects 2025",
                        type: "paid",
                        description: "专业的动态图形和视觉效果软件",
                        category: "动效制作",
                        links: [
                            { text: "官网", url: "https://www.adobe.com/products/aftereffects.html" }
                        ]
                    },
                    {
                        name: "HandBrake",
                        type: "free",
                        description: "开源的视频转码工具，用于高效转换和压缩多种视频格式",
                        category: "视频处理",
                        links: [
                            { text: "官网", url: "https://handbrake.fr/downloads.php" }
                        ]
                    }
                ]
            },
            gaming: {
                title: "游戏",
                icon: "🎮",
                software: [
                    {
                        name: "Steam",
                        type: "free",
                        description: "主流的游戏分发平台",
                        category: "游戏平台",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://store.steampowered.com/" }
                        ]
                    },
                    {
                        name: "Epic Games Store",
                        type: "free",
                        description: "游戏分发平台，经常赠送免费游戏",
                        category: "游戏平台",
                        links: [
                            { text: "官网", url: "https://www.epicgames.com/store/" }
                        ]
                    },
                    {
                        name: "UU加速器",
                        type: "freemium",
                        description: "网络游戏加速工具",
                        category: "游戏工具",
                        links: [
                            { text: "官网", url: "https://www.uu.163.com/" }
                        ]
                    }
                ]
            }
        }
    },

    // 效率工具与个性化
    productivity: {
        title: "效率工具与个性化",
        icon: "⚡",
        subcategories: {
            quickLaunch: {
                title: "快速启动与多功能工具箱",
                icon: "🚀",
                software: [
                    {
                        name: "Quicker",
                        type: "freemium",
                        description: "Windows 平台的效率神器，通过鼠标中键或快捷键呼出动作面板，实现快速操作和自动化流程。生态丰富，高度可定制",
                        category: "快速启动",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://getquicker.net/Download" }
                        ]
                    },
                    {
                        name: "rubick",
                        type: "free",
                        description: "开源的工具箱软件，uTools 的替代品。基于 Electron，支持插件扩展",
                        category: "工具箱",
                        links: [
                            { text: "Github", url: "https://github.com/rubickCenter/rubick" }
                        ]
                    },
                    {
                        name: "Flow Launcher",
                        type: "free",
                        description: "开源的快速启动器（Launcher）。通过快捷键呼出搜索框，快速查找应用、文件、执行命令等。插件生态活跃",
                        category: "快速启动",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/Flow-Launcher/Flow.Launcher/releases" }
                        ]
                    },
                    {
                        name: "Microsoft PowerToys",
                        type: "free",
                        description: "微软官方出品的 Windows 增强工具集。包含颜色选择器、窗口布局管理（FancyZones）、批量重命名、键盘映射等实用功能",
                        category: "系统增强",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/microsoft/PowerToys/releases" }
                        ]
                    }
                ]
            },
            automation: {
                title: "自动化与剪贴板",
                icon: "🤖",
                software: [
                    {
                        name: "AutoHotkey",
                        type: "free",
                        description: "开源、强大的自动化脚本语言。用于创建自定义快捷键、热字符串（文本替换）和复杂的自动化任务",
                        category: "自动化工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.autohotkey.com/download/" }
                        ]
                    },
                    {
                        name: "Ditto",
                        type: "free",
                        description: "开源的剪贴板历史记录增强工具，支持文本、图片等多种格式的记录和搜索",
                        category: "剪贴板工具",
                        links: [
                            { text: "官网", url: "https://ditto-cp.sourceforge.io/" }
                        ]
                    }
                ]
            },
            timeManagement: {
                title: "时间管理",
                icon: "⏰",
                software: [
                    {
                        name: "ActivityWatch",
                        type: "free",
                        description: "开源、跨平台、注重隐私的时间追踪工具。自动记录用户在各个应用和网站上的活动时间，并提供分析报告",
                        category: "时间管理",
                        links: [
                            { text: "Github", url: "https://github.com/ActivityWatch/activitywatch" }
                        ]
                    }
                ]
            },
            systemBeautify: {
                title: "系统美化与管理",
                icon: "🎨",
                software: [
                    {
                        name: "ExplorerPatcher",
                        type: "free",
                        description: "用于个性化自定义 Windows 11 的任务栏、开始菜单和文件资源管理器，例如恢复 Win10 风格的任务栏",
                        category: "系统美化",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/valinet/ExplorerPatcher" }
                        ]
                    },
                    {
                        name: "TranslucentTB",
                        type: "free",
                        description: "开源工具，用于实现任务栏透明或半透明效果",
                        category: "系统美化",
                        links: [
                            { text: "Github", url: "https://github.com/TranslucentTB/TranslucentTB" }
                        ]
                    },
                    {
                        name: "RoundedTB",
                        type: "free",
                        description: "开源工具，用于实现圆角任务栏效果",
                        category: "系统美化",
                        links: [
                            { text: "Github", url: "https://github.com/torchgm/RoundedTB" }
                        ]
                    },
                    {
                        name: "MacType",
                        type: "free",
                        description: "开源的字体渲染引擎，用于优化 Windows 的字体显示效果，使其更接近 macOS 的渲染风格",
                        category: "字体渲染",
                        links: [
                            { text: "Github", url: "https://github.com/snowie2000/mactype" }
                        ]
                    }
                ]
            },
            desktopBeautify: {
                title: "桌面美化与整理",
                icon: "🖥️",
                software: [
                    {
                        name: "Rainmeter",
                        type: "free",
                        description: "开源的桌面定制工具，通过加载各种皮肤（Skins）在桌面上显示系统信息、时钟、天气等小部件",
                        category: "桌面美化",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.rainmeter.net/discover/" }
                        ]
                    },
                    {
                        name: "Lively Wallpaper",
                        type: "free",
                        description: "开源的动态壁纸软件，支持视频、网页等作为壁纸。Wallpaper Engine 的免费替代品",
                        category: "动态壁纸",
                        links: [
                            { text: "官网", url: "https://livelywallpaper.net/" }
                        ]
                    },
                    {
                        name: "Wallpaper Engine: 壁纸引擎",
                        type: "paid",
                        description: "功能强大的动态壁纸软件，拥有庞大的创意工坊资源。需在 Steam 上购买",
                        category: "动态壁纸",
                        links: [
                            { text: "Steam", url: "https://store.steampowered.com/app/431960/Wallpaper_Engine/" }
                        ]
                    },
                    {
                        name: "Fences",
                        type: "paid",
                        description: "著名的桌面图标整理工具，通过创建栅栏分区来组织桌面图标",
                        category: "桌面整理",
                        links: [
                            { text: "官网", url: "https://www.stardock.com/products/fences/" }
                        ]
                    },
                    {
                        name: "MyDockFinder",
                        type: "free",
                        description: "高仿 macOS 风格的 Dock 栏和 Finder 工具栏，用于桌面美化和快速启动",
                        category: "桌面美化",
                        links: [
                            { text: "Github", url: "https://github.com/mydockfinder/mydockfinder" }
                        ]
                    }
                ]
            },
            filePreview: {
                title: "文件预览",
                icon: "👁️",
                software: [
                    {
                        name: "QuickLook",
                        type: "free",
                        description: "开源工具，为 Windows 带来类似 macOS 的空格键快速预览功能。支持图片、视频、文档、代码等多种格式",
                        category: "文件预览",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/QL-Win/QuickLook" }
                        ]
                    }
                ]
            }
        }
    },

    // 网络与通信
    network: {
        title: "网络与通信",
        icon: "🌐",
        subcategories: {
            browsers: {
                title: "浏览器",
                icon: "🌏",
                software: [
                    {
                        name: "Google Chrome",
                        type: "free",
                        description: "市场占有率最高的主流浏览器，性能强劲，扩展生态最丰富",
                        category: "浏览器",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.google.com/chrome/" }
                        ]
                    },
                    {
                        name: "Vivaldi",
                        type: "free",
                        description: "高度可定制的浏览器，提供标签页分组、侧边栏、内置笔记等功能，适合高级用户和极客",
                        category: "浏览器",
                        links: [
                            { text: "官网", url: "https://vivaldi.com/" }
                        ]
                    },
                    {
                        name: "Brave",
                        type: "free",
                        description: "开源，注重隐私保护和广告拦截的浏览器。内置 Tor 和加密货币奖励功能",
                        category: "浏览器",
                        links: [
                            { text: "官网", url: "https://brave.com/" }
                        ]
                    },
                    {
                        name: "Firefox",
                        type: "free",
                        description: "非 Chromium 内核浏览器的首选。注重隐私，性能优秀",
                        category: "浏览器",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.mozilla.org/firefox/" }
                        ]
                    },
                    {
                        name: "Zen Browser",
                        type: "free",
                        description: "开源，基于 Firefox 内核，强调自定义性和美观性。提供垂直标签栏、工作区管理和分屏视图，适合需要开启大量标签页的用户",
                        category: "浏览器",
                        links: [
                            { text: "官网", url: "https://zen-browser.app/" }
                        ]
                    }
                ]
            },
            downloadTools: {
                title: "下载工具",
                icon: "⬇️",
                software: [
                    {
                        name: "Internet Download Manager (IDM)",
                        type: "paid",
                        description: "老牌的多线程下载工具，下载速度快，支持断点续传和浏览器集成。不支持 BT/磁力",
                        category: "下载工具",
                        links: [
                            { text: "官网", url: "https://www.internetdownloadmanager.com/" }
                        ]
                    },
                    {
                        name: "Motrix",
                        type: "free",
                        description: "开源、跨平台的全能下载工具。界面简洁美观，支持 HTTP、FTP、BitTorrent、Magnet 等多种协议",
                        category: "下载工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://motrix.app/" }
                        ]
                    }
                ]
            },
            fileTransfer: {
                title: "文件传输",
                icon: "📤",
                software: [
                    {
                        name: "LocalSend",
                        type: "free",
                        description: "开源、跨平台的局域网文件传输工具。AirDrop 的优秀替代品，无需互联网连接，安全快速",
                        category: "文件传输",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/localsend/localsend" }
                        ]
                    }
                ]
            },
            cloudStorage: {
                title: "网盘服务",
                icon: "☁️",
                software: [
                    {
                        name: "百度网盘",
                        type: "freemium",
                        description: "国内主流的云存储服务，拥有庞大的用户群体和丰富的资源",
                        category: "网盘服务",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://pan.baidu.com/" }
                        ]
                    },
                    {
                        name: "夸克网盘",
                        type: "freemium",
                        description: "阿里巴巴旗下的云存储服务，界面简洁，传输速度快",
                        category: "网盘服务",
                        links: [
                            { text: "官网", url: "https://pan.quark.cn/" }
                        ]
                    },
                    {
                        name: "Microsoft OneDrive",
                        type: "freemium",
                        description: "微软云存储服务，Win11 已深度集成在系统中",
                        category: "网盘服务",
                        links: [
                            { text: "官网", url: "https://onedrive.live.com/" }
                        ]
                    },
                    {
                        name: "Google Drive",
                        type: "freemium",
                        description: "谷歌云存储服务，与 Google 生态系统深度集成",
                        category: "网盘服务",
                        links: [
                            { text: "官网", url: "https://drive.google.com/" }
                        ]
                    }
                ]
            },
            socialRemote: {
                title: "社交与远程控制",
                icon: "💬",
                software: [
                    {
                        name: "微信 (WeChat)",
                        type: "free",
                        description: "中国最主流的即时通讯软件，支持文字、语音、视频通话和朋友圈等功能",
                        category: "社交通信",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://weixin.qq.com/" }
                        ]
                    },
                    {
                        name: "TIM / QQ",
                        type: "free",
                        description: "腾讯即时通讯软件，TIM 是 QQ 的轻量级办公版本",
                        category: "社交通信",
                        links: [
                            { text: "官网", url: "https://tim.qq.com/" }
                        ]
                    },
                    {
                        name: "腾讯会议",
                        type: "freemium",
                        description: "腾讯推出的专业视频会议软件，支持多人在线会议和屏幕共享",
                        category: "视频会议",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://meeting.tencent.com/" }
                        ]
                    },
                    {
                        name: "Discord",
                        type: "free",
                        description: "面向游戏玩家和社区的语音、视频和文字交流平台",
                        category: "社交通信",
                        links: [
                            { text: "官网", url: "https://discord.com/" }
                        ]
                    },
                    {
                        name: "Todesk",
                        type: "freemium",
                        description: "流畅的远程控制软件，支持跨平台远程桌面访问",
                        category: "远程控制",
                        links: [
                            { text: "官网", url: "https://www.todesk.com/" }
                        ]
                    }
                ]
            }
        }
    },

    // 安全与隐私
    security: {
        title: "安全与隐私",
        icon: "🔒",
        subcategories: {
            securityProtection: {
                title: "安全防护",
                icon: "🛡️",
                software: [
                    {
                        name: "火绒安全软件",
                        type: "free",
                        description: "轻量级的安全软件，安静不打扰，特色功能包括弹窗拦截和启动项管理",
                        category: "安全防护",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.huorong.cn/person/" }
                        ]
                    },
                    {
                        name: "AdwCleaner",
                        type: "free",
                        description: "免费的恶意软件清除工具，专注于清除广告软件 (Adware)、潜在有害程序 (PUP) 和浏览器劫持",
                        category: "安全防护",
                        links: [
                            { text: "官网", url: "https://www.malwarebytes.com/adwcleaner" }
                        ]
                    },
                    {
                        name: "Sandboxie Plus",
                        type: "free",
                        description: "开源的沙盒隔离软件。用于在隔离环境中运行不信任的程序，防止它们对系统造成永久性更改",
                        category: "安全防护",
                        links: [
                            { text: "Github", url: "https://github.com/sandboxie-plus/Sandboxie/releases" }
                        ]
                    }
                ]
            },
            backupEncryption: {
                title: "备份与加密",
                icon: "🔐",
                software: [
                    {
                        name: "AOMEI Backupper Standard（傲梅轻松备份）",
                        type: "freemium",
                        description: "功能全面的系统和文件备份软件。支持系统备份、分区备份、定时自动备份",
                        category: "备份工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.aomeitech.com/ab/standard.html" }
                        ]
                    },
                    {
                        name: "VeraCrypt",
                        type: "free",
                        description: "开源的磁盘加密工具，用于创建加密卷或加密整个分区/驱动器。相比 Windows 自带的 BitLocker，VeraCrypt 跨平台且提供更多高级加密选项",
                        category: "加密工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.veracrypt.fr/en/Downloads.html" }
                        ]
                    }
                ]
            },
            passwordManagement: {
                title: "密码管理",
                icon: "🔑",
                software: [
                    {
                        name: "Bitwarden",  
                        type: "freemium",
                        description: "开源的密码管理器。免费版功能齐全，支持云端同步（也可自建服务器）。全平台支持，浏览器扩展和移动端应用自动填充体验流畅，开箱即用",
                        category: "密码管理",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://bitwarden.com/download/" }
                        ]
                    },
                    {
                        name: "KeePassXC",
                        type: "free",
                        description: "开源、纯本地的密码管理器。数据库保存在本地，安全性高，但需要用户自行配置同步（如配合网盘）。插件生态完善",
                        category: "密码管理",
                        links: [
                            { text: "官网", url: "https://keepassxc.org/download/" }
                        ]
                    }
                ]
            },
            proxyTools: {
                title: "代理工具",
                icon: "🌐",
                software: [
                    {
                        name: "Clash Verge Rev",
                        type: "free",
                        description: "开源的代理工具客户端，基于 Clash Meta 内核，界面美观，功能丰富",
                        category: "代理工具",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/clash-verge-rev/clash-verge-rev" }
                        ]
                    }
                ]
            }
        }
    },

    // 开发与编程
    development: {
        title: "开发与编程",
        icon: "💻",
        subcategories: {
            codeEditor: {
                title: "代码编辑器与IDE",
                icon: "📝",
                software: [
                    {
                        name: "VS Code",
                        type: "free",
                        description: "微软开源的现代代码编辑器，被誉为最受欢迎的开发工具。拥有强大的智能提示、调试功能和丰富的插件市场。支持Git集成、多光标编辑、代码片段等高效功能",
                        category: "代码编辑器",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://code.visualstudio.com/download" }
                        ]
                    }
                ]
            },
            versionControl: {
                title: "版本控制",
                icon: "🔀",
                software: [
                    {
                        name: "Git",
                        type: "free",
                        description: "分布式版本控制系统，开发者必备工具",
                        category: "版本控制",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://git-scm.com/download/win" }
                        ]
                    }
                ]
            },
            containerization: {
                title: "容器化",
                icon: "📦",
                software: [
                    {
                        name: "Docker Desktop",
                        type: "freemium",
                        description: "容器化应用开发平台，简化应用部署和管理",
                        category: "容器工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://www.docker.com/products/docker-desktop/" }
                        ]
                    }
                ]
            },
            devTools: {
                title: "开发辅助工具",
                icon: "🛠️",
                software: [
                    {
                        name: "MobaXterm",
                        type: "freemium",
                        description: "功能强大的 SSH 客户端和终端工具集，支持 X11 转发、SFTP 传输等",
                        category: "终端工具",
                        featured: true,
                        links: [
                            { text: "官网", url: "https://mobaxterm.mobatek.net/download.html" }
                        ]
                    },
                    {
                        name: "Postman",
                        type: "freemium",
                        description: "API开发和测试工具，支持RESTful API测试",
                        category: "API工具",
                        links: [
                            { text: "官网", url: "https://www.postman.com/downloads/" }
                        ]
                    },
                    {
                        name: "Pandoc",
                        type: "free",
                        description: "开源的通用文档转换工具，可以在 Markdown, HTML, PDF, DOCX 等多种格式之间转换",
                        category: "文档处理",
                        links: [
                            { text: "官网", url: "https://pandoc.org/installing.html" }
                        ]
                    },
                    {
                        name: "FFmpeg",
                        type: "free",
                        description: "开源、强大的多媒体处理命令行工具，用于音视频的录制、转换、流处理",
                        category: "多媒体处理",
                        links: [
                            { text: "官网", url: "https://ffmpeg.org/download.html" }
                        ]
                    }
                ]
            },
            aiTools: {
                title: "LLM前端与AI工具",
                icon: "🤖",
                software: [
                    {
                        name: "OpenWebUI",
                        type: "free",
                        description: "开源、功能强大的 LLM（大语言模型）前端界面。支持 Ollama 和多种 API，社区生态完善",
                        category: "AI工具",
                        featured: true,
                        links: [
                            { text: "Github", url: "https://github.com/open-webui/open-webui" }
                        ]
                    },
                    {
                        name: "Cherry Studio",
                        type: "free",
                        description: "开源的 LLM 前端工具，界面简洁美观，支持多种模型接入",
                        category: "AI工具",
                        links: [
                            { text: "Github", url: "https://github.com/kangfenmao/cherry-studio" }
                        ]
                    },
                    {
                        name: "SillyTavern",
                        type: "free",
                        description: "开源 LLM 前端（俗称酒馆），主要用于 AI 角色扮演 (Role-playing)",
                        category: "AI工具",
                        links: [
                            { text: "Github", url: "https://github.com/SillyTavern/SillyTavern" }
                        ]
                    },
                    {
                        name: "RAGFlow",
                        type: "free",
                        description: "开源的 RAG（检索增强生成）引擎，用于构建基于私有知识库的智能问答系统",
                        category: "AI工具",
                        links: [
                            { text: "Github", url: "https://github.com/infiniflow/ragflow" }
                        ]
                    },
                    {
                        name: "ChatBox",
                        type: "freemium",
                        description: "跨平台的 LLM 客户端，支持配置多种模型 API (如 OpenAI, Claude)",
                        category: "AI工具",
                        links: [
                            { text: "Github", url: "https://github.com/Bin-Huang/chatbox" }
                        ]
                    }
                ]
            }
        }
    }
};

// 分类映射 - 用于导航和筛选
const categoryMapping = {
    all: { name: "推荐", icon: "⭐" },
    system: { name: "系统工具", icon: "⚙️" },
    office: { name: "办公学习", icon: "📚" },
    media: { name: "媒体娱乐", icon: "🎵" },
    productivity: { name: "效率工具", icon: "⚡" },
    network: { name: "网络通信", icon: "🌐" },
    security: { name: "安全隐私", icon: "🔒" },
    development: { name: "开发编程", icon: "💻" }
};

// 获取精选应用列表
function getFeaturedApps() {
    const featured = [];
    Object.values(softwareData).forEach(category => {
        if (category.subcategories) {
            // 新的子分类结构
            Object.values(category.subcategories).forEach(subcategory => {
                const featuredApps = subcategory.software.filter(app => app.featured);
                featured.push(...featuredApps);
            });
        } else if (category.software) {
            // 兼容旧的单层结构
            const featuredApps = category.software.filter(app => app.featured);
            featured.push(...featuredApps);
        }
    });
    return featured.slice(0, 8); // 返回前8个精选应用
}