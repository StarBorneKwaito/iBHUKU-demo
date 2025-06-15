document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openStockOutModal');
    const modal = document.getElementById('stockOutModal');
    const closeBtn = document.getElementById('closeStockOutModal');
    const cancelBtn = document.getElementById('cancelStockOutModal');

    if (openBtn && modal) {
        openBtn.onclick = () => modal.classList.add('active');
    }
    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.classList.remove('active');
    }
    if (cancelBtn && modal) {
        cancelBtn.onclick = () => modal.classList.remove('active');
    }

    window.onclick = function(e) {
        if (e.target === modal) modal.classList.remove('active');
    };
});

