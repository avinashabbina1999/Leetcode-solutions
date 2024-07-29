class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        std::vector<int> list1;
        list1.push_back(1);
        std::vector<vector<int>> ans;
        ans.push_back(list1);
        while(numRows>1){
            std::vector<int> list2;
            list2.push_back(1);
            for(int i=0;i<list1.size()-1;i++)
                list2.push_back(list1[i]+list1[i+1]);
            list2.push_back(1);
            list1 = list2;
            ans.push_back(list1);
            numRows--;
        }
        return ans;
    }
};