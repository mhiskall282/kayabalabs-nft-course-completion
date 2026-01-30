
# Kayaba Labs NFT Course Completion Certificate System

## 🎓 Project Overview

A blockchain-based certificate system that issues NFT credentials to students who complete courses at Kayaba Labs. Each certificate is a **soulbound (non-transferable)** NFT with **auto-generated student IDs**, stored permanently on-chain.

### Key Features
- ✅ **Auto-Generated Student IDs** — KL-SOL-0001, KL-SOL-0002, etc.
- ✅ **Soulbound NFTs** — non-transferable to preserve authenticity
- ✅ **Dual Minting Options** — student self-mint OR admin bulk mint
- ✅ **Fee Collection** — $0.50 fee per self-mint, free for bulk mints
- ✅ **On-Chain Storage** — student ID, course name, completion date
- ✅ **IPFS Metadata** — images/metadata on decentralized storage
- ✅ **OpenSea Compatible** — viewable on NFT marketplaces
- ✅ **Low Cost on L2** — deployed on Base (cheap transactions)

---

## ✅ Current Status: PRODUCTION READY

This project is **deployed on Base mainnet** and ready for live use.

---

## 🌐 Deployments

### ✅ Base Mainnet (PRODUCTION)
- **Network:** Base Mainnet  
- **Chain ID:** 8453  
- **Contract Address:** `0x1ab1812B56528889469ef444C2dF771814F74bEC`
- **Owner:** `0x76764f8DE65f6D2Cd00987d9791B8C6af00c1911`
- **Tx Hash (Deploy):** `0x2bbc38b03873817b6c88381cf6c0ae29e5b1c99548fb950536bc4f1659c3da57`
- **Block:** 41482896
- **Name:** `Kayaba Labs Course Completion`
- **Symbol:** `KAYABA-COURSE`

**Explorer (BaseScan):**
- View the contract on BaseScan by searching the address:
  `0x1ab1812B56528889469ef444C2dF771814F74bEC`

---

### ✅ Ethereum Sepolia (TEST)
- **Network:** Ethereum Sepolia
- **Contract:** `0x5f303F0F87a0A64292C784A3De47CB59edF4035C`
- **Certificates Minted:** 2
- **Student IDs Generated:** KL-SOL-0001, KL-SOL-0002
- **Status:** ✅ Fully Functional

---

## 🏗️ Architecture

### Smart Contract
**File:** `src/KayabaCourseCompletionNFT.sol`

**Core Functions:**
```solidity
// Student self-mint (pays $0.50)
function mintCertificate(address to, string course, string date)
    public payable returns (uint256, string)

// Admin bulk mint (free)
function batchMintCertificates(address[] recipients, string course, string[] dates)
    public onlyOwner returns (string[])

// Fee withdrawal
function withdrawFees() public onlyOwner

// Data retrieval
function getCertificateInfo(uint256 tokenId)
    public view returns (string studentId, string course, string date, address wallet)
````

**Tech Stack**

* Solidity 0.8.x
* OpenZeppelin (ERC721 + Ownable)
* Foundry (build/test/deploy)

---

## 🧾 Data Storage

### On-Chain (Smart Contract)

* Student ID (auto-generated)
* Course name
* Completion date
* Token ownership

### Off-Chain (IPFS)

* Certificate image
* Metadata JSON
* Additional attributes

**Current IPFS**

* **Image:** `ipfs://bafkreiawpz2cyeckfyjck5ugdkpekcoot2t2ooprmptzqwc4kixc7h3pli`
* **Metadata URI:** `https://coral-genuine-koi-966.mypinata.cloud/ipfs/bafkreia6rxkezois2eymzxbikacx5egnrfvteqsky6gcswscjzmlummccu`

---

## 💰 Economics

### Minting Fee: $0.50 (example: 0.0003 ETH on Sepolia tests)

> Note: Mainnet fee should be calibrated using Base ETH price and UX considerations.

**Option 1: Student Self-Mint (Student pays on-chain)**

* Student pays: mint fee + gas
* You collect: mint fee on-chain
* Example: 100 students → $50 revenue

**Option 2: Bulk Mint (You pay gas, collect via Stripe/off-chain)**

* Student pays: $0.50 off-chain (Stripe)
* You pay: low gas cost for batch mint
* Best UX for students

**Recommended:** Include the certificate fee in the course price, and **bulk mint** for best user experience.

---

## 🚀 Mainnet Network Choice

✅ **Base** is live and deployed.

Other supported targets if you want separate deployments:

* Scroll
* Arbitrum
* Polygon

---

