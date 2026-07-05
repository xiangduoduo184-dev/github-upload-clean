import React from 'react';
import ReactDOM from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Clapperboard,
  Film,
  Layers3,
  Menu,
  Play,
  Wand2,
  X,
} from 'lucide-react';
import BorderGlow from './BorderGlow';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

type PortfolioVideo = {
  title: string;
  type: string;
  description: string;
  videoSrc: string;
  externalUrl?: string;
};

const HERO_VIDEO = '/videos/jidaozhe-demo.mp4';

const stats = [
  { value: '50集', label: 'AI辅助动漫单季视觉生成管控' },
  { value: '20+', label: 'AIGC制作团队管理与培训' },
  { value: '10节', label: '体系化AI漫剧录播课程' },
  { value: '35%', label: '提示词与SOP提升协作效率' },
];

const skills = [
  'AI短剧策划',
  '提示词工程',
  '角色一致性',
  '动态分镜',
  '可灵 / Seedance 2.0',
  'banana / lovart',
  'AIGC工作流SOP',
  '课程搭建与带教',
];

const workflow = [
  {
    icon: BookOpen,
    title: '剧本与分镜拆解',
    text: '把短剧主题、人物关系、爽点节奏拆成可生成、可复用、可交付的镜头任务。',
  },
  {
    icon: Wand2,
    title: '提示词与视觉设定',
    text: '围绕角色一致性、画面风格、镜头运动和光影氛围搭建多模型提示词模板。',
  },
  {
    icon: Clapperboard,
    title: '动态生成与成片整合',
    text: '使用可灵、Seedance等工具完成动作、口型、表情与镜头衔接，再进入剪辑整合。',
  },
];

const projects = [
  {
    title: '《攻略你你不理》',
    tag: 'AI动漫 / 连续剧集',
    text: '在导演统筹下带领团队完成AI辅助动漫视觉生成，从分镜大模型生成到后期风格微调全程管控。',
  },
  {
    title: '正大集团广告宣传片',
    tag: '品牌广告 / AIGC视觉',
    text: '负责关键场景视觉生成与风格统一，结合banana、Seedance 2.0与lovart完成自然、健康、科技感的影像表达。',
  },
  {
    title: '女频虐恋demo',
    tag: '女频短剧 / 情绪叙事',
    text: '围绕人物关系、情绪递进与镜头氛围建立短剧化视觉表达，突出情感冲突和角色状态。',
  },
  {
    title: '《极盗者》预告片',
    tag: '预告片 / 高概念视觉',
    text: '独立完成全片AI视觉生成与镜头运动逻辑编排，快速迭代多版色调与光感方案。',
  },
];

