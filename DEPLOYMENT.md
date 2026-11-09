# Modern Guideways — Production Deployment & Custom Domain Guide

This operational document provides step-by-step instructions for deploying the Modern Guideways website to production and configuring custom domains, SSL/TLS, and email/webhook gateways.

---

## 1. Hosting Architecture & Prerequisites

Modern Guideways is engineered as a high-performance, zero-runtime-dependency static architecture with dual support:
- **Static Edge Distribution:** Compatible with Vercel, Netlify, Cloudflare Pages, or AWS S3 + CloudFront.
- **Node.js Gateway / Local Server:** `scripts/serve.mjs` provides live content updates (`/api/save-content`) and enquiry reception (`/api/contact`, `/api/enquiries`).

---

## 2. Option A: Vercel Deployment (Recommended)

Vercel provides global edge caching and instant SSL for high-bandwidth WebP animation assets.

### CLI Deployment
```bash
# 1. Install or run Vercel CLI
npx vercel --prod

# Set Project Name: modern-guideways
# Set Output Directory: dist (or root if using automatic build)
# Framework: Other / None
```

### Git-Based Deployment
1. Push the repository to GitHub / GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Build Command: `node scripts/build.mjs`
4. Output Directory: `dist`
5. The bundled `vercel.json` will automatically apply 1-year immutable caching on `/frames/*` and `/product_animations/*`.

---

## 3. Option B: Netlify Deployment

1. Import into [Netlify Dashboard](https://app.netlify.com/).
2. Build Command: `node scripts/build.mjs`
3. Publish Directory: `dist`
4. The bundled `netlify.toml` handles routing rewrites and HTTP cache headers.

---
## 4. Custom Domain Configuration (`modernguideways.com`)

Configure the following DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, or Google Domains):

### For Vercel:
| Type | Name / Host | Value / Target | TTL | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Auto / 300 | Points apex domain to Vercel edge router |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 300 | Points subdomain |

### For Netlify:
| Type | Name / Host | Value / Target | TTL | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `104.198.14.52` | Auto / 300 | Netlify load balancer |
| **CNAME** | `www` | `<your-site-name>.netlify.app` | Auto / 300 | Netlify subdomain alias |

### SSL / TLS Certification
- Both Vercel and Netlify issue free automatic Let's Encrypt SSL certificates within 2–5 minutes of DNS propagation.
- HTTPS redirect is enforced automatically.

---

## 5. Corporate Email Records (e.g. `contact@modernguideways.com`)

To receive enquiries on a custom branded email using Google Workspace or Zoho Mail Free Tier:

### For Zoho Mail (Free tier up to 5 users):
| Type | Host | Priority | Value |
| :--- | :--- | :--- | :--- |
| **MX** | `@` | 10 | `mx.zoho.in` (or `mx.zoho.com`) |
| **MX** | `@` | 20 | `mx2.zoho.in` (or `mx2.zoho.com`) |
| **MX** | `@` | 50 | `mx3.zoho.in` (or `mx3.zoho.com`) |
| **TXT** | `@` | - | `v=spf1 include:zoho.in ~all` |

---

## 6. Live Contact Form Gateway & Notifications

The website features an integrated **Technical Requirement Form** in `#contact`:
- **Local / Self-Hosted Backend:** POST requests to `/api/contact` append to `data/enquiries.json` with timestamp and reference ID (`ENQ-...`). Enquiries can be reviewed inside `/admin`.
- **Direct WhatsApp Gateway:** Clicking *"Send via WhatsApp"* automatically encodes all form parameters (machine type, stroke, dimensions, contact details) into a formatted message to Modern Guideways (`+91 80564 38763`).
- **Webhook / Formspree Integration:** If hosted statically without a Node server, the form gracefully saves to `localStorage` and provides immediate 1-click WhatsApp handoff so no client lead is ever lost.
