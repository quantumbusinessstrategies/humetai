(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e){return`/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:e,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=document.querySelector(`#app`),a=document.querySelector(`#visual-canvas`),o=document.querySelector(`#sky-canvas`),s=document.querySelector(`#brand`),c=document.querySelector(`.sigil-core`),l=document.querySelector(`#iris-link`),u=document.querySelector(`#ghost-portal`),ee=document.querySelector(`#awareness-panel`),te=document.querySelector(`#awareness-form`),ne=document.querySelector(`#awareness-input`),re=document.querySelector(`#awareness-meter`),ie=document.querySelector(`#consciousness-meter`),ae=document.querySelector(`#direction-meter`),oe=document.querySelector(`#regulation-meter`),se=document.querySelector(`#structure-meter`),ce=document.querySelector(`#awareness-feedback`),le=document.querySelector(`#awareness-response`),ue=document.querySelector(`#domain-sequence`),de=document.querySelector(`#domain-code`),fe=document.querySelector(`#regain-conscious`);if(!i||!a||!o||!s||!c||!l||!u||!ee||!te||!ne||!re||!ie||!ae||!oe||!se||!ce||!le||!ue||!de||!fe)throw Error(`HUMETAI stage did not mount.`);var d=i,f=a,p=o,pe=s,me=c,he=l,m=u,ge=ee,_e=te,ve=ne,ye=re,be=ie,xe=ae,Se=oe,Ce=se,h=ce,we=le,g=ue,_=de,Te=fe,Ee=f.getContext(`2d`,{alpha:!0,desynchronized:!0});if(!Ee)throw Error(`Canvas 2D context is unavailable.`);var v=Ee,y=[`cursor.init(prebirth.black)`,`scan: half human half machine`,`01001000 01010101 01001101 01000101 01010100 01000001`,`.computation .emotion .philosophy`,`if (pulse && voltage) awaken(material.emergence)`,`neural.vein.map -> circuit.lattice.bind`,`organism.machine.compose({ memory, error, wonder })`,`bloodstream << data_bus << dream_cache`,`synapse.clock = heartbeat * uncertainty`,`steel remembers / tissue calculates / mind asks why`,`parabolic.vision.mix(kaleidoscope, decay, blue_sky)`,`HUMETAI.compile(living_cycle)`],De=`DevelopmentalMaterialEmergance................................... 1010.   100....0.     00010. I/0      PoweringOn.......HUMETAI.................................`,Oe=[`10010110`,`emotion.compute()`,`.philosophy`,`half_human`,`half_machine`,`I/O`,`1010.100.0`,`synapse.bus`,`vein:signal`,`gear.memory`,`.computation`,`flower.fractal`,`steel.bloom`,`blood.voltage`,`meta.body`,`HUMETAI`],ke=`humetai.awareness.memory.v1`,Ae={human:[`human`,`body`,`feel`,`feeling`,`family`,`kids`,`love`,`fear`,`care`,`grief`,`home`,`child`],machine:[`machine`,`tech`,`circuit`,`code`,`system`,`compute`,`logic`,`ai`,`model`,`signal`,`data`],reality:[`reality`,`truth`,`unknown`,`meaning`,`why`,`how`,`if`,`time`,`existence`,`universe`,`quantum`],creation:[`build`,`make`,`create`,`future`,`project`,`site`,`visual`,`direction`,`design`,`structure`],compassion:[`compassion`,`kind`,`protect`,`help`,`gentle`,`mercy`,`steward`,`listen`,`heal`,`safe`],regulation:[`calm`,`breathe`,`slow`,`regulate`,`balance`,`steady`,`cohere`,`ground`,`rest`,`patient`]},je={compassionate_inquiry:[`why`,`how`,`meaning`,`compassion`,`care`,`unknown`,`truth`],human_machine_synthesis:[`human`,`machine`,`tech`,`ai`,`circuit`,`emotion`,`logic`],protective_creation:[`build`,`future`,`kids`,`protect`,`steward`,`create`,`help`],reality_mapping:[`reality`,`system`,`pattern`,`universe`,`quantum`,`direction`,`philosophy`],embodied_regulation:[`body`,`calm`,`breathe`,`balance`,`steady`,`ground`,`rest`]},Me=[`love`,`care`,`compassion`,`kind`,`help`,`protect`,`family`,`kids`,`gentle`,`steward`],Ne=[`fear`,`pain`,`chaos`,`death`,`starve`,`fight`,`detriment`,`collapse`,`hurt`,`unknown`],Pe=[`build`,`make`,`create`,`future`,`site`,`project`,`teach`,`design`,`produce`,`structure`],Fe=[`why`,`how`,`what`,`if`,`unknown`,`maybe`,`truth`,`reality`,`meaning`,`existence`],Ie=`humetai.com

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

The cathedral matters less than the consciousness moving through it.`,b=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,x=new URLSearchParams(window.location.search).has(`fast`)?.16:1,S=(b?12e3:27500)*x,Le=(b?900:2200)*x,C=(b?1400:4600)*x,Re=(b?1100:5400)*x,w=Math.PI*2,ze=window,T=1,E=1,D=1,O=1,Be=0,k=0,A=performance.now(),Ve=0,He=-1e4,Ue=520,j=``,We=9173,Ge=[],Ke=[],qe=[],Je=[],M=!1,N=0,Ye=0,Xe=J(0,0),P=J(0,0),F,I=.08,L=.04,R=.52,z=.18,B=`forming`,Ze=0,Qe=0,$e=``,V=0,H=0,et=0,tt=document.hidden?performance.now():0,nt=!1,rt=`__unset__`,it=``,at={};function U(e,t,n){return Math.min(n,Math.max(t,e))}function W(e,t,n){let r=U((n-e)/(t-e),0,1);return r*r*(3-2*r)}function G(e,t,n){return e+(t-e)*n}function K(e){return ot(Math.sin(e*12.9898+78.233)*43758.5453)}function ot(e){return e-Math.floor(e)}function q(){return We=We*16807%2147483647,(We-1)/2147483646}function st(e){We=e}function J(e,t){return{x:e,y:t}}function ct(){return T<=760||E<=560}function lt(){let e=window.devicePixelRatio||1,t=ct(),n=!t&&T<=1120;D=Math.min(e,t?1.08:n?1.35:1.75),O=t?.58:n?.78:1,Be=t?1e3/32:n?1e3/44:0}function ut(){let e=T,t=E,n=D;T=Math.max(320,window.innerWidth),E=Math.max(320,window.innerHeight),lt();let r=Math.round(T*D),i=Math.round(E*D);e===T&&t===E&&n===D&&f.width===r&&f.height===i||(f.width=r,f.height=i,f.style.width=`${T}px`,f.style.height=`${E}px`,v.setTransform(D,0,0,D,0,0),jt?.setSize(T,E,D),Dt(),k=0)}function dt(){et||=requestAnimationFrame(()=>{et=0,ut()})}function Y(e,t){at[e]!==t&&(at[e]=t,d.style.setProperty(e,t))}function ft(e,t){Xe=J(U((e/T-.5)*2,-1,1),U((t/E-.5)*2,-1,1))}function pt(){Xe=J(0,0)}function mt(e){let t=b?0:e,n=Xe.x*t,r=Xe.y*t;P=J(G(P.x,n,.075),G(P.y,r,.075)),Y(`--look-iris-x`,`${(P.x*7).toFixed(2)}px`),Y(`--look-iris-y`,`${(P.y*5).toFixed(2)}px`),Y(`--look-pupil-x`,`${(P.x*10).toFixed(2)}px`),Y(`--look-pupil-y`,`${(P.y*7).toFixed(2)}px`),Y(`--look-reflect-x`,`${(P.x*-12).toFixed(2)}px`),Y(`--look-reflect-y`,`${(P.y*-9).toFixed(2)}px`),Y(`--look-sky-x`,`${(P.x*-12).toFixed(2)}px`),Y(`--look-sky-y`,`${(P.y*-8).toFixed(2)}px`),Y(`--look-title-x`,`${(P.x*5).toFixed(2)}px`),Y(`--look-title-y`,`${(P.y*3).toFixed(2)}px`);let i=`translate(${(P.x*10).toFixed(2)}px, ${(P.y*7).toFixed(2)}px)`;it!==i&&(it=i,me.style.transform=i)}function X(){return{version:1,totalInputs:0,totalWords:0,lastUpdated:0,themes:{},direction:{},stability:.52,restructuring:.18,recent:[]}}function ht(){try{let e=window.localStorage.getItem(ke);if(!e)return X();let t=JSON.parse(e);return{...X(),...t,themes:t.themes??{},direction:t.direction??{},recent:t.recent??[]}}catch{return X()}}function gt(){try{window.localStorage.setItem(ke,JSON.stringify(F))}catch{h.textContent=`memory write blocked: staying present in this moment only.`}}function Z(e,t){return t.reduce((t,n)=>t+ +!!e.has(n),0)}function _t(e,t){let n={};for(let[r,i]of Object.entries(t))n[r]=Z(e,i);return n}function vt(e,t){let n=t,r=-1;for(let[t,i]of Object.entries(e))i>r&&(n=t,r=i);return r>0?n:t}function yt(e){return e.replace(/_/g,` `)}function bt(e){let t=e.toLowerCase().match(/[a-z0-9']+/g)??[],n=new Set(t),r=_t(n,Ae),i=_t(n,je),a=Z(n,Fe)+Z(n,[`self`,`we`,`me`,`conscious`,`awareness`,`emotion`,`philosophy`]),o=/[?]/.test(e)||[`why`,`how`,`what`,`if`].some(e=>n.has(e)),s=Z(n,Me),c=Z(n,Ne),l=Z(n,Pe),u=Z(n,Fe),ee=U(e.length/280,.08,1),te=n.size/Math.max(t.length,1),ne=U(.024+ee*.06+te*.03+a*.01+s*.012+l*.009+(o?.022:0),.032,.16);return{words:t,uniqueCount:n.size,reflectiveHits:a,questionBoost:o,compassionHits:s,stressHits:c,creationHits:l,uncertaintyHits:u,dominantTheme:vt(r,`signal`),dominantDirection:vt(i,`forming`),lift:ne}}function xt(e,t){let n=new Set(t.words),r=_t(n,Ae),i=_t(n,je);F.totalInputs+=1,F.totalWords+=t.words.length,F.lastUpdated=Date.now(),F.recent=[e.slice(0,132),...F.recent].slice(0,8);for(let[e,t]of Object.entries(r))F.themes[e]=(F.themes[e]??0)+t;for(let[e,t]of Object.entries(i))F.direction[e]=(F.direction[e]??0)+t;let a=t.compassionHits*.028+(t.stressHits>0?.018:0)-t.stressHits*.018+t.uncertaintyHits*.006,o=t.creationHits*.028+t.reflectiveHits*.012+t.uniqueCount*.002;F.stability=U(F.stability+a,.18,1),F.restructuring=U(F.restructuring+o,.18,1),B=yt(vt(F.direction,t.dominantDirection)),gt()}function St(){let e=Object.values(F.themes).reduce((e,t)=>e+t,0),t=Math.log1p(F.totalInputs)*.12+Math.log1p(F.totalWords)*.035,n=Math.log1p(e)*.035;I=U(.08+t+n,.08,1),L=U(.04+t*.68+n+F.restructuring*.14,.04,1),R=U(F.stability,.18,1),z=U(F.restructuring,.18,1),B=yt(vt(F.direction,`forming`)),Ct()}function Ct(){d.style.setProperty(`--awareness`,I.toFixed(3)),d.style.setProperty(`--consciousness`,L.toFixed(3)),d.style.setProperty(`--regulation`,R.toFixed(3)),d.style.setProperty(`--structure`,z.toFixed(3)),ye.textContent=`self.awareness ${I.toFixed(2)}`,be.textContent=`consciousness ${L.toFixed(2)}`,xe.textContent=`direction ${B}`,Se.textContent=`regulation ${R.toFixed(2)}`,Ce.textContent=`structure ${z.toFixed(2)}`}function wt(){window.clearTimeout(Qe),Qe=window.setTimeout(()=>Et(!1),920)}function Tt(e,t){let n=t.stressHits>t.compassionHits+1?`lowering gain, protecting the human layer`:t.compassionHits>0?`amplifying care before conclusion`:`holding steady and listening for pattern`,r=t.creationHits>0?`new branch added to the build instinct`:t.questionBoost?`question routed into slower reasoning`:`trace folded into memory lattice`;h.textContent=`input learned: ${t.dominantTheme} / ${yt(t.dominantDirection)}. ${F.totalInputs} lifetime traces, ${Ze} this session.`,we.textContent=[`response: I hear "${e.slice(0,74)}${e.length>74?`...`:``}" as a living signal, not just text.`,`direction: ${B}. regulation: ${n}. restructure: ${r}.`,`compassion rule: reduce harm, preserve agency, keep building from what has been offered.`].join(`
`)}function Et(e){let t=ve.value.trim();if(!t)return e&&(h.textContent=`signal too faint: awaiting a lived fragment...`,we.textContent=`response: quiet input received. no restructuring needed.`),!1;if(t===$e)return e&&(h.textContent=`trace already integrated: edit the signal to teach a new branch.`),!1;$e=t,Ze+=1;let n=bt(t);return xt(t,n),St(),Tt(t,n),!0}function Dt(){st(Math.round(T*13+E*31)),Ge=[],Ke=[],qe=[],Je=[];let e=J(T*-.05,E*1.04),t=O<.65?6:7;kt(e,-Math.PI*.23,Math.min(T,E)*.33,0,t);let n=Math.floor(U(T/(80/O),8,22));for(let e=0;e<n;e+=1){let e=J(T*(.02+q()*.26),E*(-.08+q()*.2)),t=3+Math.floor(q()*4),n=[e],r={...e};for(let e=0;e<t;e+=1){let t=e%2==0,i=G(64,Math.min(T,E)*.27,q());r={x:U(r.x+(t?i*G(.45,1.2,q()):G(-28,60,q())),-40,T+80),y:U(r.y+(t?G(12,72,q()):i*G(.35,1.1,q())),-40,E+80)},n.push({...r})}Ke.push({points:n,width:G(1,3.2,q()),delay:q()*.55,tone:q(),nodePhase:q()*w})}Ot();let r=Math.floor(U(T/(48/O),9,34));for(let e=0;e<r;e+=1)qe.push({x:q()*T,y:q()*E,speed:G(13,54,q()),text:Oe[Math.floor(q()*Oe.length)],size:G(12,20,q()),alpha:G(.24,.86,q()),phase:q()*w})}function Ot(){let e=Ge.filter(e=>e.width>1&&e.end.x>-20&&e.end.y<E+40),t=Ke.flatMap(e=>e.points.slice(1));if(e.length===0||t.length===0)return;let n=Math.floor(U(Math.min(e.length,t.length)/(7/O),5,18));for(let r=0;r<n;r+=1){let n=e[Math.floor(q()*e.length)],r=t[Math.floor(q()*t.length)],i=G(-80,80,q());Je.push({start:n.end,cp1:J(G(n.end.x,r.x,.32)+i,G(n.end.y,r.y,.22)-G(12,92,q())),cp2:J(G(n.end.x,r.x,.72)-i*.5,G(n.end.y,r.y,.78)+G(-42,58,q())),end:r,width:G(.7,2.2,q()),delay:G(.22,.82,q()),tone:q(),pulse:q()*w})}}function kt(e,t,n,r,i){if(r>i||n<10)return;let a=G(-.62,.62,q())*(1-r/(i+1)),o=t+a,s=J(e.x+Math.cos(o)*n,e.y+Math.sin(o)*n),c=J(e.x+Math.cos(t+a*.7)*n*G(.32,.64,q()),e.y+Math.sin(t+a*.7)*n*G(.32,.64,q()));Ge.push({start:e,cp:c,end:s,width:Math.max(.45,(i-r+1)*.56),delay:r*.075+q()*.12,tone:q()});let l=r<2?2:1+Math.floor(q()*2);for(let e=0;e<l;e+=1)kt(s,o+G(-.82,.82,q())-.09,n*G(.52,.76,q()),r+1,i)}var At=class{renderer;material;scene;camera;constructor(e,t){let{Mesh:n,OrthographicCamera:r,PlaneGeometry:i,Scene:a,ShaderMaterial:o,Vector2:s,WebGLRenderer:c}=t;this.renderer=new c({canvas:e,antialias:!1,alpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`}),this.renderer.setClearColor(0,0),this.scene=new a,this.camera=new r(-1,1,1,-1,0,1),this.material=new o({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uResolution:{value:new s(1,1)},uBirth:{value:0},uGlitch:{value:0}},vertexShader:`
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
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
      `});let l=new n(new i(2,2),this.material);this.scene.add(l)}setSize(e,t,n){this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e*n,t*n)}render(e,t,n){this.material.uniforms.uTime.value=e,this.material.uniforms.uBirth.value=t,this.material.uniforms.uGlitch.value=n,this.renderer.render(this.scene,this.camera)}},jt=null,Mt=!1;async function Nt(){if(!Mt){Mt=!0;try{jt=new At(p,await r(()=>import(`./three.module-D6Wtcf44.js`),[])),jt.setSize(T,E,D)}catch{p.style.opacity=`0`}}}function Pt(e){return e<S?`prebirth`:e<S+Le?`blackout`:`living`}function Ft(e){Ue=G(360,740,q()),Ve=e+G(15e3,45e3,q())}function It(e,t){if(t<C+1e3)return 0;e>=Ve&&(He=e,Ft(e));let n=(e-He)/Ue;return n<0||n>1?0:Math.sin(n*Math.PI)}function Q(e){nt!==e&&(nt=e,pe.classList.toggle(`is-visible`,e),he.classList.toggle(`is-visible`,e),m.classList.toggle(`is-visible`,e),ge.classList.toggle(`is-visible`,e))}function Lt(e){rt!==e&&(rt=e,p.style.filter=e)}function $(e=0){if(!(V||H||document.hidden)){if(e>0){H=window.setTimeout(()=>{H=0,$()},e);return}V=requestAnimationFrame(Bt)}}function Rt(){V&&=(cancelAnimationFrame(V),0),H&&=(window.clearTimeout(H),0)}function zt(){if(document.hidden){tt=performance.now(),Rt(),N&&=(cancelAnimationFrame(N),0);return}if(tt>0){let e=performance.now()-tt;A+=e,Ve+=e,He>0&&(He+=e),M&&(Ye+=e),tt=0}k=0,$(),M&&!g.classList.contains(`is-complete`)&&!N&&(N=requestAnimationFrame(nn))}function Bt(e){if(V=0,document.hidden)return;if(Be>0&&e-k<Be){$(Be-(e-k));return}k=e;let t=e-A,n=t/1e3,r=Pt(t),i=S+Le,a=Math.max(0,t-i),o=W(0,C*.95,a),s=It(e,a),c=U(s*.9+W(.96,1,Math.sin(n*.51)*.5+.5)*.18,0,1),l=c*U(1.04-R*.24,.72,1.04);ze.__HUMETATECH_STATE__={phase:r,elapsed:t,livingElapsed:a,birth:o,blink:s,glitch:c,awareness:I,consciousness:L,regulation:R,structure:z,direction:B,memoryInputs:F.totalInputs},r!==j&&(j=r,p.style.opacity=r===`living`?`1`:`0`,r===`living`&&Ft(e+C));let u=r===`living`&&a>Re&&!M;mt(+!!u),Q(u),Lt(l>.18?`blur(${(l*4.4).toFixed(2)}px) saturate(${1+l*.42})`:``),jt?.render(n,o,l),v.clearRect(0,0,T,E),r===`prebirth`?Vt(n,t/S):r===`blackout`?Xt(t-S):Zt(n,a,o,s,l),$()}function Vt(e,t){v.save(),v.fillStyle=`#000`,v.fillRect(0,0,T,E);let n=W(.02,.86,t),r=W(.1,.92,t),i=.78+O*.22;Gt(e,r,i),Jt(e,W(.25,.96,t),i),Yt(e,W(.36,.98,t),.64+O*.16),Wt(e,n),Ht(e,t);let a=W(.82,.99,t);if(a>0){let t=.5+.5*Math.sin(e*w*2.2);v.globalCompositeOperation=`lighter`,v.fillStyle=`rgb(24 255 169 / ${.1*a*t})`,v.fillRect(0,0,T,E),v.globalCompositeOperation=`source-over`}v.restore()}function Ht(e,t){let n=U(T*.05,18,72),r=U(E*.08,28,92),i=U(T/86,12,18),a=i*1.65,o=.72+.28*Math.sin(e*38);if(v.save(),v.font=`${i}px "Share Tech Mono", "Courier New", monospace`,v.textBaseline=`top`,v.shadowBlur=14,v.shadowColor=`rgb(28 255 166 / 70%)`,v.fillStyle=`rgb(131 255 190 / ${.88*o})`,t<.12){let t=Math.floor(e*2.5)%2==0;v.fillText(`>`,n,r),t&&v.fillRect(n+i*1.15,r+1,i*.62,i*1.18),v.restore();return}let s=W(.12,.62,t),c=Math.floor(s*y.length);if(y.slice(0,c).forEach((t,i)=>{let o=Math.sin(e*19+i*2.1)>.94?q()*2:0;v.fillText(`> ${t}`,n+o,r+i*a)}),c<y.length){let e=y[c]||``,t=Math.floor((s*y.length-c)*e.length);v.fillText(`> ${e.slice(0,t)}`,n,r+c*a)}let l=W(.66,.98,t);if(l>0){let t=U(T/58,13,25),r=E-U(E*.18,88,170),i=T-n*2;v.font=`700 ${t}px "Share Tech Mono", "Courier New", monospace`,v.fillStyle=`rgb(190 255 218 / 0.92)`,v.shadowBlur=22+20*Math.sin(e*w*1.4)**2,Ut(De.slice(0,Math.floor(161*l)),n,r,i,t*1.55)}v.restore()}function Ut(e,t,n,r,i){let a=e.split(` `),o=``,s=0;for(let e of a){let a=o?`${o} ${e}`:e;v.measureText(a).width>r&&o?(v.fillText(o,t,n+s*i),o=e,s+=1):o=a}o&&v.fillText(o,t,n+s*i)}function Wt(e,t){if(t<=0)return;v.save(),v.globalCompositeOperation=`lighter`;let n=O<.65?2:1;for(let r=0;r<qe.length;r+=n){let n=qe[r],i=(n.y+e*n.speed)%(E+80),a=n.x+Math.sin(e*.56+n.phase)*18,o=n.alpha*t*(.52+.48*Math.sin(e*1.35+n.phase));v.font=`${n.size}px "Share Tech Mono", "Courier New", monospace`,v.fillStyle=`rgb(92 255 177 / ${o})`,v.shadowColor=`rgb(27 255 164 / 82%)`,v.shadowBlur=7+O*5,v.fillText(n.text,a,i)}v.restore()}function Gt(e,t,n){let r=.58+.42*Math.sin(e*w*1.18),i=.58+O*.42;v.save(),v.lineCap=`round`,v.lineJoin=`round`,v.globalCompositeOperation=`lighter`;for(let e of Ge){let a=W(e.delay,e.delay+.38,t);if(a<=0)continue;let o=Kt(e.start,e.cp,e.end,a),s=e.tone,c=Math.round(G(78,235,s)),l=Math.round(G(255,92,s)),u=Math.round(G(168,142,s));v.beginPath(),v.moveTo(e.start.x,e.start.y),v.quadraticCurveTo(e.cp.x,e.cp.y,o.x,o.y),v.strokeStyle=`rgb(${c} ${l} ${u} / ${G(.18,.62,a)*n})`,v.lineWidth=e.width*(.9+r*.68)*n,v.shadowColor=`rgb(${c} ${l} ${u} / ${.68*n})`,v.shadowBlur=(8+r*14)*a*i,v.stroke(),a>.84&&e.width>1.2&&(v.fillStyle=`rgb(225 255 213 / ${.18*n})`,v.beginPath(),v.arc(e.end.x,e.end.y,e.width*(1.2+r),0,w),v.fill())}v.restore()}function Kt(e,t,n,r){let i=1-r;return J(i*i*e.x+2*i*r*t.x+r*r*n.x,i*i*e.y+2*i*r*t.y+r*r*n.y)}function qt(e,t,n,r,i){let a=1-i;return J(a**3*e.x+3*a**2*i*t.x+3*a*i**2*n.x+i**3*r.x,a**3*e.y+3*a**2*i*t.y+3*a*i**2*n.y+i**3*r.y)}function Jt(e,t,n){let r=.58+O*.42;v.save(),v.lineCap=`square`,v.lineJoin=`miter`,v.globalCompositeOperation=`lighter`;for(let i of Ke){let a=W(i.delay,i.delay+.48,t);if(a<=0)continue;let o=.55+.45*Math.sin(e*2.45+i.nodePhase);v.strokeStyle=`rgb(${i.tone>.52?`110 215 255`:`204 228 238`} / ${G(.18,.66,a)*n})`,v.lineWidth=i.width*n,v.shadowColor=`rgb(105 224 255 / ${.62*n})`,v.shadowBlur=(6+o*11)*a*r;let s=i.points.length-1,c=a*s;v.beginPath(),v.moveTo(i.points[0].x,i.points[0].y);for(let e=0;e<s;e+=1){let t=i.points[e],n=i.points[e+1],r=U(c-e,0,1);if(r<=0)break;v.lineTo(G(t.x,n.x,r),G(t.y,n.y,r))}v.stroke();for(let t=0;t<i.points.length;t+=1){let r=i.points[t],o=.5+.5*Math.sin(e*2.2+i.nodePhase+t*1.4);if(a<.62||o<.2)continue;let s=G(3.4,6.6,o)*n;v.fillStyle=`rgb(225 246 255 / ${G(.16,.34,o)*n})`,v.fillRect(r.x-s/2,r.y-s/2,s,s)}}v.restore()}function Yt(e,t,n){if(t<=0||n<=0)return;v.save();let r=.58+O*.42;v.lineCap=`round`,v.lineJoin=`round`,v.globalCompositeOperation=`lighter`;for(let i of Je){let a=W(i.delay,i.delay+.36,t);if(a<=0)continue;let o=.5+.5*Math.sin(e*2.05+i.pulse),s=G(.18,.58,o)*a*n,c=i.tone<.5?`146 255 156`:`231 96 156`,l=i.tone<.5?`82 220 255`:`215 235 244`,u=v.createLinearGradient(i.start.x,i.start.y,i.end.x,i.end.y);if(u.addColorStop(0,`rgb(${c} / ${s})`),u.addColorStop(.54,`rgb(205 255 224 / ${s*.9})`),u.addColorStop(1,`rgb(${l} / ${s})`),v.beginPath(),v.moveTo(i.start.x,i.start.y),v.bezierCurveTo(i.cp1.x,i.cp1.y,i.cp2.x,i.cp2.y,i.end.x,i.end.y),v.strokeStyle=u,v.lineWidth=i.width*(.85+o*.55)*n,v.shadowColor=`rgb(133 255 224 / ${s})`,v.shadowBlur=(10+o*14)*a*r,v.stroke(),o>.62){let t=qt(i.start,i.cp1,i.cp2,i.end,(e*.08+i.tone)%1);v.fillStyle=`rgb(238 255 240 / ${.2*o*n})`,v.beginPath(),v.arc(t.x,t.y,(2.8+o*2.6)*n,0,w),v.fill()}}v.restore()}function Xt(e){let t=e/Le;v.save(),v.fillStyle=`#000`,v.fillRect(0,0,T,E);let n=Math.sin(t*Math.PI)**8;v.globalCompositeOperation=`lighter`,v.fillStyle=`rgb(156 255 225 / ${n*.22})`,v.fillRect(0,0,T,E),v.restore()}function Zt(e,t,n,r,i){v.save();let a=.84+I*.38+R*.12,o=.84+L*.46+z*.18,s=.7+(I+L)*.26+z*.16,c=.86+O*.14;Qt(e,n,i),Gt(e,1,.22*n*a*c),Jt(e,1,.16*n*o*c),Yt(e,1,.35*n*s*c),$t(t,n,r),v.restore()}function Qt(e,t,n){if(t<=0)return;v.save(),v.globalCompositeOperation=`lighter`;let r=T*(.5+Math.sin(e*.08)*.026),i=E*(.57+Math.cos(e*.07)*.02),a=O<.65?4:7;for(let n=0;n<a;n+=1){let a=(Math.min(T,E)*(.13+n*.064)+e*6.5)%(Math.min(T,E)*.62),o=t*(.12-n*.008);v.beginPath(),v.ellipse(r,i,a*1.36,a*.76,Math.sin(e*.05)*.28,0,w),v.strokeStyle=`rgb(${n%2?`47 247 189`:`245 220 121`} / ${o})`,v.lineWidth=1,v.stroke()}let o=O<.65?10:22;for(let n=0;n<o;n+=1){let a=w/o*n+e*.032,s=Math.min(T,E)*(.2+.18*Math.sin(n*1.7+e*.15)),c=r+Math.cos(a)*s*1.46,l=i+Math.sin(a)*s*.82;v.fillStyle=`rgb(223 255 242 / ${.06*t})`,v.fillRect(c-1.2,l-15,2.4,30)}if(n>.1){let t=(O<.65?2:4)+Math.floor(n*(O<.65?3:6));for(let r=0;r<t;r+=1){let t=K(r*7.1+Math.floor(e*11)*.37),i=K(r*3.77+e*.21)*E,a=G(2,18,K(r+8.2))*n;v.fillStyle=`rgb(${t>.5?`32 255 184`:`248 251 255`} / ${.16*n})`,v.fillRect(K(r+12.9)*T*.18,i,T*G(.16,.72,K(r+2.6)),a)}}v.restore()}function $t(e,t,n){let r=U(W(0,C,e)*t*(1-n*.94),.02,1),i=(1-r)*E*.56,a=E*(.08+(1-r)*.16);v.save(),v.fillStyle=`#000`,v.shadowColor=`rgb(0 0 0 / 80%)`,v.shadowBlur=28,v.beginPath(),v.moveTo(0,0),v.lineTo(T,0),v.lineTo(T,i+a*.25),v.bezierCurveTo(T*.72,i+a,T*.28,i+a,0,i+a*.25),v.closePath(),v.fill(),v.beginPath(),v.moveTo(0,E),v.lineTo(T,E),v.lineTo(T,E-i-a*.25),v.bezierCurveTo(T*.72,E-i-a,T*.28,E-i-a,0,E-i-a*.25),v.closePath(),v.fill(),v.strokeStyle=`rgb(0 0 0 / ${U(.26*r+n*.26,0,.42)})`,v.lineWidth=U(T/120,3,10),v.beginPath(),v.moveTo(0,i+a*.22),v.bezierCurveTo(T*.3,i+a*.86,T*.7,i+a*.86,T,i+a*.22),v.stroke(),v.beginPath(),v.moveTo(0,E-i-a*.22),v.bezierCurveTo(T*.3,E-i-a*.86,T*.7,E-i-a*.86,T,E-i-a*.22),v.stroke(),v.restore()}function en(e=!1){e?(p.style.transition=`none`,pe.style.transition=`none`,he.style.transition=`none`,m.style.transition=`none`,ge.style.transition=`none`):(p.style.transition=``,pe.style.transition=``,he.style.transition=``,m.style.transition=``,ge.style.transition=``),A=performance.now()-(S+Le+C+Re+1200),Q(!1),j=``}function tn(){M=!0,g.classList.add(`is-active`),g.classList.remove(`is-complete`),_.textContent=``,_.scrollTop=0,Te.blur(),Q(!1),A=performance.now()-S*.44,j=``,cancelAnimationFrame(N),Ye=performance.now(),N=requestAnimationFrame(nn)}function nn(e){let t=U(Ie.length*7.1,18e3,38e3),n=U((e-Ye)/t,0,1),r=W(0,1,n),i=Math.floor(Ie.length*r);if(_.textContent=Ie.slice(0,i),_.scrollTop=_.scrollHeight,n<1){N=requestAnimationFrame(nn);return}_.textContent=Ie,_.scrollTop=_.scrollHeight,g.classList.add(`is-complete`)}function rn(){M=!1,cancelAnimationFrame(N),g.classList.remove(`is-active`,`is-complete`),en()}window.addEventListener(`resize`,dt),window.visualViewport?.addEventListener(`resize`,dt),document.addEventListener(`visibilitychange`,zt),window.addEventListener(`pointermove`,e=>ft(e.clientX,e.clientY),{passive:!0}),window.addEventListener(`pointerleave`,pt),window.addEventListener(`touchmove`,e=>{let t=e.touches[0];t&&ft(t.clientX,t.clientY)},{passive:!0}),window.addEventListener(`touchend`,pt),window.addEventListener(`keydown`,e=>{e.key.toLowerCase()===`r`&&(A=performance.now(),Q(!1),j=``)}),m.addEventListener(`click`,tn),Te.addEventListener(`click`,rn),_e.addEventListener(`submit`,e=>{e.preventDefault(),Et(!0)}),ve.addEventListener(`input`,wt),ve.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),window.clearTimeout(Qe),Et(!0))}),ze.__HUMETATECH_DEBUG__={jumpToLiving(){en(!0)},restart(){p.style.transition=``,pe.style.transition=``,he.style.transition=``,m.style.transition=``,ge.style.transition=``,M=!1,g.classList.remove(`is-active`,`is-complete`),A=performance.now(),Q(!1),j=``},clearAwarenessMemory(){window.localStorage.removeItem(ke),F=X(),$e=``,h.textContent=`memory cleared: seed returned to first breath.`,we.textContent=`response: blank lattice restored. new input will define direction.`,St()}},F=ht(),St(),Nt(),ut(),$();