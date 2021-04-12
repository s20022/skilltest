;(stdin => {
  const inputs = stdin
    .toString()
    .trim()
    .split('\n')
  const lines = inputs.slice(0, 3)
  // Display
  console.log(lines.join('\n'))
})(require('fs').readFileSync('/dev/stdin', 'utf8'))
