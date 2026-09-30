# Layered Paper — Design System

**Version:** 0.2 · **Issued:** 29/09/2026
**Visual reference:** `design-system.html` (open in a browser)
**Reference assets:** `reference-a.jpg`, `reference-b.jpg`

A style-only design system for visual pieces in any format: social posts and carousels, posters, book covers and cards. It defines the **look**: reference imagery, colour, type, ornaments and layout. It does **not** define content, copy, slide counts or structure. Those come from the brief for each piece.

Expected repository layout:

```
layered-paper/
├── DESIGN.md             ← this file
├── design-system.html    ← visual reference for humans
├── reference-a.jpg       ← style reference: single arch
└── reference-b.jpg       ← style reference: stepped (double) arch
```

---

## 0. Instructions for Claude Code

When asked to produce anything "in the Layered Paper style":

1. Read this whole file, and look at `reference-a.jpg` and `reference-b.jpg`, before designing.
2. **Images:** generate every new illustration with a reference image attached, using the workflow in §6. Never draw scenes in code, and never let the image generator draw text.
3. **Everything else is built in code** (HTML/CSS/SVG), then rendered to PNG or PDF. That includes type, ornaments, backgrounds and any window frame around a placed image.
4. Use **only** the colour tokens in §3. Do not add tints, gradients or new colours.
5. Choose **one** accent for the piece or the whole set: crimson (default) or terracotta (§3.3).
6. Choose a composition from §5.5 that suits the format. Never use Composition A below a 2 : 3 portrait ratio.
7. Size everything in proportion to the canvas's short edge (§4.3, §5.1).
8. Before delivering, run the checklist in §8. Report any rule you had to break, and why.
9. If a brief conflicts with this file, ask rather than choosing silently.

---

## 1. Reference assets

The two reference images **are** the style. Every rule below is derived from them. They set the *look*, not the subject: a new image keeps their paper, depth, palette and framing, but depicts whatever the piece is about.

| File | Name | Description | Use for |
|---|---|---|---|
| `reference-a.jpg` | A · Single arch | One cut edge; the scene spills out at the lower left | Most pieces |
| `reference-b.jpg` | B · Stepped arch | Two concentric cut edges (a Deco step); the scene aligns to the arch's right edge | Title pieces, covers, formal pieces |

Both are 1024 × 1024 px, generated in Gemini.

### 1.1 Anatomy: what makes the style work

Every generated image must show these eight features:

1. **Recessed window.** The arch is cut into the front sheet, and its edge throws a soft shadow onto the scene at the top and left.
2. **Shallow relief with shadow lines.** Every shape casts a narrow shadow on the one behind it. The depth is a few millimetres, not a diorama or pop-up.
3. **Light against dark.** Neighbouring layers alternate in tone (a pale path against a dark hedge, a cream tower against an olive block), so every edge reads clearly.
4. **Spill-out.** Part of the scene (in the references, the trunk, ground and bench at the lower left) breaks out of the arch onto the page and ends in a soft wavy cut. The scene is never fully boxed in.
5. **Plants grow from the scene.** Trees and plants are rooted inside the picture and cross the arch edge. Leaves sit both in front of and behind other layers.
6. **Simple folded leaves.** Almond shapes with a single central fold (one lit half, one shaded half) and no vein detail. A few drift outside the scene as the motif.
7. **One accent mass.** A single accent disc (the sun) dominates. The accent is then echoed only in small pieces, such as some leaves or one figure, covering about 2–5 % of the image.
8. **Scale contrast.** Tiny figures and buildings set against a large tree and bench give depth without detail.

### 1.2 Known flaws in the references (do not copy)

- Reference A repeats an object: two near-identical benches.
- The crimson leaves are more numerous than the ideal. Aim for fewer accent echoes, not more.

---

## 2. Principles

| Principle | Meaning |
|---|---|
| **Layered** | Depth comes from stacked matte card and narrow shadows. No gradients, gloss or 3D rendering. |
| **Quiet** | Muted greens, sands and linen. One accent, with one dominant accent shape. |
| **Spacious** | At least a third of any composition is plain paper. |
| **Framed & freed** | Imagery sits in an arch but always escapes it somewhere, so it belongs to the page. |
| **Deco type** | Thin geometric capitals, wide tracking and fine double rules: elegance, not ornament. |

