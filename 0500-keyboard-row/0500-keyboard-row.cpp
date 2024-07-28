class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        std::set<char> a = {'q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P'};
        std::set<char> b = {'a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L'};
        std::set<char> c = {'z','x','c','v','b','n','m','Z','X','C','V','B','N','M'};
        vector<string> ans;
        for(auto word : words){
            std::set<char> word_set(word.begin(),word.end());
            if (std::includes(a.begin(), a.end(), word_set.begin(), word_set.end()) ||
                std::includes(b.begin(), b.end(), word_set.begin(), word_set.end()) ||
                std::includes(c.begin(), c.end(), word_set.begin(), word_set.end()))
                ans.push_back(word);
        }
        return ans;
    }
};