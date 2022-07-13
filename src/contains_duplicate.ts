function containsDuplicate(nums: number[]): boolean {


    //sort in ascending order
    let items = nums.sort((a, b) => a - b)

    for (let i = 0; i < items.length; i++) {
        if (items[i] === items[i + 1]) {
            return true;
        }
    }

    return false;

};