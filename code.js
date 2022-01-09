class Bankaccount{
    constructor(owner,balance){
        this.owner=owner;
        this.balance=balance;
    }
    showbalance() {
       console.log(this.balance);
        document.getElementById("result").innerHTML="BALANCE:" + " " +  this.balance + " " + "INR"; 
    }
    deposite(amount)
    {
        this.balance +=amount;
        this.showbalance();
    }
    withdraw(amount1)
    {
        if (amount1 > this.balance) {
            alert('Withdrawal denied!');
        } else {
            // console.log('Withdrawing ' + amount + ' EUR');
            this.balance -= amount1;
            this.showbalance();
        }
    }
}


let sumedh   = new Bankaccount("sumedh",5550);
let prakash  = new Bankaccount("praksh",1);
let hitesh   = new Bankaccount("hitesh",1);
let shraddha = new Bankaccount("shraddha",10);
let tejas    = new Bankaccount("tejas",550);
let hemangi  = new Bankaccount("hemangi",3);
let aditya   = new Bankaccount("aditya",20);
let saurav   = new Bankaccount("saurav",0);


function bank()
{
    p=document.getElementById("name").value;
    if(p==="sumedh")
    {
        sumedh.showbalance();
    }
    else if (p==="prakash") {
        prakash.showbalance();
    }
    else if(p==="hitesh")
    {
        hitesh.showbalance();
    }
    else if (p==="shraddha") {
        shraddha.showbalance();
    }
    else if(p==="tejas")
    {
        tejas.showbalance();
    }
    else if (p==="hemangi") {
        hemangi.showbalance();
    }
    else if(p==="aditya")
    {
        aditya.showbalance();
    }
    else if (p==="saurav") {
        saurav.showbalance();
    }
    else{
        document.getElementById("result").innerHTML="INVALID!";
    }
}


function addmoney()
{
    a=document.getElementById("name").value;
    e=Number(document.getElementById("deposit").value);
    if(p==="sumedh")
    {
        sumedh.deposite(e);
    }
    else if (p==="prakash") {
        prakash.deposite(e);
    }
    else if(p==="hitesh")
    {
        hitesh.deposite(e);
    }
    else if (p==="shraddha") 
    {
        shraddha.deposite(e);
    }
    else if(p==="tejas")
    {
        tejas.deposite(e);
    }
    else if (p==="hemangi") {
        hemangi.deposite(e);
    }
    else if(p==="aditya")
    {
        aditya.deposite(e);
    }
    else if (p==="saurav") {
        saurav.deposite(e);
    }
    else{
        document.getElementById("result1").innerHTML="INVALID!";
    }
}

function removemoney()
{
    a=document.getElementById("name").value;
    e=Number(document.getElementById("withdraw").value);
    if(p==="sumedh" )
    {
        sumedh. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if (p==="prakash" ) {
        prakash. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if(p==="hitesh" )
    {
        hitesh. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if (p==="shraddha") 
    {
        shraddha. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if(p==="tejas" )
    {
        tejas. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if (p==="hemangi" ) {
        hemangi. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if(p==="aditya" )
    {
        aditya. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else if (p==="saurav" ) {
        saurav. withdraw(e);
        document.getElementById("result1").innerHTML="";
        document.getElementById("result1").innerHTML="Withdraw amount:" + " " +  e + " " + "INR";
    }
    else{
        document.getElementById("result1").innerHTML="INVALID!";
    }
}

