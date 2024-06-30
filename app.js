// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name){
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getAddress(){
//         return this.address;
//     }
// }

// let customer01 = new Customer("Janith", 17, "Rathnapura");
// console.log(customer01);
// console.log(customer01.name);
// console.log(customer01.age);
// console.log(customer01.address);
// console.log(customer01.getName());
// console.log(customer01.getAge());
// console.log(customer01.getAddress());

// let randomNumber = Math.floor((Math.random()*10)+1)
// console.log(randomNumber);


function calculate() {
    let txtNumber = document.getElementById("txtField").value;
    let lblResult = document.getElementById("lblResult");
    console.log("Hello");
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);

    if (txtNumber != randomNumber) {
        console.log("Your number is Wrong");
        lblResult.innerHTML = "Your number is Wrong";
        lblResult.style.color = 'red';
        lblResult.classList.add('shake');
    } else {
        console.log("Your number is Correct");
        lblResult.innerHTML = "Your number is Correct";
        lblResult.style.color = 'green';
    }
}

// Add shake animation
document.querySelector('input[type="button"]').addEventListener('click', function() {
    let lblResult = document.getElementById("lblResult");
    lblResult.classList.remove('shake');
    void lblResult.offsetWidth;  // Trigger reflow to restart animation
    lblResult.classList.add('shake');
});

