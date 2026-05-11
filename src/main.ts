import * as THREE from 'three';
import './style.css';

type Point = {
  x: number;
  y: number;
};

type OrganicBranch = {
  start: Point;
  cp: Point;
  end: Point;
  width: number;
  delay: number;
  tone: number;
};

type CircuitRun = {
  points: Point[];
  width: number;
  delay: number;
  tone: number;
  nodePhase: number;
};

type CodePacket = {
  x: number;
  y: number;
  speed: number;
  text: string;
  size: number;
  alpha: number;
  phase: number;
};

type FusionStrand = {
  start: Point;
  cp1: Point;
  cp2: Point;
  end: Point;
  width: number;
  delay: number;
  tone: number;
  pulse: number;
};

const visualCanvasElement = document.querySelector<HTMLCanvasElement>('#visual-canvas');
const skyCanvasElement = document.querySelector<HTMLCanvasElement>('#sky-canvas');
const brandElement = document.querySelector<HTMLElement>('#brand');

if (!visualCanvasElement || !skyCanvasElement || !brandElement) {
  throw new Error('HUMETAI stage did not mount.');
}

const visualCanvas = visualCanvasElement;
const skyCanvas = skyCanvasElement;
const brand = brandElement;
const context = visualCanvas.getContext('2d', { alpha: true });

if (!context) {
  throw new Error('Canvas 2D context is unavailable.');
}

const ctx: CanvasRenderingContext2D = context;

const bootLines = [
  'cursor.init(prebirth.black)',
  'scan: half human half machine',
  '01001000 01010101 01001101 01000101 01010100 01000001',
  '.computation .emotion .philosophy',
  'if (pulse && voltage) awaken(material.emergence)',
  'neural.vein.map -> circuit.lattice.bind',
  'organism.machine.compose({ memory, error, wonder })',
  'bloodstream << data_bus << dream_cache',
  'synapse.clock = heartbeat * uncertainty',
  'steel remembers / tissue calculates / mind asks why',
  'parabolic.vision.mix(kaleidoscope, decay, blue_sky)',
  'HUMETAI.compile(living_cycle)'
];

const finalPrompt =
  'DevelopmentalMaterialEmergance................................... 1010.   100....0.     00010. I/0      PoweringOn.......HUMETAI.................................';

const packetText = [
  '10010110',
  'emotion.compute()',
  '.philosophy',
  'half_human',
  'half_machine',
  'I/O',
  '1010.100.0',
  'synapse.bus',
  'vein:signal',
  'gear.memory',
  '.computation',
  'flower.fractal',
  'steel.bloom',
  'blood.voltage',
  'meta.body',
  'HUMETAI'
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const qaTimelineScale = new URLSearchParams(window.location.search).has('fast') ? 0.16 : 1;
const bootDuration = (prefersReducedMotion ? 12_000 : 27_500) * qaTimelineScale;
const blackoutDuration = (prefersReducedMotion ? 900 : 2_200) * qaTimelineScale;
const eyeOpenDuration = (prefersReducedMotion ? 1_400 : 4_600) * qaTimelineScale;
const logoDelay = (prefersReducedMotion ? 1_100 : 5_400) * qaTimelineScale;
const tau = Math.PI * 2;

const debugWindow = window as typeof window & {
  __HUMETATECH_STATE__?: {
    phase: string;
    elapsed: number;
    livingElapsed: number;
    birth: number;
    blink: number;
    glitch: number;
  };
  __HUMETATECH_DEBUG__?: {
    jumpToLiving: () => void;
    restart: () => void;
  };
};

let width = 1;
let height = 1;
let dpr = 1;
let startedAt = performance.now();
let nextBlinkAt = 0;
let blinkStartedAt = -10_000;
let blinkDuration = 520;
let lastPhase = '';
let randomSeed = 9_173;
let organicBranches: OrganicBranch[] = [];
let circuitRuns: CircuitRun[] = [];
let codePackets: CodePacket[] = [];
let fusionStrands: FusionStrand[] = [];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function stableNoise(value: number) {
  return fract(Math.sin(value * 12.9898 + 78.233) * 43_758.5453);
}

function fract(value: number) {
  return value - Math.floor(value);
}

function random() {
  randomSeed = (randomSeed * 16_807) % 2_147_483_647;
  return (randomSeed - 1) / 2_147_483_646;
}

function setSeed(seed: number) {
  randomSeed = seed;
}

function point(x: number, y: number): Point {
  return { x, y };
}

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = Math.max(320, window.innerWidth);
  height = Math.max(320, window.innerHeight);

  visualCanvas.width = Math.round(width * dpr);
  visualCanvas.height = Math.round(height * dpr);
  visualCanvas.style.width = `${width}px`;
  visualCanvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  skyRenderer.setSize(width, height, dpr);
  buildVisualFields();
}

