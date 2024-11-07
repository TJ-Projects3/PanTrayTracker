I used Next.js, Material UI, JavaScript, Firebase, Node.js, and more to build a Pantry tracking app where users can add items of their choice (documents in a collection) using Firebase. You can also remove and add items from your pantry, allowing the user to update their pantry and easily view available items as they use the app.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
When users add items, you are prompted with a modal that asks for the name of that item. This item is then appended as a document in the Firestore database, and it will visible on screen.
Delete items will remove the item from that database, and it will disappear on the front end.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
