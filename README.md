# Utkarsh — Electronic Systems

A personal engineering portfolio for an Electronic Systems student. Built with
Next.js (App Router), TypeScript, Tailwind CSS, React Three Fiber / Three.js
for the interactive hero scene, and GSAP for scroll reveals.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for layout and utility styling
- **Three.js / @react-three/fiber / @react-three/drei** for the 3D hero scene
- **GSAP + ScrollTrigger** for scroll-based reveal animations

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

`npm run build` must complete with zero errors before deploying — this has
already been verified for the version in this repository.

## Deploy to Vercel

1. Push the contents of this repository to GitHub (the repo root already
   contains `package.json`, `next.config.mjs`, `app/`, `components/`, and
   `public/` directly — no extra nesting).
2. Import the repository in Vercel.
3. Framework preset: **Next.js**. Build command: `npm run build`. Install
   command: `npm install`. No environment variables or database are required.
4. Deploy.

## Where to put media

Everything lives under `public/assets/`:

| Path | What goes here |
| --- | --- |
| `public/assets/images/` | General site imagery |
| `public/assets/videos/` | Any video assets |
| `public/assets/models/` | `.glb` / `.gltf` files to replace the procedural Three.js hero geometry |
| `public/assets/textures/` | Textures for 3D models |
| `public/assets/icons/` | Icons / favicon assets |
| `public/assets/projects/tm4c/` | TM4C123 ESC Controller Simulator media |
| `public/assets/projects/oled/` | Raspberry Pi + OLED media |
| `public/assets/projects/rc-filter/` | RC Filter Characterization media |
| `public/assets/projects/ropewalker/` | RopeWalker media |
| `public/assets/lab/` | Hardware Lab section photography, waveform captures, schematics |
| `public/assets/resume/` | Resume PDF |

Each of those directories contains a `README.md` placeholder so the folder is
preserved by Git even while empty — delete the placeholder once you drop real
files in.

## Replacing placeholders

Search the codebase for bracketed placeholders such as `[PROFESSIONAL EMAIL]`,
`[GITHUB URL]`, `[LINKEDIN URL]`, `[PROJECT PHOTOGRAPH]`, `[PROJECT DATE]`,
`[INSERT MEASURED RESULT]`, and `[RESUME PDF]`. They live in:

- `components/Hero.tsx` — location
- `components/Contact.tsx` — email, GitHub, LinkedIn, resume link
- `lib/data.ts` — project dates, case-study results, timeline dates
- `components/Lab.tsx` — bench photography / waveform placeholders

No achievements, credentials, or measurements have been invented — every
unknown value is an explicit placeholder ready to be replaced with real
content.

## Replacing the procedural 3D scene with real models

`components/Scene.tsx` currently builds the hero composition (PCB,
microcontroller, OLED module, BLDC motor) from procedural Three.js geometry
so the project runs with zero external assets. To swap in real models:

1. Drop `.glb` / `.gltf` files into `public/assets/models/`.
2. Load them with `useGLTF` from `@react-three/drei` inside `Scene.tsx`,
   replacing the corresponding procedural component.

## Notes

- 3D rendering is dynamically imported client-side only (`ssr: false`) so it
  never blocks first paint or SSR.
- `prefers-reduced-motion` is respected in both the hero scene (parallax/float
  disabled) and scroll reveals (animations resolve instantly).
- Teaching-related content is intentionally absent — this is an engineering
  portfolio only.
