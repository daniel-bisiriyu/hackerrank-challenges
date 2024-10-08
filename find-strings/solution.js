function getAllSubstrings(string) {
    let subStringArr = string.split("");
    for (let i = 0; i < subStringArr.length-1; i++) {
       let sliced = string.slice(i,string.length)
       for (let k = 2; 
            k<= sliced.length;
            k++
            ) {
            subStringArr.push(string.substr(i,k))
        }
    }
    return subStringArr
}

function findStrings(w, queries) {
    // Write your code here
    let allSubstringsArr = [];
    let resultArr = [];
    for (let i = 0; i < w.length; i++) {
        let substrings = getAllSubstrings(w[i])
        allSubstringsArr = [...allSubstringsArr, ...substrings]
    }
    let sortedSubArr = allSubstringsArr.sort();
    let filteredArr = sortedSubArr.filter((item, index)=>{
        return sortedSubArr.indexOf(item) === index
    })
    for (let i =0; i < queries.length; i++) {
        if (queries[i] > filteredArr.length) {
            resultArr.push("INVALID");
        } else {
        resultArr.push(filteredArr[queries[i]-1])
        }
       
    }
    return resultArr
}