class Solution {
    
    public List<String> generateParenthesis(int n) {
        List<String> answers = new ArrayList<>();
        generate(answers,"(",n-1,n);
        return answers;
    }
    public void generate(List<String> answers,String s, int m, int n){
        if(m==0 && n==0){
            answers.add(s);
            return;
        }
        if(m>0){
            generate(answers,s+"(",m-1,n);
        }
        if(n>m){
            generate(answers,s+")",m,n-1);
        }
    }
}