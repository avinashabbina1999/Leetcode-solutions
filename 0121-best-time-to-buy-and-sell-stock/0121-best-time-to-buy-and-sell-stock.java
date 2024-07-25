class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0,max_profit = 0,low = prices[0];
        for(int i=1;i<prices.length;i++){
            if(prices[i] < low){
                profit = 0;
                low = prices[i];
            }
            else
                profit = prices[i]-low;
            max_profit = Math.max(profit,max_profit);
        }
        return max_profit;
    }
}