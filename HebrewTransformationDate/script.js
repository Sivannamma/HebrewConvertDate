"use-strict"; // for writting safe code.
const converBTN = document.querySelector("button");

converBTN.onclick = () => {
  // getting the date from the user
  let date = document.querySelector("input").value;
  // extracting the day, month, year
  const date_arr = date.split("-");
  let fixedDate = date_arr[2] + "-" + date_arr[1] + "-" + date_arr[0];

  let url = `https://www.hebcal.com/converter?cfg=json&gy=${date_arr[0]}&gm=${date_arr[1]}&gd=${date_arr[2]}&g2h=1`;

  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      if (out["error"])
        document.querySelector("p").innerText = "please enter a valid date";
      else {
        document.querySelector("p").innerText = out["hebrew"];
      }
    });
};
