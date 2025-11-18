# TypeScript Blog Section

আজকের এই ব্লগ আমি TypeScript এর দুইটা Interview Questions নিয়ে লিখবো। যে Questions গুলো খুব গুরুত্বর্পন Interview জন্য।
প্রশ্ন গুলো হল:
- What are some differences between interfaces and types in TypeScript?
- Explain the difference between any, unknown, and never types in TypeScript.

## 1. What are some differences between interfaces and types in TypeScript?

TypeScript ব্যবহার করতে গেলে অনেক সময়ই আমরা interface আর type—এই দুইটার মধ্যে কোনটা কখন ব্যবহার করবো সেটা নিয়ে বিভ্রান্তিতে পড়ি। এই দুইটার কাজ অনেকটাই একই রকম হলেও কিছু পার্থক্য আছে। যেমন: 

### -> Interface merge

একই নামের interface বারবার declare করলে TypeScript সেগুলোকে একটা interface এ merge করে ফেলে।
কিন্তু type এর ক্ষেত্রে এটা হয় না।

```ts
interface Student {
  id: number;
  name: string;
}

interface Student {
  age: number;
}
```
```ts
// Result → {id: number; name: string; age: number }
```

### -> Extending

Interface খুব সহজে অন্য interface কে extend করতে পারে।

```ts
interface A { x: number; }
interface B extends A { y: number; }
```
Type এ extend করার জন্য সাধারণত & অপারেটর ব্যবহার করা হয় (intersection):

```ts
type A = { x: number }
type B = A & { y: number }
```

### -> type more flexible

type দিয়ে union, tuple কিংবা primitive টাইপও বানানো যায়।
Interface দিয়ে এগুলো করা যায় না।

```ts
type ID = string | number;
type Point = [number, number];
```

## 2. Explain the difference between any, unknown, and never types in TypeScript.

any, unknown এবং never এই গুলো হল TypeScript কিছু special টাইপ। যে তিনটার ব্যবহার তিন রকম, যেমন:

### -> any
any এমন একটা টাইপ যেখানে যেকোনো কিছু রাখা যায়। এটা কোন টাইপ চেক করে না। কোন ভুল হলেও compiler কিছু বলবে না

```ts
let x: any = 5;
x = "hello";
x = true;
```

### -> unknown
unknown দেখতে অনেকটা any-এর মতোই, কিন্তু এর পার্থক্য হলো — কোনো কাজ করার আগে type-check করা বাধ্যতামূলক।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

### -> never
নামই বলে দেয় — never মানে “কখনোই হবে না”।
যেমন এমন ফাংশন যেটা কখনো return করবে না:

```ts
function throwErr(): never {
    throw new Error("Error occurred");
}
```