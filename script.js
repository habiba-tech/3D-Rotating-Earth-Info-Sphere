const countryData = {
  "India": "India is known for its rich culture, diversity, and rapid growth in technology. Capital: New Delhi.",
  "USA": "The United States is a global leader in innovation and economy. Capital: Washington, D.C.",
  "Japan": "Japan is famous for technology, cherry blossoms, and traditions. Capital: Tokyo.",
  "Brazil": "Brazil is known for the Amazon rainforest and football passion. Capital: Brasília."
};

const countries = document.querySelectorAll(".country");
const infoBox = document.getElementById("infoBox");
const countryName = document.getElementById("countryName");
const countryInfo = document.getElementById("countryInfo");

countries.forEach(country => {
  country.addEventListener("click", () => {
    const name = country.getAttribute("data-name");
    countryName.textContent = name;
    countryInfo.textContent = countryData[name];
    infoBox.classList.remove("hidden");

    // Small animation effect when clicking a country
    infoBox.style.animation = "fadeIn 0.5s ease-in-out";
  });
});
