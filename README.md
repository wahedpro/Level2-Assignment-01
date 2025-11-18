# TypeScript Blog Section

## **১) What are some differences between interfaces and types in TypeScript?

TypeScript ব্যবহার করতে গেলে অনেক সময়ই আমরা interface আর type—এই দুইটার মধ্যে কোনটা কখন ব্যবহার করবো সেটা নিয়ে বিভ্রান্তিতে পড়ি। দুইটার কাজ অনেকটাই একই রকম হলেও কিছু জায়গায় পার্থক্য আছে। যেমন: 

### ✔ Interface merge

একই নামের interface বারবার declare করলেও TypeScript সেগুলোকে একটা interface এ merge করে ফেলে।
কিন্তু type alias এর ক্ষেত্রে এটা সম্ভব না।

```ts
interface Student {
  name: string;
}

interface Student {
  age: number;
}
// Result → { name: string; age: number }
