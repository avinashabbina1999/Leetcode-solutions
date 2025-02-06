class Solution {
    public String predictPartyVictory(String senate) {
        Queue<Integer> R = new LinkedList<>();
        Queue<Integer> D = new LinkedList<>();
        for(int i=0;i<senate.length();i++){
            if(senate.charAt(i)=='R')
                R.add(i);
            else
                D.add(i);
        }
        while(!R.isEmpty() && !D.isEmpty()){
            int r = R.poll(),d = D.poll();
            if(r<d)
                R.add(senate.length()+r);
            else
                D.add(senate.length()+d);
        }
        if(R.isEmpty())
            return "Dire";
        return "Radiant";
    }
}