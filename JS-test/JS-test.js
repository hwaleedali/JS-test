console.log("JS-Test");

function printMultiply(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("Jackpot");
    } else if (i % num1 === 0) {
      console.log("This is divisible by 3");
    } else if (i % num2 === 0) {
      console.log("This is divisible by 5");
    } else {
      console.log(i);
    }
  }
}
printMultiply(3, 5);

// step 2
async function fetchedData() {
  const fetchData1 = `https://reqres.in/api/users`;
  const promise = await Promise.all([fetch(fetchData1)]);
  //   const dataApi = await fetch(`https://reqres.in/api/users`);
  //   const data = await dataApi.json();
  //   console.log(data);
  const firstData = promise.map((el) => el.json());
  const finalData = await Promise.all(firstData);
  console.log(finalData);
  const mappedDate = finalData.map((el) => {
    el.map((el) => {
      const fullName = document.createElement("h3");
      const renderElement = document.querySelector(".renderName");

      fullName.innerHTML = `Full Name: ${el.first_name}`;
      renderElement.appendChild(fullName);
    });
  });
}
fetchedData();

// step 3
const btn = document.querySelector("button");
btn.addEventListener("click", function addImage() {
  document.getElementById("img").innerHTML = "<img src='newWatermark.png'/>"; //This will overwrite previous image
});
