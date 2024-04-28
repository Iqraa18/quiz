import inquirer from "inquirer";

async function main() {
  let score = 0; // Initialize the score counter

  let question1 = await inquirer.prompt({
    name: "q1",
    message:
      "Which keyword is used to declare a variable with a specific type in TypeScript?",
    type: "list",
    choices: ["var", "let", "const", "type"],
  });

  if (question1.q1 === "let") {
    console.log("Correct Answer");
    score++; // Increment score if answer is correct
  } else {
    console.log("Wrong Answer");
  }

  let question2 = await inquirer.prompt({
    name: "q2",
    message: "The author of The Power Of Now is: ",
    type: "list",
    choices: [
      "Charles Dicken",
      "Tara Westover",
      "Don Miguel Ruiz",
      "Eckhart Tolle",
    ],
  });

  if (question2.q2 === "Eckhart Tolle") {
    console.log("Correct Answer");
    score++; // Increment score if answer is correct
  } else {
    console.log("Wrong Answer");
  }

  let question3 = await inquirer.prompt({
    name: "q3",
    message: "What is the chemical equation of water? ",
    type: "list",
    choices: ["H2O", "NaCl", "CO"],
  });

  if (question3.q3 === "H2O") {
    console.log("Correct Answer");
    score++; // Increment score if answer is correct
  } else {
    console.log("Wrong Answer");
  }

  let question4 = await inquirer.prompt({
    name: "q4",
    message: "What is the largest ocean on earth?",
    type: "list",
    choices: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
  });

  if (question4.q4 === "Pacific Ocean") {
    console.log("Correct Answer");
    score++; // Increment score if answer is correct
  } else {
    console.log("Wrong Answer");
  }

  let question5 = await inquirer.prompt({
    name: "q5",
    message: "Who was the first person to step on the Moon?",
    type: "list",
    choices: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins",
    ],
  });

  if (question5.q5 === "Neil Armstrong") {
    console.log("Correct Answer");
    score++; // Increment score if answer is correct
  } else {
    console.log("Wrong Answer");
  }
  console.log(`Your score: ${score}/${5}`); // Display the score
}

main();