When a case isn't covered below, decide by these principles.

---

## 3. Colour

The values were sampled from the reference images. They are approximate to the images (which are compressed JPEGs), but they are the **definitive** values for this system.

### 3.1 Tokens

```css
:root {
  /* Paper & lights */
  --linen:      #EFE7D6; /* brightest paper: clouds, pale towers, cards */
  --paper:      #E9E0CC; /* THE page — default background; matches the references' ground */
  --parchment:  #DCCBAA; /* sky inside the arch; recesses */
  --sand:       #C4AC84; /* warm mid-light: benches, stone, pale leaves */

  /* Greens & darks */
  --khaki:      #998C5A; /* golden-olive mid layers — shapes only */
  --sage:       #81814F; /* water, lawns, back leaves — shapes only */
  --olive:      #4D593C; /* main dark green: leaves, buildings; dark ground */
  --forest:     #3E4A30; /* deepest green: trunks, hedges; dark ground */
  --ink:        #2E3322; /* all text on light grounds — never pure black */

  /* Accents — ONE per piece or set */
  --crimson:    #6E2A30; /* primary accent: deep, wine-dark */
  --terracotta: #B9653A; /* alternative accent: warmer, earthier */
  --accent:     var(--crimson);
}
```

```json
{
  "linen": "#EFE7D6", "paper": "#E9E0CC", "parchment": "#DCCBAA", "sand": "#C4AC84",
  "khaki": "#998C5A", "sage": "#81814F", "olive": "#4D593C", "forest": "#3E4A30", "ink": "#2E3322",
  "accent": { "crimson": "#6E2A30", "terracotta": "#B9653A" }
}
```

### 3.2 Proportion (as in reference A)

- Paper and lights (paper, linen, parchment, sand): **65–75 %**
- Greens and darks: **20–30 %**
- Accent: **2–5 %**

The exception is a type-only piece on a full crimson ground (Composition D), which counts as that piece's use of the accent.

### 3.3 Accent rules

- **One accent per piece, and per set.** Never mix crimson and terracotta.
- **Crimson** is the default and the references' own accent. It suits cities, gardens, seasons, quiet and formal subjects.
- **Terracotta** is the alternative for warmer, earthier or craft subjects, such as workshops, kitchens, pottery and harvest. It hasn't yet been tested against the references. When first using it, ask the generator to "use burnt terracotta in place of the crimson", then check the result against §1.1.
- **One dominant accent shape** (a sun, disc, doorway or boat), plus at most a few small echoes.
- **Never tint the accent.** No pinks, roses, peaches or pale versions.

### 3.4 Text on backgrounds

These are contrast ratios calculated to WCAG 2.1. The minimum is 4.5 : 1 for body text and 3 : 1 for large headings. Poiret One's hairline strokes look lighter than the ratio suggests, so give it more contrast, not less.

| Background | Linen text | Ink text | Permitted as text ground? |
|---|---|---|---|
| Paper | 1.1 | 9.9 | **Yes**, the default, with ink text |
| Linen | — | 10.6 | **Yes**, ink text |
| Parchment | 1.3 | 8.2 | **Yes**, ink text |
| Sand | 1.8 | 5.9 | **Yes**, ink text |
| Khaki | 2.7 | 3.9 | **No**, shapes only |
| Sage | 3.3 | 3.2 | **No**, shapes only |
| Olive | 6.1 | 1.7 | **Yes**, linen text |
| Forest | 7.7 | 1.4 | **Yes**, linen text |
| Crimson | 8.4 | 1.3 | **Yes**, linen text (crimson pieces and sets only) |
| Terracotta | 3.4 | 3.1 | Large headings only, linen text (terracotta sets only) |

The permitted grounds for text are **paper, linen, sand, olive, forest and crimson**.

---

## 4. Typography

The style is an Art Deco pairing of two free Google Fonts (SIL Open Font Licence).

```html
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Josefin+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
```

If Google Fonts can't be reached at render time, install the npm packages `@fontsource/poiret-one` and `@fontsource/josefin-sans` and load them locally. **Never render with fallback fonts.** Wait for `document.fonts.ready` before taking a screenshot.

### 4.1 Roles

