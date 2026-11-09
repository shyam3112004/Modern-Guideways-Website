# Modern Guideways - Full Stack Container Deployment
FROM node:24-alpine
WORKDIR /app

COPY package*.json ./
COPY scripts/ scripts/
COPY src/ src/
COPY public/ public/
COPY data/ data/
COPY api/ api/
COPY index.html admin.html vercel.json ./

ENV PORT=4173
ENV NODE_ENV=production

# Run production build
RUN node scripts/build.mjs

EXPOSE 4173

CMD ["node", "scripts/serve.mjs", "dist"]
