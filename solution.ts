// Problem 1:
function formatValue(value:string|number|boolean):string|number|boolean{
    if(typeof value ==="string"){
        return value.toUpperCase();
    }
    if(typeof value === "number"){
        return value*10;
    }
    if(typeof value == "boolean"){
        return !value
    }  
    return value;
}

// Problem 2:
function getLength(value:string | any[]):number{
    if(typeof value === "string"){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}

// Problem 3:
class Person{
    name: string;
    age: number;
    constructor(name: string, age:number){
        this.name=name;
        this.age=age;
    }
    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

// Problem 4:
type Item={
    title: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[]{
    return items.filter(item=>item.rating>=4);
}

// Problem 5:
type User = {
    id: number;
    name: string; 
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]):User[]{
    return users.filter(user=>user.isActive===true);
}

// Problem 6:
interface Book{
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book):void{
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}

// Problem 7:
function getUniqueValues(arr1:(string|number)[],arr2:(string|number)[]):(string|number)[]{
    const result: (string|number)[]=[];
    
    function exists(value: string | number): boolean {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i])) {
            result[result.length] = arr1[i]; 
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i])) {
            result[result.length] = arr2[i];
        }
    }
    return result;
}

// Problem 8:
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]):number {
    if(products.length===0) return 0;

    return products.map(product =>{
        const basePrice = product.price * product.quantity;
        if (product.discount !== undefined) {
            const discountAmount = basePrice * (product.discount / 100);
            return basePrice - discountAmount;
        }
        return basePrice;
    }).reduce((total, current) => total + current, 0);
}