## 📁 Project Structure

```
kayabalabs-nft/
├── src/
│   └── KayabaCourseCompletionNFT.sol
├── test/
│   └── KayabaCourseCompletionNFT.t.sol
├── script/
│   └── DeployCourseNFT.s.sol
├── lib/
│   ├── forge-std/
│   └── openzeppelin-contracts/
├── .env                 # DO NOT COMMIT
├── foundry.toml
├── README.md
├── DEPLOYMENT.md
├── OPERATIONS.md
└── metadata.json
```

---

## 🛠️ Setup

### Install Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Install dependencies / build / test

```bash
forge install
forge build
forge test -vvv
```

### Environment (.env)

```bash
# Base Mainnet
BASE_MAINNET_RPC_URL=https://mainnet.base.org

# Deployment / ownership (recommended: keystore or hardware wallet)
# PRIVATE_KEY=... (avoid using raw private keys where possible)

METADATA_URI=https://coral-genuine-koi-966.mypinata.cloud/ipfs/bafkreia6rxkezois2eymzxbikacx5egnrfvteqsky6gcswscjzmlummccu
COURSE_PREFIX=KL-SOL
```

---

## ✅ Verify Deployment (Base)

### Check contract code exists

```bash
cast code 0x1ab1812B56528889469ef444C2dF771814F74bEC --rpc-url "$BASE_MAINNET_RPC_URL"
```

### Check owner

```bash
cast call 0x1ab1812B56528889469ef444C2dF771814F74bEC "owner()(address)" --rpc-url "$BASE_MAINNET_RPC_URL"
```

### Check name/symbol

```bash
cast call 0x1ab1812B56528889469ef444C2dF771814F74bEC "name()(string)" --rpc-url "$BASE_MAINNET_RPC_URL"
cast call 0x1ab1812B56528889469ef444C2dF771814F74bEC "symbol()(string)" --rpc-url "$BASE_MAINNET_RPC_URL"
```

---

## 🧪 Manual Mint (Example)

### Sepolia (example)

```bash
cast send 0x5f303F0F87a0A64292C784A3De47CB59edF4035C \
  "mintCertificate(address,string,string)" \
  YOUR_WALLET \
  "Solidity Fundamentals" \
  "January 18, 2026" \
  --value 0.0003ether \
  --rpc-url https://sepolia.drpc.org \
  --private-key $PRIVATE_KEY
```

> For Base mainnet minting, use the Base contract address and Base RPC, and set the correct mint fee according to the contract.

---

## 📌 Roadmap

### Phase 1 (Now)

* ✅ Deploy Base mainnet
* [ ] Mint 1–2 live certificates on Base to confirm UX
* [ ] Verify OpenSea listing works
* [ ] Create simple minting website / admin bulk mint flow

### Phase 2

* [ ] Student self-mint interface (React/HTML)
* [ ] Stripe payments for bulk-mint workflow
* [ ] Email notifications
* [ ] Automated batch mint script

### Phase 3+

* [ ] Admin dashboard + analytics
* [ ] Certificate verification page (by Student ID)
* [ ] Integrations with course platform

---

## 🔐 Security Notes

Implemented:

* ✅ Ownable (only owner can batch mint + withdraw)
* ✅ Fee validation
* ✅ Soulbound transfer prevention
* ✅ Basic input checks

Future:

* [ ] Multisig for withdrawals
* [ ] Pause/emergency stop (optional)

---

## 📜 License

MIT

---

## 🔗 Links

### Base Mainnet

* Contract: `0x1ab1812B56528889469ef444C2dF771814F74bEC`

### Sepolia Test

* Contract: `0x5f303F0F87a0A64292C784A3De47CB59edF4035C`

### IPFS

* Image: `ipfs://bafkreiawpz2cyeckfyjck5ugdkpekcoot2t2ooprmptzqwc4kixc7h3pli`
* Metadata: `https://coral-genuine-koi-966.mypinata.cloud/ipfs/bafkreia6rxkezois2eymzxbikacx5egnrfvteqsky6gcswscjzmlummccu`

---

Built with ❤️ for Kayaba Labs students
Last Updated: January 30, 2026
Version: 1.0.0

```

### Small fixes you should also do (recommended)
1) In your repo, make sure `.env` is in `.gitignore` (so you never commit it).  
2) Update `DEPLOYMENT.md` to include Base mainnet deployed address + tx hash.  
3) In `OPERATIONS.md`, add the Base contract address as the default “production contract”.

If you paste your current `DEPLOYMENT.md` and `OPERATIONS.md`, I’ll rewrite those too with the Base mainnet details.
