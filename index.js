// alert("abc");
// console.log("xxx");
// const age=18;
// console.log(age);
// let name=prompt("What your name");
// alert(name);
let name=prompt("Tên bạn là ???");
let place=prompt("Bạn sống ở ???");
let year=Number(prompt("Bạn sinh năm???"));
// alert("Tên bạn là "+name+" và bạn sống ở "+place+". Năm nay bạn : "+String(2022-year)+" tuổi");
console.log("Tên bạn là "+name);
console.log("Bạn sống ở "+place);
console.log("Bạn năm nay: "+String(2021-year)+" tuổi");
let age=2021-year;
if (age>=0 && age <=5)
{
    alert("baby");
}
else if (age>5 && age<=15)
{
    alert("children");
}
else if (age>15 && age<=18)
{
    alert("teenager");
}
else if (age>18 && age<=30)
{
    alert("adult");
}
else alert("middle ages and old");
