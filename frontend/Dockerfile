# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (app/ + components/ + etc.)
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: production
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
