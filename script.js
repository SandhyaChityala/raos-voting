
let selected = "";

function selectCandidate(name) {
  selected = name;
  document.getElementById("selectedName").innerText = name;
  document.getElementById("nextStep").style.display = "block";
}

function submitVote() {
  if (!selected) {
    alert("Please select a candidate.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbzNyivdXS91XsRX7Pxq0kUwqdCnyShltndM1j90PYCUCvY6ZnJy1c-J34wEzCh6pN7QoA/exec", {
    method: "POST",
    body: JSON.stringify({
      headBoy: selected,
      headGirl: "",
      ccaBoy: "",
      ccaGirl: "",
      akashCaptain: "",
      akashVice: "",
      jalaCaptain: "",
      jalaVice: "",
      agniCaptain: "",
      agniVice: "",
      prithviCaptain: ""
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    alert("Vote submitted successfully!");
    window.location.reload();
  }).catch(err => {
    alert("Error submitting vote.");
    console.error(err);
  });
}
