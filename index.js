
var glossaryArray = [
    {
        term: "51% attack", definition: "A majority attack that occurs when more than half of the computer power on a network is run by a single person or a single group of people. The entity has full control of the network and can negatively affect a cryptocurrency by halting mining, stopping or changing transactions and reusing coins."
    }, {
        term: "Addresses", definition: `A unique address that identifies where a cryptocurrency sits on the blockchain. It"\’"s this location at which the coin\’s ownership data is stored and where any changes are registered when it is traded. Addresses look different among cryptocurrencies but are usually a string of more than 30 characters.`
    }, {
        term: "Algorithm", definition: "Mathematic instructions coded into and implemented by computer software to produce a desired outcome."
    }, {
        term: "Algo-trading", definition: " also known as algorithmic trading, is an automated trading system where buy and sell orders are placed according to the rules of a computer program or algorithm. The algorithm may be configured to consider price, but it may also look at other factors such as timing and volume. As soon as the market conditions fulfill the criteria of the algorithm, the alga-trading software will place a buy or sell order accordingly."
    }, {
        term: "Altcoins", definition: "A category that includes all coins other than Bitcoin, the first and most successful of all the cryptocurrencies. Ethereum and Ripple are altcoins."
    }, {
        term: "Angel investor", definition: "An angel investor puts up capital to assist a company that is in its early stages of development."
    }, {
        term: "Application-specific integrated circuit", definition: `Computer hardware \– similar to a graphics card or a CPU \– designed to mine cryptocurrency. ASICs are built specifically to solve hashing problems efficiently.`
    }, {
        term: "Arbitrage", definition: "The act of buying from one exchange and then selling it to the another exchange if the margin between the two is profitable. Multiple exchanges trade in the same cryptocurrency at any given tie, and they can do so at different rates."
    }, {
        term: "Atomic Swap", definition: "The transfer of cryptocurrency from one party to another, without the use of an exchange or other intermediary."
    }, {
        term: "Bag", definition: "A large quantity of units in a certain cryptocurrency."
    }, {
        term: "Bagholder", definition: "An investor who continues to hold large amounts of a specific coin or token, regardless of its performance."
    }, {
        term: "Basket", definition: "A basket, when used in the cryptocurrency space, refers to a collection of digital currencies managed as a single asset."
    }, {
        term: "Bear Trap", definition: "If the price of a cryptocurrency has a negative price movement."
    }, {
        term: "Bearwhale", definition: "A bearwhale is a person who has a high number of cryptocurrencies and uses their massive account to drive the price down and profit out of it. "
    }, {
        term: "Black Hat Hacker", definition: "Black hat hackers usually use malware to penetrate into computerized networks and systems to steal data."
    }, {
        term: "Block", definition: "A file containing information on transactions completed during a given time period. Blocks are the constituent parts of a blockchain."
    }, {
        term: "Block Height", definition: "A value describing the number of blocks preceding a given block in the blockchain."
    }, {
        term: "Block Reward", definition: "The coins awarded to a miner or group of miners for solving the cryptographic problem required to create a new block on a given blockchain."
    }, {
        term: "Blockchain", definition: "A distributed ledger system. A sequence of blocks, or units of digital information, stored consecutively in a public database. The basis for cryptocurrencies."
    }, {
        term: "Blockchain Transmission Protocol", definition: "Blockchain Transmission Protocol (BTP) enables isolated blockchains to operate as a fully decentralized settlement layer by securely anchoring transactions using a protocol that is universal."
    }, {
        term: "Bots", definition: "Automated software that can carry out tasks such as cryptocurrency trades."
    }, {
        term: "Bounty", definition: "A cryptocurrency bounty is a reward users receive for performing tasks assigned by a given blockchain or project."
    }, {
        term: "BTFD", definition: `Acronym for "Buy The F$%king Dip”`
    }, {
        term: "Bull", definition: `A person that is optimistic and confident that market prices will increase, this person is also known to be "bullish" about the market or price.`
    }, {
        term: "Buy Wall", definition: "A buy wall is a disproportionately large buy limit order placed on a cryptocurrency exchange."
    }, {
        term: "Capitol", definition: "Capital is most commonly defined as the large sum of money you would use to invest."
    }, {
        term: "Capitulation", definition: "Capitulation is the process of selling assets or cryptocurrencies at a significant loss because you have lost hope or belief that it will ever increase in price"
    }, {
        term: "Central Bank", definition: "In contemporary economies, the central bank is responsible for the formulation and transmission of monetary policy, as well as for the regulation of member banks."
    }, {
        term: "Chain Linking", definition: "Each cryptocurrency has its own blockchain. The digital ledger that stores all transaction records. Chain linking is the process that occurs if you transfer one cryptocurrency to another. This requires the transaction to be lodged in two separate blockchains, so they must link together to achieve the goal."
    }, {
        term: "Cipher", definition: "The name given to the algorithm that encrypts and decrypts information."
    }, {
        term: "Circulating Supply", definition: "The total number of coins in a cryptocurrency that are in the publicly tradable space is considered the circulating supply. Some coins can be locked, reserved or burned, therefore unavailable to public trading."
    }, {
        term: "Client", definition: "A client is software that can access and process blockchain transactions on a local computer. A common application of this is a cryptocurrency software wallet."
    }, {
        term: "Coin", definition: "A coin can refer to a cryptocurrency that can operate independently or to a single unit of such cryptocurrency."
    }, {
        term: "Coinbase", definition: "In mineable cryptocurrencies, a coinbase is the number of coins that are generated from scratch and awarded to miners for mining every new block."
    }, {
        term: "Cold Storage", definition: "Another term used for a paper wallet (see below)."
    }, {
        term: "Confirmed", definition: "When a transaction has been confirmed, it means it has been approved by the network and permanently appended to the blockchain."
    }, {
        term: "Consensus", definition: "When a transaction is made, all nodes on the network verify that it is valid on the blockchain, and if so, they have a consensus."
    }, {
        term: "Cryptocurrency", definition: "A form of money that exists as encrypted, digital information. Operating independently of any banks, a cryptocurrency uses sophisticated mathematics to regulate the creation and transfer of funds between entities."
    }, {
        term: "Day Trading", definition: "Day trading is the practice of frequently buying and selling assets in order to make a profit on intraday changes in their price."
    }, {
        term: "Decryption", definition: "Turning encrypted cipher text back into plain text."
    }, {
        term: "decentralized Currency", definition: "Decentralized currency refers to bank-free methods of transferring wealth or ownership of any other commodity without needing a third party."
    }, {
        term: "decentralized Exchange", definition: "A peer-to-peer exchange allowing users to trade cryptocurrency without the need for an intermediary."
    }, {
        term: "Depth Chart", definition: "This graph plots the requests to buy (known as bids) and the requests to sell (known as asks) on a chart. Because you can put a limit order on your buy or sell transaction, the depth chart shows the crossover point at which the market is most likely to accept a transaction in a timely fashion. It also shows if there are any significant buy walls or sell walls in play."
    }, {
        term: "deterministic Wallet", definition: "This type of wallet is created by producing multiple keys from a seed. If you lose this wallet, your wallet key can be recovered from the seed. Plus, when you make transactions, instead of producing new keys each time, you use variations from the seed, which makes it more transferable and easier to store."
    }, {
        term: "Difficulty", definition: "When someone refers to difficulty in the cryptocurrency space, they are referring to the cost of mining in that moment in time. The more transactions that are trying to be confirmed at any single moment in time, divided by the total power of the nodes on the network at that time, defines the difficulty. The higher the difficulty, the greater the transaction fee. This is a fluid measurement that moves over time."
    }, {
        term: "Digital Commodity", definition: "An intangible, hard-to-get asset that is transferred electronically and has a certain value."
    }, {
        term: "Digital Signature", definition: "Used to confirm that a document being transmitted electronically is authentic. They generally appear as a code generated by a public key encryption."
    }, {
        term: "Distributed Ledger", definition: "Distributed ledgers are ledgers in which data is stored across a network of decentralized nodes. A distributed ledger does not necessarily involve a cryptocurrency and may be permissioned and private."
    }, {
        term: "Double Spend", definition: "This occurs when someone tries to send a cryptocurrency to two different wallets or locations at the same time."
    }, {
        term: "Dump", definition: "The term used to describe selling all (or a lot) of your cryptocurrency."
    }, {
        term: "Escrow", definition: "When an intermediary is used to hold funds during a transaction, those funds are being held in escrow. This is usually a third party between the entity sending and the one receiving."
    }, {
        term: "Electrum Wallet", definition: "A Bitcoin wallet for Windows, Mac and Linux with a simple interface."
    }, {
        term: "Emission", definition: "The speed at which new coins are produced and released."
    }, {
        term: "Exchange", definition: "The platform through which cryptocurrencies are exchanged with each other, with fiat currencies and between entities. Exchanges can vary widely in the currency conversions they enable and their fee structures."
    }, {
        term: "Exit Scam", definition: "An exit scam is a trick where projects disappear (or shut down) after accumulating investors money."
    }, {
        term: "FA", definition: `Acronym for “fundamental analysis”.`
    }, {
        term: "falling Wedge", definition: "Falling wedges, also known as descending wedges, have a distinct downward slope and a bullish bias in comparison to symmetrical triangles, which have no discernible slope and no bias."
    }, {
        term: "Faucet", definition: "If you find a website that offers to give you free cryptocurrency for connecting with them, it is termed a faucet. The majority of these are scams."
    }, {
        term: "Fiat", definition: `If you are getting started in the world of crypto, you may hear the term “fiat” thrown around quite often. The definition of fiat money or fiat currency is money a government has deemed or certified as legal tender that they support. The dictionary definition of “fiat” is simply an authoritative or arbitrary order. So, the government issues an order dictating that USD, GBP, INR, EUR, or other world currency is lawful and accepted to pay both public and private debts.`
    }, {
        term: "First-Mover Advantage", definition: "First-Mover Advantage (FMA) refers to a company/organization that launches a breakthrough product or service in the market to gain an advantage over its competitors."
    }, {
        term: "FOMO", definition: `An acronym for “fear of missing out”.`
    }, {
        term: "Fork", definition: "When a new version of a blockchain is created, resulting in two versions of the blockchain running side-by-side, it is termed a fork. As a single blockchain forks into two, they will both run on the same network. Forks are categorized into two categories: soft or hard."
    }, {
        term: "Fundemental Analysis", definition: `A method in which you research the underlying value of an asset by looking at the technology, team, growth prospects and other indicators. Some people perform fundamental analysis as part of an investment strategy called “value investing.”`
    }, {
        term: "Futures Contract", definition: "This is a pre-approved contract between two entities to fulfill a transaction when the value of cryptocurrency hits a certain price. It\’s different than a limit order in that the buyer and seller are already nominated and bound. A future contract becomes relevant when a buyer wants to go short and a seller wants to go long on the asset."
    }, {
        term: "Gains", definition: "Gains refer to an increase in value or profit."
    }, {
        term: "Gems", definition: "Gem is a term for relatively unknown low-cap coins that have immense potential or are grossly undervalued."
    }, {
        term: "Genesis Block", definition: "The first or first few blocks of a blockchain."
    }, {
        term: "Gold-Backed Cryptocurrency", definition: "A coin or token issued that represents a value of gold; for example, one physical gram of gold equals one coin."
    }, {
        term: "Halving", definition: "Every time miners approve transactions on the bitcoin blockchain, they earn bitcoin. As each block on the blockchain fills up with transactions, a certain amount of bitcoin enter the marketplace. However, the number of bitcoin that will ever be created is finite, locked at 21 million. In order to ensure this cap is kept, the amount of bitcoin earned by miners for filling one block is halved at the completion of that block. This is called halving. For the record, by the year 2140, all 21 million bitcoin will be in circulation."
    }, {
        term: "Hard Cap", definition: "During an ICO, the creator can set a hard cap. This is the maximum amount it planned to raise, and it will therefore stop offering coins at this figure."
    }, {
        term: "Hardware Wallet", definition: "A physical device, similar to a USB stick, that stores cryptocurrency in its encrypted form. It\’s considered the most secure way to hold cryptocurrency."
    }, {
        term: "ICO", definition: `Acronym for “initial coin offering”.`
    }, {
        term: "Immutable", definition: "A property that defines the inability to be changed, especially over time."
    }, {
        term: "Ledger", definition: "A record of financial transactions. A ledger cannot be changed, it can only be appended with new transactions."
    }, {
        term: "Lightning Network", definition: `A peer-to-peer system for cryptocurrency micropayments that is focused on low latency, instant payments. They are typically low cost, scalable and can work across chains, and transactions can be public or private.`
    }, {
        term: "Liquidity", definition: "The liquidity of a cryptocurrency is defined by how easily it can be bought and sold without impacting the overall market price."
    }, {
        term: "Market", definition: "An area or arena, online or offline, in which commercial dealings are conducted."
    }, {
        term: "MCAP", definition: "Acronym for “market capitalization”."
    }, {
        term: "Memecoin", definition: "Memecoins are the crypto tokens created as a joke or meme and claim to offer huge gains to holders."
    }, {
        term: "Mining", definition: "The term, somewhat confusingly, given to the process of verifying transactions on a blockchain. In the process of solving the encryption challenges, the person donating the computer power is granted new fractions of the cryptocurrency."
    }, {
        term: "Mobile Wallet", definition: "A mobile wallet is a crypto wallet installed on a mobile device."
    }, {
        term: "Moon", definition: "A term used to describe a major price movement upwards. For example, Ripple is mooning."
    }, {
        term: "Network", definition: "A network refers to all the nodes committed to helping the operation of a blockchain at any given moment in time."
    }, {
        term: "Node", definition: "A network refers to all the nodes committed to helping the operation of a blockchain at any given moment in time."
    }, {
        term: "No-Coiner", definition: "A no-coiner is someone who has no cryptocurrency in his or her investment portfolio and firmly believes that cryptocurrency in general will fail."
    }, {
        term: "One Cancels the Other Order", definition: "When two orders for cryptocurrency are placed simultaneously with a rule in place whereby if one is accepted, the other is cancelled."
    }, {
        term: "Paper Trading", definition: "Paper trading or simulated trading is the practice of using a virtual transactional environment to simulate trading without the use of real capital."
    }, {
        term: "Passive income", definition: "Passive income is money produced from investments that do not require the earner to be actively involved."
    }, {
        term: "Peer-to-Peer (P2P)", definition: "In a peer-to-peer connection, two or more computers network with each other without a centralized third party being used as an intermediary."
    }, {
        term: "Private Key", definition: "A string of numbers and letters that are used to access your wallet. While your wallet is represented by a public key, the private key is the password you should protect (with your life). You need your private key when selling or withdrawing cryptocurrencies, as it acts as your digital signature."
    }, {
        term: "Protocols", definition: "The set of rules that defines how data is exchanged across a network."
    }, {
        term: "public Key", definition: "This is your unique wallet address, which appears as a long string of numbers and letters. It is used to receive cryptocurrencies."
    }, {
        term: "pump", definition: "This is your unique wallet address, which appears as a long string of numbers and letters. It is used to receive cryptocurrencies."
    }, {
        term: "REKT", definition: "Shorthand slang for “wrecked” and a term used to describe a bad loss in a trade."
    }, {
        term: "Scrypt", definition: "An algorithm that encrypts a key in such a fashion that it takes a serious amount of RAM to hash it. The system makes it challenging to attack for hackers. Despite its spelling, Scrypt is pronounced “ess-crypt”."
    }, {
        term: "Seed", definition: "The origin point from which you created your wallet ID. Usually, a seed is a phrase or a series of words that can be used to regenerate your wallet ID if you lose it. Something to keep very secret."
    }, {
        term: "Sell Wall", definition: "When a large limit order has been placed to sell when a cryptocurrency reaches a certain value, that is a sell wall. This can prevent a cryptocurrency from rising above that value, as supply will likely outstrip demand when the order is executed."
    }, {
        term: "Sharding", definition: `Sharding is a way of splitting up the full blockchain history so each full node doesn\’t need the whole copy of it. It is considered a scaling solution for blockchains because as they grow larger, it begins to slow the network performance if every node is required to carry the full blockchain.`
    }, {
        term: "Short", definition: `Also known as short selling, this is a concept whereby traders sell an asset they don\’t have. The hope is that they can then buy the asset at a lower price than which they sold it to complete the deal. Thereby they earn a margin in the interim.`
    }, {
        term: "Snapshot", definition: "A snapshot in the blockchain world is the act of documenting the status of a blockchain at a specific block height."
    }, {
        term: "software Wallet", definition: "A common form of wallet where the private key for an individual is stored within software files on a computer. This is the system you are likely to use if you sign up for a wallet online that is not associated with an exchange."
    }, {
        term: "TA", definition: " Acronym for “technical analysis”."
    }, {
        term: "Timestamp", definition: "The moment in time when a transaction was encrypted and regarded as proof that the data compiled in that transaction existed."
    }, {
        term: "Token", definition: "The “coin” of a cryptocurrency is a token. Effectively, it\’s the digital code defining each fraction, which can be owned, bought and sold."
    }, {
        term: "Tor", definition: "Tor is a decentralized network that anonymizes users' web traffic by encrypting it and routing it through a series of relays before it reaches its final destination."
    }, {
        term: "Transaction", definition: "The value of cryptocurrency moved from one entity to another on a blockchain network."
    }, {
        term: "Trading Volume", definition: `Trading volume refers to the total number of shares ( tokens or coins) that have been exchanged between buyers and sellers of a given asset during trading hours of a certain day.`
    }, {
        term: "Utility Token", definition: "Tokens that are designed specifically to be able to help people use something."
    }, {
        term: "Wallet", definition: "A place where cryptocurrency users can store, send and receive digital assets."
    }, {
        term: "Whale", definition: "A term used to describe extremely wealthy investors or traders who have enough funds to manipulate the market."
    }, {
        term: "White Paper", definition: "A detailed explanation of a cryptocurrency, designed to offer satisfactory technical information, explain the purpose of the coin and set out a roadmap for how it plans to succeed. It\’s designed to convince investors that it\’s a good choice ahead of an ICO."
    }]
