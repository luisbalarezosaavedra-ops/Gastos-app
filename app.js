const form = document.getElementById("expense-form");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const category = document.getElementById("category");
const list = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  list.innerHTML = "";
  let total = 0;
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${expense.description}</strong> - S/ ${expense.amount.toFixed(2)}
      <br><small>${expense.category} | ${expense.date}</small>
    `;
    list.appendChild(li);
    total += expense.amount;
  });
  totalDisplay.innerHTML = `Total: S/ ${total.toFixed(2)}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = {
    description: description.value,
    amount: parseFloat(amount.value),
    date: date.value,
    category: category.value,
  };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  form.reset();
  renderExpenses();
});

renderExpenses();