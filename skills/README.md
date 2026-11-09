# Skills and Agent Map — Modern Guideways

This companion map follows the reusable repository's policy: search and inspect skills in Hermes before installation; skill instructions are development-time guidance, not website runtime dependencies.

| Skill category | Priority | Use |
|---|---|---|
| Design Taste Frontend / Taste Skill | High | Art direction, anti-template layout, screenshot critique and iterative visual polish. |
| Frontend Design | High | Typography, hierarchy, spacing, responsive layout and component styling. |
| Motion / Design Engineering | High | Scroll mapping, timing, transitions and reduced-motion alternatives. |
| Frontend UI Engineering | High | Maintainable HTML/CSS/JS, performance and responsive implementation. |
| Accessibility testing | High | Keyboard, semantic HTML, contrast, reduced motion and screen-reader checks. |
| Browser testing | High | Real-device and cross-browser verification. |
| SEO | Medium | Metadata, structured data, sitemap and local discoverability. |
| Backend / database / authentication | Not needed for v1 | Only use if a server-backed enquiry or editor system is explicitly approved. |

## Candidate source repositories from the supplied reference map
- Taste Skill: https://github.com/leonxlnx/taste-skill
- Anthropic skills: https://github.com/anthropics/skills
- Emil Kowalski skills: https://github.com/emilkowalski/skills
- Vercel agent skills: https://github.com/vercel-labs/agent-skills
- Addy Osmani agent skills: https://github.com/addyosmani/agent-skills

## Hermes model preference
The user requested Gemini 3.8 Flash as the coding model. Verify the exact model identifier and availability with the configured Hermes provider at implementation time. Do not assume the model exists, is enabled, or is included in a provider plan. Use the selected model for implementation only after that check.

## Skill safety
1. Search and inspect metadata, files, permissions and security status.
2. Install only skills relevant to the task.
3. Do not grant secrets or broad filesystem permissions to untrusted skills.
4. Review generated code and commands before execution.
5. Record unavailable skills and use manual review as fallback.
