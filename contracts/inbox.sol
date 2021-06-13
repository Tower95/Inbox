//specify the version of solidity we are using.
pragma solidity ^0.4.17;

//define the contract.
contract Inbox {
    //instance variable
    string public message;
    
    //function insede contract.
    function Inbox(string initialMessage) public{
         message = initialMessage;
    }
    
    function setMessage(string newMessage)public{
        message = newMessage;
    }
    //     function name \ function type \ returns type.
    
}