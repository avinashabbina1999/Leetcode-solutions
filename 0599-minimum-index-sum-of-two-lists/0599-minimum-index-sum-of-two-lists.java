class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String,Integer> map = new HashMap<>();
        List<String> list = new ArrayList<>();
        int ans = 3000;
        for(int i=0;i<list1.length;i++)
            map.put(list1[i],i);
        for(int i=0;i<list2.length;i++){
            if (!map.containsKey(list2[i]))
                continue;
            if(i+map.get(list2[i]) < ans){
                ans = i+map.get(list2[i]);
                list.clear();
                list.add(list2[i]);
            }else if(i+map.get(list2[i]) == ans)
                list.add(list2[i]);
        }       
        return list.toArray(new String[0]);
    }
}