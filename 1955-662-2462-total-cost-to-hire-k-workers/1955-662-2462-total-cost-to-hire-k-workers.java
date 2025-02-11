class Solution {
    public long totalCost(int[] costs, int k, int candidates) {
        PriorityQueue<Integer> start = new PriorityQueue<>();
        PriorityQueue<Integer> end = new PriorityQueue<>();
        int i = 0,j = costs.length-1;
        long ans = 0;
        while(k>0){
            while(start.size()<candidates && i<=j){
                start.offer(costs[i]);
                i++;
            }
            while(i<=j && end.size()<candidates){
                end.offer(costs[j]);
                j--;
            }
            int st = !start.isEmpty() ? start.peek() : Integer.MAX_VALUE;
            int en = !end.isEmpty() ? end.peek() : Integer.MAX_VALUE;
            if(st<=en){
                ans+=st;
                start.poll();
            }else{
                ans+=en;
                end.poll();
            }
            k--;
        }
        return ans;
    }
}