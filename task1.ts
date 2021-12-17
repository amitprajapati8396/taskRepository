class Product{
    private pid:number;
    private pname:string;
    private city:string;
    
    constructor(pid:number=0 , pname:string="" , city:string=""){
        this.pid=pid;
        this.pname=pname;
        this.city=city;
    }
    // constructor(pid:number,pname:string,city:string){
    //    this.pid=pid;
    //    this.pname=pname;
    //    this.city=city;

    // }
    public showDetails(){
        console.log("======== Product Details ===========");
        
        console.log(`product id : ${this.pid} , product name : ${this.pname} , city : ${this.city}`);
        
    }
}

let c1:Product=new Product(101,"Mobile","mumbai");
let c2:Product
c1.showDetails();