var oldArray = [
    { name: "Aave", id: "aave", img: "images2/aave-logo.png", description: "AAVE is a decentralized finance platform where users can borrow a range of crypto currencies , as well as lend assets in exchange for interest payments. All without needing a middleman. ", founder: "Stani Kulechov", whitePaper: "https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf", released: "11/2017", symbol: "AAVE" },
    { name: "Algorand", id: "algorand", img: "images2/algorand.png", description: "Algorand is an open-source, payments-focused blockchain network that aims to solve one of the most persistent problems facing cryptocurrency: scalability. To do that, Algorand employs a novel, more scalable form of “proof-of-stake,” a consensus mechanism that’s critical for securing blockchains and making sure no one can create new tokens out of thin air that they didn’t earn. ", founder: "Silvio Micali", whitePaper: "https://arxiv.org/abs/1607.01341", released: "06/2019", symbol: "ALGO" },
    // {name:"Avalanche" , img:"images2/avalanche-logo.png", description:"Avalanche describes itself as an open, programmable smart contracts platform for decentralized applications. AVAX is used to pay transaction fees and can be staked to secure the network. Avalanche is compatible with Solidity, Ethereum’s programming language, and can be used to deploy custom private or public blockchains as subnets.", founder:"Emin Gün Sirer, Kevin Sekniqi, Maofan “Ted” Yin", whitePaper:"https://www.avalabs.org/whitepapers", released:"09/2020", symbol:"AVAX"},
    { name: "Axie Infinity", id: "axie-infinity", img: "images2/axie-infinity-logo.png", description: "Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses Ethereum-based cryptocurrencies. Players of Axie Infinity collect and mint NFTs which represent axolotl-inspired digital pets known as Axies. These creatures can be bred and battled with each other within the game.", founder: "Sky Mavis", whitePaper: "https://whitepaper.axieinfinity.com/", released: "03/2018", symbol: "AXS" },
    { name: "Binance Coin", id: "binancecoin", img: "images2/binance-logo.png", description: "Binance Coin is the cryptocurrency issued by Binance exchange and trades with the BNB symbol. As of Q2 2022, Binance Exchange is the largest cryptocurrency exchange in the world, with a volume of $7.6 billion. Every quarter, Binance uses one-fifth of its profits to repurchase and permanently destroy, or burn, Binance coins held in its treasury. ", founder: "Changpeng Zhao", whitePaper: "https://whitepaper.io/coin/binance", released: "6/2017", symbol: "BNB" },
    { name: "Bitcoin Cash", id: "bitcoin-cash", img: "images2/bitcoin-cash-logo.png", description: "Bitcoin cash is a cryptocurrency created in August 2017, from a fork of Bitcoin.1﻿ Bitcoin Cash increased the size of blocks, allowing more transactions to be processed and improving scalability.", founder: " Fork of Bitcoin", whitePaper: "", released: "8/2017", symbol: "BCH" },
    { name: "Bitcoin", id: "bitcoin", img: "images2/bitcoin-logo.png", description: "Bitcoin is a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, and thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges. Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.", founder: "Satoshi Nakamoto", whitePaper: "https://bitcoin.org/bitcoin.pdf", released: "January, 2019", symbol: "BTC" },
    { name: "Cardano", id: "cardano", img: "images2/cardano-logo.png", description: "Cardano is a public blockchain platform. It is open-source and decentralized, with consensus achieved using proof of stake. It can facilitate peer-to-peer transactions with its internal cryptocurrency, ADA. Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson. The development of the project is overseen and supervised by the Cardano Foundation based in Zug, Switzerland. It is the largest cryptocurrency to use a proof-of-stake blockchain, which is seen as a greener alternative to proof-of-work protocols.", founder: "Charles Hoskinson", whitePaper: "https://whitepaper.io/document/581/cardano-whitepaper", released: "September, 2017", symbol: "ADA" },
    { name: "Chainlink", id: "chainlink", img: "images2/chainlink-logo.png", description: "Chainlink is a cryptocurrency and technology platform that enables non-blockchain enterprises to securely connect with blockchain platforms. Chainlink is middleware that connects blockchain-based smart contracts with external data, such as baseball scores or stock prices. Chainlink's LINK currency pays Chainlink network operators and collateralizes the network's smart contract agreements.", founder: "Sergey Nazarov, Steve Ellis, Dr. Ari Juels", whitePaper: "https://chain.link/whitepaper", released: "May, 2019", symbol: "LINK" },
    { name: "Cosmos", id: "cosmos", img: "images2/cosmos-logo.png", description: "Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way. Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.", founder: " Ethan Buchman", whitePaper: "https://v1.cosmos.network/resources/whitepaper", released: "March, 2019", symbol: "ATOM" },
    { name: "Crypto.com Coin", id: "crypto-com-chain", img: "images2/crypto-com-coin-logo.png", description: "Crypto.com Chain is an Ethereum token that powers Crypto.com Pay, a service that aims to allow users to pay for goods and services with cryptocurrency while receiving cashback rewards.", founder: "	Bobby Bao Gary Or Kris Marszalek Rafael Melo", whitePaper: "https://crypto.com/images/crypto_com_whitepaper.pdf", released: "June, 2016", symbol: "CRO" },
    { name: "Dai", id: "dai", img: "images2/dai-logo.png", description: "Dai ( formerly Sai or SAI) is a stablecoin cryptocurrency on the Ethereum blockchain which aims to keep its value as close to one United States dollar (USD) as possible through a system of smart contracts and the decentralized participants which those contracts incentivize to perform maintenance and governance functions. Dai is maintained and regulated by MakerDAO, a decentralized autonomous organization (DAO) composed of the owners of its governance token, MKR, who may vote on changes to certain parameters in its smart contracts in order to ensure the stability of Dai.", founder: "https://makerdao.com/en/whitepaper/", whitePaper: "https://makerdao.com/en/whitepaper/", released: "December, 2017", symbol: "DAI" },
    { name: "Decentraland", id: "decentraland", img: "images2/decentraland-logo.png", description: "Decentraland is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain. It was opened to the public in February 2020, and is overseen by the nonprofit Decentraland Foundation.", founder: "Ariel Meilich, Esteban Ordano[", whitePaper: "https://decentraland.org/whitepaper.pdf", released: "February, 2020", symbol: "MANA" },
    { name: "DistrictOx", id: "district0x", img: "images2/district.png", description: "District0x is an Ethereum token that powers a network of decentralized marketplaces and communities called districts. The token is required for application to the District Registry and is used to signal support or disapproval for proposals made by network participants.", founder: "Joe Urgo and Matus Lestan", whitePaper: "https://district0x.io/docs/district0x-whitepaper.pdf", released: "August, 2017", symbol: "DNT" },
    { name: "Dogecoin", id: "dogecoin", img: "images2/dogecoin-logo.png", description: "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time. It is considered both the first meme coin, and, more specifically, the first dog coin. Despite its satirical nature, some consider it a legitimate investment prospect. Dogecoin features the face of the Shiba Inu dog from the doge meme as its logo and namesake. It was introduced on December 6, 2013, and quickly developed its own online community, reaching a market capitalization of over $85 billion on May 5, 2021. It is the current shirt sponsor (sleeve only) of Premier League club Watford. Dogecoin.com promotes the currency as the fun and friendly Internet currency, referencing its origins as a joke. Software engineers Billy Markus and Jackson Palmer launched the satirical cryptocurrency as a way to make fun of Bitcoin and the many other cryptocurrencies boasting grand plans to take over the world. With the help of Reddit, the site became an instant hit. Within two weeks, Dogecoin had established a dedicated blog and forum, and its market value has reached $8 million, once jumping to become the seventh largest electronic currency in the world.[10] Dogecoin is based on Scrypt algorithm, and the transaction process is more convenient than Bitcoin. Dogecoin takes only 1 minute to confirm, while BTC takes 10 minutes.", founder: "Billy Markus and Jackson Palmer", whitePaper: "https://coinnws.com/dogecoin-whitepaper/", released: "December, 2013", symbol: "DOGE" },
    { name: "Elrond", id: "elrond-erd-2", img: "images2/elrond-logo.png", description: "Elrond is a blockchain protocol that seeks to offer extremely fast transaction speeds by using sharding. The project describes itself as a technology ecosystem for the new internet, which includes fintech, decentralized finance and the Internet of Things.", founder: "Beniamin Mincu", whitePaper: "https://elrond.com/assets/files/elrond-whitepaper.pdf", released: "July, 2020", symbol: "EGLD" },
    { name: "Eos", id: "eos", img: "images2/eos-logo.png", description: "Based on a white paper published in 2017, the EOSIO platform was developed by the private company block.one and released as open-source software on June 1, 2018. In order to ensure widespread distribution of the native cryptocurrency at the launch of the blockchain, one billion tokens were distributed as ERC-20 tokens by block.one. This provided the distribution to allow anyone to launch the EOS blockchain once the software was released. The CEO of block.one, Brendan Blumer, announced that block.one would support the EOSIO blockchain with over one billion USD in funding from the token sale and ultimately block.one raised over four billion USD to support the blockchain during the Initial Coin Offering (ICO) period.", founder: "Daniel Larimer, Brendan Blumer", whitePaper: "https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md", released: "January, 2018", symbol: "EOS" },
    { name: "Ethereum Classic", id: "ethereum-classic", img: "images2/ethereum-classic-logo.png", description: "ETC is the native cryptocurrency of Ethereum Classic, a blockchain project that was created in 2016 when Ethereum’s blockchain split into two separate chains following a disagreement among members of its community. The old chain that remained after the split became known as Ethereum Classic, and has further separated itself from Ethereum over time by adopting a deflationary monetary policy with a hard cap on the total number of ETC that will be created.", founder: "	Vitalik Buterin, Gavin Wood", whitePaper: "https://www.allcryptowhitepapers.com/ethereumclassic-whitepaper/", released: "July, 2015", symbol: "ETC" },
    { name: "Filecoin", id: "filecoin", img: "images2/filecoin-logo.png", description: "Filecoin is a cryptocurrency that powers the Filecoin network, a decentralized peer-to-peer file storage network that aims to let anyone store, retrieve, and host digital information. FIL tokens are used as payment for these services and as an economic incentive to ensure files are stored reliably over time.", founder: "Protocol Labs and Juan Benet", whitePaper: "", released: "August, 2017", symbol: "FIL" },
    { name: "Flow", id: "flow", img: "images2/flow-logo.png", description: "Flow is a blockchain that has been developed by the team Dapper Labs that created CryptoKitties in 2017. Flow was created to provide solutions and applications for scalability for things like apps, games, and other digital assets. The goal of Flow is to provide, a blockchain that avoids sharding on the network and maintains reliable decentralization.", founder: "Mihaly Csikszentmihalyi", whitePaper: "https://www.onflow.org/technical-paper", released: "October, 2020", symbol: "Flow" },
    { name: "Ftx", id: "ftx-token", img: "images2/ftx-logo.png", description: "FTX is a cryptocurrency derivatives exchange backed by trading firm Alameda Research, both of which were founded by crypto billionaire Sam Bankman-Fried.", founder: "Samuel Bankman-Fried ", whitePaper: "https://whitepaper.io/coin/ftx-token", released: "May, 2019", symbol: "FTT" },
    { name: "Hedera", id: "hedera-hashgraph", img: "images2/hedera-logo.png", description: "Hashgraph is a distributed ledger technology that has been described as an alternative to blockchains. The hashgraph technology is currently patented, and the only authorized ledger is Hedera Hashgraph. Unlike blockchains, hashgraphs do not bundle data into blocks or use miners to validate transactions. Instead, hashgraphs use a gossip about gossip protocol where the individual nodes on the network gossip about transactions to create directed acyclic graphs that time-sequence transactions.[1] Each gossip message contains one or more transactions plus a timestamp, a digital signature, and cryptographic hashes of two earlier events.", founder: "Leemon Baird", whitePaper: "https://hedera.com/papers", released: "July,2017", symbol: "HBAR" },
    { name: "Helium", id: "helium", img: "images2/helium-logo.png", description: "Helium is a decentralised wireless network that allows low power smart devices (miners) to send and receive data to the internet. The miners earn HNT for providing network coverage and relaying data to the internet using hardware called a Hotspot.", founder: "Shawn Fanning, Amir Haleem, and Sean Carey", whitePaper: "http://whitepaper.helium.com/", released: "2013", symbol: "HNT" },
    { name: "Huobi", id: "huobi-token", img: "images2/huobi-logo.png", description: "Huobi Global exchange allows users to buy, sell, stake, and borrow a broad range of cryptocurrencies, encompassing a comprehensive ecosystem for experienced crypto traders and investors. The Huobi Token is the primary medium of exchange and native asset on the Huobi Global cryptocurrency exchange.", founder: "Leon Li", whitePaper: "https://www.allcryptowhitepapers.com/huobitoken-whitepaper/", released: "2018", symbol: "HT" },
    { name: "Internet Computer", id: "internet-computer", img: "images2/internet-computer-logo.png", description: "Internet Computer (ICP) is a public blockchain network developed by the Dfinity Foundation and designed to host smart contracts built on an advanced decentralised protocol known as Internet Computer Protocol (ICP). Its native token, ICP, is a utility token that allows users to participate in the governance of the Internet Computer network. The protocol combines the power of individual computers into a seamless universe. It attempts to decrease platform risk and the complexity of designing and maintaining systems. This would also shorten the time it takes for developers to release a new product.", founder: "Dominic Williams", whitePaper: "https://dfinity.org/whitepaper.pdf", released: "May @021", symbol: "ICP" },
    { name: "Klaytn", id: "klay-token", img: "images2/klaytn-logo.png", description: "KLAY is the native token that powers the Klaytn blockchain. This token is used for all transactions that take place on the blockchain network and all other blockchain applications on the network. It mainly works as a means of payment and exchange for app applications that run within the Klaytn ecosystem", founder: "Yeo Minsoo", whitePaper: "https://klaytn.foundation/wp-content/uploads/Lightpaper.pdf", released: "June 2019", symbol: "KLAY" },
    // {name:"Kucoin Token" ,id:"",  img:"images2/kucoin-logo.png" , description:"", founder:"", whitePaper:"", released:"", symbol:""},
    { name: "Litecoin", id: "litecoin", img: "images2/litecoin-logo.png", description: "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin", founder: "Charlie Lee", whitePaper: "https://whitepaper.io/coin/litecoin", released: "October 2011", symbol: "LTC" },
    { name: "Maker", id: "maker", img: "images2/maker-logo.png", description: "Maker (MKR) is an Ethereum-based DeFi lending platform founded by Rune Christensen, that allows users to lock ETH into smart contracts to mint Maker's Dai stablecoin. Major decisions like protocol upgrades are made by MakerDAO, a decentralized autonomous organization (DAO) made up of MKR token holders.", founder: "Rune Christensen", whitePaper: "https://makerdao.com/whitepaper", released: "December 2017", symbol: "MKR" },
    { name: "Monero", id: "monero", img: "images2/monero-logo.png", description: "Monero is a decentralized cryptocurrency. It uses a public distributed ledger with privacy-enhancing technologies that obfuscate transactions to achieve anonymity and fungibility. Observers cannot decipher addresses trading monero, transaction amounts, address balances, or transaction histories.", founder: "Nicolas van Saberhagen", whitePaper: "https://www.allcryptowhitepapers.com/monero-whitepaper/", released: "April 2014", symbol: "XMR" },
    { name: "Near", id: "near", img: "images2/near-logo.png", description: "NEAR Protocol is created by the NEAR Collective as a community-run cloud computing platform that can achieve up to 100,000 transactions per second. It also features human-readable addresses and a more straightforward onboarding process for DApp (decentralised application) developers. Blockchain projects being built on NEAR Protocol include marketplace creation platform Flux and NFT minting platform Mintbase.", founder: "Alexander Skidanov", whitePaper: "https://near.org/papers/the-official-near-white-paper/", released: "2018", symbol: "NEAR" },
    { name: "Polkadot", id: "polkadot", img: "images2/polkadot-logo.png", description: "Polkadot is an open source blockchain platform and cryptocurrency. It provides interconnectivity and interoperability between blockchains, by enabling independent chains to securely exchange messages and perform transactions with each other without a trusted third-party.", founder: "Gavin Wood", whitePaper: "https://polkadot.network/PolkaDotPaper.pdf", released: "May 2020", symbol: "DOT" },
    //{name:"Polygon" , id:"polygon",  img:"images2/polygon-logo.png" , description:"", founder:"", whitePaper:"", released:"", symbol:""},
    { name: "Shiba inu", id: "shiba-inu", img: "images2/shiba-inu-logo.png", description: "Shiba Inu is a token that aspires to be an Ethereum-based alternative to Dogecoin, the popular memecoin. Unlike Bitcoin, which is designed to be scarce, SHIB is intentionally abundant — with a total supply of one quadrillion. The Shiba Inu Token ecosystem supports projects such as an NFT art incubator and the development of a decentralized exchange called Shibaswap.", founder: "Ryoshi", whitePaper: "https://github.com/shytoshikusama/woofwoofpaper/raw/main/SHIBA_INU_WOOF_WOOF.pdf", released: "August 2020", symbol: "SHIB" },
    { name: "Solana", id: "solana", img: "images2/solana-logo.png", description: "Solana is a decentralized computing platform that uses SOL to pay for transactions. Solana aims to improve blockchain scalability by using a combination of proof of stake consensus and so-called proof of history. As a result, Solana claims to be able to support 50,000 transactions per second without sacrificing decentralization.", founder: "Yakovenko", whitePaper: "https://solana.com/solana-whitepaper.pdf", released: "March 2020", symbol: "SOL" },
    { name: "Stellar", id: "stellar", img: "images2/stellar-logo.png", description: "Stellar’s cryptocurrency, the Stellar Lumen (XLM), powers the Stellar payment network. Stellar aims to connect the world’s financial system, enabling businesses and developers to take advantage of the network’s fast speeds, low transaction costs, and interoperability.", founder: "Jed McCaleb and Joyce Kim", whitePaper: "https://www.stellar.org/papers/stellar-consensus-protocol.pdf", released: "July 2014", symbol: "XLM" },
    { name: "Tether", id: "tether", img: "images2/tether-logo.png", description: "Tether (USDT) was one of the first cryptocurrencies to peg its market value to a fiat currency. Tether, originally called “Realcoin,” valued each token at $1 to reduce the friction of moving real currency throughout the cryptocurrency ecosystem. Because of that peg to a stable fiat currency, Tether and other similar cryptocurrencies have been dubbed “stablecoins.” Tether is the largest stablecoin by market capitalization, and its users can redeem tethers for dollars. It also issues a cryptocurrency tied to the price of gold known as tether gold, whose value is backed by physical gold bars.", founder: "Brock Pierce, Reeve Collins, and Craig Sellars", whitePaper: "https://tether.to/en/whitepaper/", released: "October 2014", symbol: "USDT" },
    { name: "Tezos", id: "tezos", img: "images2/tezos-logo.png", description: "Tezos is a decentralized open-source blockchain that can execute peer-to-peer transactions and serve as a platform for deploying smart contracts. The native cryptocurrency for the Tezos blockchain is the tez which has the symbol XTZ. The Tezos network achieves consensus using proof-of-stake", founder: "Kathleen Breitman and Arthur Breitman", whitePaper: "https://wiki.tezosagora.org/whitepaper", released: "June 2018", symbol: "XTZ" },
    { name: "The Sandbox", id: "the-sandbox", img: "images2/the-sandbox-logo.png", description: "SAND is an Ethereum token that powers The Sandbox, a multiplayer metaverse where players can create, monetize, and participate in blockchain-based gaming experiences. In The Sandbox, game designers can create custom 3D NFTs that can be used across the ecosystem. SAND can be used to buy and sell NFTs and other in-game items, and can also be used to vote on the future of the platform.", founder: "Arthur Madrid", whitePaper: "https://sandboxgame.gitbook.io/the-sandbox/", released: "May 2012", symbol: "SAND" },
    { name: "Theta Network", id: "theta-token", img: "images2/theta-network-logo.png", description: "The Theta blockchain is a purpose-built decentralized video delivery network and cryptocurrency. This innovative platform provides both technical and economic solutions to the problems facing the streaming sector. As such, the Theta blockchain was designed to incentivize the sharing of bandwidth across the network.", founder: "Mitch Liu", whitePaper: "https://docs.thetatoken.org/docs/whitepapers", released: "June 2021", symbol: "THETA" },
    { name: "Tron", id: "tron", img: "images2/tron-logo.png", description: "TRX or Tronix is a cryptocurrency running on the TRON blockchain. Its goal is to create a decentralized Internet.", founder: "Justin Sun", whitePaper: "https://tron.network/static/doc/white_paper_v_2_0.pdf", released: "July 2018", symbol: "TRON" },
    { name: "TrueUSD", id: "true-usd", img: "images2/trueusd-logo.png", description: " TrueUSD is the first independently-verified digital asset redeemable 1-for-1 in US Dollars. The multichain stablecoin uses various banks, escrow accounts, and third-party attestations to reduce counterparty risk, provide transparency, and prevent fraud.", founder: "Danny An", whitePaper: "https://trueusd.com/pdf/TUSD_WhitePaper.pdf", released: "March 2018", symbol: "TUSD" },
    { name: "Uniswap", id: "uniswap", img: "images2/uniswap-logo.png", description: "Uniswap is a cryptocurrency exchange which uses a decentralized network protocol. Uniswap is also the name of the company that initially built the Uniswap protocol. The protocol facilitates automated transactions between cryptocurrency tokens on the Ethereum blockchain through the use of smart contracts.", founder: "Hayden Adams", whitePaper: "https://uniswap.org/whitepaper.pdf", released: "November 2018", symbol: "UNI" },
    //{name:"Unus Sed Leo" , id:"" img:"images2/unus-sed-leo-logo.png" , description:"", founder:"", whitePaper:"", released:"", symbol:""},
    //{name:"USD Coin" , img:"images2/usd-coin-logo.png" , description:"", founder:"", whitePaper:"", released:"", symbol:""},
    { name: "Vechain", id: "vechain", img: "images2/vechain-logo.png", description: "VeChain is a cryptocurrency and smart contracts platform focused on supply chain management. It allows manufacturers to add sensors, such as RFID tags, to their products that can then record data onto the VeChain blockchain.", founder: "Sunny Lu", whitePaper: "https://cdn.vechain.com/vechainthor_development_plan_and_whitepaper_en_v1.0.pdf", released: "2015", symbol: "VET" },
    { name: "Wrapped Bitcoin", id: "wrapped-bitcoin", img: "images2/wrapped-bitcoin-logo.png", description: "Wrapped Bitcoin (WBTC) is an ERC-20 token that represents Bitcoin (BTC) on the Ethereum blockchain. A key advantage of WBTC is its integration into the world of Ethereum wallets, dapps, and smart contracts. Through a WBTC partner, 1 Bitcoin can be converted to 1 Wrapped Bitcoin, and vice-versa.", founder: "Republic Protocol", whitePaper: "https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf", released: "January 2019", symbol: "WBTC" },
    // {name:"XRP" , id:"xrp",  img:"images2/xrp-logo.png" , description:"", founder:"", whitePaper:"", released:"", symbol:""},
    { name: "Zcash", id: "zcash", img: "images2/zcash-logo.png", description: "Zcash is a cryptocurrency aimed at using cryptography to provide enhanced privacy for its users compared to other cryptocurrencies such as Bitcoin. Zcash is based on Bitcoin's codebase. It shares many similarities, such as a fixed total supply of 21 million units", founder: "Zooko Wilcox", whitePaper: "http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf", released: "October 2016", symbol: "ZEC" }]


