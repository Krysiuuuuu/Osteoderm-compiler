export function compileOsteoderms(sourceCode, inputText = "") {
  const lines = sourceCode.split("\n");
  let output = "";

  for (let line of lines) {
    line = line.trim();

    // Handle ^ for printing text
    if (line.startsWith("^")) {
      output += line.slice(1) + "\n";
      continue;
    }

    // Handle unary numbers (e.g. ^^^^^^^^^^^ = 11)
    if (/^\^+$/.test(line)) {
      output += line.length + "\n";
      continue;
    }

    // Unknown token
    output += `[Unknown token]: ${line}\n`;
  }

  return output.trim();
}