| Role | Font | Weight | Case & tracking | Use |
|---|---|---|---|---|
| Display | Poiret One | 400 (only weight) | UPPERCASE, +0.04em | Titles, one to three words per line |
| Numerals | Poiret One | 400 | — | Sequence numbers, dates, large figures |
| Label | Josefin Sans | 600 | UPPERCASE, +0.30em | Subtitles, captions, credits, small print |
| Body | Josefin Sans | 400 | Sentence case, no tracking | Short passages |
| Quote | Josefin Sans | 300 *italic* | Sentence case | Quotations, reflective lines |

- **Poiret One is for large sizes only** (see the floor in §4.3). Its strokes vanish when small.
- Josefin Sans has a small x-height, so set body text larger than you would with most fonts.
- Never use bold display type, text shadows, underlines or any other font family.

### 4.2 Alignment

- Left-aligned by default.
- Centred text is used only in Composition D (on a coloured ground) and E (vignette).
- Never justified.

### 4.3 Scale (percentage of the canvas's **short edge**)

| Style | Screen / social | px at 1080 wide | Print | Line height |
|---|---|---|---|---|
| Display XL (Poiret) | 10–12 % | 108–130 | 8–10 % | 1.00 |
| Display (Poiret) | 7–9 % | 76–97 | 6–7 % | 1.02 |
| Numerals (Poiret) | 6–8 % | 65–86 | 4–6 % | 1.00 |
| Quote (Josefin 300 italic) | 4.5–5.5 % | 49–59 | 3–4 % | 1.30 |
| Body (Josefin 400) | 3.6–4.2 % | 39–45 | 1.8–2.4 % | 1.45 |
| Label (Josefin 600) | 2.5–2.9 % | 27–31 | 1.2–1.5 % | 1.90 |

- **Poiret One floor:** never below 6 % of the short edge (65 px at 1080).
- **Overall floor on social images:** nothing below 27 px at 1080 px wide.
- **Line length:** no more than about 30 characters on screen (Josefin runs wide), and 50 in print.

---

## 5. Motifs, ornaments & layout

### 5.1 Spacing (proportional)

| Measure | Rule | At 1080 × 1350 |
|---|---|---|
| Base unit (u) | 1 % of the short edge | 10.8 px |
| Outer margin | 7.5u (minimum 6u) | 81 px |
| Gap between blocks | 3–5u | 32–54 px |
| Plain paper | at least ⅓ of the area | — |

In print, add **3 mm bleed** and keep text at least 5 mm inside the trim, as well as the margin.

### 5.2 Motifs come from the image

A motif is a **single small element taken from the main illustration's own subject**, in the same paper style. It is never a fixed ornament. In the references, it is a folded leaf. For a coastal piece it might be a shell, and for a workshop a wood shaving.

- **Source:** crop it from the generated image (cut it out against the paper colour to give a transparent PNG), or generate it separately on plain paper with a reference attached.
- **Count:** one to three per piece.
- **Size:** 4–8 % of the short edge.
- **Placement:** a corner, beside a label, or drifting off the illustration, as the falling leaves do.
- **Colour:** whatever the subject has. Use an accent-coloured motif only if the accent isn't already crowded.

### 5.3 Deco ornaments (built in code)

Ornaments are hairline, in ink, olive or linen. They are never in the accent colour and never filled, and a piece uses no more than **two kinds**. Sizes are given at 1080 px wide; scale them in proportion for other sizes.

```css
/* Double rule — separates title from label */
.rule2 { display:block; width:44px; height:5px;
  border-top:1.5px solid currentColor; border-bottom:.75px solid currentColor; margin:18px 0; }

/* Diamond divider — between blocks; max one per piece */
.diamond { display:flex; align-items:center; gap:10px; width:120px; }
.diamond::before, .diamond::after { content:""; flex:1; border-top:1px solid currentColor; }
.diamond i { width:7px; height:7px; transform:rotate(45deg); border:1px solid currentColor; }
/* markup: <div class="diamond"><i></i></div> */

/* Stepped corners — frame a text block on a coloured ground */
.corners { --c: currentColor; background:
  linear-gradient(var(--c),var(--c)) left top/26px 1px no-repeat,
  linear-gradient(var(--c),var(--c)) left top/1px 26px no-repeat,
  linear-gradient(var(--c),var(--c)) 5px 5px/15px 1px no-repeat,
  linear-gradient(var(--c),var(--c)) 5px 5px/1px 15px no-repeat,
  linear-gradient(var(--c),var(--c)) right bottom/26px 1px no-repeat,
  linear-gradient(var(--c),var(--c)) right bottom/1px 26px no-repeat,
  linear-gradient(var(--c),var(--c)) right 5px bottom 5px/15px 1px no-repeat,
  linear-gradient(var(--c),var(--c)) right 5px bottom 5px/1px 15px no-repeat; }

/* Stepped arch line — echo of reference B for type-only pieces */
.steparch { border:1px solid currentColor; border-bottom:0; border-radius:9999px 9999px 0 0; padding:2% 2% 0; }
.steparch > div { border:1px solid currentColor; border-bottom:0; border-radius:9999px 9999px 0 0; height:100%; }
```

