for (let i = 1; i <= 100; i++) {
    const sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) {
      console.log(`First square number found:`, i);
      break;
    }
  }
  