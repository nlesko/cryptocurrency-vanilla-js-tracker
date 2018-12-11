const url = 'https://api.coinranking.com/v1/public/coins';
const cardContainer = document.getElementById('card-container');
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})


axios.get(url)
    .then((res) => {
        let coins = res.data.data.coins;
        listCoins(coins);
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        changeGrowth();
    })

function listCoins(coins) {
    coins.forEach(coin => {
        let coinPrice = currencyFormatter.format(coin.price);
        cardContainer.innerHTML += `<div class="card">
        <div class="card-header">
            <img class="card-image" src="${coin.iconUrl}" alt="">
            <span class="card-title" style="color: ${coin.color};">${coin.name}</span>
            <span class="coin-change">${coin.change}</span>
        </div>
        <div class="card-content">
            <span class="currency-value">${coinPrice}</span>
        </div>
    </div>`;
    })
}


function changeGrowth() {
    const coinChange = document.getElementsByClassName('coin-change')
    for (let i = 0; i <= coinChange.length; i++) {
        let strIndex = coinChange[i].textContent.slice(0, 1);

        if (strIndex === '-') {
            coinChange[i].style.color = '#FF0000';
        } else {
            coinChange[i].style.color = '#32CD32';
        }
    }
}