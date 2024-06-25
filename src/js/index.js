 const transactions = [
      {
        id: 1,
        type: "افزایش اعتبار",
        price: 1000000,
        refId: 123270311,
        date: 1713977315961,
      },
      {
        id: 2,
        type: "افزایش اعتبار",
        price: 500000,
        refId: 123270405,
        date: 1672532200000,
      },
      {
        id: 3,
        type: "برداشت از حساب",
        price: 200000,
        refId: 1458985369,
        date: 1682886100000,
      },
      {
        id: 4,
        type: "افزایش اعتبار",
        price: 450000,
        refId: 987654321,
        date: 1711937000000,
      },
      {
        id: 5,
        type: "برداشت از حساب",
        price: 770000,
        refId: 741852963,
        date: 1711917089876,
      },
      {
        id: 6,
        type: "افزایش اعتبار",
        price: 590000,
        refId: 987654321,
        date: 1640997292340,
      },
    ];
    let currentSortOrder = "asc";
    
   
    function createTransactionTable(transactions) {
      const tableDiv = document.getElementById("transactionTable");
      const table = document.createElement("table");
      table.classList.add("transaction-table");
    
     
      const headerRow = table.insertRow();
      const headers = [
        "ردیف",
        "نوع تراکنش ها ",
        "مبلغ",
        "شماره پیگیری",
        "تاریخ تراکنش",
      ];

      


   
    
      transactions.forEach((transaction) => {
        const row = table.insertRow();
        Object.values(transaction).forEach((value) => {
          const cell = row.insertCell();
          if (typeof value === "number" && value.toString().length > 10) {
            const date = new Date(value);
            cell.textContent = date.toLocaleDateString("fa-IR");
          } else {
            cell.textContent = value;
          }
        });
      });
    
     
      tableDiv.innerHTML = "";
      tableDiv.appendChild(table);
    }
    
  
    
 
    const loadTransactionsBtn = document.getElementById("loadTransactionsBtn");
    loadTransactionsBtn.addEventListener("click", function () {
      createTransactionTable(transactions);
    });
    
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", function () {
      const searchInput = document.getElementById("searchInput").value.trim();
      if (searchInput) {
        fetch(`http://localhost:3000/transactions?refId_like=${searchInput}`)
          .then((response) => response.json())
          .then((data) => createTransactionTable(data))
          .catch((error) => console.error("Error fetching transactions:", error));
      } else {
        alert("لطفاً شماره پیگیری را وارد کنید.");
      }
    });