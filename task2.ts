class Product{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private quantity:number;

    constructor(productId:number) {
        this.productId=productId;
    }

    public set Name(productName:string){
        this.productName=productName;
    }
    public set Price(price:number){
        this.unitPrice=price;
    }
    public set Quantity(quantity:number){
        this.quantity=quantity;
    }
    public get Id(){
        return this.productId;
    }
    public get Name(){
        return this.productName;
    }
    public get Price(){
        return this.unitPrice;
    }
    public get Quantity(){
        return this.quantity;
    }
}

let obj:Product=new Product(101);
obj.Name="laptop";
obj.Price=500000;
obj.Quantity=5;

console.log(`product ID : ${obj.Id} , product name : ${obj.Name} , unit price : ${obj.Price} , Quantity : ${obj.Quantity}`);
