class StaticCounter{
    private static count: number = 0;
    static increment(){
        this.count++;
        console.log(this.count);
    }
    static decrement(){
        this.count--;
        console.log(this.count);
    }
}

StaticCounter.increment();
StaticCounter.increment();
StaticCounter.increment();
StaticCounter.decrement();
StaticCounter.decrement();
StaticCounter.decrement();