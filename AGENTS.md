# Light Flow AI Agent Instructions

## 1. Project Overview

Light Flow, also called 轻食谱, is a mobile-first light meal recipe web app.

The product helps users decide what to eat based on ingredients they already have. It supports light meal recommendations, recipe browsing, daily intake logging, ingredient management, and future photo-based meal recognition.

Current production site:

```text
https://light-flow-fit.netlify.app
```

Important project files:

```text
README.md
docs/03-ai-agent-instructions.md
docs/05-recipe-image-and-scan-improvement-plan.md
docs/06-grocy-integration-notes.md
docs/07-photo-food-recognition-and-calorie-plan.md
docs/08-next-stage-technical-design.md
docs/09-modular-collaboration-and-preview-workflow.md
docs/10-current-state-audit.md
docs/11-recipe-image-audit.md
docs/12-phase-1-roadmap.md
docs/modules/
index.html
app.js
styles.css
assets/
lightflow-food-image-database/
verification/
```

## 2. Product Positioning

Light Flow is not a heavy recipe management backend.

It should remain:

- Mobile-first.
- Lightweight.
- Visual and easy to scan.
- Focused on healthy light meals.
- Trustworthy in recipe image matching.
- Fast for everyday decisions.

Core user value:

- See what can be cooked from available ingredients.
- Browse recipe ideas with reliable images.
- Record daily calories and protein.
- Eventually scan a meal photo, estimate nutrition, correct the result, and save it.

## 3. Required Reading Before Work

Before making changes, read:

```text
README.md
docs/03-ai-agent-instructions.md
```

For next-stage architecture or larger changes, also read:

```text
docs/08-next-stage-technical-design.md
docs/09-modular-collaboration-and-preview-workflow.md
```

For recipe image, recipe expansion, or scan work, read the relevant document:

```text
docs/05-recipe-image-and-scan-improvement-plan.md
docs/07-photo-food-recognition-and-calorie-plan.md
```

For Grocy or inventory integration, read:

```text
docs/06-grocy-integration-notes.md
```

## 4. Development Rules

Work in small, scoped changes.

Rules:

- Read the existing code before editing.
- Respect the current product direction.
- Modify only the requested page or module.
- Do not redesign the whole app unless explicitly asked.
- Do not refactor unrelated code.
- Do not delete user files unless explicitly asked.
- Do not replace existing assets without a clear reason.
- Do not introduce heavy frameworks or libraries without approval.
- Prefer simple, maintainable implementation over clever abstraction.

If the user asks for a plan first, do not edit code until the user approves.

## 5. Modular Collaboration Rules

Future work should follow module-based tasks.

Recommended modules:

```text
recipe image matching
recipe data expansion
ingredients and inventory
photo meal recognition
daily log
profile and goals
home recommendations
style system
deploy preview workflow
Grocy integration
```

Each task should have:

- One primary module.
- Clear allowed files.
- Clear forbidden files.
- A Git branch.
- A preview link if deployed.
- Verification results.

Do not mix multiple large modules in one task unless the user explicitly asks.

## 6. Code Style

Current app:

- `index.html` is the entry page.
- `app.js` contains most app data, rendering, and interaction logic.
- `styles.css` contains the main styling.

When editing the current app:

- Keep changes local and readable.
- Avoid broad rewrites.
- Keep names descriptive.
- Prefer existing patterns unless they are clearly blocking the task.
- Do not add unnecessary comments.
- Do not move large sections of code unless the task is specifically a refactor.

Next-stage direction:

```text
React + Vite
React Router
Zustand
CSS Variables or CSS Modules
Netlify Functions for AI/API calls
localStorage for first-stage user data
```

Do not introduce Redux, Next.js, large UI libraries, or Tailwind as default choices without explicit approval.

## 7. Data Storage Rules

Current stage:

- Use localStorage for lightweight user data.
- Suitable data includes selected ingredients, favorites, daily logs, profile goals, and confirmed scan results.

Do not store:

- API keys.
- Large original photos.
- Sensitive service credentials.
- Large base64 images in localStorage.

Future direction:

- Static recipe, ingredient, recipe detail, and nutrition data may be split into separate data files.
- Supabase can be considered later for account sync and cloud storage, but it is not a first-stage requirement.

## 8. Recipe Data Rules

Recipe data must remain trustworthy.

Rules:

- New recipes must use existing ingredient IDs.
- Each recipe should have a matching image.
- Recipe image, recipe name, primary ingredients, and dish form must align.
- Do not use obviously wrong placeholder images.
- Do not keep recipes where the image clearly shows a different dish.
- Each recipe should include calories, protein, time, score, description, image, meal type, amounts, and steps.
- Each recipe should have at least 6 practical cooking steps when step detail is part of the task.
- Avoid overusing the same ingredients such as chicken breast, broccoli, and egg.

