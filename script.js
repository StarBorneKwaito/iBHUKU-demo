document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const addStockBtn = document.getElementById('addStockBtn');
    const addStockModal = document.getElementById('addStockModal');
    const closeBtn = addStockModal.querySelector('.close-btn');
    const cancelBtn = document.getElementById('cancelAddStock');
    const addStockForm = document.getElementById('addStockForm');

    // Open modal
    if (addStockBtn) {
        addStockBtn.addEventListener('click', function() {
            addStockModal.classList.add('active');
        });
    }

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            addStockModal.classList.remove('active');
        });
    }
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            addStockModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside modal content
    window.addEventListener('click', function(e) {
        if (e.target === addStockModal) {
            addStockModal.classList.remove('active');
        }
    });

    // Form submission
    if (addStockForm) {
        addStockForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('materialName').value;
            const quantity = document.getElementById('quantity').value;
            const unit = document.getElementById('unit').value;
            const price = document.getElementById('price').value;
            const supplier = document.getElementById('supplier').value;
            const notes = document.getElementById('notes').value;

            // Create confirmation message
            const details = `
                <strong>Product Details:</strong><br>
                <b>Name:</b> ${name}<br>
                <b>Quantity:</b> ${quantity} ${unit}<br>
                <b>Price per unit:</b> R ${price}<br>
                <b>Supplier:</b> ${supplier}<br>
                <b>Notes:</b> ${notes ? notes : '-'}
            `;

            // Create or update confirmation modal
            let confirmModal = document.getElementById('confirmModal');
            if (!confirmModal) {
                confirmModal = document.createElement('div');
                confirmModal.id = 'confirmModal';
                confirmModal.className = 'modal active';
                confirmModal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Confirm New Stock</h2>
                        </div>
                        <div class="modal-body" id="confirmModalBody"></div>
                        <div class="form-actions">
                            <button class="btn btn-primary" id="closeConfirmModal">OK</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(confirmModal);
            } else {
                confirmModal.classList.add('active');
            }
            document.getElementById('confirmModalBody').innerHTML = details;

            // Hide add stock modal
            addStockModal.classList.remove('active');

            // Close confirmation modal on OK
            document.getElementById('closeConfirmModal').onclick = function() {
                confirmModal.classList.remove('active');
                addStockForm.reset();
            };
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Redirect to Inventory.html when "Current Inventory" is clicked
    const inventoryLink = document.querySelector('.nav-menu a[href="#"]:has(i.fa-boxes)');
    if (inventoryLink) {
        inventoryLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'Inventory.html';
        });
    }
});