function buildVisualFields() {
  setSeed(Math.round(width * 13 + height * 31));
  organicBranches = [];
  circuitRuns = [];
  codePackets = [];
  fusionStrands = [];

  const root = point(width * -0.05, height * 1.04);
  growOrganic(root, -Math.PI * 0.23, Math.min(width, height) * 0.33, 0, 7);

  const circuitCount = Math.floor(clamp(width / 80, 14, 22));
  for (let i = 0; i < circuitCount; i += 1) {
    const laneStart = point(width * (0.02 + random() * 0.26), height * (-0.08 + random() * 0.2));
    const steps = 3 + Math.floor(random() * 4);
    const points: Point[] = [laneStart];
    let cursor = { ...laneStart };

    for (let step = 0; step < steps; step += 1) {
      const horizontal = step % 2 === 0;
      const travel = mix(64, Math.min(width, height) * 0.27, random());
      cursor = {
        x: clamp(cursor.x + (horizontal ? travel * mix(0.45, 1.2, random()) : mix(-28, 60, random())), -40, width + 80),
        y: clamp(cursor.y + (horizontal ? mix(12, 72, random()) : travel * mix(0.35, 1.1, random())), -40, height + 80)
      };
      points.push({ ...cursor });
    }

    circuitRuns.push({
      points,
      width: mix(1, 3.2, random()),
      delay: random() * 0.55,
      tone: random(),
      nodePhase: random() * tau
    });
  }

  buildFusionStrands();

  const packetCount = Math.floor(clamp(width / 48, 16, 34));
  for (let i = 0; i < packetCount; i += 1) {
    codePackets.push({
      x: random() * width,
      y: random() * height,
      speed: mix(13, 54, random()),
      text: packetText[Math.floor(random() * packetText.length)],
      size: mix(12, 20, random()),
      alpha: mix(0.24, 0.86, random()),
      phase: random() * tau
    });
  }
}

function buildFusionStrands() {
  const usableBranches = organicBranches.filter((branch) => branch.width > 1 && branch.end.x > -20 && branch.end.y < height + 40);
  const circuitPoints = circuitRuns.flatMap((run) => run.points.slice(1));
  if (usableBranches.length === 0 || circuitPoints.length === 0) {
    return;
  }

  const strandCount = Math.floor(clamp(Math.min(usableBranches.length, circuitPoints.length) / 7, 9, 18));

  for (let i = 0; i < strandCount; i += 1) {
    const branch = usableBranches[Math.floor(random() * usableBranches.length)];
    const target = circuitPoints[Math.floor(random() * circuitPoints.length)];
    const drift = mix(-80, 80, random());
    fusionStrands.push({
      start: branch.end,
      cp1: point(mix(branch.end.x, target.x, 0.32) + drift, mix(branch.end.y, target.y, 0.22) - mix(12, 92, random())),
      cp2: point(mix(branch.end.x, target.x, 0.72) - drift * 0.5, mix(branch.end.y, target.y, 0.78) + mix(-42, 58, random())),
      end: target,
      width: mix(0.7, 2.2, random()),
      delay: mix(0.22, 0.82, random()),
      tone: random(),
      pulse: random() * tau
    });
  }
}

