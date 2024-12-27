class Bank {
    public bankName: string;
    protected branchName: string;
    private totalFunds: number;
  
    constructor(bankName: string, branchName: string, totalFunds: number) {
      this.bankName = bankName;
      this.branchName = branchName;
      this.totalFunds = totalFunds;
    }
  
    public deposit(amount: number): void {
      this.totalFunds += amount;
      console.log(`Deposited ${amount}. Total funds now: ${this.totalFunds}`);
    }
  
    protected getBranchDetails(): string {
      return `Branch: ${this.branchName}, Total Funds: ${this.totalFunds}`;
    }
  
    private updateTotalFunds(amount: number): void {
      this.totalFunds += amount;
    }
  }
  
  class Branch extends Bank {
    constructor(bankName: string, branchName: string, totalFunds: number) {
      super(bankName, branchName, totalFunds);
    }
  
    public displayBranchDetails(): void {
      const details = this.getBranchDetails();
      console.log(details);
    }
  }
  
  const mainBank = new Bank("Global Bank", "Headquarters", 1000000);
  mainBank.deposit(50000);
  
  const branch = new Branch("Global Bank", "Downtown", 500000);
  branch.displayBranchDetails();
  