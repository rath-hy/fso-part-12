# ---------- Base Stage ----------
  FROM node:20 AS base

  WORKDIR /usr/src/app
  COPY package*.json ./
  
  # Install dependencies (no source code yet)
  RUN npm ci
  
  # ---------- Test Stage ----------
  FROM base AS test
  
  WORKDIR /usr/src/app
  COPY . .
  
  # Set environment for Vite (optional in test, depending on your setup)
  ENV VITE_BACKEND_URL="http://localhost:3000"
  
  # Run tests
  RUN npm test -- --run
  
  # ---------- Build Stage ----------
  FROM base AS build
  
  WORKDIR /usr/src/app
  COPY . .
  
  ENV VITE_BACKEND_URL="http://localhost:3000"
  
  # Build the project
  RUN npm run build
  
  # ---------- Production Stage ----------
  FROM node:20 AS production
  
  WORKDIR /usr/src/app
  
  # Install lightweight HTTP server
  RUN npm install -g serve
  
  # Copy only built assets from build stage
  COPY --from=build /usr/src/app/dist ./dist
  
  # Serve the app
  CMD ["serve", "dist"]
  