function growOrganic(origin: Point, angle: number, length: number, depth: number, maxDepth: number) {
  if (depth > maxDepth || length < 10) {
    return;
  }

  const sway = mix(-0.62, 0.62, random()) * (1 - depth / (maxDepth + 1));
  const endAngle = angle + sway;
  const end = point(origin.x + Math.cos(endAngle) * length, origin.y + Math.sin(endAngle) * length);
  const cp = point(
    origin.x + Math.cos(angle + sway * 0.7) * length * mix(0.32, 0.64, random()),
    origin.y + Math.sin(angle + sway * 0.7) * length * mix(0.32, 0.64, random())
  );

  organicBranches.push({
    start: origin,
    cp,
    end,
    width: Math.max(0.45, (maxDepth - depth + 1) * 0.56),
    delay: depth * 0.075 + random() * 0.12,
    tone: random()
  });

  const branchCount = depth < 2 ? 2 : 1 + Math.floor(random() * 2);
  for (let i = 0; i < branchCount; i += 1) {
    const direction = endAngle + mix(-0.82, 0.82, random()) - 0.09;
    growOrganic(end, direction, length * mix(0.52, 0.76, random()), depth + 1, maxDepth);
  }
}

class SkyRenderer {
  private renderer: THREE.WebGLRenderer;
  private material: THREE.ShaderMaterial;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uBirth: { value: 0 },
        uGlitch: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uBirth;
        uniform float uGlitch;
        varying vec2 vUv;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amp = 0.5;
          mat2 rotate = mat2(0.8, -0.6, 0.6, 0.8);
          for (int i = 0; i < 5; i++) {
            value += noise(p) * amp;
            p = rotate * p * 2.04 + 17.31;
            amp *= 0.5;
          }
          return value;
        }

        vec2 kaleido(vec2 uv, float segments) {
          vec2 p = uv * 2.0 - 1.0;
          float radius = length(p);
          float angle = atan(p.y, p.x);
          float slice = 6.28318530718 / segments;
          angle = mod(angle + slice * 0.5, slice) - slice * 0.5;
          return vec2(cos(angle), sin(angle)) * radius * 0.5 + 0.5;
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / max(uResolution.y, 1.0);
          float drift = uTime * 0.022;
          float bandHash = hash(vec2(floor(uv.y * 74.0), floor(uTime * 2.0)));
          float band = step(0.92, bandHash) * uGlitch * 0.035;
          uv.x += (bandHash - 0.5) * band;

          vec3 sky = mix(vec3(0.025, 0.235, 0.58), vec3(0.72, 0.9, 1.0), pow(uv.y, 0.48));
          sky += vec3(0.08, 0.18, 0.22) * (1.0 - smoothstep(0.1, 0.82, uv.y));

          float cloud = fbm(vec2(uv.x * 2.8 * aspect + drift, uv.y * 2.2 - drift * 0.62));
          float cloudEdge = smoothstep(0.5, 0.86, cloud);
          sky = mix(sky, vec3(0.82, 0.96, 1.0), cloudEdge * 0.38);

          vec2 ku = kaleido(uv + vec2(sin(uTime * 0.06), cos(uTime * 0.05)) * 0.025, 7.0 + floor(3.0 + sin(uTime * 0.04) * 2.0));
          float parabola = abs(sin(((ku.x - 0.5) * (ku.x - 0.5) * 5.8 - ku.y + 0.5) * 31.0 + uTime * 0.62));
          float mandala = fbm(ku * 9.0 + vec2(uTime * 0.035, -uTime * 0.025));
          vec3 kalei = vec3(0.18, 0.88, 0.97) * smoothstep(0.9, 1.0, parabola);
          kalei += vec3(0.92, 0.7, 0.28) * smoothstep(0.62, 0.92, mandala) * 0.54;
          kalei += vec3(0.36, 0.12, 0.72) * smoothstep(0.42, 0.72, 1.0 - mandala) * 0.2;

          float digitalSide = smoothstep(0.58, 0.14, uv.x + sin(uv.y * 6.0 + uTime * 0.22) * 0.08);
          vec2 grid = floor((uv + vec2(uTime * 0.012, -uTime * 0.018)) * vec2(120.0, 68.0));
          float bits = step(0.885, hash(grid));
          float scan = 0.55 + 0.45 * sin(uv.y * uResolution.y * 1.45);
          vec3 decay = mix(vec3(0.01, 0.045, 0.05), vec3(0.0, 0.95, 0.62), bits * scan);
          decay += vec3(0.03, 0.24, 0.2) * smoothstep(0.38, 0.9, fbm(uv * vec2(20.0, 9.0) + uTime * 0.05));

          float kaleiMix = 0.28 + 0.28 * sin(uTime * 0.035 + uv.y * 3.0);
          vec3 color = mix(sky, sky + kalei, kaleiMix);
          color = mix(color, decay, digitalSide * (0.34 + uGlitch * 0.34));

          float vignette = smoothstep(1.06, 0.16, length((vUv - 0.5) * vec2(aspect, 1.0)));
          color *= 0.72 + vignette * 0.46;
          color += vec3(0.0, 0.18, 0.12) * uGlitch * step(0.97, hash(grid + floor(uTime * 8.0)));
          color *= smoothstep(0.0, 0.58, uBirth);

          gl_FragColor = vec4(color, smoothstep(0.0, 0.16, uBirth));
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(mesh);
  }

  setSize(nextWidth: number, nextHeight: number, nextDpr: number) {
    this.renderer.setPixelRatio(nextDpr);
    this.renderer.setSize(nextWidth, nextHeight, false);
    this.material.uniforms.uResolution.value.set(nextWidth * nextDpr, nextHeight * nextDpr);
  }

  render(time: number, birth: number, glitch: number) {
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uBirth.value = birth;
    this.material.uniforms.uGlitch.value = glitch;
    this.renderer.render(this.scene, this.camera);
  }
}

