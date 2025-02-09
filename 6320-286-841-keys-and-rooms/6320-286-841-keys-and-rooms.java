class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        Stack<Integer> stack = new Stack<>();
        boolean visited[] = new boolean[rooms.size()];
        stack.push(0);
        visited[0] = true;
        while(!stack.isEmpty()){
            int key = stack.pop();
            for(int i=0;i<rooms.get(key).size();i++){
                int option = rooms.get(key).get(i);
                if(!visited[option]){
                    stack.push(option);
                    visited[option] = true;
                }
            }                                
        }
        for(boolean visit : visited)
            if(!visit) return false;
        return true;
    }
}