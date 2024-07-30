class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> set = new HashSet<>();
        Arrays.sort(nums);
        for(int i=0;i<nums.length-2;i++){
            int target = 0 - nums[i],j = i+1,k = nums.length-1;
            while(j<k){
                if(nums[j]+nums[k]<target)
                    j++;
                else if(nums[j]+nums[k]>target)
                    k--;
                else{
                    set.add(new ArrayList<>(Arrays.asList(nums[i],nums[j],nums[k])));
                    j++;
                    k--;
                }
            }
        }
        return new ArrayList<>(set);
    }
}