const skyRenderer = new SkyRenderer(skyCanvas);

function phaseAt(elapsed: number) {
  if (elapsed < bootDuration) {
    return 'prebirth';
  }

  if (elapsed < bootDuration + blackoutDuration) {
    return 'blackout';
  }

  return 'living';
}

function scheduleNextBlink(now: number) {
  blinkDuration = mix(360, 740, random());
  nextBlinkAt = now + mix(15_000, 45_000, random());
}

function currentBlink(now: number, livingElapsed: number) {
  if (livingElapsed < eyeOpenDuration + 1_000) {
    return 0;
  }

  if (now >= nextBlinkAt) {
    blinkStartedAt = now;
    scheduleNextBlink(now);
  }

  const t = (now - blinkStartedAt) / blinkDuration;
  if (t < 0 || t > 1) {
    return 0;
  }

  return Math.sin(t * Math.PI);
}

function drawFrame(now: number) {
  const elapsed = now - startedAt;
  const seconds = elapsed / 1000;
  const phase = phaseAt(elapsed);
  const livingStart = bootDuration + blackoutDuration;
  const livingElapsed = Math.max(0, elapsed - livingStart);
  const birth = smoothstep(0, eyeOpenDuration * 0.95, livingElapsed);
  const blink = currentBlink(now, livingElapsed);
  const glitch = clamp(blink * 0.9 + smoothstep(0.96, 1, Math.sin(seconds * 0.51) * 0.5 + 0.5) * 0.18, 0, 1);

  debugWindow.__HUMETATECH_STATE__ = {
    phase,
    elapsed,
    livingElapsed,
    birth,
    blink,
    glitch
  };

  if (phase !== lastPhase) {
    lastPhase = phase;
    skyCanvas.style.opacity = phase === 'living' ? '1' : '0';
    if (phase === 'living') {
      scheduleNextBlink(now + eyeOpenDuration);
    }
  }

  brand.classList.toggle('is-visible', phase === 'living' && livingElapsed > logoDelay);
  const blur = glitch > 0.18 ? `blur(${(glitch * 4.4).toFixed(2)}px) saturate(${1 + glitch * 0.42})` : '';
  skyCanvas.style.filter = blur;

  skyRenderer.render(seconds, birth, glitch);
  ctx.clearRect(0, 0, width, height);

  if (phase === 'prebirth') {
    drawPrebirth(seconds, elapsed / bootDuration);
  } else if (phase === 'blackout') {
    drawBlackout(elapsed - bootDuration);
  } else {
    drawLiving(seconds, livingElapsed, birth, blink, glitch);
  }

  requestAnimationFrame(drawFrame);
}

