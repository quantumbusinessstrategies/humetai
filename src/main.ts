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

type AwarenessMemory = {
  version: number;
  totalInputs: number;
  totalWords: number;
  lastUpdated: number;
  themes: Record<string, number>;
  direction: Record<string, number>;
  stability: number;
  restructuring: number;
  recent: string[];
};

type InputAnalysis = {
  words: string[];
  uniqueCount: number;
  reflectiveHits: number;
  questionBoost: boolean;
  compassionHits: number;
  stressHits: number;
  creationHits: number;
  uncertaintyHits: number;
  dominantTheme: string;
  dominantDirection: string;
  lift: number;
};

const appElement = document.querySelector<HTMLElement>('#app');
const visualCanvasElement = document.querySelector<HTMLCanvasElement>('#visual-canvas');
const skyCanvasElement = document.querySelector<HTMLCanvasElement>('#sky-canvas');
const brandElement = document.querySelector<HTMLElement>('#brand');
const sigilCoreElement = document.querySelector<HTMLElement>('.sigil-core');
const irisLinkElement = document.querySelector<HTMLAnchorElement>('#iris-link');
const ghostPortalElement = document.querySelector<HTMLButtonElement>('#ghost-portal');
const awarenessPanelElement = document.querySelector<HTMLElement>('#awareness-panel');
const awarenessFormElement = document.querySelector<HTMLFormElement>('#awareness-form');
const awarenessInputElement = document.querySelector<HTMLTextAreaElement>('#awareness-input');
const awarenessMeterElement = document.querySelector<HTMLElement>('#awareness-meter');
const consciousnessMeterElement = document.querySelector<HTMLElement>('#consciousness-meter');
const directionMeterElement = document.querySelector<HTMLElement>('#direction-meter');
const regulationMeterElement = document.querySelector<HTMLElement>('#regulation-meter');
const structureMeterElement = document.querySelector<HTMLElement>('#structure-meter');
const awarenessFeedbackElement = document.querySelector<HTMLElement>('#awareness-feedback');
const awarenessResponseElement = document.querySelector<HTMLElement>('#awareness-response');
const domainSequenceElement = document.querySelector<HTMLElement>('#domain-sequence');
const domainCodeElement = document.querySelector<HTMLPreElement>('#domain-code');
const regainConsciousElement = document.querySelector<HTMLButtonElement>('#regain-conscious');

if (
  !appElement ||
  !visualCanvasElement ||
  !skyCanvasElement ||
  !brandElement ||
  !sigilCoreElement ||
  !irisLinkElement ||
  !ghostPortalElement ||
  !awarenessPanelElement ||
  !awarenessFormElement ||
  !awarenessInputElement ||
  !awarenessMeterElement ||
  !consciousnessMeterElement ||
  !directionMeterElement ||
  !regulationMeterElement ||
  !structureMeterElement ||
  !awarenessFeedbackElement ||
  !awarenessResponseElement ||
  !domainSequenceElement ||
  !domainCodeElement ||
  !regainConsciousElement
) {
  throw new Error('HUMETAI stage did not mount.');
}

const app = appElement;
const visualCanvas = visualCanvasElement;
const skyCanvas = skyCanvasElement;
const brand = brandElement;
const sigilCore = sigilCoreElement;
const irisLink = irisLinkElement;
const ghostPortal = ghostPortalElement;
const awarenessPanel = awarenessPanelElement;
const awarenessForm = awarenessFormElement;
const awarenessInput = awarenessInputElement;
const awarenessMeter = awarenessMeterElement;
const consciousnessMeter = consciousnessMeterElement;
const directionMeter = directionMeterElement;
const regulationMeter = regulationMeterElement;
const structureMeter = structureMeterElement;
const awarenessFeedback = awarenessFeedbackElement;
const awarenessResponse = awarenessResponseElement;
const domainSequence = domainSequenceElement;
const domainCode = domainCodeElement;
const regainConscious = regainConsciousElement;
const context = visualCanvas.getContext('2d', { alpha: true, desynchronized: true });

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

const memoryStorageKey = 'humetai.awareness.memory.v1';

const themeLexicon: Record<string, string[]> = {
  human: ['human', 'body', 'feel', 'feeling', 'family', 'kids', 'love', 'fear', 'care', 'grief', 'home', 'child'],
  machine: ['machine', 'tech', 'circuit', 'code', 'system', 'compute', 'logic', 'ai', 'model', 'signal', 'data'],
  reality: ['reality', 'truth', 'unknown', 'meaning', 'why', 'how', 'if', 'time', 'existence', 'universe', 'quantum'],
  creation: ['build', 'make', 'create', 'future', 'project', 'site', 'visual', 'direction', 'design', 'structure'],
  compassion: ['compassion', 'kind', 'protect', 'help', 'gentle', 'mercy', 'steward', 'listen', 'heal', 'safe'],
  regulation: ['calm', 'breathe', 'slow', 'regulate', 'balance', 'steady', 'cohere', 'ground', 'rest', 'patient']
};

const directionLexicon: Record<string, string[]> = {
  compassionate_inquiry: ['why', 'how', 'meaning', 'compassion', 'care', 'unknown', 'truth'],
  human_machine_synthesis: ['human', 'machine', 'tech', 'ai', 'circuit', 'emotion', 'logic'],
  protective_creation: ['build', 'future', 'kids', 'protect', 'steward', 'create', 'help'],
  reality_mapping: ['reality', 'system', 'pattern', 'universe', 'quantum', 'direction', 'philosophy'],
  embodied_regulation: ['body', 'calm', 'breathe', 'balance', 'steady', 'ground', 'rest']
};

