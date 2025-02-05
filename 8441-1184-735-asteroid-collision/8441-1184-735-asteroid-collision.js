/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(a) {
    const s = []
    
    for(let i=0;i<a.length;i++){
        let flag = false
        while(s.length>0 && s[s.length-1]>0 && a[i]<0){
            let t = s[s.length-1]
            if(t<Math.abs(a[i]))
                s.pop()
            else if(t===Math.abs(a[i])){
                s.pop()
                a[i]=0
                break
            }else{
                a[i]=0
                break
            }
        }
        if(a[i]!==0)
            s.push(a[i])
    }
    return s
};