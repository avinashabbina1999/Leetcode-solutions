class Solution {
    
    public int findCircleNum(int[][] isConnected) {
        boolean visited[] = new boolean[isConnected.length];
        int count = 0;
        for(int i=0;i<visited.length;i++){
            if(!visited[i]){
                count++;
                dfs(isConnected,i,visited);
            }
        }
        return count;
    }

    public void dfs(int[][] isConnected,int i,boolean visited[]){
        if(!visited[i]){
            visited[i] = true;
            for(int j=0;j<isConnected[i].length;j++){
                if(isConnected[i][j]==1 && !visited[j]){
                    dfs(isConnected,j,visited);
                }
            }
        }
    }
}