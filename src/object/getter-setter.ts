class Counter{
    private count: number = 0;
    constructor(count: number){
        this.count = count;
    }
    get getCount(): number{
        return this.count;
    }
    set setCount(count: number){
        this.count = count;
    }
    increment(){
        this.count++;
    }
    decrement(){
        this.count--;
    }
    reset(){
        this.count = 0;
    }
}

const counter = new Counter(10);
console.log(counter.getCount);
counter.setCount = 20;
console.log(counter.getCount);
counter.increment();
console.log(counter.getCount);
counter.decrement();
console.log(counter.getCount);
counter.reset();
console.log(counter.getCount);