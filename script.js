function highlightText() {
  const input = document.getElementById("inputText").value;
  let output = input;

  const patterns = [
    /\b(worsened|undermined|disrupted|deported|targeted|surveilled|detained|punished|declined|trailed|increased|reduced|costing|losing)\b/gi,
    /\b(food insecurity|housing instability|economic hardship|immigrant populations|juveniles|without consent)\b/gi,
    /\b\d{1,3}(?:,\d{3})*(?:\.\d+)?\s*(%|million|billion|£|\$|€)\b/gi
  ];

  patterns.forEach(pattern => {
    output = output.replace(pattern, match => `<span class="highlight">${match}</span>`);
  });

  document.getElementById("outputArea").innerHTML = `<p>${output}</p>`;
}
