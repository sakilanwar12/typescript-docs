class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  
    public deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive.');
      }
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive.');
      }
      if (amount > this.balance) {
        throw new Error('Insufficient funds.');
      }
      this.balance -= amount;
    }
  }
  
  const account = new BankAccount(1000);
  console.log('Initial Balance:', account.getBalance());
  
  account.deposit(500);
  console.log('After Deposit:', account.getBalance());
  
  account.withdraw(300);
  console.log('After Withdrawal:', account.getBalance());
  