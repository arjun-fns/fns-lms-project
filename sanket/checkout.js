var config = {
  cUrl: "https://api.countrystatecity.in/v1/countries",
  cKey: "M0hTRUtVOFRYYkdHRHlSOTNJQ05FYW5qQjdBOFJSejZiU3lFWDk3Tg==",
};

var countrySelect = document.querySelector(".country"),
  stateSelect = document.querySelector(".state"),
  citySelect = document.querySelector(".city");

function loadCountries() {
  let apiEndPoint = config.cUrl;

  fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.cKey } })
    .then((Response) => Response.json())
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.iso2;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error loading countries:", error));
}

function loadStates() {
  stateSelect.disabled = true;
  citySelect.disabled = true;

  const selectedCountryCode = countrySelect.value;
  stateSelect.innerHTML = '<option value="">Select State</option>'; // for clearing the existing states
  citySelect.innerHTML = '<option value="">Select City</option>'; // Clear existing city options

  if (selectedCountryCode) {
    fetch(`${config.cUrl}/${selectedCountryCode}/states`, {
      headers: { "X-CSCAPI-KEY": config.cKey },
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((state) => {
          const option = document.createElement("option");
          option.value = state.iso2;
          option.textContent = state.name;
          stateSelect.appendChild(option);
        });
        stateSelect.disabled = false;
        stateSelect.style.pointerEvents = "auto";
      })
      .catch((error) => console.error("Error loading states:", error));
  }
}

function loadCities() {
  citySelect.disabled = true;

  const selectedCountryCode = countrySelect.value;
  const selectedStateCode = stateSelect.value;
  citySelect.innerHTML = '<option value="">Select City</option>'; // Clear existing city options

  if (selectedCountryCode && selectedStateCode) {
    fetch(
      `${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`,
      { headers: { "X-CSCAPI-KEY": config.cKey } }
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((city) => {
          const option = document.createElement("option");
          option.value = city.iso2;
          option.textContent = city.name;
          citySelect.appendChild(option);
        });
        citySelect.disabled = false;
        citySelect.style.pointerEvents = "auto";
      })
      .catch((error) => console.error("Error loading cities:", error));
  }
}

window.onload = loadCountries;
