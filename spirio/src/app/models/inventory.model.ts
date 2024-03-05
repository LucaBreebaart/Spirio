export interface Inventory {
    id?: number; //id can be null because will generate for us
    name: string;
    category: string;
    icon: string;
    description: string;
    amount: number; // quantity of that inventory
}
