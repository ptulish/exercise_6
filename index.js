var ethers = require('ethers');
var url = 'https://black-young-energy.ethereum-goerli.discover.quiknode.pro/cfdea5493df671331f570cb7aa5f5217d998902f/';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
document.getElementById("12").onclick = function() {
    customHttpProvider.getBlockNumber().then((result) => {
        window.prompt("Current block number: " + result);
    });
}

if (window.ethereum) {
    handleEthereum();
} else {
    window.addEventListener('ethereum#initialized', handleEthereum, {
        once: true,
    });

    // If the event is not dispatched by the end of the timeout,
    // the user probably doesn't have MetaMask installed.
    setTimeout(handleEthereum, 3000); // 3 seconds
}

//proof if the metamsk is installed in the browser
function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
        console.log('Ethereum successfully detected!');
        // Access the decentralized web!
    } else {
        console.log('Please install MetaMask!');
    }
}
