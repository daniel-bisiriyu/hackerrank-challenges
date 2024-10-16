function getAllSubstrings(string) {
    let subStringSet = new Set();
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            subStringSet.add(string.substring(i, j));
        }
    }
    return Array.from(subStringSet);
}

function findStrings(w, queries) {
    let allSubstringsSet = new Set();
    
    for (let string of w) {
        let substrings = getAllSubstrings(string);
        substrings.forEach(sub => allSubstringsSet.add(sub));
    }

    let sortedSubArr = Array.from(allSubstringsSet).sort();
    let resultArr = [];
    
    for (let query of queries) {
        if (query > sortedSubArr.length || query < 1) {
            resultArr.push("INVALID");
        } else {
            resultArr.push(sortedSubArr[query - 1]);
        }
    }

    return resultArr;
}