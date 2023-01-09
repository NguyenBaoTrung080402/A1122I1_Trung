function bai1() {
  let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  for (let i in a) {
    document.writeln(" Row" + i+"<br/>");
    for (let j in a[i]) {
      document.writeln (" " + a[i][j]+ "<br/>");
    }
  }
}
