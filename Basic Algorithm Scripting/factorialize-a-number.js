function factorialize(num) {
  if (num > 0) {
    for (i = num - 1; i >= 1; i--) {
       num *= i;
    }
    return num;
  } else if (num === 0) {
    return 1;
  } else {
      return undefined;
  }
}

factorialize(5);