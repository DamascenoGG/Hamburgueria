# Doce Server API Documentation

## Installation

```bash
cd server/doce-server
pnpm install
```

## Environment Setup

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Update `DATABASE_URL` with your PostgreSQL connection string.

## Running the Server

### Development

```bash
pnpm start:dev
```

The server will run on `http://localhost:3001` by default.

### Production

```bash
pnpm build
pnpm start:prod
```

## Database Migration

```bash
# Generate Prisma client
pnpm prisma generate

# Run migrations (create database schema)
pnpm prisma migrate dev --name init

# View data in Prisma Studio
pnpm prisma studio
```

## API Endpoints

### Authentication (Auth.js compatible)

#### Get User by ID

```
GET /auth/user/:id
```

#### Get User by Email

```
GET /auth/user/email/:email
```

#### Register User

```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "User Name",
  "image": "https://example.com/avatar.jpg"
}
```

#### Update User

```
PATCH /auth/user/:id
Content-Type: application/json

{
  "name": "New Name",
  "image": "https://example.com/new-avatar.jpg",
  "email": "newemail@example.com"
}
```

## Auth.js Integration

This API is designed to work with Auth.js (NextAuth.js v5+). The database schema includes:

- **users**: User accounts
- **accounts**: OAuth provider accounts
- **sessions**: User sessions
- **verification_tokens**: Email verification tokens

The frontend (doce-app) should configure Auth.js with the following adapter:

```typescript
// in client/doce-app/auth.ts
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@doce-server/generated/prisma';

const prisma = new PrismaClient();

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Configure your providers here
  ],
});
```

## Testing

```bash
# Unit tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:cov

# E2E tests
pnpm test:e2e
```

## Linting and Formatting

```bash
# Format code
pnpm format

# Lint code
pnpm lint
```
