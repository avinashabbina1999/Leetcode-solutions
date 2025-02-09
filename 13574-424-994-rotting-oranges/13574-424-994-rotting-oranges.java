class Solution {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> queue = new LinkedList<>();
        int fresh = 0;
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]==2) queue.add(new int[]{i,j});
                if(grid[i][j]==1) fresh++;
            }
        }
        if(fresh==0) return 0;
        int minutes = -1;
        int dir[][] = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};
        while(!queue.isEmpty()){
            int len = queue.size();
            for(int i=0;i<len;i++){
                int spot[] = queue.poll();
                int x = spot[0];
                int y = spot[1];
                for(int j=0;j<dir.length;j++){
                    int cx = x + dir[j][0];
                    int cy = y + dir[j][1];
                    if(cx > -1 && cx < grid.length && cy > -1 && cy < grid[0].length && grid[cx][cy]==1){
                        grid[cx][cy] = 2;
                        queue.add(new int[]{cx,cy});
                        fresh--;
                    }
                }
            }
            minutes++;
        }
        return fresh==0? minutes : -1;
    }
}