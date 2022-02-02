function staircase(n) {
    if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
         for (let r = 1; r <= n; r++) {
              let blanks = [ ...[], ...Array(n - r) ].map(i => ' ');
              let hashes = [ ...[], ...Array(n - (n - r))].map(i => '#');
              console.log([
                   ...blanks,
                   ...hashes
              ].join(''));
         } 
    }
}