When expanding recipes:

- Prefer deriving recipes from available high-quality images.
- Do not write recipes first and then force unrelated images onto them.

## 9. Image Rules

Image accuracy matters more than quantity.

For recipe images:

- Exact match is best.
- Acceptable near match must share primary ingredients and dish form.
- Obvious mismatch must be replaced, renamed, or removed.

For ingredient icons:

- Do not edit only generated SVGs unless it is a temporary fix.
- Prefer updating the generator script when changing icon logic.
- Icons should be instantly recognizable.
- Similar ingredients should remain distinguishable.

## 10. Photo Recognition Rules

Photo meal recognition must be presented as an estimate, not as a perfect measurement.

Recommended flow:

```text
Upload photo
Show preview
AI estimates food and portions
Light Flow calculates nutrition locally
User corrects food and amount
User confirms
Save to daily log
```

Rules:

- AI should identify food and estimate portions.
- Local nutrition tables should calculate calories, protein, carbs, and fat.
- Users must be able to edit or delete recognition results.
- Users must be able to add missed food items.
- Do not claim the result is perfectly accurate.
- Do not send unnecessary recipe data to the AI model.
- Do not expose API keys in frontend code.

## 11. Grocy Integration Rules

Grocy can be used as an external inventory reference or optional data source.

Do:

- Use Grocy ideas for inventory, expiration dates, and shopping lists.
- Map Grocy products to Light Flow ingredient IDs.
- Let Light Flow use inventory and expiration data to improve recommendations.

Do not:

- Copy Grocy code directly into Light Flow.
- Copy Grocy UI or information architecture.
- Turn Light Flow into a heavy home inventory ERP.
- Use Grocy to manage Light Flow recipe images.

Light Flow should remain the light meal decision layer.

## 12. Design Rules

Figma can be used for design exploration and review.

Rules:

- Figma is for design, comparison, and handoff.
- React/Vite implementation is the source of product code.
- Do not directly copy Figma-generated code as final code.
- Keep the mobile-first Light Flow visual style.
- Do not redesign the whole app because one page changes.
- Do not introduce a large UI kit that makes the app feel like a generic dashboard.

## 13. Testing And Verification

For current JavaScript app changes, run at least:

```bash
node --check app.js
```

If changing scripts:

```bash
node --check scripts/generate-ingredient-icons.mjs
```

If changing ingredient icons:

```bash
node scripts/generate-ingredient-icons.mjs
node --check scripts/generate-ingredient-icons.mjs
```

If migrating to React/Vite later, expected checks should become:

```bash
npm run build
npm run lint
```

When visual changes are made:

- Check mobile viewport behavior.
- Verify text does not overflow.
- Verify bottom navigation does not cover key content.
- Verify recipe images load correctly.
- Verify affected page interactions still work.

## 14. Git And Preview Workflow

Use GitHub and Netlify preview workflow for larger changes.

Recommended flow:

```text
Create feature branch
Make scoped change
Run checks
Push branch to GitHub
Open Pull Request
Use Netlify Deploy Preview for review
Merge to main only after confirmation
```

Branch examples:

```text
feature/recipe-image-audit
feature/recipe-expansion-100
feature/scan-mvp
feature/react-migration
feature/storage-layer
feature/grocy-sync
```

Do not deploy every small change directly to production unless the user asks.

## 15. Deployment Rules

Production deployment command documented in README:

```bash
npx netlify-cli deploy --prod --dir=. --site 5f5567f0-341d-4805-aacd-597370af3e9d
```

For important changes, prefer Deploy Preview first.

Production should be updated only when:

- The user confirms the preview.
- Checks pass.
- The affected pages have been reviewed.

## 16. Security Rules

Never commit:

- API keys.
- Access tokens.
- Service credentials.
- Private environment values.

AI and external API calls should go through backend functions such as Netlify Functions.

Frontend code must not contain private credentials.

## 17. Things To Avoid

Do not:

- Make broad unrelated refactors.
- Redesign the whole app without request.
- Add recipes with mismatched images.
- Add recipes using unknown ingredient IDs.
- Store large images in localStorage.
- Claim AI calorie estimates are exact.
- Copy Grocy code directly.
- Copy Figma-generated code directly.
- Introduce heavy dependencies without approval.
- Deploy to production without confirmation when preview is expected.

## 18. Recommended Task Response Format

For planning-only tasks:

```text
Plan:
- What will be changed
- Files likely affected
- What will not be changed
- Verification plan
```

For completed implementation tasks:

```text
Completed:
- What changed

Impact:
- Files or modules affected
- Files or modules intentionally not changed

Verification:
- Commands run
- Visual checks completed

Preview:
- Netlify Deploy Preview link, if available

Status:
- Waiting for review, or ready to merge/deploy
```

Keep user-facing explanations concise and in Chinese unless the user asks otherwise.