//Search bar 

var userInput = document.getElementById("Bar")
if (userInput) {
    userInput.addEventListener('keyup', search)
}

function search(e) {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = oldArray.filter((search) => {
        return (
            search.name.toLowerCase().includes(searchString)
        );
    });
    hello(filteredCharacters);
}


function hello(arr) {
    let displayArray = []
    const newArray = arr.map((x) => {
        return (
            displayArray.push(`<div id=${x.name} value=${x.name} class="col-4 col-sm-4 col-md-3 mt-4"><a href="cryptobreakout.html?name=${x.id}">
                <img class="crypto-img"  src=${x.img} />
                <h4 class="text-info text-center mt-3" >${x.name}</h4></a>
              
            </div>`)
        )
    })
    document.getElementById("newOnes").innerHTML = displayArray.join("")

}


//builds content on crypto breakout need to add api call to get current price
function loadCard() {
    const params = new URLSearchParams(window.location.search)
    let y = params.get("name")
    y = y.toLowerCase()
    loadPage(y)
}
function loadPage(name) {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`)

        .then(res => res.json())
        .then(data => {

            let x = oldArray.find((e, index) => e.id === name)
            document.getElementById("individual-crypto").innerHTML = `
    <div class="card mx-auto" >
        <div class="card-header mt-3">
        <div class="row mx-auto"> 
        <button class="btn-inline-block bg-info btn-lg col-2" onclick="left()" name="descending"><i class="fa fa-arrow-left fa-lg text-white"></i></button>
        <button class="col-7 btn-lg   btn-inline-block  btn-info  " onclick="randomCard()" >random</button>
        <button class=" bg-info btn-inline-block btn-lg  col-2" onclick="right()"> <i class="fa fa-arrow-right fa-lg text-white"></i>
         </button> </div> </div>
    <img class="card-img-top mt-5 col-4 col-sm-6 mx-auto mt-3" id="img" name="${x.name}"  src=${x.img}>
    <div class="card-body col-10 mx-auto">
    <h2 class="card-title text-center mb-3">${x.name}</h2>
    <h4 class="card-title text-center mt-4">Current Price: $ ${(Math.round(data[name].usd * 1000) / 1000)}  </h4>
    <p class="text-center card-text mt-4">${x.description} </p>
    <hr class="my-5"/>
    <ul class="card-text text-center mt-4 mx-auto">
        <li class="mx-auto"><h5>Creator(s): ${x.founder} </h5></li>
        <li><h5>Released: ${x.released}</h5></li>
        <li><h5>Cap: 2,345,678</h5></li>
        <a href="${x.whitePaper}"><li class="text-info"><h5>White Paper</h5></li></a>
        <li > <h5>Symbol:</h5><span id="symb" name=${x.symbol}><h5>${x.symbol}</h5></span></li>
        </ul>
    <div class="card-footer bg-white">
   
        </div>
    </div> `
        })
        .catch(console.log)
}

function randomCard() {
    let random = Math.floor(Math.random() * oldArray.length)
    location.href = " cryptobreakout.html" + "?name=" + oldArray[random].id

}


// coin market cap api key : ce02a426-e1fb-4be0-83e1-6423b64b7e1f
//builds Glossary page 
function glossaryBuilder() {
    let newArray = []
    const y = glossaryArray.map((x, index) => {
        return (
            newArray.push(
                `<div class="card  ${index % 2 != 0 ? "bg-info" : "bg-secondary"}" id="${index}">
            <div class="card-header" id="crypto" >
                <h3><button class="btn btn-link collapsed text-white" type="button" data-toggle="collapse" data-target="#a${index}">${x.term}</button> </h3>
            </div>
            <div class="collapse" id="a${index}" data-parent="#collapseSection">
                <div class="card-body">
                    <p class="card-text text-white" >${x.definition}
                    </p>
                </div>
            </div>
    </div>` ))
    })
    console.log(newArray)
    document.getElementById("collapseSection").innerHTML = newArray.join("")
}
/*<div class="card">
                <div class="card-header" id="crypto">
                    <h3><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#"></button> </h3>
                </div>
                    <div class="collapse" id="" data-parent="#collapseSection">
                        <div class="card-body">
                            <p class="card-text" >
                            </p>
                        </div>
                </div>
            </div>*/



function left() {
    let i = document.getElementById("symb").textContent;
    let x = oldArray.find(e => e.symbol === i);
    let index = oldArray.indexOf(x);
    if (index != 0) {
        loadPage(oldArray[index - 1].id)
    } else {
        loadPage(oldArray[oldArray.length - 1].id)
    }
}
function right() {
    let i = document.getElementById("symb").textContent
    /*let z = String(i)
    console.log(i)*/
    let x = oldArray.find(e => e.symbol === i)
    /*console.log(oldArray)
    console.log(x)*/
    let y = oldArray.forEach(e => console.log("symbol", e.symbol))
    /*console.log(y)*/
    let index = oldArray.indexOf(x)
    /*cxonsole.log("1", index)*/
    if (index != (oldArray.length - 1)) {
        //console.log("2", index)
        loadPage(oldArray[index + 1].id)
    } else {
        //console.log("3", index)
        loadPage(oldArray[0].id)
    }
}
