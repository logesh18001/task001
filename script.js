// login page Written Here

function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const validUsername = "admin";
      const validPassword = "admin@123";

      const message = document.getElementById("message");

      if (username === validUsername && password === validPassword) {
        // localStorage.setItem("isLoggedIn", "true");
        // localStorage.setItem("username", username);
        window.location.href="home.html";

        message.textContent = " Login successful!";
        message.className = "success";

        
      } else {
        message.textContent = "Invalid username or password.";
        message.className = "error";
      }

      return false;
    }
// product
    const form = document.getElementById('productForm');
    const tableBody = document.querySelector('#productTable tbody');
    const productCount = document.getElementById('productCount');

    // Load  products
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function updateTable() {
      tableBody.innerHTML = '';
      products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td>${product.description}</td>
        `;
        tableBody.appendChild(row);
      });
      productCount.textContent = products.length;
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const price = parseFloat(document.getElementById('price').value);
      const stock = parseInt(document.getElementById('stock').value);
      const description = document.getElementById('description').value.trim();

      // Validation
      if (!name || isNaN(price) || price < 0 || isNaN(stock) || stock < 0 || !description) {
        alert('Please fill all fields correctly.');
        return;
      }

      const newProduct = { name, price, stock, description };
      products.push(newProduct);

      // Save to localStorage
      localStorage.setItem('products', JSON.stringify(products));

      updateTable();
      form.reset();
    });

    updateTable();
