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