function drawPrebirth(seconds: number, progress: number) {
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  const terminalProgress = smoothstep(0.02, 0.86, progress);
  const networkProgress = smoothstep(0.1, 0.92, progress);
  drawOrganicNetwork(seconds, networkProgress, 1);
  drawCircuitNetwork(seconds, smoothstep(0.25, 0.96, progress), 1);
  drawFusionStrands(seconds, smoothstep(0.36, 0.98, progress), 0.8);
  drawCodeRain(seconds, terminalProgress);
  drawTerminalText(seconds, progress);

  const pressure = smoothstep(0.82, 0.99, progress);
  if (pressure > 0) {
    const pulse = 0.5 + 0.5 * Math.sin(seconds * tau * 2.2);
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = `rgb(24 255 169 / ${0.1 * pressure * pulse})`;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
  }
  ctx.restore();
}

function drawTerminalText(seconds: number, progress: number) {
  const pad = clamp(width * 0.05, 18, 72);
  const top = clamp(height * 0.08, 28, 92);
  const fontSize = clamp(width / 86, 12, 18);
  const lineHeight = fontSize * 1.65;
  const flicker = 0.72 + 0.28 * Math.sin(seconds * 38);

  ctx.save();
  ctx.font = `${fontSize}px "Share Tech Mono", "Courier New", monospace`;
  ctx.textBaseline = 'top';
  ctx.shadowBlur = 14;
  ctx.shadowColor = 'rgb(28 255 166 / 70%)';
  ctx.fillStyle = `rgb(131 255 190 / ${0.88 * flicker})`;

  if (progress < 0.12) {
    const cursorOn = Math.floor(seconds * 2.5) % 2 === 0;
    ctx.fillText('>', pad, top);
    if (cursorOn) {
      ctx.fillRect(pad + fontSize * 1.15, top + 1, fontSize * 0.62, fontSize * 1.18);
    }
    ctx.restore();
    return;
  }

  const reveal = smoothstep(0.12, 0.62, progress);
  const visibleLines = Math.floor(reveal * bootLines.length);
  bootLines.slice(0, visibleLines).forEach((line, index) => {
    const jitter = (Math.sin(seconds * 19 + index * 2.1) > 0.94 ? random() * 2 : 0);
    ctx.fillText(`> ${line}`, pad + jitter, top + index * lineHeight);
  });

  if (visibleLines < bootLines.length) {
    const current = bootLines[visibleLines] || '';
    const typed = Math.floor((reveal * bootLines.length - visibleLines) * current.length);
    ctx.fillText(`> ${current.slice(0, typed)}`, pad, top + visibleLines * lineHeight);
  }

  const promptProgress = smoothstep(0.66, 0.98, progress);
  if (promptProgress > 0) {
    const promptSize = clamp(width / 58, 13, 25);
    const promptY = height - clamp(height * 0.18, 88, 170);
    const maxWidth = width - pad * 2;
    ctx.font = `700 ${promptSize}px "Share Tech Mono", "Courier New", monospace`;
    ctx.fillStyle = `rgb(190 255 218 / ${0.92})`;
    ctx.shadowBlur = 22 + 20 * Math.sin(seconds * tau * 1.4) ** 2;
    const typedPrompt = finalPrompt.slice(0, Math.floor(finalPrompt.length * promptProgress));
    wrapMonoText(typedPrompt, pad, promptY, maxWidth, promptSize * 1.55);
  }

  ctx.restore();
}

function wrapMonoText(text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ');
  let line = '';
  let lineIndex = 0;
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && line) {
      ctx.fillText(line, x, y + lineIndex * lineHeight);
      line = word;
      lineIndex += 1;
    } else {
      line = candidate;
    }
  }

  if (line) {
    ctx.fillText(line, x, y + lineIndex * lineHeight);
  }
}

