// Iterative Solution
function fibs(n) {
  const sequence = [];

  if (n >= 1) {
    sequence.push(0);
  }
  if (n >= 2) {
    sequence.push(1);
  }
  for (let i = 0; i < n - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }

  return sequence;
}

// Recursive Solution
function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

  return sequence;
}
