function doors(n){
    let doorsArray = []
    for(let i=0;i<n;i++) {
      doorsArray.push(false)
      i++
    }
    for (let i=1;i<=n;i++) {
      for(let j=i-1; j<n;j+= i) {
        doorsArray[j] = !doorsArray[j];
      }
    }
    let count = 0;
    for (let i=0;i<n;i++) {
      if(doorsArray[i] === true) {
        count++
      }
    }
    return count;
  }