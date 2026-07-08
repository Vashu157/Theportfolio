import { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── ICON SVG PATHS (all 24×24 viewBox, translated to local coords) ─────────
const ICONS = {
  react: {
    paths: [
      // Orbit ellipses
      "M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
      "M12 21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z",
    ],
    ellipses: [
      { rx: 11, ry: 4.2, angle: 0 },
      { rx: 11, ry: 4.2, angle: 60 },
      { rx: 11, ry: 4.2, angle: 120 },
    ]
  },
  fastapi: {
    paths: ["M13 2L4.5 13.5H11L9 22l8.5-11.5H13L13 2z"]
  },
  docker: {
    paths: [
      "M2 11.5C2 9 4 7 6.5 7H10V5H14V7H17.5C19.4 7 21 8.6 21 10.5C21 12.8 19.2 14.7 16.9 14.9C16.1 16.7 14.4 18 12.3 18H7.7C5.6 18 3.9 16.7 3.1 14.9C2.4 14.2 2 12.9 2 11.5Z",
      "M7 7h3v3H7zM11 7h3v3h-3zM11 3h3v3h-3z",
    ]
  },
  redis: {
    paths: [
      "M3 8l9-5 9 5-9 5-9-5z",
      "M3 12l9 5 9-5",
      "M3 16l9 5 9-5",
    ]
  },
  postgres: {
    paths: [
      "M12 3C7 3 3 6.5 3 11v2c0 4.5 4 8 9 8s9-3.5 9-8v-2c0-4.5-4-8-9-8z",
      "M9 11a3 3 0 106 0",
    ]
  },
  node: {
    paths: [
      "M12 2L3 7v10l9 5 9-5V7L12 2z",
      "M12 22V12",
      "M3 7l9 5 9-5",
    ]
  },
  azure: {
    paths: [
      "M6 20L13.5 4l7.5 16H6z",
      "M6 20h15",
      "M10 14h5",
    ]
  },
  github: {
    paths: [
      "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
    ]
  },
  cpu: {
    paths: [
      "M9 3H3v6m0 6H3v6h6m6 0h6v-6m0-6h-6V3",
      "M9 9h6v6H9z",
      "M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2",
    ]
  },
  database: {
    paths: [
      "M4 6c0 2.21 3.58 4 8 4s8-1.79 8-4-3.58-4-8-4S4 3.79 4 6z",
      "M4 6v4c0 2.21 3.58 4 8 4s8-1.79 8-4V6",
      "M4 10v4c0 2.21 3.58 4 8 4s8-1.79 8-4v-4",
    ]
  },
  cloud: {
    paths: [
      "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
    ]
  },
  terminal: {
    paths: [
      "M4 17l6-6-6-6",
      "M12 19h8",
    ]
  },
  server: {
    paths: [
      "M2 3h20v6H2zM2 15h20v6H2z",
      "M6 6h.01M6 18h.01",
    ]
  },
  python: {
    paths: [
      "M12 2C9.5 2 8 3.5 8 5v3h8V5c0-1.5-1.5-3-4-3z",
      "M8 8v3H4c-1.5 0-2 1-2 2.5V16c0 1.5 1 2.5 2 3h16c1 0 2-1 2-2.5V13c0-1.5-.5-2.5-2-2.5h-4V8",
      "M12 18.5a1 1 0 100-2 1 1 0 000 2z",
      "M12 5.5a1 1 0 100-2 1 1 0 000 2z",
    ]
  },
  vector: {
    paths: [
      "M3 12h18M12 3v18",
      "M8 8l8 8M16 8l-8 8",
    ]
  }
};

// ─── FULL PIPELINE NODES ─────────────────────────────────────────────────────
// A continuous branching pipeline spanning the full page (viewBox 0 0 100 500)
// Main spine goes left→right→down; branches spread out
const NODES = [
  { id: 'client',   x: 10,  y: 30,  icon: 'terminal',  label: 'Client'    },
  { id: 'react',    x: 28,  y: 20,  icon: 'react',     label: 'React'     },
  { id: 'next',     x: 28,  y: 42,  icon: 'node',      label: 'Next.js'   },
  { id: 'api',      x: 50,  y: 30,  icon: 'fastapi',   label: 'FastAPI'   },
  { id: 'redis',    x: 50,  y: 8,   icon: 'redis',     label: 'Redis'     },
  { id: 'pg',       x: 68,  y: 20,  icon: 'postgres',  label: 'Postgres'  },
  { id: 'mongo',    x: 68,  y: 42,  icon: 'database',  label: 'MongoDB'   },
  { id: 'docker',   x: 72,  y: 55,  icon: 'docker',    label: 'Docker'    },
  { id: 'azure',    x: 85,  y: 30,  icon: 'azure',     label: 'Azure'     },
  { id: 'ai',       x: 85,  y: 12,  icon: 'vector',    label: 'RAG/AI'    },
  { id: 'github',   x: 90,  y: 50,  icon: 'github',    label: 'GitHub'    },
  // branch extras
  { id: 'queue',    x: 50,  y: 55,  icon: 'server',    label: 'Queue'     },
  { id: 'cache',    x: 35,  y: 8,   icon: 'cpu',       label: 'Cache'     },
  { id: 'cloud',    x: 20,  y: 68,  icon: 'cloud',     label: 'Cloud'     },
  { id: 'python',   x: 68,  y: 70,  icon: 'python',    label: 'Python'    },
];

// ─── EDGES (connections between nodes) ───────────────────────────────────────
const EDGES = [
  ['client', 'react'],
  ['client', 'next'],
  ['react',  'api'],
  ['next',   'api'],
  ['api',    'redis'],
  ['api',    'pg'],
  ['api',    'mongo'],
  ['api',    'queue'],
  ['cache',  'redis'],
  ['react',  'cache'],
  ['pg',     'azure'],
  ['mongo',  'docker'],
  ['docker', 'azure'],
  ['azure',  'ai'],
  ['azure',  'github'],
  ['queue',  'docker'],
  ['client', 'cloud'],
  ['cloud',  'next'],
  ['docker', 'python'],
  ['python', 'github'],
];

// ─── PARTICLE DEFINITIONS (which edges carry flowing data) ───────────────────
const PARTICLES = [
  { edge: ['client','react'],   dur: 8,  delay: 0   },
  { edge: ['client','next'],    dur: 10, delay: -3  },
  { edge: ['react','api'],      dur: 7,  delay: -1  },
  { edge: ['next','api'],       dur: 9,  delay: -5  },
  { edge: ['api','redis'],      dur: 6,  delay: 0   },
  { edge: ['api','pg'],         dur: 8,  delay: -2  },
  { edge: ['api','mongo'],      dur: 7,  delay: -4  },
  { edge: ['api','queue'],      dur: 11, delay: -3  },
  { edge: ['pg','azure'],       dur: 9,  delay: -1  },
  { edge: ['docker','azure'],   dur: 12, delay: -6  },
  { edge: ['azure','ai'],       dur: 8,  delay: -2  },
  { edge: ['azure','github'],   dur: 10, delay: -4  },
];

function getNodeById(id) {
  return NODES.find(n => n.id === id);
}

function edgePath(from, to) {
  const f = getNodeById(from);
  const t = getNodeById(to);
  if (!f || !t) return '';
  // Use right-angle elbow routing for PCB feel
  const mx = (f.x + t.x) / 2;
  return `M ${f.x} ${f.y} L ${mx} ${f.y} L ${mx} ${t.y} L ${t.x} ${t.y}`;
}

// ─── ICON RENDERER ───────────────────────────────────────────────────────────
function NodeIcon({ type, x, y, size = 5 }) {
  const icon = ICONS[type];
  if (!icon) return null;
  const half = size / 2;
  // Scale from 24px viewbox to `size` units in our coordinate space
  const scale = size / 24;

  return (
    <g transform={`translate(${x - half}, ${y - half}) scale(${scale})`} opacity="0.12">
      {icon.paths && icon.paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="white" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {icon.ellipses && icon.ellipses.map((e, i) => (
        <ellipse key={i} cx="12" cy="12"
          rx={e.rx} ry={e.ry}
          transform={`rotate(${e.angle}, 12, 12)`}
          fill="none" stroke="white" strokeWidth="1.2" />
      ))}
    </g>
  );
}

// ─── PULSING RING on node ─────────────────────────────────────────────────────
function NodeRing({ x, y }) {
  return (
    <circle cx={x} cy={y} r="1.2" fill="white" opacity="0.6">
      <animate attributeName="r" values="1.2;3;1.2" dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
    </circle>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function BackgroundSystem() {
  const svgRef = useRef(null);
  const mouseGlowRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -80]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -140]);

  // Mouse interaction: make nearby wires glow
  useEffect(() => {
    const svg = svgRef.current;
    const glow = mouseGlowRef.current;
    if (!svg || !glow) return;

    const handle = (e) => {
      const rect = svg.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      glow.setAttribute('cx', String(px));
      glow.setAttribute('cy', String(py));
    };

    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#050505',
      }}
    >
      {/* ── Layer 1: Far background faint icons ──────────────────────── */}
      <motion.div style={{ y: y1, position: 'absolute', inset: 0, opacity: 0.6 }}>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* Mouse spotlight gradient definition */}
          <defs>
            <radialGradient id="mouse-glow" cx="50%" cy="30%" r="25%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
            <radialGradient id="edge-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
            <filter id="particle-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="0.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Clip edges at SVG boundary */}
            <clipPath id="bound">
              <rect x="0" y="0" width="100" height="100" />
            </clipPath>
          </defs>

          {/* ── Mouse spotlight ── */}
          <circle ref={mouseGlowRef} cx="50" cy="30" r="20"
            fill="url(#mouse-glow)"
            style={{ transition: 'cx 0.3s ease, cy 0.3s ease' }}
          />

          {/* ── Base wire layer (very faint) ── */}
          <g clipPath="url(#bound)" stroke="rgba(255,255,255,0.08)" fill="none" strokeWidth="0.18">
            {EDGES.map(([from, to], i) => (
              <path key={i} d={edgePath(from, to)} />
            ))}
          </g>

          {/* ── Glowing wire layer (slightly brighter) ── */}
          <g clipPath="url(#bound)" stroke="rgba(255,255,255,0.18)" fill="none"
            strokeWidth="0.12" filter="url(#wire-glow)">
            {EDGES.map(([from, to], i) => (
              <path key={i} d={edgePath(from, to)} />
            ))}
          </g>

          {/* ── Node icons ── */}
          {NODES.map(n => (
            <NodeIcon key={n.id} type={n.icon} x={n.x} y={n.y} size={7} />
          ))}

          {/* ── Node dots + pulse rings ── */}
          {NODES.map(n => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r="0.7" fill="rgba(255,255,255,0.5)" />
              <NodeRing x={n.x} y={n.y} />
            </g>
          ))}

          {/* ── Data packets (animated along edges) ── */}
          {PARTICLES.map((p, i) => {
            const path = edgePath(p.edge[0], p.edge[1]);
            return (
              <g key={i} filter="url(#particle-glow)">
                {/* Glow halo */}
                <circle r="0.8" fill="rgba(99,179,237,0.45)">
                  <animateMotion
                    dur={`${p.dur}s`}
                    begin={`${p.delay}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </circle>
                {/* Core dot */}
                <circle r="0.35" fill="white">
                  <animateMotion
                    dur={`${p.dur}s`}
                    begin={`${p.delay}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* ── Layer 2: Deeper parallax – very large faint watermark icons ──── */}
      <motion.div style={{ y: y2, position: 'absolute', inset: 0, opacity: 0.25, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
          <NodeIcon type="react"    x={15} y={25}  size={18} />
          <NodeIcon type="azure"    x={80} y={70}  size={22} />
          <NodeIcon type="database" x={60} y={15}  size={16} />
          <NodeIcon type="github"   x={40} y={75}  size={14} />
          <NodeIcon type="docker"   x={85} y={38}  size={12} />
          <NodeIcon type="python"   x={25} y={82}  size={14} />
        </svg>
      </motion.div>
    </div>
  );
}
