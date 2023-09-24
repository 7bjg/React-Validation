

function removeDuplicates(mainArray) {
    
    const uniqueSet = new Set();
    
    const uniqueArray = mainArray.filter(item => {
  const values = item.split(' '); // Split each item by space
  const key = values[0]; // Consider the first part as the key
  
  if (!uniqueSet.has(key)) {
      uniqueSet.add(key);
      return true; // Include the first occurrence
    }
    return false; // Exclude duplicates
});
return uniqueArray;
}
export default removeDuplicates;
