console.log("hii");
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");

const temp_rel_Val = document.getElementById("temp_rel_Val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Plz write a name before search`;

    datahide.classList.add("data_hidden");
  } else {
    try {
      datahide.classList.remove("data_hidden");
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b41463af66b746a1890599d8f923dcce`;
      const response = await fetch(url);
      // console.log(response)
      const data = await response.json();
    //   console.log(data)
      const arrayData = [data];

      city_name.innerText = `${arrayData[0].name} , ${arrayData[0].sys.country}`;
      temp_rel_Val.innerText = arrayData[0].main.temp;

      const temp_mood = arrayData[0].weather[0].main;

      if (temp_mood == "Clear") {
          temp_status.innerHTML =
          "<i class= 'fas fa-sun' style='color :#eccc68;'></i> ";
      } else if (temp_mood == "Rain") {
        temp_status.innerHTML =
          "<i class= 'fas fa-cloud-rain' style='color :#f1f2f6;' ></i>";
      } else if (temp_mood == "Clouds") {
        temp_status.innerHTML =
          "<i class= 'fas fa-cloud' style='color :#a4b0be;'></i> ";
      } else {

           temp_status.innerHTML = "<i class= 'fas fa-sun' style='color :#eccc68;'></i> ";
      }
    } catch {
      city_name.innerText = `Plz enter the city name properly`;

      datahide.classList.remove("data_hidden");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
