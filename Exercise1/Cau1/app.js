let today = new Date();
let day = today.getDay();

let listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is: ${listOfDays[day]}.`);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === " PM ") {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepand = " Noon";
	} else {
		hour = 12;
		prepand = " PM";
	}
} else if (hour === 0 && prepand === " AM ") {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepand = " Midnight";
	} else {
		hour = 12;
		prepand = " AM";
	}
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
