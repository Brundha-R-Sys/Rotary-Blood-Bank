// Register Donor
document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("registerForm");
    if (regForm) {
      regForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const donor = {
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
          blood: document.getElementById("blood").value.toUpperCase(),
          location: document.getElementById("location").value,
          contact: document.getElementById("contact").value,
        };
        const donors = JSON.parse(localStorage.getItem("donors")) || [];
        donors.push(donor);
        localStorage.setItem("donors", JSON.stringify(donors));
        document.getElementById("message").innerText = "Donor registered successfully!";
        regForm.reset();
      });
    }
  
    const reqForm = document.getElementById("requestForm");
    if (reqForm) {
      reqForm.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("reqMessage").innerText = "Request submitted successfully!";
        reqForm.reset();
      });
    }
  });
  
  function searchDonor() {
    const searchVal = document.getElementById("searchBlood").value.toUpperCase();
    const donors = JSON.parse(localStorage.getItem("donors")) || [];
    const results = donors.filter(d => d.blood === searchVal);
    const list = document.getElementById("resultList");
    list.innerHTML = "";
    if (results.length > 0) {
      results.forEach(d => {
        const li = document.createElement("li");
        li.innerText = `${d.name} - ${d.contact} (${d.location})`;
        list.appendChild(li);
      });
    } else {
      list.innerHTML = "<li>No donors found</li>";
    }
  }
  