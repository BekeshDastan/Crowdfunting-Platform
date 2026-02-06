// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract CroudFundingContract {
    struct company {
        string title;
        uint256 funding_goal;
        uint256 deadline;
        uint256 amount_collected;
        address owner_address;
        bool finalize;
    }

    company[] public campaigns;

    ERC20 public token;

    mapping(uint256 => mapping(address => uint256)) public contributions;



    constructor(address _tokenAddress) {
        token = ERC20(_tokenAddress);
    }

    

    function  create_campaign(string memory tit, uint goal,uint duration ) external returns (uint256) {
        require(duration>0, "duration have to be positive");

        uint256 deadline = block.timestamp + duration;

        company memory comp = company(tit, goal, deadline, 0, msg.sender, false);
        campaigns.push(comp);

        return campaigns.length -1;
    }
    
    function donate(uint id_of_comp ) external payable {
        require(id_of_comp < campaigns.length, "Invalid campaign ID");

        company storage comp = campaigns[id_of_comp];

        require(comp.deadline > block.timestamp, "Deadline is gone");

        comp.amount_collected += msg.value;

        contributions[id_of_comp][msg.sender] += msg.value;

        uint256 tokens = msg.value * 100;

        require(token.transfer(msg.sender, tokens), "Token transfer failed");
    }

    function finalize( uint id_of_comp) external {
        company storage comp = campaigns[id_of_comp];

        require(msg.sender == comp.owner_address, "Only owner can finilize");
        require (comp.deadline < block.timestamp, "deadline isn't gone");
        require(comp.amount_collected >= comp.funding_goal, "Goal not reached");
        require(!comp.finalize, "Funds already claimed");

        comp.finalize = true;

        (bool success, ) = payable(comp.owner_address).call{value: comp.amount_collected}("");
        

        require(success, "Transfer failed");

    }

    function refund(uint id_of_comp) external {
        company storage comp = campaigns[id_of_comp];

        require(block.timestamp > comp.deadline, "Deadline isn't gone");
        require(comp.amount_collected < comp.funding_goal, "Goal was reached, no refunds");

        uint256 user_contribution = contributions[id_of_comp][msg.sender];
        require(user_contribution > 0, "No contributions to refund");

        contributions[id_of_comp][msg.sender] = 0;

        (bool success, ) = payable(msg.sender).call{value: user_contribution}("");
        require(success, "Refund failed");
    }

    function get_campaigns_count() public view returns (uint256) {
        return campaigns.length;
    }

    function get_all_campaigns() public view returns (company[] memory) {
        return campaigns;
    }

    function get_user_contribution(uint256 id, address user) public view returns (uint256) {
        return contributions[id][user];
    }
}
