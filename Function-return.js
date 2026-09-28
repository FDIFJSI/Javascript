function add()
{
    return(66+1)
}

let answer = add()// dont forget to use the fn
console.log(answer)

//example
function multiply()
{
    return 5 * 2;
}

let result = multiply();
console.log(result)

//mission 1
function Calculategold(bagone,bagtwo)
{
    return(bagone+bagtwo)
}

let totalgold = Calculategold(10,11)
console.log("total treasure collected:", totalgold)
//mission 2
function Applyturbo(basespeed, turboboost)
{
    return(basespeed+turboboost)
}
let finalspeed = Applyturbo( 11,50, )
console.log("Robot speed increased to:" ,finalspeed ,"km/h")
//mision 3
function MixPotion(jarOneEnergy , jarTwoEnergy)
{
    return(jarOneEnergy + jarTwoEnergy)
}
let totalenergy = MixPotion(66,1)
console.log("The potion is ready with", totalenergy ,"units of magic!")

//mission 4
function vendingmachine(money)

{
    if (money >= 10)
    {
        return "chocolatebar"
    }
    else if (money >= 5)
    {
        return "bag of chips"
    }

    else if (money < 5 )
    {
        return "A peice of gum"
    }
}

let mysnack =vendingmachine(4)
console.log("inserted my coins and received a:", mysnack)

//mision 5
function craftitem(rawmaterial)
{
    if(rawmaterial ==  "wood" )
    {
            return "craftingtable"
    }

    else if(rawmaterial == "Iron")
    {
        return "Iron Sword"
    }

    else if(rawmaterial == "Diamond")
    {
        return "Diamond Pickaxe"
    }

    else{ return "Stick"}
}

let MyItem = craftitem("Diamond")
console.log("Success! You placed the material in the bench and got a:", MyItem)

function Bypassfirewall(securitylevel)
{
    if (securitylevel> 90)
    {
        return "Admin Access Granted"
    }

    else if (securitylevel >= 50)
    {
        return"User Acess Granted"
    }

    else if (securitylevel<50)
    {
        return"Access Denied: Firewall Locked"
    }
}
let status = Bypassfirewall(100)
console.log("The terminal flashes:", status)
