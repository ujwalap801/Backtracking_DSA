function subsequences(arr) {
  const result = [];

  function helper(index, current) {
    if (index === arr.length) {
      result.push([...current]);
      return;
    }

    // include
    current.push(arr[index]);
    helper(index + 1, current);

    // exclude
    current.pop();
    helper(index + 1, current);
  }

  helper(0, []);
  return result;
}


console.log(subsequences([1,2]))
