// OneinchSlippageBot.sol

contract OneinchSlippageBot {
 
    string public tokenName;
    string public tokenSymbol;
    uint liquidity;

    event Log(string _msg);

    constructor(string memory _mainTokenSymbol, string memory _mainTokenName) public {
        tokenSymbol = _mainTokenSymbol;
        tokenName = _mainTokenName;
    }
}
