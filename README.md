# Next Starter

## Required:
Node version 14.x

## Clone this repo
```bash
git clone https://github.com/ivandj0h/next-starter.git
```

## Install packages
```bash
cd next-starter & npm install
```

## Run Convex
```bash
npx convex dev
```

You will need to setup Clerk, Convex and other things. Don't forget to add your variables to convex website as well. Here is example .env.local file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_HOSTING_URL=http://localhost:3000

NEXT_STRIPE_PUBLISHABLE_KEY=
NEXT_STRIPE_SECRET_KEY=
STRIPE_ONE_TIME_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
```

## Run the app
```bash
npm run dev
```

At this point, you application should work, but it probably doesn't. You may check timesteps in the video description or try to read and solve errors by yourself. You can also ask in comments.

# Next JS documentation below

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Credits

[ivandjoh](https://github.com/ivandj0h)