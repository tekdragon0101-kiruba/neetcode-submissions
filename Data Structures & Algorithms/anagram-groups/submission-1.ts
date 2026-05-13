class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Hash Map for storing words with it ascii total count
        const map = new Map<string, string[]>();
        // Iterate the words and its character to calculate the ascii count
        for (let word of strs) {
            const sorted = word.split('').sort().join('');
            if(map.has(sorted)){
                const arr = map.get(sorted);
                arr.push(word)
                map.set(sorted, arr);
            } else {
                map.set(sorted, [word])
            }
        }
        return Array.from(map.values());
    }
}
