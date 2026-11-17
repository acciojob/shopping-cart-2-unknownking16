//your code here
const nameInput = document.getElementById("item-name-input");
        const priceInput = document.getElementById("item-price-input");
        const addButton = document.getElementById("add-btn");
        const cartItems = document.getElementById("cart-items");
        const grandTotalElement = document.getElementById("grand-total");

        let grandTotal = 0;

        addButton.addEventListener("click", function () {
            const itemName = nameInput.value.trim();
            const itemPrice = Number(priceInput.value);

         
            if (
                itemName === "" ||
                priceInput.value.trim() === "" ||
                !Number.isFinite(itemPrice) ||
                itemPrice <= 0
            ) {
                alert("Please enter a valid item name and price.");
                return;
            }

       
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.setAttribute("data-ns-test", "item-name");
            nameCell.textContent = itemName;

            const priceCell = document.createElement("td");
            priceCell.setAttribute("data-ns-test", "item-price");
            priceCell.textContent = itemPrice;

            row.appendChild(nameCell);
            row.appendChild(priceCell);

            cartItems.appendChild(row);

    
            grandTotal += itemPrice;
            grandTotalElement.textContent = grandTotal;

   
            nameInput.value = "";
            priceInput.value = "";
        });