abstract class Payment {
    abstract processPayment(amount: number): void;
  }
  
  class CreditCardPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing credit card payment of $${amount}`);
    }
  }
  
  class PayPalPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
  
  class BankTransferPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing bank transfer payment of $${amount}`);
    }
  }
  
  function makePayment(paymentMethod: Payment, amount: number): void {
    paymentMethod.processPayment(amount);
  }
  
  const creditCard = new CreditCardPayment();
  const paypal = new PayPalPayment();
  const bankTransfer = new BankTransferPayment();
  
  makePayment(creditCard, 100);
  makePayment(paypal, 200);
  makePayment(bankTransfer, 300);
  