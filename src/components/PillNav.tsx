import { useLayoutEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import './PillNav.css';

type PillNavItem = {
  label: string;
  href: string;
};

type PillNavProps = {
  items: readonly PillNavItem[];
  activeHref: string;
};

export default function PillNav({ items, activeHref }: PillNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const circlesRef = useRef<Array<HTMLSpanElement | null>>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useLayoutEffect(() => {
    const cleanups: Array<() => void> = [];

    circlesRef.current.forEach((circle, index) => {
      const pill = circle?.parentElement;
      if (!circle || !pill) return;

      const layout = () => {
        const { width, height } = pill.getBoundingClientRect();
        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(radius * 2) + 2;
        const offset = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1;
        const label = pill.querySelector<HTMLElement>('.pill-nav__label');
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-nav__label-hover');

        gsap.set(circle, {
          width: diameter,
          height: diameter,
          bottom: -offset,
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${diameter - offset}px`,
        });
        gsap.set(label, { y: 0 });
        gsap.set(hoverLabel, { y: height + 10, opacity: 0 });

        timelinesRef.current[index]?.kill();
        timelinesRef.current[index] = gsap.timeline({ paused: true })
          .to(circle, { scale: 1.2, duration: 0.55, ease: 'power3.out' }, 0)
          .to(label, { y: -(height + 8), duration: 0.55, ease: 'power3.out' }, 0)
          .to(hoverLabel, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, 0);
      };

      layout();
      window.addEventListener('resize', layout);
      cleanups.push(() => {
        window.removeEventListener('resize', layout);
        timelinesRef.current[index]?.kill();
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [items]);

  const animatePill = (index: number, entering: boolean) => {
    const timeline = timelinesRef.current[index];
    if (!timeline) return;
    gsap.killTweensOf(timeline);
    timeline.tweenTo(entering ? timeline.duration() : 0, {
      duration: entering ? 0.28 : 0.18,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav" aria-label="网站导航">
        <a className="pill-nav__brand" href="#top" aria-label="返回首页">
          XZ
        </a>
        <div className="pill-nav__desktop">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`pill-nav__item${activeHref === item.href ? ' is-active' : ''}`}
              onMouseEnter={() => animatePill(index, true)}
              onMouseLeave={() => animatePill(index, false)}
            >
              <span ref={(element) => { circlesRef.current[index] = element; }} className="pill-nav__circle" aria-hidden="true" />
              <span className="pill-nav__label-stack">
                <span className="pill-nav__label">{item.label}</span>
                <span className="pill-nav__label-hover" aria-hidden="true">{item.label}</span>
              </span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="pill-nav__menu"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="pill-nav__mobile-menu">
          {items.map((item) => (
            <a key={item.href} href={item.href} className={activeHref === item.href ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