function drawCodeRain(seconds: number, progress: number) {
  if (progress <= 0) {
    return;
  }

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const packet of codePackets) {
    const cycleY = (packet.y + seconds * packet.speed) % (height + 80);
    const x = packet.x + Math.sin(seconds * 0.56 + packet.phase) * 18;
    const alpha = packet.alpha * progress * (0.52 + 0.48 * Math.sin(seconds * 1.35 + packet.phase));
    ctx.font = `${packet.size}px "Share Tech Mono", "Courier New", monospace`;
    ctx.fillStyle = `rgb(92 255 177 / ${alpha})`;
    ctx.shadowColor = 'rgb(27 255 164 / 82%)';
    ctx.shadowBlur = 12;
    ctx.fillText(packet.text, x, cycleY);
  }
  ctx.restore();
}

function drawOrganicNetwork(seconds: number, progress: number, intensity: number) {
  const beat = 0.58 + 0.42 * Math.sin(seconds * tau * 1.18);
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalCompositeOperation = 'lighter';

  for (const branch of organicBranches) {
    const local = smoothstep(branch.delay, branch.delay + 0.38, progress);
    if (local <= 0) {
      continue;
    }

    const tip = quadraticAt(branch.start, branch.cp, branch.end, local);
    const tone = branch.tone;
    const red = Math.round(mix(78, 235, tone));
    const green = Math.round(mix(255, 92, tone));
    const blue = Math.round(mix(168, 142, tone));
    ctx.beginPath();
    ctx.moveTo(branch.start.x, branch.start.y);
    ctx.quadraticCurveTo(branch.cp.x, branch.cp.y, tip.x, tip.y);
    ctx.strokeStyle = `rgb(${red} ${green} ${blue} / ${mix(0.18, 0.62, local) * intensity})`;
    ctx.lineWidth = branch.width * (0.9 + beat * 0.68) * intensity;
    ctx.shadowColor = `rgb(${red} ${green} ${blue} / ${0.68 * intensity})`;
    ctx.shadowBlur = (8 + beat * 14) * local;
    ctx.stroke();

    if (local > 0.84 && branch.width > 1.2) {
      ctx.fillStyle = `rgb(225 255 213 / ${0.18 * intensity})`;
      ctx.beginPath();
      ctx.arc(branch.end.x, branch.end.y, branch.width * (1.2 + beat), 0, tau);
      ctx.fill();
    }
  }
  ctx.restore();
}

function quadraticAt(start: Point, control: Point, end: Point, t: number) {
  const one = 1 - t;
  return point(
    one * one * start.x + 2 * one * t * control.x + t * t * end.x,
    one * one * start.y + 2 * one * t * control.y + t * t * end.y
  );
}

function cubicAt(start: Point, cp1: Point, cp2: Point, end: Point, t: number) {
  const one = 1 - t;
  return point(
    one ** 3 * start.x + 3 * one ** 2 * t * cp1.x + 3 * one * t ** 2 * cp2.x + t ** 3 * end.x,
    one ** 3 * start.y + 3 * one ** 2 * t * cp1.y + 3 * one * t ** 2 * cp2.y + t ** 3 * end.y
  );
}

function drawCircuitNetwork(seconds: number, progress: number, intensity: number) {
  ctx.save();
  ctx.lineCap = 'square';
  ctx.lineJoin = 'miter';
  ctx.globalCompositeOperation = 'lighter';

  for (const run of circuitRuns) {
    const local = smoothstep(run.delay, run.delay + 0.48, progress);
    if (local <= 0) {
      continue;
    }

    const lit = 0.55 + 0.45 * Math.sin(seconds * 2.45 + run.nodePhase);
    const color = run.tone > 0.52 ? `110 215 255` : `204 228 238`;
    ctx.strokeStyle = `rgb(${color} / ${mix(0.18, 0.66, local) * intensity})`;
    ctx.lineWidth = run.width * intensity;
    ctx.shadowColor = `rgb(105 224 255 / ${0.62 * intensity})`;
    ctx.shadowBlur = (6 + lit * 11) * local;

    const total = run.points.length - 1;
    const target = local * total;
    ctx.beginPath();
    ctx.moveTo(run.points[0].x, run.points[0].y);
    for (let index = 0; index < total; index += 1) {
      const a = run.points[index];
      const b = run.points[index + 1];
      const segmentT = clamp(target - index, 0, 1);
      if (segmentT <= 0) {
        break;
      }
      ctx.lineTo(mix(a.x, b.x, segmentT), mix(a.y, b.y, segmentT));
    }
    ctx.stroke();

    for (let index = 0; index < run.points.length; index += 1) {
      const node = run.points[index];
      const nodeGlow = 0.5 + 0.5 * Math.sin(seconds * 2.2 + run.nodePhase + index * 1.4);
      if (local < 0.62 || nodeGlow < 0.2) {
        continue;
      }
      const nodeSize = mix(3.4, 6.6, nodeGlow) * intensity;
      ctx.fillStyle = `rgb(225 246 255 / ${mix(0.16, 0.34, nodeGlow) * intensity})`;
      ctx.fillRect(node.x - nodeSize / 2, node.y - nodeSize / 2, nodeSize, nodeSize);
    }
  }
  ctx.restore();
}

