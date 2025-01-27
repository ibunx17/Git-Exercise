//write a code to display the multipication table of a given number
let _nilai : number  = 3;
let _message : string = ``;
for(let i = 1; i <= (10); i++)
{
        _message += `[${_nilai} x ${i} = ${_nilai * i}]`
}
console.log(_message)

//write a code to check whether a string is a palindrome or not
let _word : string = "katak";
let _isPalindrome : boolean = false;
for (let i = 0; i < _word.length; i++) 
{
    let j = _word.length-1-i;
    while (j >= 0) {
        if(_word[i] === _word[j])
        {
            _isPalindrome = true;
            break;
        }
        else
        {
            _isPalindrome = false;
            break;
        }
        j--;
    }
}
console.log(`${_word} itu ${_isPalindrome ? "palindrome" : "bukan palindrome"}`);

//write a code to convert centimeter to kilometer
let _nilaiCM : number = 100000;
let _nilaiKM : string = "";
if(_nilaiCM.toString().length <= 5) 
{
    _nilaiKM = "Nilai kurang untuk konversi ke kilometer";
}
else
{
    _nilaiKM =  _nilaiCM.toString().substring(0, _nilaiCM.toString().length - 5) + " km";
}
console.log(_nilaiKM);

//write a code to format number as currency (IDR)
_nilai = 123456789;
let _index : number = _nilai.toString().length;
let _endIndex : number = _nilai.toString().length;
let _mark : number = 0;
let _result : string = "";
console.log(_index);
while (_index > 0) 
{
    if(_mark == 3)
    {
        _result = "."+_nilai.toString().substring(_index, _endIndex) + _result;
        _mark = 0;
        _endIndex = _index;
    }
    _index--;
    _mark++;
}
_result = `Rp. ${_nilai.toString().substring(0, _mark) + _result},00`;

console.log(_result)

//write a code to remove the first occurence of a given "search string" from a string
let _string1 : string = "Hello World";
let _searchString : string = "ell";
console.log(_string1.replace(_searchString,''));

//write a code to capitalize the first letter of each word in a string
_string1 = "hello world";
_result = "";
for(let i = 0; i < _string1.length; i++)
{
    if(i == 0 || (_string1[i-1] == " "))
    {
        _result += _string1[i].toUpperCase();
    }
    else
    {
        _result += _string1[i]; 
    }
}
console.log(_result);

//write a code to swap the case of each character from string
_string1 = "The QuiCk BrOwN Fox";
_result = "";
for(let i = 0; i < _string1.length; i++)
{
    if(_string1[i] === _string1[i].toUpperCase())
    {
        _result += _string1[i].toLowerCase();
    }
    else
    {
        _result += _string1[i].toUpperCase();
    }
}
console.log(_result);

//write a code to find the largest of two given integers
let _num1 : number = 42;
let _num2 : number = 63;
console.log(_num1 > _num2 ? console.log(_num1) : console.log(_num2));

//write a conditional statement to sort three numbers
_result = "";
_num1 = 42;
_num2 = 27;
let _num3 : number = 18;
let _lowestValue : number = 0;
if(_num1 < _num2 && _num1 < _num3)
{
    _result += _num1+",";
    if(_num2 < _num3)
    {
        _result += _num2+",";
        _result += _num3;
    }   
    else
    {
        _result += _num3+",";
        _result += _num2;
    }
}
else if(_num2 < _num1 && _num2 < _num3)
{
    _result += _num2+",";
    if(_num1 < _num3)
    {
        _result += _num1+",";
        _result += _num3;
    }   
    else
    {
        _result += _num3+",";
        _result += _num1;
    }
}
else if(_num3 < _num1 && _num3 < _num2)
{
    _result += _num3+",";
    if(_num1 < _num2)
    {
        _result += _num1+",";
        _result += _num2;
    }   
    else
    {
        _result += _num2+",";
        _result += _num1;
    }
}
    
console.log(_result)

//write a code that shows 1 if input is a string, 2 if the input is a number, and 3 for others data type
let _input = "3";
console.log(typeof _input === "string" ? 1 : typeof _input === "number" ? 2 : 3);

//write a code to change every latter a into * from a string of input
_string1 = "An apple a day keeps the doctor away";
console.log(_string1.replaceAll(/[a,A]/g,"*"))