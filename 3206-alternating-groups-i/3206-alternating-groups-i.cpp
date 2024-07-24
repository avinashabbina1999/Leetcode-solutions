class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors) {
        int count = 0;
        for(int i=0;i<colors.size();i++){
            if(colors[i%colors.size()]!=colors[(i+1)%colors.size()] && colors[(i+2)%colors.size()]!=colors[(i+1)%colors.size()])
                count++;
        }
        return count;
    }
};