### 5.4 Placing a generated image

- The references' own paper is `--paper` (#E9E0CC). Set the canvas to the same colour so the image sits on the page without a visible box.
- Soften any image edge that falls inside the canvas with a short fade, e.g. `mask-image: linear-gradient(transparent, #000 7%)`.
- The arch in the references sits slightly right of centre, with open paper to the upper left. Put the type there, and shift the image right if you need more room; its right-hand margin is plain paper, so cropping it is safe.
- To use an image as a small window (Composition E), crop it with an arch-shaped container (`border-radius: 9999px 9999px 0 0; overflow:hidden`) and add the recess shadow `inset 3px 4px 9px rgba(40,34,20,.26)`.

### 5.5 Compositions

Positions are fractions of the canvas width (W) and height (H), measured inside the outer margin unless stated.

**A · Arch & column** (2 : 3 or taller only: posters, covers)
- Use reference-B-style imagery, with the arch on the right, 50–55 % of W.
- The text column is on the left, 38–42 % of W. Title in the upper third, label stack below it, details at the foot.
- Never use this composition in 4 : 5 or square formats, because the column becomes too narrow.

**B · Header & arch** (the default for 4 : 5 and square)
- The image is placed at the full canvas width, anchored to the bottom edge and shifted about 13 % of W to the right.
- The title block sits top left, in the open paper beside the arch, no wider than about 45 % of W. It consists of the title, a double rule and a label stack.

**C · Full bleed & panel** (covers, image-led pieces)
- The scene fills the frame.
- The text sits on a linen card 84 % of W wide, 7 % above the bottom edge, with a shadow of `0 2px 6px rgba(40,34,20,.22)`.

**D · Type on colour** (no illustration)
- The ground is paper, sand, olive, forest or crimson (see §3.4).
- Frame the type with a stepped arch line or stepped corners, and centre it. Add one motif.

**E · Vignette** (closing pieces, spot images)
- A small arch window, 35–45 % of W, centred in the upper half and cropped from a generated image.
- Below it, a numeral or one or two centred label lines, with a diamond divider. There is lots of paper all round.

### 5.6 Formats

| Format | Ratio | Size | Notes |
|---|---|---|---|
| Instagram portrait | 4 : 5 | 1080 × 1350 px | Main social format. The grid view crops to a centred 3 : 4, so keep essentials off the side edges.* |
| Instagram square | 1 : 1 | 1080 × 1080 px | The references' native shape. |
| Story / Reel cover | 9 : 16 | 1080 × 1920 px | Keep text out of the top ~13 % and bottom ~18 %.* |
| Poster, A-series | 1 : 1.414 | A3 297 × 420 mm, A4 210 × 297 mm | 300 dpi, 3 mm bleed. |
| Poster / cover, 2 : 3 | 2 : 3 | e.g. 400 × 600 mm; UK B-format cover 129 × 198 mm | Suits Composition A with reference-B imagery. |

\* Instagram's crops and overlays change from time to time. These figures are approximate, so check current guidance.

Export social images as PNG or high-quality JPEG in sRGB, and print as PDF. The hex values are screen colours, so a test print is advisable.

### 5.7 Sequences and series

- Use one accent across the whole set.
- Move the grounds light → dark → light, e.g. paper → forest (or olive) → sand → crimson → paper.
- Never place two dark grounds next to each other.
- Use at most **two generated images** per set. Other pieces use Compositions D or E, or motifs.
- Keep margins, type sizes and ornament positions identical from piece to piece.

