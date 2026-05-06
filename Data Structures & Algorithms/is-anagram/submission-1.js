class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false;
      const hashMap = new Map();
      // iterate the first string to build the hashmap with count
      for(let e of s){
        if(hashMap.has(e)){
            hashMap.set(e, hashMap.get(e) + 1) ;
        } else {
            hashMap.set(e, 1);
        }
      }
      // iterate the second string to reduce the count in same hashmap
      for(let e of t){
        if(hashMap.has(e)){
            hashMap.set(e, hashMap.get(e) - 1) ;
            if(hashMap.get(e) === 0) hashMap.delete(e)
        } else {
            return false;
        }
      }
      if(!hashMap) return false;
      return true;
    }
}
