// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");


function getNumber () {
   var x =window.prompt ("What investment would you like to put in the new account?")
   accounts.push([x]);
   outputEl.innerHTML = "a new account with an invesment of" + " " + x + " " + "was created";
}
 
function accounttheft () {
  let count = 0
  for (let i = 0; i < accounts.length; i++)  {
    if (accounts[i] > 4000) {  
      count = count +1
    }
  }
  outputEl.innerHTML = count;
}

// Global Variable
let accounts = []
for (let n=1;n<=200;n++) {
  accounts.push(Math.random()*5000);
}
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let count = 0
  for (let i = 0; i < accounts.length; i++)  {
    if (2000 < accounts[i] && accounts[i] < 4000) {  
      count = count +1
    }
  }
  outputEl.innerHTML = "there are"+ " " + count + " " +"account between 4000 and 2000";
}



function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
count=0
  for (let i = 0; i < accounts.length; i++)
  if (accounts[i] < 2000) {
      accounts[i]+=500;
      count = count +1
  }

  outputEl.innerHTML = count + " " + "accounts got donated money";
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  for (let i = 0; i < accounts.length; i++) {
      accounts[i]-=5;
  
      
  }
  outputEl.innerHTML = "the hacker stole 1000 dollars!";

}
function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  for (let i = 0; i < accounts.length; i++)

  outputEl.innerHTML = "the minimum value of the accounts is"+ " " + Math.min(...accounts) +" "+ "the maximum value of the accounts is"+ " " + Math.max(...accounts);
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  getNumber ();  

}

function removeLow() {
  

  for (let i = 0; i < accounts.length; i++) {
    if (accounts [i] <500) {
      accounts.splice(i, 1)
    }     
  }


  outputEl.innerHTML = "Remove Low Accounts"
}
function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.

 let count = 0
 let countpoor = 0
 for (let i = 0; i < accounts.length; i++)  {
   if (accounts[i] > 4000) {  
     count = count +1
     accounts [i] -= 400;
   } else if (accounts[i] < 1000) {
     countpoor = countpoor+1
     accounts [i] += (count*400)/countpoor;
   }

      }
 outputEl.innerHTML = countpoor + " " + "poor people were given"+ " " + Math.round((count*400)/countpoor) + "$"

}

  





