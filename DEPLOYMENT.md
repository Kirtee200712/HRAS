# RoomNext Deployment Guide

This guide outlines the process to deploy the full-stack RoomNext application to production using Vercel (Frontend), a Cloud Provider (Backend), and a Managed PostgreSQL database.

## Architecture
- **Frontend**: React.js deployed to Vercel
- **Backend**: Spring Boot 3 deployed to a Cloud container/PaaS (e.g., Render, Railway, AWS)
- **Database**: Managed PostgreSQL (e.g., Neon, Supabase, Railway Postgres)

## 1. Database Setup (Managed PostgreSQL)
1. Create a managed PostgreSQL database (e.g. Neon.tech or Supabase).
2. Retrieve the `DATABASE_URL`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD`.
3. Spring Boot will automatically manage schema migrations using Flyway on initialization.

## 2. Backend Deployment (Spring Boot)
1. Fork or clone the repository to your GitHub account.
2. Connect your repository to your PaaS (e.g., Render or Railway).
3. Set the build command to: `./mvnw clean package -DskipTests`
4. Set the start command to: `java -jar target/backend-0.0.1-SNAPSHOT.jar`
5. Configure the following Environment Variables in your Cloud Provider:
   - `DATABASE_URL`
   - `DATABASE_USERNAME`
   - `DATABASE_PASSWORD`
   - `JWT_SECRET` (Generate a secure base64 256-bit key)
   - `FRONTEND_URL` (Set this to the Vercel URL once known, for CORS)

## 3. Frontend Deployment (Vercel)
1. Login to Vercel and create a new project importing this repository.
2. The root folder should be set to `frontend`.
3. Vercel will automatically detect Vite. The build command will be `npm run build`.
4. Define Environment Variables:
   - `VITE_API_URL`: Set to the fully qualified domain name of your backend (e.g., `https://api.roomnext.onrender.com`)

## Environment Variables (.env) Requirements
Refer to the `.env.example` file in the root directory for required placeholders. Never commit `.env` to GitHub.

## Troubleshooting
- **CORS Errors**: Ensure the backend's `FRONTEND_URL` exactly matches the Vercel HTTPS domain (no trailing slashes).
- **Database Connection Refused**: Verify that your managed PostgreSQL server allows inbound connections and that your IP format is correct.
- **Vite API Mismatches**: If API calls fail in production but pass locally, verify that `VITE_API_URL` prefix is configured securely.

## Rollback Instructions
- **Frontend**: Vercel allows instant rollbacks by clicking "Promote to Production" on any previous successful build.
- **Backend**: Roll back git branch commits or use the built-in "Deploy previous version" button in Render/Railway.
- **Database**: Flyway migrations should be authored with `VXXX__Undo` capabilities if down-migrations are supported.
