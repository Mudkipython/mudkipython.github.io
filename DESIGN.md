# DESIGN.md — China HR Portfolio Edition

## 1. Objective

This portfolio is designed for fast resume screening in China. The interface must help a recruiter answer four questions quickly:

1. Who is the candidate and what roles are targeted?
2. What credible institutions and business contexts has he worked in?
3. What measurable outcomes can be verified?
4. Can he take analysis through to a usable deliverable?

The page is a professional dossier, not a creative-tech demo.

## 2. Information hierarchy

Use this fixed order:

1. Candidate name, graduation year, target roles
2. McGill / Scotiabank / bank and enterprise experience
3. Four measurable outcomes
4. Three job-relevant capability areas
5. Case studies with responsibility boundaries and optional technical detail
6. Timeline, education, keywords, certificates, contact and resume download

This ordering is informed by the `nie-grassroots-logic` ideas of hierarchical resource signals and limited attention allocation. It is an information-architecture analogy only; do not describe HR screening as grassroots governance.

## 3. Visual direction

- Mood: credible, calm, precise, internationally trained, locally readable
- Canvas: executive light gray `#F5F6F8`
- Ink and primary action: deep navy `#1F2A44`
- Small hierarchy signal only: warm brass `#B08D57`
- Surface: white `#FFFFFF` and cool gray `#EEF1F5`
- Dividers: one-pixel hairlines; shadows remain quiet and functional
- Radius: 10–12px for content panels; full pill for navigation and compact actions
- No decorative gradients, glass cards, neon, robot imagery, floating 3D data, or cursor-following effects

## 4. Typography

- Chinese: PingFang SC / Microsoft YaHei / Noto Sans CJK SC / system-ui
- Latin and numbers: Arial / system-ui
- Headings: weight 400–600, tight but readable tracking
- Body: 15–17px, line height 1.7–1.8 for Chinese
- Labels: 10–12px with moderate tracking; bilingual English is secondary metadata
- Metrics use tabular-looking Latin numerals and never become decorative wallpaper

## 5. Layout and interaction

- Max content width: 1100px
- Desktop: 12-column logic expressed as 2/7/3 and 8/4 groupings
- Mobile: all content becomes one column; metrics remain a compact 2×2 grid
- Sticky floating navigation with an active-section marker
- Scroll progress is the only persistent motion
- Reveals are subtle, one-time, and disabled by reduced-motion preferences
- Technical depth uses native `details` disclosure so results remain visible without interaction
- Resume downloads and contact paths must remain available in both the first and last viewport

## 6. Reference synthesis

- IBM: enterprise grid, square geometry, single blue accent, hairline hierarchy
- Mastercard: warm canvas, floating pill navigation, generous but purposeful whitespace
- Apple: quiet interface chrome, restrained color, minimal shadow
- WIRED: editorial hierarchy and scannable story rows
- Yangyang Liu portfolio: navy-and-brass business tone, light-gray canvas, white resume panels, pill navigation, and restrained hover depth

References: `VoltAgent/awesome-design-md` design analyses for IBM, Mastercard, Apple, and WIRED.

## 7. Guardrails

- Do not lead with abstract personality statements.
- Do not hide platform names, role titles, dates, or numbers inside hover states.
- Do not invent metrics, job titles, links, or client permissions.
- Do not use AI filler words such as “赋能”, “生态闭环”, or “颠覆”.
- Do not exceed one blue and one red signal color.
- Do not add animation unless it improves orientation or feedback.
