function restoreString(s: string, indices: number[]): string {
    const result: string[] = [];
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join('');
};
const s = "code";
const indices = [2, 0, 1, 3];

const shuffledString = restoreString(s, indices);
console.log(shuffledString);