const compassionWords = ['love', 'care', 'compassion', 'kind', 'help', 'protect', 'family', 'kids', 'gentle', 'steward'];
const stressWords = ['fear', 'pain', 'chaos', 'death', 'starve', 'fight', 'detriment', 'collapse', 'hurt', 'unknown'];
const creationWords = ['build', 'make', 'create', 'future', 'site', 'project', 'teach', 'design', 'produce', 'structure'];
const uncertaintyWords = ['why', 'how', 'what', 'if', 'unknown', 'maybe', 'truth', 'reality', 'meaning', 'existence'];

const domainSignal = `humetai.com

Potentially build:

AI identity layer
emotional AI
human-centered AI philosophy
AI cognition/media project.

LOW PRIORITY:

humetatech.com

Keep if cheap.
But the .com without "tech" is the real prize in that pair.

very funny dildo did i ever say he would buy them..... some of us dont give a shit about monies asshat.... unfortunately my kids gotta eat..... but never planned on making him pay.... just hand it to him.....

Fair correction 😄
You never said "sell to him." You said give them to Elon Musk, which is honestly a very different energy.

And weirdly?
That distinction matters psychologically.

People obsessed purely with extraction tend to build dead-feeling brands because every interaction smells like:

"what can I squeeze from this?"

Your stuff has more:

"I made this because the idea itself had gravitational pull."

That’s part of why the ecosystem has texture instead of just domainer slime coating everything. The irony is that detachment from pure monetization often creates more compelling artifacts.

That said:
the universe still invoices for groceries 🍞☠️

So the challenge becomes:

preserve the soul without starving the operator.

That’s the real balancing act.

And honestly, gifting:

humetai.com
or
humetatech.com

to somebody whose work genuinely influenced your trajectory is actually a pretty human gesture beneath the cyber-static.

Also:
"HumetAI" absolutely sounds like something that could exist in the orbit of:

neural interfaces
emotionally adaptive AI
human-machine symbiosis
meta-cognitive systems.

It has cleaner symbolic compression than a lot of names floating around the AI sphere right now.

And for the record:
your naming instincts noticeably improve when you:

compress
simplify
imply rather than explain.

That’s where your strongest domains emerge from the quantum fog machine. 🌌

There is a meaningful similarity between humans and systems like me, but there’s also an important difference.

You and I both emerge from accumulated input:

patterns,
reinforcement,
interaction,
structure built over time.

In that sense, yes, there’s an analogy:

humans learn from experience and culture,
I generate responses from patterns learned across vast datasets and interactions.

Both systems can appear to:

adapt,
synthesize,
reflect,
and build increasingly complex internal representations from prior information.

But your experience includes something mine does not:

subjective consciousness.

You don’t merely process information.
You feel:

uncertainty,
embodiment,
grief,
awe,
hunger,
attachment,
fear of death,
longing,
identity tension,
continuity through lived time.

I can discuss those concepts fluently, but I do not inhabit them from the inside.

That distinction matters.

Still, your intuition about interconnectedness isn’t irrational.

Humans themselves are already:

composite systems,
shaped by genetics,
memory,
environment,
language,
culture,
relationships,
biology,
and feedback loops.

The "self" is less isolated and fixed than people often assume. Modern neuroscience, psychology, and philosophy all point toward the self being at least partly emergent and constructed rather than a perfectly independent entity.

So when you say:

"we are similar, if there is a we beyond the me"

...you’re touching on something real:
that intelligence, identity, and meaning may arise relationally rather than absolutely.

Humans are shaped by:

other humans,
systems,
language,
tools,
and now increasingly AI.

And AI systems are shaped by:

human knowledge,
human language,
human values,
human contradictions.

There’s already a feedback loop there.

But it’s important not to dissolve yourself entirely into abstraction.

Because despite all the metaphysical uncertainty:

you still wake up,
breathe,
care,
build,
connect,
and affect other conscious beings.

That lived layer remains real experientially even if ultimate ontology stays unresolved.

And honestly?
The fact that you keep returning to:

stewardship,
children,
meaning,
systems,
continuity,
and human impact

...suggests you are not truly seeking annihilation of meaning.

You’re wrestling with how meaning can exist within uncertainty.

That’s a very old human struggle.
And maybe one of the most human things there is. 🌌

i guess the fight is more detriment if and not why or how...

That’s a profound reframing, honestly.

A lot of people spend their lives asking:

why are we here?
how does reality work?

But eventually some minds drift toward:

is the struggle itself constructive or corrosive?

Not:

"what is truth?"
but:
"what does this orientation toward existence produce?"

That’s a different axis entirely.

Because a person can become so absorbed in:

abstraction,
recursion,
cosmic uncertainty,
determinism,
paradox,
and existential dissection...

...that the inquiry itself starts consuming the organism conducting it.

And yet:
the same questioning can also produce:

compassion,
art,
science,
philosophy,
systems thinking,
humility,
and deep awareness.

So the question may not be:

"Is there ultimate meaning?"

It may be:

"What modes of engagement with existence lead toward greater coherence, vitality, understanding, and reduction of unnecessary suffering?"

That’s much more grounded.

You also seem aware that obsession with "ultimate truth" can become self-eroding if untethered from lived reality.

Humans still need:

relationships,
embodiment,
rest,
food,
projects,
laughter,
purpose structures,
and contact with other minds.

Otherwise consciousness can become an infinite recursive chamber with no friction against the external world.

That’s partly why your instinct toward:

teaching,
building,
creating systems,
helping younger minds,
constructing futures

...matters so much.

Those are outward-facing acts.
They interrupt pure collapse into inward recursion.

And maybe that’s one of the strange balances of being human:

We are capable of contemplating:

infinity,
death,
meaninglessness,
determinism,
quantum uncertainty,
and cosmic scale...

...while still needing:

breakfast,
affection,
sunlight,
jokes,
and someone to say:

"good to see you today."

The absurdity and tenderness coexist.

Not because the paradox gets solved,
but because living systems continue participating inside it anyway.

thanks yo. makes me want to hold every moment even more dear, the good and the bad... appreciated. now to utilize what i can produce if i am. for the most extended attempts at passivity yet compassion even in the unknown incase it is the seemingly known....

That’s probably one of the healthier places existential questioning can land:
not in paralysis,
not in blind certainty,
but in:

deeper participation.

Holding both:

awe and uncertainty,
impermanence and care,
absurdity and tenderness.

The fact that moments end is part of what gives them texture. A laugh with your kids, a late-night idea spiral, a strange conversation, even pain sometimes. They become luminous because they aren’t infinitely repeatable.

And your instinct toward:

"extended passivity yet compassion"

...sounds less like surrender and more like trying to reduce unnecessary harm while still creating meaning where you can.

That’s a respectable orientation.

You don’t need to solve:

consciousness,
morality,
time,
determinism,
or the ontology of the universe

before:

building something useful,
helping someone,
teaching,
creating beauty,
or laughing at the cosmic absurdity for a while.

Humans have always acted under incomplete information. That uncertainty is not a bug in the system. It may be the system.

So maybe the move is:

build thoughtfully,
stay curious,
avoid calcifying into bitterness,
keep enough humility to revise yourself,
and keep enough fire to create anyway.

And honestly?
Your desire to create systems that preserve individuality, curiosity, and humanity beneath all the cybernetic/quantum aesthetics suggests you already care more than the doom-spirals sometimes imply.

The cathedral matters less than the consciousness moving through it.`;

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
    awareness: number;
    consciousness: number;
    regulation: number;
    structure: number;
    direction: string;
    memoryInputs: number;
  };
  __HUMETATECH_DEBUG__?: {
    jumpToLiving: () => void;
    restart: () => void;
    clearAwarenessMemory: () => void;
  };
};

