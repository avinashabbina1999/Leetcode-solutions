class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> s = new Stack<>();

        for(int a : asteroids){
            while(!s.empty() && s.peek()>0 && a<0){
                if(s.peek()<Math.abs(a))
                    s.pop();
                else{
                    if(s.peek()==Math.abs(a))
                        s.pop();
                    a = 0;
                    break;
                }
            }
            if(a!=0)
                s.push(a);
        }
        int a[] = new int[s.size()];
        for(int i=s.size()-1;i>-1;i--)
            a[i] = s.pop();
        return a;
    }
}