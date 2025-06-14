function validateEthereumAddress(address) {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
}

function validateAddresses() {
  const input = document.getElementById("addressInput").value;
  const resultsContainer = document.getElementById("results");
  const copyButton = document.getElementById("copyButton");

  // Reset
  resultsContainer.innerHTML = '';
  copyButton.style.display = 'block';

  const rawAddresses = input.split(/[\n,]+/).map(addr => addr.trim()).filter(Boolean);
  const validAddresses = [];

  rawAddresses.forEach(address => {
    const div = document.createElement("div");
    div.className = "result";

    if (validateEthereumAddress(address)) {
      div.textContent = ` ✅ Valid - ${address}`;
      div.classList.add("valid");
      validAddresses.push(address);
    } else {
      div.textContent = `❌ Invalid - ${address}`;
      div.classList.add("invalid");
    }

    resultsContainer.appendChild(div);
  });

  // Store valid addresses for copy
  copyButton.dataset.valid = validAddresses.join('\n');
}

function copyValidAddresses() {
  const valid = document.getElementById("copyButton").dataset.valid || '';
  if (valid) {
    navigator.clipboard.writeText(valid)
      .then(() => alert("Valid addresses copied to clipboard."))
      .catch(() => alert("Failed to copy."));
  } else {
    alert("No valid addresses to copy.");
  }
}