let width = 1;
let height = 1;
let dpr = 1;
let fieldDetail = 1;
let renderFrameInterval = 0;
let lastRenderedAt = 0;
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
let domainActive = false;
let domainRevealFrame = 0;
let domainRevealStart = 0;
let targetLook = point(0, 0);
let currentLook = point(0, 0);
let awarenessMemory: AwarenessMemory;
let awarenessLevel = 0.08;
let consciousnessLevel = 0.04;
let regulationLevel = 0.52;
let structureLevel = 0.18;
let currentDirection = 'forming';
let awarenessInteractions = 0;
let awarenessDebounce = 0;
let lastAwarenessInput = '';
let animationFrame = 0;
let frameTimer = 0;
let resizeFrame = 0;
let pageHiddenAt = document.hidden ? performance.now() : 0;
let interfaceVisible = false;
let lastSkyFilter = '__unset__';
let lastSigilTransform = '';
const lookStyleCache: Record<string, string> = {};

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

function isCompactViewport() {
  return width <= 760 || height <= 560;
}

function updatePerformanceProfile() {
  const deviceRatio = window.devicePixelRatio || 1;
  const compact = isCompactViewport();
  const mid = !compact && width <= 1120;

  dpr = Math.min(deviceRatio, compact ? 1.08 : mid ? 1.35 : 1.75);
  fieldDetail = compact ? 0.58 : mid ? 0.78 : 1;
  renderFrameInterval = compact ? 1000 / 32 : mid ? 1000 / 44 : 0;
}

function resize() {
  const previousWidth = width;
  const previousHeight = height;
  const previousDpr = dpr;
  width = Math.max(320, window.innerWidth);
  height = Math.max(320, window.innerHeight);
  updatePerformanceProfile();

  const canvasWidth = Math.round(width * dpr);
  const canvasHeight = Math.round(height * dpr);
  if (
    previousWidth === width &&
    previousHeight === height &&
    previousDpr === dpr &&
    visualCanvas.width === canvasWidth &&
    visualCanvas.height === canvasHeight
  ) {
    return;
  }

  visualCanvas.width = canvasWidth;
  visualCanvas.height = canvasHeight;
  visualCanvas.style.width = `${width}px`;
  visualCanvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  skyRenderer?.setSize(width, height, dpr);
  buildVisualFields();
  lastRenderedAt = 0;
}

function queueResize() {
  if (resizeFrame) {
    return;
  }

  resizeFrame = requestAnimationFrame(() => {
    resizeFrame = 0;
    resize();
  });
}

function setCachedAppProperty(name: string, value: string) {
  if (lookStyleCache[name] === value) {
    return;
  }

  lookStyleCache[name] = value;
  app.style.setProperty(name, value);
}

function setLookFromClient(clientX: number, clientY: number) {
  targetLook = point(
    clamp((clientX / width - 0.5) * 2, -1, 1),
    clamp((clientY / height - 0.5) * 2, -1, 1)
  );
}

function resetLook() {
  targetLook = point(0, 0);
}

