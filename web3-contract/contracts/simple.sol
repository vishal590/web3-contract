// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract simpleContract{
    uint256 public val1 = 10;
    uint256 public val2 = 20;
    string public val3 = "Hello world";

    function setVal1(uint256 _val1) public{
        val1 = _val1;
    }

    function setVal2(uint256 _val2) public{
        val2 = _val2;
    }

    function setVal3(string memory _val3) public{
        val3 = _val3;
    }


}