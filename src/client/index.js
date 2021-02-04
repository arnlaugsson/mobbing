let form = document.getElementById("calculateForm");

if (form.attachEvent) {
  form.attachEvent("submit", proccessForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  function updateCalculatedText(formula, calculated) {
    let container = document.getElementById("calculated");
    container.innerHTML = `${formula} = ${calculated}`;
  }

  function resetCalculatedContainer() {
    let container = document.getElementById("calculated");
    container.innerHTML = "Waiting for a formula...";
  }

  let formData = new FormData(form);
  let formula = formData.get("formula");

  if (formula) {
    resetCalculatedContainer();
    fetch("/api/calculate/" + formula)
      .then(async resp => {

        return {
          status: resp.status,
          data: await resp.json(),
        }
      })
      .then(data => {
        if(data.status !== 200) {
          document.getElementById("output-box").classList.add("error");
        } else {
        document.getElementById("output-box").classList.remove("error");
        }
        let calculated = data.data.calculated;
        updateCalculatedText(formula, calculated);
      }).catch(error => {
        updateCalculatedText(formula, "error");
        document.getElementById("output-box").classList.add("error");
      });
  }
}