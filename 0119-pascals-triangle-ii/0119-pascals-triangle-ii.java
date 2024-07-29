class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> list1 = new ArrayList<>();
        list1.add(1);
        int row = 0;
        while(row<rowIndex){
            List<Integer> list2= new ArrayList<>();
            list2.add(1);
            for(int i=0;i<list1.size()-1;i++)
                list2.add(list1.get(i)+list1.get(i+1));
            list2.add(1);
            list1 = list2;
            row++;
        }
        return list1;
    }
}