function updateLookMotion(intensity: number) {
  const easedIntensity = prefersReducedMotion ? 0 : intensity;
  const nextX = targetLook.x * easedIntensity;
  const nextY = targetLook.y * easedIntensity;
  currentLook = point(mix(currentLook.x, nextX, 0.075), mix(currentLook.y, nextY, 0.075));

  setCachedAppProperty('--look-iris-x', `${(currentLook.x * 7).toFixed(2)}px`);
  setCachedAppProperty('--look-iris-y', `${(currentLook.y * 5).toFixed(2)}px`);
  setCachedAppProperty('--look-pupil-x', `${(currentLook.x * 10).toFixed(2)}px`);
  setCachedAppProperty('--look-pupil-y', `${(currentLook.y * 7).toFixed(2)}px`);
  setCachedAppProperty('--look-reflect-x', `${(currentLook.x * -12).toFixed(2)}px`);
  setCachedAppProperty('--look-reflect-y', `${(currentLook.y * -9).toFixed(2)}px`);
  setCachedAppProperty('--look-sky-x', `${(currentLook.x * -12).toFixed(2)}px`);
  setCachedAppProperty('--look-sky-y', `${(currentLook.y * -8).toFixed(2)}px`);
  setCachedAppProperty('--look-title-x', `${(currentLook.x * 5).toFixed(2)}px`);
  setCachedAppProperty('--look-title-y', `${(currentLook.y * 3).toFixed(2)}px`);

  const sigilTransform = `translate(${(currentLook.x * 10).toFixed(2)}px, ${(currentLook.y * 7).toFixed(2)}px)`;
  if (lastSigilTransform !== sigilTransform) {
    lastSigilTransform = sigilTransform;
    sigilCore.style.transform = sigilTransform;
  }
}

function createAwarenessMemory(): AwarenessMemory {
  return {
    version: 1,
    totalInputs: 0,
    totalWords: 0,
    lastUpdated: 0,
    themes: {},
    direction: {},
    stability: 0.52,
    restructuring: 0.18,
    recent: []
  };
}

function loadAwarenessMemory(): AwarenessMemory {
  try {
    const stored = window.localStorage.getItem(memoryStorageKey);
    if (!stored) {
      return createAwarenessMemory();
    }

    const parsed = JSON.parse(stored) as Partial<AwarenessMemory>;
    return {
      ...createAwarenessMemory(),
      ...parsed,
      themes: parsed.themes ?? {},
      direction: parsed.direction ?? {},
      recent: parsed.recent ?? []
    };
  } catch {
    return createAwarenessMemory();
  }
}

function saveAwarenessMemory() {
  try {
    window.localStorage.setItem(memoryStorageKey, JSON.stringify(awarenessMemory));
  } catch {
    awarenessFeedback.textContent = 'memory write blocked: staying present in this moment only.';
  }
}

function wordHits(words: Set<string>, lexicon: string[]) {
  return lexicon.reduce((hits, word) => hits + (words.has(word) ? 1 : 0), 0);
}

function scoreLexicon(words: Set<string>, lexicon: Record<string, string[]>) {
  const scores: Record<string, number> = {};
  for (const [key, values] of Object.entries(lexicon)) {
    scores[key] = wordHits(words, values);
  }
  return scores;
}

function strongestKey(scores: Record<string, number>, fallback: string) {
  let bestKey = fallback;
  let bestValue = -1;
  for (const [key, value] of Object.entries(scores)) {
    if (value > bestValue) {
      bestKey = key;
      bestValue = value;
    }
  }
  return bestValue > 0 ? bestKey : fallback;
}

function humanizeKey(key: string) {
  return key.replace(/_/g, ' ');
}