function drawFusionStrands(seconds: number, progress: number, intensity: number) {
  if (progress <= 0 || intensity <= 0) {
    return;
  }

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalCompositeOperation = 'lighter';

  for (const strand of fusionStrands) {
    const local = smoothstep(strand.delay, strand.delay + 0.36, progress);
    if (local <= 0) {
      continue;
    }

    const pulse = 0.5 + 0.5 * Math.sin(seconds * 2.05 + strand.pulse);
    const alpha = mix(0.18, 0.58, pulse) * local * intensity;
    const organic = strand.tone < 0.5 ? '146 255 156' : '231 96 156';
    const machine = strand.tone < 0.5 ? '82 220 255' : '215 235 244';
    const gradient = ctx.createLinearGradient(strand.start.x, strand.start.y, strand.end.x, strand.end.y);
    gradient.addColorStop(0, `rgb(${organic} / ${alpha})`);
    gradient.addColorStop(0.54, `rgb(205 255 224 / ${alpha * 0.9})`);
    gradient.addColorStop(1, `rgb(${machine} / ${alpha})`);

    ctx.beginPath();
    ctx.moveTo(strand.start.x, strand.start.y);
    ctx.bezierCurveTo(strand.cp1.x, strand.cp1.y, strand.cp2.x, strand.cp2.y, strand.end.x, strand.end.y);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = strand.width * (0.85 + pulse * 0.55) * intensity;
    ctx.shadowColor = `rgb(133 255 224 / ${alpha})`;
    ctx.shadowBlur = (10 + pulse * 14) * local;
    ctx.stroke();

    if (pulse > 0.62) {
      const signal = cubicAt(strand.start, strand.cp1, strand.cp2, strand.end, (seconds * 0.08 + strand.tone) % 1);
      ctx.fillStyle = `rgb(238 255 240 / ${0.2 * pulse * intensity})`;
      ctx.beginPath();
      ctx.arc(signal.x, signal.y, (2.8 + pulse * 2.6) * intensity, 0, tau);
      ctx.fill();
    }
  }

  ctx.restore();
}

