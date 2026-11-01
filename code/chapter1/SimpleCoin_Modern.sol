// SPDX-License-Identifier: MIT
// Adapted educational example, not the original book listing.
// Compile with Solidity 0.8.20 or compatible 0.8.x compiler.
pragma solidity ^0.8.20;

contract SimpleCoinModern {
    mapping(address => uint256) public coinBalance;
    uint256 public totalSupply;

    event Transfer(address indexed from, address indexed to, uint256 amount);

    constructor() {
        totalSupply = 10_000;
        coinBalance[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) external {
        require(to != address(0), "Invalid recipient");
        require(coinBalance[msg.sender] >= amount, "Insufficient balance");

        coinBalance[msg.sender] -= amount;
        coinBalance[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }
}