---

## 6. Imagery workflow

Testing showed that text prompts alone never reached this look, whereas attaching a reference image did so in one step. So:

1. **Always attach** `reference-a.jpg` (single arch) or `reference-b.jpg` (stepped arch) as a style reference.
2. Use the prompt below, changing **only** the bracketed parts.
3. Generate square, with no text.
4. Check the result against §1.1 and the list below. Regenerate or edit until it passes.

```
Using the attached image as the style reference, create a new image in exactly
the same handmade paper-cut style, palette, paper texture, lighting and shallow
depth. Keep the same arch window cut into cream paper [single arch | stepped
double arch], with the scene spilling out of the lower left of the arch onto the
page, and a plant or tree growing from inside the scene across the arch edge.

New subject: [SUBJECT — e.g. a quiet harbour with moored boats and a lighthouse].

Keep: one deep [crimson | burnt terracotta] disc or shape as the only large
accent, with the accent echoed only in two or three small pieces. Leaves are
simple folded almond shapes. Tiny figures or buildings in the distance for
scale. Square format, arch centred slightly right, generous plain paper to the
left. No text, letters or numbers.
```

**Check every result for:**
- all eight anatomy points (§1.1);
- a palette matching §3.1, with no pinks or tints of the accent;
- one dominant accent shape, small echoes only, about 2–5 % of the image;
- shallow relief: no pop-up platforms, bases or triple frames;
- no repeated objects, text, signatures or stray symbols.

**Known weaknesses:**
- Generators repeat objects, and scatter the accent more than asked.
- Subjects defined by fine mechanical detail (tools, machines) simplify poorly. Prefer settings, silhouettes and still lifes.
- Free-tier images are about 1024 px square: enough for social media, marginal for large print. Upscale or regenerate at higher resolution for posters.

---

## 7. Do & don't

**Do**
- Attach a reference image to every generation.
- Set all type and ornaments in code, and generate images without text.
- Leave a third or more of the frame as plain paper, and left-align text by default.
- Use Poiret One only at large sizes, and Josefin Sans for everything small.
- Derive motifs from the image's own subject.

**Don't**
- Mix crimson and terracotta in one piece or set.
- Tint the accent, or set text on khaki or sage.
- Use bold display type, text shadows, or more than two ornament types.
- Box the scene fully inside the arch; it must escape somewhere.
- Mix illustration styles (photos, line art, 3D, code-drawn scenes) in one piece or set.
- Use pure black (#000) or pure white (#FFF).

---

## 8. Pre-delivery checklist

- [ ] Every generated image was made with a reference attached, and passes §1.1
- [ ] Only §3.1 colours are used, with exactly one accent across the piece or set
- [ ] Every text/ground pairing is permitted in §3.4
- [ ] Poiret One and Josefin Sans actually loaded (not fallbacks)
- [ ] Poiret One is never below 6 % of the short edge; nothing is below 27 px at 1080 wide
- [ ] Outer margin is at least 6 % of the short edge; the format's safe areas are respected
- [ ] At least a third of the area is plain paper (Compositions C and D excepted)
- [ ] The composition suits the format (no A below 2 : 3)
- [ ] No more than two ornament types; motifs are derived from the image's subject
- [ ] Output is at the correct pixel or physical size (with bleed for print)
- [ ] Any rule broken is reported, with the reason

---

## 9. Known limitations

- Colours are sampled from compressed JPEG images. They are faithful to the references, but not to any "original".
- Terracotta hasn't yet been tested against the reference style.
- Instagram safe areas and crops are approximate and change over time.
- The contrast ratios apply to the hex values given. Generated images and print reproduction will vary.
- The reference images are about 1024 px, which limits large-format print quality.

---

## Change log

- **0.2 (29/09/2026):** Rebuilt around two Gemini reference images (A single arch, B stepped arch). New sampled palette; crimson is now the primary accent and terracotta the alternative. Art Deco type (Poiret One, Josefin Sans) and Deco ornaments. Motifs are now derived from each image's subject. Imagery switched to a reference-image workflow. Code-drawn illustration removed.
- **0.1 (29/09/2026):** First draft, based on a third-party poster (superseded).
