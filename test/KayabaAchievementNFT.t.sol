// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/KayabaAchievementNFT.sol";

contract KayabaAchievementNFTTest is Test {
    KayabaAchievementNFT public nft;
    address public owner;
    address public student1;
    address public student2;
    
    uint256 constant MINT_FEE = 0.0003 ether;
    