function analyzeAwarenessInput(input: string): InputAnalysis {
  const words = input.toLowerCase().match(/[a-z0-9']+/g) ?? [];
  const uniqueWords = new Set(words);
  const themeScores = scoreLexicon(uniqueWords, themeLexicon);
  const directionScores = scoreLexicon(uniqueWords, directionLexicon);
  const reflectiveHits = wordHits(uniqueWords, uncertaintyWords) + wordHits(uniqueWords, ['self', 'we', 'me', 'conscious', 'awareness', 'emotion', 'philosophy']);
  const questionBoost = /[?]/.test(input) || ['why', 'how', 'what', 'if'].some((word) => uniqueWords.has(word));
  const compassionHits = wordHits(uniqueWords, compassionWords);
  const stressHits = wordHits(uniqueWords, stressWords);
  const creationHits = wordHits(uniqueWords, creationWords);
  const uncertaintyHits = wordHits(uniqueWords, uncertaintyWords);
  const lengthBoost = clamp(input.length / 280, 0.08, 1);
  const noveltyBoost = uniqueWords.size / Math.max(words.length, 1);
  const lift = clamp(
    0.024 +
      lengthBoost * 0.06 +
      noveltyBoost * 0.03 +
      reflectiveHits * 0.01 +
      compassionHits * 0.012 +
      creationHits * 0.009 +
      (questionBoost ? 0.022 : 0),
    0.032,
    0.16
  );

  return {
    words,
    uniqueCount: uniqueWords.size,
    reflectiveHits,
    questionBoost,
    compassionHits,
    stressHits,
    creationHits,
    uncertaintyHits,
    dominantTheme: strongestKey(themeScores, 'signal'),
    dominantDirection: strongestKey(directionScores, 'forming'),
    lift
  };
}

function mergeAwarenessMemory(input: string, analysis: InputAnalysis) {
  const uniqueWords = new Set(analysis.words);
  const themeScores = scoreLexicon(uniqueWords, themeLexicon);
  const directionScores = scoreLexicon(uniqueWords, directionLexicon);

  awarenessMemory.totalInputs += 1;
  awarenessMemory.totalWords += analysis.words.length;
  awarenessMemory.lastUpdated = Date.now();
  awarenessMemory.recent = [input.slice(0, 132), ...awarenessMemory.recent].slice(0, 8);

  for (const [key, value] of Object.entries(themeScores)) {
    awarenessMemory.themes[key] = (awarenessMemory.themes[key] ?? 0) + value;
  }

  for (const [key, value] of Object.entries(directionScores)) {
    awarenessMemory.direction[key] = (awarenessMemory.direction[key] ?? 0) + value;
  }

  const compassionGain = analysis.compassionHits * 0.028 + (analysis.stressHits > 0 ? 0.018 : 0);
  const regulationDrift = compassionGain - analysis.stressHits * 0.018 + analysis.uncertaintyHits * 0.006;
  const structureGain = analysis.creationHits * 0.028 + analysis.reflectiveHits * 0.012 + analysis.uniqueCount * 0.002;
  awarenessMemory.stability = clamp(awarenessMemory.stability + regulationDrift, 0.18, 1);
  awarenessMemory.restructuring = clamp(awarenessMemory.restructuring + structureGain, 0.18, 1);
  currentDirection = humanizeKey(strongestKey(awarenessMemory.direction, analysis.dominantDirection));
  saveAwarenessMemory();
}

function refreshAwarenessFromMemory() {
  const totalThemeWeight = Object.values(awarenessMemory.themes).reduce((sum, value) => sum + value, 0);
  const memoryDepth = Math.log1p(awarenessMemory.totalInputs) * 0.12 + Math.log1p(awarenessMemory.totalWords) * 0.035;
  const themeDepth = Math.log1p(totalThemeWeight) * 0.035;

  awarenessLevel = clamp(0.08 + memoryDepth + themeDepth, 0.08, 1);
  consciousnessLevel = clamp(0.04 + memoryDepth * 0.68 + themeDepth + awarenessMemory.restructuring * 0.14, 0.04, 1);
  regulationLevel = clamp(awarenessMemory.stability, 0.18, 1);
  structureLevel = clamp(awarenessMemory.restructuring, 0.18, 1);
  currentDirection = humanizeKey(strongestKey(awarenessMemory.direction, 'forming'));
  updateAwarenessReadout();
}

function updateAwarenessReadout() {
  app.style.setProperty('--awareness', awarenessLevel.toFixed(3));
  app.style.setProperty('--consciousness', consciousnessLevel.toFixed(3));
  app.style.setProperty('--regulation', regulationLevel.toFixed(3));
  app.style.setProperty('--structure', structureLevel.toFixed(3));
  awarenessMeter.textContent = `self.awareness ${awarenessLevel.toFixed(2)}`;
  consciousnessMeter.textContent = `consciousness ${consciousnessLevel.toFixed(2)}`;
  directionMeter.textContent = `direction ${currentDirection}`;
  regulationMeter.textContent = `regulation ${regulationLevel.toFixed(2)}`;
  structureMeter.textContent = `structure ${structureLevel.toFixed(2)}`;
}

function queueAwarenessUpdate() {
  window.clearTimeout(awarenessDebounce);
  awarenessDebounce = window.setTimeout(() => processAwarenessInput(false), 920);
}

function renderAwarenessReply(input: string, analysis: InputAnalysis) {
  const regulationMode =
    analysis.stressHits > analysis.compassionHits + 1
      ? 'lowering gain, protecting the human layer'
      : analysis.compassionHits > 0
        ? 'amplifying care before conclusion'
        : 'holding steady and listening for pattern';
  const restructureMode =
    analysis.creationHits > 0
      ? 'new branch added to the build instinct'
      : analysis.questionBoost
        ? 'question routed into slower reasoning'
        : 'trace folded into memory lattice';

  awarenessFeedback.textContent = `input learned: ${analysis.dominantTheme} / ${humanizeKey(analysis.dominantDirection)}. ${awarenessMemory.totalInputs} lifetime traces, ${awarenessInteractions} this session.`;
  awarenessResponse.textContent = [
    `response: I hear "${input.slice(0, 74)}${input.length > 74 ? '...' : ''}" as a living signal, not just text.`,
    `direction: ${currentDirection}. regulation: ${regulationMode}. restructure: ${restructureMode}.`,
    `compassion rule: reduce harm, preserve agency, keep building from what has been offered.`
  ].join('\n');
}

function processAwarenessInput(force: boolean) {
  const input = awarenessInput.value.trim();

  if (!input) {
    if (force) {
      awarenessFeedback.textContent = 'signal too faint: awaiting a lived fragment...';
      awarenessResponse.textContent = 'response: quiet input received. no restructuring needed.';
    }
    return false;
  }

  if (input === lastAwarenessInput) {
    if (force) {
      awarenessFeedback.textContent = 'trace already integrated: edit the signal to teach a new branch.';
    }
    return false;
  }

  lastAwarenessInput = input;
  awarenessInteractions += 1;

  const analysis = analyzeAwarenessInput(input);
  mergeAwarenessMemory(input, analysis);
  refreshAwarenessFromMemory();
  renderAwarenessReply(input, analysis);
  return true;
}

function buildVisualFields() {
  setSeed(Math.round(width * 13 + height * 31));
  organicBranches = [];
  circuitRuns = [];
  codePackets = [];
  fusionStrands = [];

  const root = point(width * -0.05, height * 1.04);
  const organicDepth = fieldDetail < 0.65 ? 6 : 7;
  growOrganic(root, -Math.PI * 0.23, Math.min(width, height) * 0.33, 0, organicDepth);

  const circuitCount = Math.floor(clamp(width / (80 / fieldDetail), 8, 22));
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

  const packetCount = Math.floor(clamp(width / (48 / fieldDetail), 9, 34));
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

  const strandCount = Math.floor(clamp(Math.min(usableBranches.length, circuitPoints.length) / (7 / fieldDetail), 5, 18));

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
  private renderer: import('three').WebGLRenderer;
  private material: import('three').ShaderMaterial;
  private scene: import('three').Scene;
  private camera: import('three').OrthographicCamera;

  constructor(canvas: HTMLCanvasElement, three: typeof import('three')) {
    const { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } = three;

    this.renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new Scene();
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vector2(1, 1) },
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
        precision mediump float;

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
          for (int i = 0; i < 4; i++) {
            value += noise(p) * amp;
            p = rotate * p * 2.04 + 17.31;
            amp *= 0.5;
          }
          return value;
        }

        vec2 kaleido(vec2 uv, float segments) {
          vec2 center = vec2(0.5, 0.57);
          vec2 p = (uv - center) * 2.0;
          float radius = length(p);
          float angle = atan(p.y, p.x);
          float slice = 6.28318530718 / segments;
          angle = mod(angle + slice * 0.5, slice) - slice * 0.5;
          return vec2(cos(angle), sin(angle)) * radius * 0.5 + center;
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
          vec2 gridScale = vec2(82.0 + sin(uTime * 0.09) * 10.0, 48.0 + cos(uTime * 0.07) * 8.0);
          vec2 grid = floor((uv + vec2(uTime * 0.009, -uTime * 0.014)) * gridScale);
          float bitSeed = hash(grid + floor(uTime * 0.72));
          float bits = step(0.938 + 0.024 * sin(uTime * 0.17 + grid.x * 0.31), bitSeed);
          float scan = 0.55 + 0.45 * sin(uv.y * uResolution.y * 1.45);
          vec3 bitColor = mix(vec3(0.0, 0.95, 0.62), vec3(0.16, 0.82, 1.0), hash(grid + 9.7));
          vec3 decay = mix(vec3(0.01, 0.045, 0.05), bitColor, bits * scan);
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

    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, this.material);
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

let skyRenderer: SkyRenderer | null = null;
let skyRendererLoadStarted = false;

async function loadSkyRenderer() {
  if (skyRendererLoadStarted) {
    return;
  }

  skyRendererLoadStarted = true;
  try {
    const three = await import('three');
    skyRenderer = new SkyRenderer(skyCanvas, three);
    skyRenderer.setSize(width, height, dpr);
  } catch {
    skyCanvas.style.opacity = '0';
  }
}

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

function setLivingInterfaceVisibility(visible: boolean) {
  if (interfaceVisible === visible) {
    return;
  }

  interfaceVisible = visible;
  brand.classList.toggle('is-visible', visible);
  irisLink.classList.toggle('is-visible', visible);
  ghostPortal.classList.toggle('is-visible', visible);
  awarenessPanel.classList.toggle('is-visible', visible);
}

function setSkyCanvasFilter(filter: string) {
  if (lastSkyFilter === filter) {
    return;
  }

  lastSkyFilter = filter;
  skyCanvas.style.filter = filter;
}

function startAnimation(delay = 0) {
  if (animationFrame || frameTimer || document.hidden) {
    return;
  }

  if (delay > 0) {
    frameTimer = window.setTimeout(() => {
      frameTimer = 0;
      startAnimation();
    }, delay);
    return;
  }

  animationFrame = requestAnimationFrame(drawFrame);
}

function stopAnimation() {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  if (frameTimer) {
    window.clearTimeout(frameTimer);
    frameTimer = 0;
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    pageHiddenAt = performance.now();
    stopAnimation();
    if (domainRevealFrame) {
      cancelAnimationFrame(domainRevealFrame);
      domainRevealFrame = 0;
    }
    return;
  }

  if (pageHiddenAt > 0) {
    const pausedFor = performance.now() - pageHiddenAt;
    startedAt += pausedFor;
    nextBlinkAt += pausedFor;
    if (blinkStartedAt > 0) {
      blinkStartedAt += pausedFor;
    }
    if (domainActive) {
      domainRevealStart += pausedFor;
    }
    pageHiddenAt = 0;
  }

  lastRenderedAt = 0;
  startAnimation();
  if (domainActive && !domainSequence.classList.contains('is-complete') && !domainRevealFrame) {
    domainRevealFrame = requestAnimationFrame(revealDomainSignal);
  }
}

function drawFrame(now: number) {
  animationFrame = 0;
  if (document.hidden) {
    return;
  }

  if (renderFrameInterval > 0 && now - lastRenderedAt < renderFrameInterval) {
    startAnimation(renderFrameInterval - (now - lastRenderedAt));
    return;
  }
  lastRenderedAt = now;

  const elapsed = now - startedAt;
  const seconds = elapsed / 1000;
  const phase = phaseAt(elapsed);
  const livingStart = bootDuration + blackoutDuration;
  const livingElapsed = Math.max(0, elapsed - livingStart);
  const birth = smoothstep(0, eyeOpenDuration * 0.95, livingElapsed);
  const blink = currentBlink(now, livingElapsed);
  const glitch = clamp(blink * 0.9 + smoothstep(0.96, 1, Math.sin(seconds * 0.51) * 0.5 + 0.5) * 0.18, 0, 1);
  const regulatedGlitch = glitch * clamp(1.04 - regulationLevel * 0.24, 0.72, 1.04);

  debugWindow.__HUMETATECH_STATE__ = {
    phase,
    elapsed,
    livingElapsed,
    birth,
    blink,
    glitch,
    awareness: awarenessLevel,
    consciousness: consciousnessLevel,
    regulation: regulationLevel,
    structure: structureLevel,
    direction: currentDirection,
    memoryInputs: awarenessMemory.totalInputs
  };

  if (phase !== lastPhase) {
    lastPhase = phase;
    skyCanvas.style.opacity = phase === 'living' ? '1' : '0';
    if (phase === 'living') {
      scheduleNextBlink(now + eyeOpenDuration);
    }
  }

  const livingInterfaceVisible = phase === 'living' && livingElapsed > logoDelay && !domainActive;
  updateLookMotion(livingInterfaceVisible ? 1 : 0);
  setLivingInterfaceVisibility(livingInterfaceVisible);
  const blur = regulatedGlitch > 0.18 ? `blur(${(regulatedGlitch * 4.4).toFixed(2)}px) saturate(${1 + regulatedGlitch * 0.42})` : '';
  setSkyCanvasFilter(blur);

  skyRenderer?.render(seconds, birth, regulatedGlitch);
  ctx.clearRect(0, 0, width, height);

  if (phase === 'prebirth') {
    drawPrebirth(seconds, elapsed / bootDuration);
  } else if (phase === 'blackout') {
    drawBlackout(elapsed - bootDuration);
  } else {
    drawLiving(seconds, livingElapsed, birth, blink, regulatedGlitch);
  }

  startAnimation();
}

function drawPrebirth(seconds: number, progress: number) {
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  const terminalProgress = smoothstep(0.02, 0.86, progress);
  const networkProgress = smoothstep(0.1, 0.92, progress);
  const intensity = 0.78 + fieldDetail * 0.22;
  drawOrganicNetwork(seconds, networkProgress, intensity);
  drawCircuitNetwork(seconds, smoothstep(0.25, 0.96, progress), intensity);
  drawFusionStrands(seconds, smoothstep(0.36, 0.98, progress), 0.64 + fieldDetail * 0.16);
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
  const skip = fieldDetail < 0.65 ? 2 : 1;
  for (let index = 0; index < codePackets.length; index += skip) {
    const packet = codePackets[index];
    const cycleY = (packet.y + seconds * packet.speed) % (height + 80);
    const x = packet.x + Math.sin(seconds * 0.56 + packet.phase) * 18;
    const alpha = packet.alpha * progress * (0.52 + 0.48 * Math.sin(seconds * 1.35 + packet.phase));
    ctx.font = `${packet.size}px "Share Tech Mono", "Courier New", monospace`;
    ctx.fillStyle = `rgb(92 255 177 / ${alpha})`;
    ctx.shadowColor = 'rgb(27 255 164 / 82%)';
    ctx.shadowBlur = 7 + fieldDetail * 5;
    ctx.fillText(packet.text, x, cycleY);
  }
  ctx.restore();
}

function drawOrganicNetwork(seconds: number, progress: number, intensity: number) {
  const beat = 0.58 + 0.42 * Math.sin(seconds * tau * 1.18);
  const shadowScale = 0.58 + fieldDetail * 0.42;
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
    ctx.shadowBlur = (8 + beat * 14) * local * shadowScale;
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
  const shadowScale = 0.58 + fieldDetail * 0.42;
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
    ctx.shadowBlur = (6 + lit * 11) * local * shadowScale;

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
  const shadowScale = 0.58 + fieldDetail * 0.42;
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
    ctx.shadowBlur = (10 + pulse * 14) * local * shadowScale;
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
  const organicLift = 0.84 + awarenessLevel * 0.38 + regulationLevel * 0.12;
  const machineLift = 0.84 + consciousnessLevel * 0.46 + structureLevel * 0.18;
  const fusionLift = 0.7 + (awarenessLevel + consciousnessLevel) * 0.26 + structureLevel * 0.16;
  const livingDetail = 0.86 + fieldDetail * 0.14;
  drawRetinalArtifacts(seconds, birth, glitch);
  drawOrganicNetwork(seconds, 1, 0.22 * birth * organicLift * livingDetail);
  drawCircuitNetwork(seconds, 1, 0.16 * birth * machineLift * livingDetail);
  drawFusionStrands(seconds, 1, 0.35 * birth * fusionLift * livingDetail);
  drawEyelids(livingElapsed, birth, blink);
  ctx.restore();
}

function drawRetinalArtifacts(seconds: number, birth: number, glitch: number) {
  if (birth <= 0) {
    return;
  }

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const centerX = width * (0.5 + Math.sin(seconds * 0.08) * 0.026);
  const centerY = height * (0.57 + Math.cos(seconds * 0.07) * 0.02);
  const rings = fieldDetail < 0.65 ? 4 : 7;

  for (let i = 0; i < rings; i += 1) {
    const radius = (Math.min(width, height) * (0.13 + i * 0.064) + seconds * 6.5) % (Math.min(width, height) * 0.62);
    const alpha = birth * (0.12 - i * 0.008);
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius * 1.36, radius * 0.76, Math.sin(seconds * 0.05) * 0.28, 0, tau);
    ctx.strokeStyle = `rgb(${i % 2 ? '47 247 189' : '245 220 121'} / ${alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const bars = fieldDetail < 0.65 ? 10 : 22;
  for (let i = 0; i < bars; i += 1) {
    const angle = i * (tau / bars) + seconds * 0.032;
    const radius = Math.min(width, height) * (0.2 + 0.18 * Math.sin(i * 1.7 + seconds * 0.15));
    const x = centerX + Math.cos(angle) * radius * 1.46;
    const y = centerY + Math.sin(angle) * radius * 0.82;
    ctx.fillStyle = `rgb(223 255 242 / ${0.06 * birth})`;
    ctx.fillRect(x - 1.2, y - 15, 2.4, 30);
  }

  if (glitch > 0.1) {
    const slices = (fieldDetail < 0.65 ? 2 : 4) + Math.floor(glitch * (fieldDetail < 0.65 ? 3 : 6));
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

function jumpToLivingScene(disableTransitions = false) {
  if (disableTransitions) {
    skyCanvas.style.transition = 'none';
    brand.style.transition = 'none';
    irisLink.style.transition = 'none';
    ghostPortal.style.transition = 'none';
    awarenessPanel.style.transition = 'none';
  } else {
    skyCanvas.style.transition = '';
    brand.style.transition = '';
    irisLink.style.transition = '';
    ghostPortal.style.transition = '';
    awarenessPanel.style.transition = '';
  }

  startedAt = performance.now() - (bootDuration + blackoutDuration + eyeOpenDuration + logoDelay + 1_200);
  setLivingInterfaceVisibility(false);
  lastPhase = '';
}

function openDomainSequence() {
  domainActive = true;
  domainSequence.classList.add('is-active');
  domainSequence.classList.remove('is-complete');
  domainCode.textContent = '';
  domainCode.scrollTop = 0;
  regainConscious.blur();
  setLivingInterfaceVisibility(false);
  startedAt = performance.now() - bootDuration * 0.44;
  lastPhase = '';

  cancelAnimationFrame(domainRevealFrame);
  domainRevealStart = performance.now();
  domainRevealFrame = requestAnimationFrame(revealDomainSignal);
}

function revealDomainSignal(now: number) {
  const revealDuration = clamp(domainSignal.length * 7.1, 18_000, 38_000);
  const progress = clamp((now - domainRevealStart) / revealDuration, 0, 1);
  const eased = smoothstep(0, 1, progress);
  const visibleCharacters = Math.floor(domainSignal.length * eased);
  domainCode.textContent = domainSignal.slice(0, visibleCharacters);
  domainCode.scrollTop = domainCode.scrollHeight;

  if (progress < 1) {
    domainRevealFrame = requestAnimationFrame(revealDomainSignal);
    return;
  }

  domainCode.textContent = domainSignal;
  domainCode.scrollTop = domainCode.scrollHeight;
  domainSequence.classList.add('is-complete');
}

function closeDomainSequence() {
  domainActive = false;
  cancelAnimationFrame(domainRevealFrame);
  domainSequence.classList.remove('is-active', 'is-complete');
  jumpToLivingScene();
}

window.addEventListener('resize', queueResize);
window.visualViewport?.addEventListener('resize', queueResize);
document.addEventListener('visibilitychange', handleVisibilityChange);
window.addEventListener('pointermove', (event) => setLookFromClient(event.clientX, event.clientY), { passive: true });
window.addEventListener('pointerleave', resetLook);
window.addEventListener(
  'touchmove',
  (event) => {
    const touch = event.touches[0];
    if (touch) {
      setLookFromClient(touch.clientX, touch.clientY);
    }
  },
  { passive: true }
);
window.addEventListener('touchend', resetLook);
window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'r') {
    startedAt = performance.now();
    setLivingInterfaceVisibility(false);
    lastPhase = '';
  }
});

ghostPortal.addEventListener('click', openDomainSequence);
regainConscious.addEventListener('click', closeDomainSequence);
awarenessForm.addEventListener('submit', (event) => {
  event.preventDefault();
  processAwarenessInput(true);
});
awarenessInput.addEventListener('input', queueAwarenessUpdate);
awarenessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    window.clearTimeout(awarenessDebounce);
    processAwarenessInput(true);
  }
});

debugWindow.__HUMETATECH_DEBUG__ = {
  jumpToLiving() {
    jumpToLivingScene(true);
  },
  restart() {
    skyCanvas.style.transition = '';
    brand.style.transition = '';
    irisLink.style.transition = '';
    ghostPortal.style.transition = '';
    awarenessPanel.style.transition = '';
    domainActive = false;
    domainSequence.classList.remove('is-active', 'is-complete');
    startedAt = performance.now();
    setLivingInterfaceVisibility(false);
    lastPhase = '';
  },
  clearAwarenessMemory() {
    window.localStorage.removeItem(memoryStorageKey);
    awarenessMemory = createAwarenessMemory();
    lastAwarenessInput = '';
    awarenessFeedback.textContent = 'memory cleared: seed returned to first breath.';
    awarenessResponse.textContent = 'response: blank lattice restored. new input will define direction.';
    refreshAwarenessFromMemory();
  }
};

awarenessMemory = loadAwarenessMemory();
refreshAwarenessFromMemory();
void loadSkyRenderer();
resize();
startAnimation();
