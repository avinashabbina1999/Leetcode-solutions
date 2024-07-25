class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit,max_profit,low = 0,0,sys.maxsize
        for price in prices:
            if price < low:
                low = price
                profit = 0
            else:
                profit = price - low
            max_profit = max(profit,max_profit)
        return max_profit