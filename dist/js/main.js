const url = 'https://api.coinranking.com/v2/coins';
const cardContainer = document.getElementById('card-container');
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})


axios.get(url,
    {
        headers: {
            'x-acces-token': 'coinranking677e61a2da8beea8d73a24fa0cf964aa1860263aa6ae2ad6'
        }
    })
    .then((res) => {
        let coins = res.data.data.coins;
        listCoins(coins);
    })
    .then(() => {
        changeGrowth();
    })
    .catch((error) => {
        console.log(error);
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
        if(!coinChange[i]) break;
        let strIndex = coinChange[i].textContent.slice(0, 1);

        if (strIndex === '-') {
            coinChange[i].style.color = '#FF0000';
        } else {
            coinChange[i].style.color = '#32CD32';
        }
    }
}