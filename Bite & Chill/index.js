
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#book form');

    if (bookingForm) {

        bookingForm.addEventListener('submit', (event) => {
        
            event.preventDefault();

            const customerName = document.getElementById('name').value;
            const guestsCount = document.getElementById('guests').value;
            const bookingDate = document.getElementById('date').value;
            const bookingTime = document.getElementById('time').value;
            alert(`مرحبا${customerName} تم تاكيد الحجز${guestsCount} في الساعه${bookingTime} في انتظارك${bookingDate}`);
            bookingForm.reset();
        });
    }
});