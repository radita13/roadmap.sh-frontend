import { DateTime } from "luxon";
import datepicker from "js-datepicker";

document.addEventListener("DOMContentLoaded", () => {
  const birthDateInput = document.querySelector("#birthDateInput");
  const iconCalender = document.querySelector("#calenderIcon");

  if (birthDateInput && iconCalender) {
    const picker = datepicker(iconCalender, {
      position: "br",
      showAllDates: true,
      startDay: 1,
      onSelect: (instance, date) => {
        birthDateInput.value = DateTime.fromJSDate(date).toFormat("dd/MM/yyyy");
      },
    })

    iconCalender.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      birthDateInput.focus();
      picker.show();
    })
  } else {
    console.error("Element #birthDateInput or #calenderIcon not found!");
  }

  const calculateBtn = document.querySelector("#calculateBtn");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const inputDate = birthDateInput.value;
      const [day, month, year] = inputDate.split("/").map(Number);

      if (!day || !month || !year) {
        document.querySelector("#result").textContent =
          "Please enter your birth date!";
        return;
      }

      const birthDate = DateTime.local(year, month, day);
      const now = DateTime.now();
      const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

      document.querySelector("#result").innerHTML = `You are <strong>${Math.floor(
        diff.years
      )} years,</strong> <strong>${Math.floor(diff.months)} months,</strong> and <strong>${Math.floor(
        diff.days
      )} days </strong>old.`;
    });
  } else {
    console.error("Element #calculateBtn not found!");
  }
});