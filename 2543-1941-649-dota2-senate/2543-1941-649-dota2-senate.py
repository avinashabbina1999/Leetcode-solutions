class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        R,D = deque(),deque()
        for i in range(len(senate)):
            if senate[i]=='R':
                R.append(i)
            else:
                D.append(i)

        while len(R)>0 and len(D)>0:
            r,d = R.popleft(),D.popleft()
            if r<d:
                R.append(len(senate)+r)
            else:
                D.append(len(senate)+d)
        
        if len(R)==0:
            return 'Dire'
        return 'Radiant'