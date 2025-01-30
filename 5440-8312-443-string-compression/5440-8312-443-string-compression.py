class Solution:
    def compress(self, chars: List[str]) -> int:
        index,i = 0,0

        while i<len(chars):
            ch,count = chars[i],0

            while(i<len(chars) and chars[i]==ch):
                count+=1
                i+=1
        
            chars[index] = ch
            index+= 1

            if(count>1):
                for num in str(count):
                    chars[index] = num
                    index+= 1
                
        return index