export default function mergeDuplicateData(data) {
    const mergedData = {};
  
    data.forEach((item) => {
      const [key, value] = item.split(' ');
  
      if (mergedData[key]) {
        // If the key already exists in the mergedData, add the values
        mergedData[key] += parseInt(value);
      } else {
        // Otherwise, initialize the key with the value
        mergedData[key] = parseInt(value);
      }
    });
  
    // Convert the mergedData back to an array of key-value pairs
    const result = Object.entries(mergedData).map(([key, value]) => `${key} ${value}`);
  
    return result;
  }
  
