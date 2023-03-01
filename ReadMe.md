
# Reward program for customers who open new account 

### Reward program

'The program prompts the user for a starting balance and calculates the number of years it takes for the balance to reach $100,000 and $1,000,000 respectively. The bank doubles the customer's balance every year until the balance reaches $1,000,000. The program uses while loops to calculate the number of years it takes to reach the two balance milestones, and then logs the results to the console.'

### How my code is work

Define a constant variable called STARTING_BALANCE and initialize it with a value of your choice. This will represent the customer's starting balance.

Declare a mutable variable called balance and initialize it with the value of STARTING_BALANCE. This will represent the current balance of the customer's savings account.

Declare a mutable variable called years and initialize it with a value of 0. This will represent the number of years it takes for the customer's balance to reach $1,000,000.

Use a while loop to calculate the number of years it takes for the customer's balance to reach $100,000. The loop should run as long as balance is less than 100000. In each iteration of the loop, double the value of balance by multiplying it by 2, and increment the value of years by 1.

After the first while loop is finished, log a message to the console using a template literal. The message should include the number of years it took to reach a balance of $100,000.

Use another while loop to calculate the number of years it takes for the customer's balance to reach $1,000,000. The loop should run as long as balance is less than 1000000. In each iteration of the loop, double the value of balance by multiplying it by 2, and increment the value of years by 1.

After the second while loop is finished, log another message to the console using a template literal. The message should include the number of years it took to reach a balance of $1,000,000.