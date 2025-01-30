async function orderingAtMdconalds() {
    const myOrder = new Promise((resolve, reject) => {
        setTimeout(() => resolve({mcDouble: 1, mcChicken: 1, nuggets: 2, drinks: 2}), 3000)
    })

    const receipt = await myOrder;
    console.log(receipt);
}

console.log('Before ordering');
orderingAtMdconalds();
console.log('After ordering');

async function fetchData() {
    const response = await fetch('https://www.whatthecommit.com/index.txt');
    const commitMessage = await response.text();
    console.log('Silly commit message: ', commitMessage);
}

console.log('before ');
fetchData();
console.log('after ');
