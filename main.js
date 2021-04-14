function getBirthday() {
    alert("Enter Your date of Birth to get Akan name");
    let dob = prompt("Enter Date of Birth mm/dd/yyyy");
    let dateStr = new Date(dob);
    let [month, date, year] = dateStr.toLocaleDateString("en-US").split("/");
    let gender = prompt("Enter gender 'M' for male, 'F' for female")
    let CC = year[0, 1]





    console.log(CC);

}