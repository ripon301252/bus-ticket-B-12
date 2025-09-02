const SeatBtns2 = document.getElementsByClassName('seat-title-2')
for (let seatBtn2 of SeatBtns2) {
  seatBtn2.addEventListener('click', function () {

    // // add classList
    seatBtn2.classList.add('seat-color')

    // seat-number
    const seat2 = seatBtn2.parentNode.children[2].innerText

    // per seat price
    const seatRent = seatBtn2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[2].children[0].children[2].children[1].children[0].innerText;
    const totalPrice = document.getElementById('total-price').innerText
    const newTotalPrice = Number(seatRent) + Number(totalPrice);

    // total seat price
    const allSeatPrice = document.getElementById('total-price').innerText = newTotalPrice

    // grand-total-price
    document.getElementById('grand-total-price').innerText = allSeatPrice;

    // seat-left
    const seatLess = seatBtn2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0].innerText;
    const seatLeft = Number(seatLess) - 1
    document.getElementById('seat-left').innerText = seatLeft

    // Available-seat
    const availableSeat = seatBtn2.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0].children[0].children[0].children[0].children[0].innerText;
    const haveSeat = Number(availableSeat) + 1;
    document.getElementById('seat-count').innerText = haveSeat;




    const seatContent2 = document.getElementById('seating')
    const newSeatContent2 = document.createElement('div');
    newSeatContent2.innerHTML = `
                <div class=" flex justify-between items-center">
                  <h1 id="seat-name-1">${seat2}</h1>
                  <h1 id="catagory-1" class="pl-20">Economy</h1>
                  <h1 id="seat-price-1" class="pl-20">${seatRent}</h1>
                </div>
        `
    seatContent2.appendChild(newSeatContent2)
  })
}