const videos: PortfolioVideo[] = [
  {
    title: '女频虐恋demo',
    type: 'AI短剧',
    description: '女频情绪向短剧片段，适合展示人物关系、氛围营造与情感冲突。',
    videoSrc: '/videos/nvpin-nuelian-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/1Uaj7ZYEhDEM6FC2goGl9Sg?pwd=k1s5',
  },
  {
    title: '极盗者demo',
    type: '预告片',
    description: '高概念视觉预告片，用于展示电影感运镜、节奏控制与光影氛围。',
    videoSrc: '/videos/jidaozhe-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/1zg3cFUtvFmCSVrUi3zDrdQ?pwd=y7zn',
  },
  {
    title: '听见',
    type: '公益短片',
    description: '公益主题短片，聚焦真实情绪、人物关系与温暖克制的影像表达。',
    videoSrc: '/videos/tingjian.mp4',
    externalUrl: 'https://pan.baidu.com/s/1tADL5DX-exnGgEDOqL6GCg?pwd=e5r3',
  },
  {
    title: 'EP02-DEMO',
    type: '真人短剧',
    description: '重生年代真人短剧片段，展示年代叙事、人物状态和连续剧情画面。',
    videoSrc: '/videos/ep02-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/15zCvWGXfYyV8giewFUcTdQ?pwd=gqxn',
  },
  {
    title: '攻略你你不理demo',
    type: 'AI动漫',
    description: 'AI辅助动漫项目片段，展示连续角色动画、分镜生成和风格统一。',
    videoSrc: '/videos/gonglue-ni-ni-buli-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/1mXvgu-uz5y7_y64aMf4p-A?pwd=7d22',
  },
  {
    title: '科普不当法人demo',
    type: '科普短片',
    description: '知识科普类短视频作品，适合展示信息转译、脚本节奏和视觉包装。',
    videoSrc: '/videos/kepu-budang-faren-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/1G8MIF7hcso3fpb5ibkR9ng?pwd=8nsu',
  },
  {
    title: '游戏cg测试',
    type: '游戏CG',
    description: '游戏风格CG测试片段，展示风格化画面、动作镜头与视觉冲击力。',
    videoSrc: '/videos/youxi-cg-ceshi.mp4',
    externalUrl: 'https://pan.baidu.com/s/15LuT_G8Yaed5t3VOt1ob6g?pwd=rzxr',
  },
  {
    title: '正大集团demo',
    type: '品牌广告',
    description: '品牌广告宣传片片段，展示商业视觉、产品场景与统一调性控制。',
    videoSrc: '/videos/zhengda-jituan-demo.mp4',
    externalUrl: 'https://pan.baidu.com/s/1UujJ6bDxzpvNqZESVwAXNg?pwd=kt9p',
  },
  {
    title: '暗昼',
    type: '概念短片',
    description: '氛围向概念短片，适合展示暗调美术、镜头情绪和世界观质感。',
    videoSrc: '/videos/anzhou.mp4',
    externalUrl: 'https://pan.baidu.com/s/1-QJNXuhR9ZP3wPYCjdjH8Q?pwd=xy7q',
  },
  {
    title: '1沟通',
    type: '节日短片',
    description: '父亲节主题短片，展示节日定制内容、情绪叙事和温情表达。',
    videoSrc: '/videos/fuqinjie-1-goutong.mp4',
    externalUrl: 'https://pan.baidu.com/s/1p88HD0Hv3D1ZSDqf1Rvzrg?pwd=dyuy',
  },
];

const experiences = [
  {
    company: '深圳市燃梦帧画教育科技有限公司',
    role: 'AI漫剧专项讲师（项目制）',
    date: '2026.06 - 至今',
    text: '主导AI漫剧直播课程授课，覆盖仿真人、3D动画、2D动画、商业广告等方向，沉淀课程SOP、提示词模板与新人培训方法。',
  },
  {
    company: '湖南国漫影视传媒有限公司',
    role: '校企合作AIGC团队组长',
    date: '2026.02 - 2026.06',
    text: '带领20余人搭建AIGC辅助动漫制作管线，负责任务分配、质量审核、风格统一与项目进度管理。',
  },
  {
    company: '湖南拾意文化科技有限公司',
    role: 'AIGC设计师',
    date: '2025.10 - 2026.02',
    text: '为品牌广告、短剧及影视预告片提供AI图像与视频生成方案，完成从概念设计到成片输出的一体化生产。',
  },
];

