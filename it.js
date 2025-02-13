const BASE_URL = "https://679f895c24322f8329c3f4cc.mockapi.io";

        let products = [
            { pro_name: "โทรศัพท์", pro_des: "iPhone 15", pro_inch: "6.1", pro_price: "35900", pro_qty: 10, pro_gift: "เคสใส + ฟิล์มกันรอย" },
            { pro_name: "แท็บเล็ต", pro_des: "iPad Pro", pro_inch: "12.9", pro_price: "45900", pro_qty: 5, pro_gift: "ปากกาฟรี" },
            { pro_name: "Samsung Galaxy S24 Ultra", pro_des: "512GB, Snapdragon 8 Gen 3", pro_inch: "6.8 ", pro_price: "47,900", pro_qty: 5, pro_gift: "ปากกา S Pen + หูฟังไร้สาย" },
            { pro_name: "Xiaomi 14 Ultra", pro_des: "512GB, Snapdragon 8 Gen 3", pro_inch: "6.73", pro_price: " 39,990 ", pro_qty: 10, pro_gift: "ที่ชาร์จ 120W + เคสกันกระแทก" },
            { pro_name: "AirPods Pro 2 (USB-C)", pro_des: "หูฟังตัดเสียง ANC",  pro_price: "8,490", pro_qty: 10, pro_gift: "ซองซิลิโคน AirPods" },
            { pro_name: "Razer BlackShark V2 Pro", pro_des: "หูฟังเกมมิ่งไร้สาย",  pro_price: "6,990", pro_qty: 10, pro_gift: "ที่แขวนหูฟัง Razer" },
            { pro_name: "Logitech MX Master 3S", pro_des: "เมาส์ไร้สายระดับโปร", pro_price: " 3,990", pro_qty: 10, pro_gift: "แผ่นรองเมาส์ Logitech" },
            { pro_name: "ASUS ROG Strix G16", pro_des: " Core i9-13980HX, RTX 4070, RAM 32GB", pro_inch: "16", pro_price: " 69,900 ", pro_qty: 10, pro_gift: " เมาส์เกมมิ่ง ROG + แผ่นรองเมาส์" },
            { pro_name: "Acer Swift X 14", pro_des: "Ryzen 7 7840HS, RTX 4050, RAM 16GB", pro_inch: " 14", pro_price: " 39,990 ", pro_qty: 10, pro_gift: "กระเป๋าโน้ตบุ๊ก + หูฟังไร้สาย" }
        ];
        
        let editingIndex = null; // ใช้สำหรับติดตามสินค้าที่กำลังแก้ไข

        function loadProducts() {
            let tableBody = document.getElementById("product-table");
            tableBody.innerHTML = ""; 

            products.forEach((product, i) => {
                let row = `<tr>
                    <td>${product.pro_name}</td>
                    <td>${product.pro_des}</td>
                    <td>${product.pro_inch}</td>
                    <td>${product.pro_price}</td>
                    <td>${product.pro_qty}</td>
                    <td>${product.pro_gift}</td>
                    <td>
                        <button class="edit-btn" onclick="editProduct(${i})">แก้ไข</button>
                        <button class="delete-btn" onclick="deleteProduct(${i})">ลบ</button>
                    </td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }

        function addProduct() {
            let newProduct = {
                pro_name: document.getElementById("pro_name").value,
                pro_des: document.getElementById("pro_des").value,
                pro_inch: document.getElementById("pro_inch").value,
                pro_price: document.getElementById("pro_price").value,
                pro_qty: document.getElementById("pro_qty").value,
                pro_gift: document.getElementById("pro_gift").value
            };

            products.push(newProduct);
            clearForm();
            loadProducts();
        }

        function deleteProduct(index) {
            products.splice(index, 1);
            loadProducts();
        }

        function editProduct(index) {
            let product = products[index];

            document.getElementById("pro_name").value = product.pro_name;
            document.getElementById("pro_des").value = product.pro_des;
            document.getElementById("pro_inch").value = product.pro_inch;
            document.getElementById("pro_price").value = product.pro_price;
            document.getElementById("pro_qty").value = product.pro_qty;
            document.getElementById("pro_gift").value = product.pro_gift;

            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".save-btn").style.display = "inline-block";

            editingIndex = index;
        }

        function saveProduct() {
            products[editingIndex] = {
                pro_name: document.getElementById("pro_name").value,
                pro_des: document.getElementById("pro_des").value,
                pro_inch: document.getElementById("pro_inch").value,
                pro_price: document.getElementById("pro_price").value,
                pro_qty: document.getElementById("pro_qty").value,
                pro_gift: document.getElementById("pro_gift").value
            };

            clearForm();
            loadProducts();
        }

        function clearForm() {
            document.getElementById("product-form").reset();
            document.querySelector(".add-btn").style.display = "inline-block";
            document.querySelector(".save-btn").style.display = "none";
            editingIndex = null;
        }

        loadProducts();
  