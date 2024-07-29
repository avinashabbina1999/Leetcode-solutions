class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> list1 = new ArrayList<>();
        list1.add(1);
        ans.add(list1);
        while(numRows>1){
            List<Integer> list2 = new ArrayList<>();
            list2.add(1);
            for(int i=0;i<list1.size()-1;i++)
                list2.add(list1.get(i)+list1.get(i+1));
            list2.add(1);
            ans.add(list2);
            list1 = list2;
            numRows--;
        }
        return ans;
    }
}