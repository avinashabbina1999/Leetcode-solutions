class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int max_profit = 0,profit = 0, low = prices[0];
        for(int i = 1;i< prices.size();i++){
            if(prices[i]<low){
                profit = 0;
                low = prices[i];
            }else{
                profit = prices[i]-low;
            }
            max_profit = std::max(profit,max_profit);
        }
        return max_profit;
    }
};