function Navigation() {
  return (
    <nav className="anim-nav fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-black/45 px-5 py-3 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.28em]">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/70 text-[10px] font-black text-white">
            XZ
          </span>
          <span className="text-sm font-black tracking-normal text-white">向贞战</span>
          <span className="hidden text-[10px] font-bold tracking-[0.24em] text-white/54 sm:inline">v2026</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {[
            ['HOME', '#top'],
            ['INDEX', '#作品'],
            ['PROFILE', '#经历'],
            ['SKILLS', '#流程'],
            ['PROJECTS', '#作品'],
            ['CONTACT', '#联系'],
          ].map(([item, href], index) => (
            <a
              key={item}
              href={href}
              className={`rounded-full px-3 py-1.5 font-bold transition ${
                index === 0
                  ? 'bg-[#b88a4a] text-black shadow-[0_0_18px_rgba(184,138,74,0.36)]'
                  : 'text-white/62 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:2256415883@qq.com"
          className="hidden rounded-full border border-white/60 px-4 py-2 text-[10px] font-black tracking-[0.24em] text-white transition hover:bg-white hover:text-black md:inline-flex"
        >
          TALK TO ME
        </a>

        <button
          type="button"
          aria-label="打开菜单"
          className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}

function VideoCard({
  video,
  onOpen,
}: {
  video: PortfolioVideo;
  onOpen: (video: PortfolioVideo) => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [previewEnabled, setPreviewEnabled] = React.useState(false);

  const handlePreview = async () => {
    setPreviewEnabled(true);

    window.requestAnimationFrame(async () => {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.muted = true;
      try {
        await videoRef.current.play();
      } catch {
        // Preview can be blocked briefly on some devices until the user interacts.
      }
    });
  };

  const stopPreview = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleOpen = () => {
    if (video.externalUrl) {
      window.open(video.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    onOpen(video);
  };

  return (
    <article
      className="motion-card group overflow-hidden rounded-[8px] border border-white/10 bg-[#151515] shadow-2xl shadow-black/20"
      onMouseEnter={handlePreview}
      onMouseLeave={stopPreview}
      onFocus={handlePreview}
    >
      <button
        type="button"
        onClick={handleOpen}
        className="block w-full text-left"
        aria-label={video.externalUrl ? `在网盘观看${video.title}` : `播放${video.title}`}
      >
        <div className="motion-media relative aspect-video overflow-hidden bg-[#202020]">
          <video
            ref={videoRef}
            src={previewEnabled ? video.videoSrc : undefined}
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div
            className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(202,166,106,0.22),transparent_30%),linear-gradient(135deg,#18120d,#050505)] transition-opacity duration-700 ${
              previewEnabled ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-black/20" />
          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
            {video.type}
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-[#111111] shadow-xl transition group-hover:scale-105">
              <Play size={25} fill="currentColor" />
            </span>
          </div>
          {video.externalUrl && (
            <div className="absolute bottom-4 right-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur">
              网盘观看
            </div>
          )}
        </div>
      </button>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{video.title}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-[#f08a3c]" size={19} />
        </div>
        <p className="text-sm leading-6 text-white/62">{video.description}</p>
      </div>
    </article>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: PortfolioVideo | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!video) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, video]);

  if (!video) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto bg-black/86 px-4 py-6 backdrop-blur-md sm:px-8"
      role="dialog"
      aria-modal="true"
      onDoubleClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-[130] grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-white shadow-2xl shadow-black/50 backdrop-blur transition hover:bg-white hover:text-black sm:right-6 sm:top-6"
        aria-label="关闭视频"
      >
        <X size={23} />
      </button>

      <div className="w-[min(92vw,980px)]" onDoubleClick={onClose}>
        <div className="mb-4 pr-14">
          <div>
            <p className="text-sm font-bold text-[#f08a3c]">{video.type}</p>
            <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">{video.title}</h2>
          </div>
        </div>
        <div className="grid max-h-[68vh] place-items-center overflow-hidden rounded-[8px] border border-white/12 bg-black shadow-2xl shadow-black/50 sm:max-h-[70vh]">
          <video
            src={video.videoSrc}
            controls
            autoPlay
            playsInline
            onDoubleClick={(event) => {
              event.preventDefault();
              onClose();
            }}
            className="block h-auto max-h-[68vh] w-auto max-w-full object-contain sm:max-h-[70vh]"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/48">双击空白处或视频区域可退出播放</p>
      </div>
    </div>
  );
}

function App() {
  const appRef = React.useRef<HTMLDivElement | null>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const [heroVideoEnabled, setHeroVideoEnabled] = React.useState(false);
  const [activeVideo, setActiveVideo] = React.useState<PortfolioVideo | null>(null);

  React.useEffect(() => {
    const loadHero = () => setHeroVideoEnabled(true);
    const idleCallback = window.requestIdleCallback?.(loadHero, { timeout: 1200 });
    const fallback = window.setTimeout(loadHero, 900);

    return () => {
      window.clearTimeout(fallback);
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!heroVideoEnabled || !heroVideoRef.current) {
      return;
    }

    heroVideoRef.current.muted = true;
    void heroVideoRef.current.play().catch(() => {
      // Some browsers wait until the file has buffered before allowing autoplay.
    });
  }, [heroVideoEnabled]);

  React.useLayoutEffect(() => {
    const root = appRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      gsap.set(root.querySelectorAll('.opening-curtain, .opening-mark'), { display: 'none' });
      gsap.set(root.querySelectorAll('.motion-card, .motion-title, .motion-media, .hero-word-mask, .hero-kicker, .hero-name, .hero-subtitle, .hero-cta, .hero-play, .hero-status-pill, .anim-nav'), {
        clearProps: 'all',
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set('.opening-curtain', { scaleY: 1, transformOrigin: 'top center' });
      gsap.set('.opening-mark', { yPercent: 120, opacity: 0 });
      gsap.set('.anim-nav', { y: -34, opacity: 0 });
      gsap.set('.anim-hero-video', { scale: 1.16, filter: 'brightness(0.55) contrast(1.18)' });
      gsap.set('.hero-word-mask', { clipPath: 'inset(0 0 100% 0)' });
      gsap.set('.hero-word', { yPercent: 72, scaleX: 0.82, transformOrigin: 'left center' });
      gsap.set('.hero-kicker, .hero-name, .hero-subtitle, .hero-cta, .hero-play, .hero-status-pill', {
        y: 36,
        opacity: 0,
      });

      const opening = gsap.timeline({ defaults: { ease: 'power4.out' } });
      opening
        .to('.opening-mark', { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.12 }, 0.15)
        .to('.opening-mark', { yPercent: -110, opacity: 0, duration: 0.95, stagger: 0.08, ease: 'power3.inOut' }, 1.08)
        .to('.opening-curtain', { scaleY: 0, duration: 1.35, ease: 'expo.inOut' }, 1.15)
        .to('.anim-hero-video', { scale: 1, filter: 'brightness(0.78) contrast(1.08)', duration: 2.4, ease: 'expo.out' }, 1.3)
        .to('.anim-nav', { y: 0, opacity: 1, duration: 1.0 }, 1.62)
        .to('.hero-kicker, .hero-name', { y: 0, opacity: 1, duration: 1.0, stagger: 0.12 }, 1.76)
        .to('.hero-word-mask', { clipPath: 'inset(0 0 0% 0)', duration: 1.15, stagger: 0.16, ease: 'expo.inOut' }, 1.92)
        .to('.hero-word', { yPercent: 0, scaleX: 1, duration: 1.28, stagger: 0.16, ease: 'expo.out' }, 2.02)
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 1.05 }, 2.52)
        .to('.hero-cta, .hero-play, .hero-status-pill', { y: 0, opacity: 1, duration: 1.0, stagger: 0.08 }, 2.72);

      gsap.to('.anim-hero-video', {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>('.motion-section').forEach((section) => {
        const title = section.querySelectorAll('.motion-title');
        const cards = section.querySelectorAll('.motion-card');
        const media = section.querySelectorAll('.motion-media');

        if (title.length) {
          gsap.fromTo(
            title,
            { y: 110, scaleX: 0.78, opacity: 0, clipPath: 'inset(0 0 100% 0)', transformOrigin: 'left center' },
            {
              y: 0,
              scaleX: 1,
              opacity: 1,
              clipPath: 'inset(0 0 0% 0)',
              duration: 1.25,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 78%',
                once: true,
              },
            },
          );
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            { y: 84, opacity: 0, clipPath: 'inset(18% 0 0 0)', filter: 'blur(8px)' },
            {
              y: 0,
              opacity: 1,
              clipPath: 'inset(0% 0 0 0)',
              filter: 'blur(0px)',
              duration: 1.1,
              ease: 'power4.out',
              stagger: { each: 0.09, from: 'start' },
              scrollTrigger: {
                trigger: section,
                start: 'top 72%',
                once: true,
              },
            },
          );
        }

        media.forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 84%',
                once: true,
              },
            },
          );

          if (window.innerWidth >= 768) {
            gsap.to(item.querySelector('video'), {
              yPercent: -8,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            });
          }
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} id="top" className="min-h-screen bg-[#080808] text-white">
      <div className="opening-curtain fixed inset-0 z-[200] grid place-items-center bg-[#090806]">
        <div className="overflow-hidden text-center">
          <div className="opening-mark text-[11px] font-black uppercase tracking-[0.55em] text-[#caa66a]">opening reel</div>
          <div className="opening-mark mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl">向贞战</div>
          <div className="opening-mark mt-3 text-[10px] font-black uppercase tracking-[0.42em] text-white/48">aigc film portfolio</div>
        </div>
      </div>

      <Navigation />

      <main>
        <section className="hero-section relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-10">
          <video
            ref={heroVideoRef}
            className="anim-hero-video absolute inset-0 -z-30 h-full w-full object-cover"
            src={heroVideoEnabled ? HERO_VIDEO : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={(event) => {
              event.currentTarget.muted = true;
              void event.currentTarget.play().catch(() => undefined);
            }}
          />
          <div className="hero-media absolute inset-0 -z-20" />
          <div className="hero-scanlines absolute inset-0 -z-10" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,2,7,0.95),rgba(11,9,28,0.58)_50%,rgba(2,2,7,0.88))]" />
          <div className="hero-kicker pointer-events-none absolute left-2 top-20 hidden h-[58vh] items-center [writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.48em] text-white/42 lg:flex">
            building with ai / thinking with stories
          </div>

          <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.55fr]">
            <div className="max-w-4xl pb-4">
              <div className="hero-name mb-5 flex flex-wrap items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#caa66a] shadow-[0_0_14px_rgba(202,166,106,0.65)]" />
                <span className="text-3xl font-black tracking-normal text-white sm:text-4xl">向贞战</span>
                <span className="text-xs font-black uppercase tracking-[0.42em] text-[#caa66a]">AIGC DESIGNER</span>
              </div>

              <div className="hero-kicker mb-5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.34em] text-[#caa66a]">
                <span>&gt;</span>
                <span>&gt;</span>
                <span>film / commercial / aigc production / 2026</span>
              </div>

              <h1 className="hero-title max-w-4xl text-[clamp(4.2rem,11vw,9.2rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
                <span className="hero-word-mask block overflow-hidden pb-2"><span className="hero-word block">FILM</span></span>
                <span className="hero-word-mask block overflow-hidden pb-2"><span className="hero-word hero-title-outline block">AIGC</span></span>
                <span className="hero-word-mask block overflow-hidden pb-2"><span className="hero-word block text-[#caa66a] drop-shadow-[0_0_20px_rgba(202,166,106,0.35)]">DESIGN</span></span>
              </h1>

              <p className="hero-subtitle mt-7 border-l-2 border-[#b88a4a] pl-4 text-xl font-black tracking-normal text-white sm:text-2xl">
                AIGC设计师 / 真人影视与商业广告视觉制作
              </p>
              <p className="hero-subtitle mt-3 max-w-2xl text-xs uppercase leading-6 tracking-[0.32em] text-white/46">
                live-action film / commercial video / cinematic previsualization / ai workflow
              </p>

              <div className="hero-cta mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href="#作品"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#caa66a] px-7 py-3.5 text-sm font-black text-black shadow-[0_0_28px_rgba(202,166,106,0.22)] transition hover:bg-white"
                >
                  查看视频作品
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="#经历"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#caa66a]/45 bg-black/28 px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#caa66a]/16"
                >
                  了解经历
                </a>
              </div>
            </div>

            <div className="hidden pb-6 lg:block">
              <button
                type="button"
                onClick={() => setActiveVideo(videos[1])}
                className="hero-play mx-auto grid h-32 w-32 place-items-center rounded-full border border-[#caa66a]/45 bg-white text-[#17120d] shadow-[0_0_46px_rgba(202,166,106,0.24)] transition hover:scale-105"
                aria-label="播放极盗者demo"
              >
                <Play size={52} fill="currentColor" />
              </button>
              <div className="hero-play mx-auto mt-8 w-fit rounded-full border border-white/30 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-white/82">
                tap to play hero film
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 z-10 hidden items-center justify-between gap-6 lg:flex">
            <div className="hero-status-pill flex items-center gap-5 text-[10px] uppercase tracking-[0.28em] text-white/54">
              <span>scroll to boot</span>
              <span className="text-white/28">向下进入系统</span>
            </div>
            <div className="flex flex-wrap justify-end gap-3">
              {[
                'system online',
                'open to work',
                'aigc designer',
                'updated 2026',
              ].map((item, index) => (
                <span key={item} className="hero-status-pill rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/68 backdrop-blur">
                  <i className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-[#caa66a]' : index === 2 ? 'bg-[#f1eee7]' : index === 3 ? 'bg-[#9b5f35]' : 'bg-[#b88a4a]'}`} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="作品" className="motion-section px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Portfolio</p>
                <h2 className="motion-title mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">视频作品展示区</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {videos.map((video) => (
                <VideoCard key={video.title} video={video} onOpen={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>

        <section id="流程" className="motion-section border-y border-white/10 bg-[#10100f] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Workflow</p>
            <div className="mt-3 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <BorderGlow
                className="min-h-full"
                edgeSensitivity={24}
                glowColor="28 92 67"
                backgroundColor="#120f17"
                borderRadius={8}
                glowRadius={34}
                glowIntensity={1.45}
                coneSpread={28}
                animated
                colors={['#f08a3c', '#f4d35e', '#1f6f68']}
                fillOpacity={0.38}
              >
                <div className="flex min-h-[320px] flex-col justify-between p-6 sm:p-8">
                  <div>
                    <span className="inline-flex w-fit rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-bold text-[#f4d35e]">
                      AIGC Production Pipeline
                    </span>
                    <h2 className="motion-title mt-6 text-3xl font-black tracking-normal text-white sm:text-5xl">
                      从一句设定到一支可交付短片
                    </h2>
                  </div>
                  <p className="mt-8 max-w-md text-sm leading-7 text-white/64">
                    把创意拆成可执行镜头，把模型能力整理成稳定流程，让短剧、漫剧和广告项目可以持续产出。
                  </p>
                </div>
              </BorderGlow>

              <BorderGlow
                edgeSensitivity={28}
                glowColor="174 56 58"
                backgroundColor="#0d1715"
                borderRadius={8}
                glowRadius={38}
                glowIntensity={1.55}
                coneSpread={24}
                colors={['#1f6f68', '#38bdf8', '#f08a3c']}
                fillOpacity={0.42}
              >
                <div className="grid gap-0 p-4 sm:p-5">
                {workflow.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title} className="motion-card flex gap-5 border-b border-white/10 px-2 py-5 last:border-b-0 sm:px-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-white/10 text-[#f4d35e] ring-1 ring-white/12">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">{item.text}</p>
                      </div>
                    </article>
                  );
                })}
                </div>
              </BorderGlow>
            </div>
          </div>
        </section>

        <section className="motion-section px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="section-kicker">Selected Projects</p>
              <h2 className="motion-title mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">项目方向</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="motion-card rounded-[8px] border border-white/10 bg-[#151515] p-5">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#f4d35e] px-3 py-1 text-xs font-bold text-black">{project.tag}</span>
                    <Film size={20} className="text-[#f08a3c]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="经历" className="motion-section bg-[#f2efe8] px-5 py-20 text-[#141414] sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ad3e25]">Experience</p>
                <h2 className="motion-title mt-3 text-3xl font-black tracking-normal sm:text-5xl">核心经历</h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-black/62">
                经历覆盖AI短剧教学、AIGC团队管理、品牌广告与动漫项目制作，既能做创意，也能把流程标准化。
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              {experiences.map((experience) => (
                <article key={experience.company} className="motion-card grid gap-5 rounded-[8px] border border-black/10 bg-white p-6 md:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#ad3e25]">
                      <BadgeCheck size={17} />
                      {experience.date}
                    </div>
                    <h3 className="mt-3 text-2xl font-black">{experience.role}</h3>
                    <p className="mt-2 text-sm font-semibold text-black/56">{experience.company}</p>
                  </div>
                  <p className="text-sm leading-7 text-black/66">{experience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="联系" className="motion-section px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[8px] border border-white/10 bg-white/[0.06] p-7 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-[#f4d35e]">
                <Layers3 size={20} />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Contact</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70 md:text-right">
              <p>电话：18302658076</p>
              <p>邮箱：2256415883@qq.com</p>
            </div>
          </div>
        </section>
      </main>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
