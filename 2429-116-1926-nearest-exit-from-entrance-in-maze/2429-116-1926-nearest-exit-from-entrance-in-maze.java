class Solution {
    public int nearestExit(char[][] maze, int[] entrance) {
        int count = 0,rows = maze.length,cols = maze[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int dir[][] = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};
        queue.add(entrance);
        maze[entrance[0]][entrance[1]] = '+';
        while(queue.size()>0){
            int len = queue.size();
            for(int i=0;i<len;i++){
                int point[] = queue.poll();
                for(int j=0;j<dir.length;j++){
                    int cx = point[0]+dir[j][0],cy = point[1]+dir[j][1];
                    if(!inBound(cx,cy,rows,cols) && count>0) return count;
                    if(inBound(cx,cy,rows,cols) && maze[cx][cy]=='.'){
                        queue.add(new int[]{cx,cy});
                        maze[cx][cy]='+';
                    }
                }
            }
            count++;
        }
        return -1;
    }

    public boolean inBound(int x,int y,int rows,int cols){
        return x>-1 && y>-1 && x<rows && y<cols;
    }
}