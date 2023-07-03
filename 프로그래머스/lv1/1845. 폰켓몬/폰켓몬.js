function solution(nums) {
    const set = [...new Set(nums)]
    const res = nums.length / 2
    if(set.length > res) return res
    return set.length
}