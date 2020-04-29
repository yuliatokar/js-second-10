'use strict'

//1
let age = prompt('How old are you?', '')
if (age >= 0 && age < 12) alert("You're a child")
else if (age >= 12 && age < 18) alert("You're a teenager")
else if (age >= 18 && age < 60) alert("You're an adult")
else if (age >= 60) alert("You're a retiree")
else alert('Error!')

//2
let symbol = prompt('Write a number from 0 to 9', '')
if (symbol == 0) alert(')')
else if (symbol == 1) alert('!')
else if (symbol == 2) alert('@')
else if (symbol == 3) alert('#')
else if (symbol == 4) alert('$')
else if (symbol == 5) alert('%')
else if (symbol == 6) alert('^')
else if (symbol == 7) alert('&')
else if (symbol == 8) alert('*')
else if (symbol == 9) alert('(')

//3
let num = prompt('Write the three-digit number', '')
if ((num - num % 1000) > 0) alert('Error!')
else {
    let a = (num - num % 100) / 100
    let b = (num - 100 * a)
    b = (b - b % 10) / 10;
    let c = num - 100 * a - 10 * b;
    if (a == b || b == c || c == a) alert("Yes, there are")
    else alert("No, there aren't")
}

// 4
let year = prompt('Write the year', '')
if (leapYear(year)) alert("Leap year")
else alert("Not a leap year")

//5
let number = prompt('Write the five-digit number', '')
let n = number
let length = number.length
let arr = []
let i = length - 1
let tmp = 0
do {
    arr[i] = (number - number % (10 ** i)) / (10 ** i)
    tmp += arr[i] * (10 ** (length - 1 - i))
    number = number % (10 ** i)
    i--
} while (i >= 0)
if (n == tmp) alert('The number is palindrome')
else alert('Not a palindrome')

//6
let money = prompt('Write the amount of your money in USD', '')
let currency = prompt('Write the currency (EUR, UAN or AZN)')
if (currency == "EUR") alert("Your amount of money in EUR is " + money * 0.92)
else if (currency == "UAH") alert("Your amount of money in UAH is " + money * 27.14)
else if (currency == "AZN") alert("Your amount of money in AZN is " + money * 1.7)
else alert('Error!')

//7
let purchase = prompt('Write the purchase sum', '')
if (purchase >= 200 && purchase < 300) alert('Your final sum is ' + purchase * 0.97)
else if (purchase >= 300 && purchase < 500) alert('Your final sum is ' + purchase * 0.95)
else if (purchase >= 500) alert('Your final sum is ' + purchase * 0.93)
else alert('Your final sum is ' + purchase)

//8
let lengthCircle = prompt('Write the length of a circle (circumference)', '')
let perimeter = prompt('Write the perimeter of a square', '')
if (lengthCircle <= Math.PI * perimeter / 4) alert('The circle may fit in the square')
else alert('The circle can`t fit in the square')

//9
let $h2 = document.createElement('h2')
let result = 0
$h2.innerText = 'What is the fashion capital?'
$h2.style = "text-align: center; margin-top: 100px"
document.body.append($h2)
let $ul = document.createElement('ul')
let $li1 = document.createElement('li')
let $li2 = document.createElement('li')
let $li3 = document.createElement('li')
let $buttonNext = document.createElement('button')
$li1.innerHTML = `<input type="radio" id="option11">
    <label for="option11">Milan</label>`
$li2.innerHTML = `<input type="radio" id="option12">
    <label for="option12">Paris</label>`
$li3.innerHTML = `<input type="radio" id="option13">
    <label for="option13">Madrid</label>`
document.body.append($ul)
$ul.append($li1, $li2, $li3, $buttonNext)
$buttonNext.innerText = 'Next question'
$buttonNext.style = "width: 120px; height: 50px; font-size: 14px; margin: 15px"
$buttonNext.addEventListener('click', () => {
    if (document.getElementById("option11").checked) result += 1;
    $h2.innerText = "Choose the most popular color in 2020:"
    $li1.innerHTML = `<input type="radio" id="option21">
    <label for="option21">Blue</label>`
    $li2.innerHTML = `<input type="radio" id="option22">
    <label for="option22">Red</label>`
    $li3.innerHTML = `<input type="radio" id="option23">
    <label for="option23">Orange</label>`
    $buttonNext.addEventListener('click', () => {
        if (document.getElementById("option22").checked) result += 1;
        $h2.innerText = "Choose the most popular hair length for women in 2020:"
        $li1.innerHTML = `<input type="radio" id="option31">
    <label for="option31">Long</label>`
        $li2.innerHTML = `<input type="radio" id="option32">
    <label for="option32">Very long</label>`
        $li3.innerHTML = `<input type="radio" id="option33">
    <label for="option33">Short</label>`
        $buttonNext.addEventListener('click', () => {
            if (document.getElementById("option33").checked) result += 1;
            $h2.innerText = ''
            $ul.innerHTML = ''
            alert('Your final score is ' + result + ' point(s)');
        })
    })
})

// 10
let yourDay = prompt('Write the day', '')
let yourMonth = prompt('Write the month', '')
let yourYear = prompt('Write the year', '')
if (leapYear(yourYear) && yourMonth == 2 && yourDay == 28) yourDay++
else if (leapYear(yourYear) && yourMonth == 2 && yourDay == 29) { yourMonth++; yourDay = 1 }

else switch (yourMonth) {
    case "2":
        if (yourDay == 28) { yourMonth++; yourDay = 1 }
        else yourDay++
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        if (yourDay == 30) { yourMonth++; yourDay = 1 }
        else yourDay++
        break;
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
        if (yourDay == 31) { yourMonth++; yourDay = 1 }
        else yourDay++
        break;
    case "12":
        if (yourDay == 31) { yourYear++; yourMonth = 1; yourDay = 1 }
        else yourDay++
        break;
}

alert(`The next date is ${yourDay}.${yourMonth}.${yourYear}`)

function leapYear(year0) {
    if (!(year0 % 400) || (!(year0 % 4) && (year0 % 100))) return 1
    else return 0
}