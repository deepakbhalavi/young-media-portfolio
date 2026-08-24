# Young Media Marketing — Design Directions

## Three possible approaches

### 1. Cut & Grain
**Very Brief Intro:** A high-contrast film-contact-sheet portfolio that treats every reel, poster, and creative like an artefact from an edit suite. It feels tactile, precise, and deliberately sparse.

**Probability:** 0.07

### 2. Gallery After Dark
**Very Brief Intro:** A museum-style black-space experience with large artwork, near-silent navigation, and slow visual reveals. The mood is more exhibition than agency site.

**Probability:** 0.04

### 3. Transmission Room
**Very Brief Intro:** A sharp, editorial broadcast identity using timecode cues, kinetic labels, and modular work columns. It is energetic but intentionally controlled.

**Probability:** 0.09

---

# Selected Direction: Cut & Grain

## Design Movement

**New-wave film titles meets Swiss editorial design.** The site should feel like a tightly edited director’s portfolio: raw enough to signal process, considered enough to present premium client work.

## Core Principles

1. **The work leads.** Video stills and poster art occupy generous, edge-aware frames; UI chrome is subdued and never competes.
2. **Contrast has meaning.** Near-black creates the stage, white carries hierarchy, and the few grey values explain structure without decoration.
3. **Tension over symmetry.** Offset columns, cropped headlines, interrupted rules, and deliberate negative space create momentum without noise.
4. **Material over ornament.** Fine grain, light bloom, scan-line rules, and timecode-like microtype introduce tactility rather than gratuitous effects.

## Color Philosophy

Absolute black (`#000000`) is the screening room: immersive, quiet, and generous to moving imagery. White (`#FFFFFF`) is used as the editorial voice: work titles, paths, and actions arrive in crisp focus. Neutral greys only define boundaries and metadata, ensuring the client content remains the brightest event on the page.

## Layout Paradigm

The experience follows an **editing timeline** rather than a conventional centered marketing layout. Sections enter as individual “cuts” in a vertical sequence: a cinematic opening frame, an index strip, an irregular image field, a reel screening room, a staggered creative wall, then an unadorned end card. Major titles intentionally sit off the expected column to create a sense of motion.

## Signature Elements

1. **Contact-sheet frame labels:** compact uppercase index labels, project counts, and category tags mimic editorial edit notes.
2. **Silverline rules:** thin, high-contrast horizontal lines punctuate sections like reel splices.
3. **Analog grain wash:** an extremely light, non-intrusive texture lives over dark surfaces and selected section images.

## Interaction Philosophy

The interface behaves like a professional screening room: controls are immediate, legible, and restrained. Hovering a work item reveals its exact project metadata; selecting a category actively re-cuts the work wall; opening media removes competing chrome so the content receives full attention.

## Animation

Use short, deliberate 180–300ms transitions with `cubic-bezier(0.23, 1, 0.32, 1)`. Grid cards lift by only a few pixels and reveal captions through opacity and a subtle vertical drift. Section entrances use opacity with small translated offsets, staggered by 50ms. The video and poster modal enters with a dark fade and slight scale from `0.97`; closing reverses instantly. No looping decorative animation and all nonessential movement yields to `prefers-reduced-motion`.

## Typography System

**Space Grotesk** serves as the expressive display voice: bold, compressed-feeling uppercase headlines and project numbering. **DM Mono** carries metadata, categories, and timecode detail in measured tracking. The display scale is oversized and occasionally clipped at the viewport edge; body copy stays short, sentence-case, and comfortably readable.

## Brand Essence

**Young Media Marketing turns modern brand moments into memorable moving images and graphic worlds.**

**Personality:** focused, cinematic, current.

## Brand Voice

Direct, spare, and assured. Headlines speak in short creative imperatives; CTAs invite a next frame rather than a sales funnel. Never use generic welcome language or inflated claims.

> “Scroll the cut. Feel the brand.”

> “Bring us the brief. We’ll make it move.”

## Wordmark & Logo

The supplied Young Media Marketing logo is the primary wordmark and visual authority. A compact, text-free three-ribbon mark is reserved for the mobile navigation, favicon, and small structural moments; it must never replace the supplied full logo in the hero or header.

## Signature Brand Color

**Screen White — `#FFFFFF`**: a hard, cinematic white used as the single decisive accent against the black field.

## Style Decisions

- Portfolio walls must show distinct project artifacts first; repeated imagery is allowed only when it clearly reads as an intentional series or edit sequence.
- The YMM ribbon mark should recur as a subtle structural edit motif — splice, stamp, index cue, or end-card signal — never as decoration competing with the work.
- White-background sections are deliberate paper/index-card inserts and retain the same microtype, rule, grain, and editorial-cut language as the black sections.