function drawBlackout(blackoutElapsed: number) {
  const t = blackoutElapsed / blackoutDuration;
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  const flash = Math.sin(t * Math.PI) ** 8;
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = `rgb(156 255 225 / ${flash * 0.22})`;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function drawLiving(seconds: number, livingElapsed: number, birth: number, blink: number, glitch: number) {
  ctx.save();
  drawRetinalArtifacts(seconds, birth, glitch);
  drawOrganicNetwork(seconds, 1, 0.22 * birth);
  drawCircuitNetwork(seconds, 1, 0.16 * birth);
  drawFusionStrands(seconds, 1, 0.35 * birth);
  drawEyelids(livingElapsed, birth, blink);
  ctx.restore();
}

function drawRetinalArtifacts(seconds: number, birth: number, glitch: number) {
  if (birth <= 0) {
    return;
  }

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const centerX = width * (0.5 + Math.sin(seconds * 0.08) * 0.04);
  const centerY = height * (0.47 + Math.cos(seconds * 0.07) * 0.03);
  const rings = 7;

  for (let i = 0; i < rings; i += 1) {
    const radius = (Math.min(width, height) * (0.13 + i * 0.064) + seconds * 6.5) % (Math.min(width, height) * 0.62);
    const alpha = birth * (0.12 - i * 0.008);
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius * 1.36, radius * 0.76, Math.sin(seconds * 0.05) * 0.28, 0, tau);
    ctx.strokeStyle = `rgb(${i % 2 ? '47 247 189' : '245 220 121'} / ${alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (let i = 0; i < 22; i += 1) {
    const angle = i * (tau / 22) + seconds * 0.032;
    const radius = Math.min(width, height) * (0.2 + 0.18 * Math.sin(i * 1.7 + seconds * 0.15));
    const x = centerX + Math.cos(angle) * radius * 1.46;
    const y = centerY + Math.sin(angle) * radius * 0.82;
    ctx.fillStyle = `rgb(223 255 242 / ${0.06 * birth})`;
    ctx.fillRect(x - 1.2, y - 15, 2.4, 30);
  }

  if (glitch > 0.1) {
    const slices = 4 + Math.floor(glitch * 6);
    for (let i = 0; i < slices; i += 1) {
      const jitter = stableNoise(i * 7.1 + Math.floor(seconds * 11) * 0.37);
      const y = stableNoise(i * 3.77 + seconds * 0.21) * height;
      const h = mix(2, 18, stableNoise(i + 8.2)) * glitch;
      ctx.fillStyle = `rgb(${jitter > 0.5 ? '32 255 184' : '248 251 255'} / ${0.16 * glitch})`;
      ctx.fillRect(stableNoise(i + 12.9) * width * 0.18, y, width * mix(0.16, 0.72, stableNoise(i + 2.6)), h);
    }
  }

  ctx.restore();
}

function drawEyelids(livingElapsed: number, birth: number, blink: number) {
  const opening = smoothstep(0, eyeOpenDuration, livingElapsed);
  const openAmount = clamp(opening * birth * (1 - blink * 0.94), 0.02, 1);
  const cover = (1 - openAmount) * height * 0.56;
  const curve = height * (0.08 + (1 - openAmount) * 0.16);

  ctx.save();
  ctx.fillStyle = '#000';
  ctx.shadowColor = 'rgb(0 0 0 / 80%)';
  ctx.shadowBlur = 28;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, 0);
  ctx.lineTo(width, cover + curve * 0.25);
  ctx.bezierCurveTo(width * 0.72, cover + curve, width * 0.28, cover + curve, 0, cover + curve * 0.25);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(width, height);
  ctx.lineTo(width, height - cover - curve * 0.25);
  ctx.bezierCurveTo(width * 0.72, height - cover - curve, width * 0.28, height - cover - curve, 0, height - cover - curve * 0.25);
  ctx.closePath();
  ctx.fill();

  const lashAlpha = clamp(0.26 * openAmount + blink * 0.26, 0, 0.42);
  ctx.strokeStyle = `rgb(0 0 0 / ${lashAlpha})`;
  ctx.lineWidth = clamp(width / 120, 3, 10);
  ctx.beginPath();
  ctx.moveTo(0, cover + curve * 0.22);
  ctx.bezierCurveTo(width * 0.3, cover + curve * 0.86, width * 0.7, cover + curve * 0.86, width, cover + curve * 0.22);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height - cover - curve * 0.22);
  ctx.bezierCurveTo(width * 0.3, height - cover - curve * 0.86, width * 0.7, height - cover - curve * 0.86, width, height - cover - curve * 0.22);
  ctx.stroke();
  ctx.restore();
}

window.addEventListener('resize', resize);
window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'r') {
    startedAt = performance.now();
    brand.classList.remove('is-visible');
    lastPhase = '';
  }
});

debugWindow.__HUMETATECH_DEBUG__ = {
  jumpToLiving() {
    skyCanvas.style.transition = 'none';
    brand.style.transition = 'none';
    startedAt = performance.now() - (bootDuration + blackoutDuration + eyeOpenDuration + logoDelay + 1_200);
    brand.classList.remove('is-visible');
    lastPhase = '';
  },
  restart() {
    skyCanvas.style.transition = '';
    brand.style.transition = '';
    startedAt = performance.now();
    brand.classList.remove('is-visible');
    lastPhase = '';
  }
};

resize();
requestAnimationFrame(drawFrame);
