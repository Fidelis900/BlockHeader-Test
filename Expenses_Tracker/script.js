    let expenses = [];
    const threshold = 1000;

    function addExpense() {
      const description = document.getElementById('description').value.trim();
      const amount = parseFloat(document.getElementById('amount').value);
      const category = document.getElementById('category').value;

      if (!description || isNaN(amount) || amount < 0) {
        alert('Please enter a valid description and positive amount.');
        return;
      }

      const expense = { id: Date.now(), description, amount, category };
      expenses.push(expense);
      document.getElementById('description').value = '';
      document.getElementById('amount').value = '';
      updateExpensesList();
    }

    function deleteExpense(id) {
      expenses = expenses.filter(e => e.id !== id);
      updateExpensesList();
    }

    function filterExpenses() {
      updateExpensesList();
    }

    function updateExpensesList() {
      const filter = document.getElementById('filter').value;
      const list = document.getElementById('expenses-list');
      list.innerHTML = '';

      let filteredExpenses = filter === 'All' ? expenses : expenses.filter(e => e.category === filter);

      filteredExpenses.forEach(expense => {
        const item = document.createElement('div');
        item.className = 'expense-item';
        item.innerHTML = `
          <span>${expense.description} ($${expense.amount} - ${expense.category})</span>
          <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        list.appendChild(item);
      });

      const total = expenses.reduce((sum, e) => sum + e.amount, 0);
      document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;

      const warning = document.getElementById('warning');
      warning.innerText = total > threshold ? 'Warning: Spending exceeds threshold!' : '';
    }