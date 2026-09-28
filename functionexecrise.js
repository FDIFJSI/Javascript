//example 1
function doubleXP(points)
{
    let newpoints = points *2   ;
    console.log(newpoints)
}

doubleXP(50);

//example 2
function makeheroname(adjective , animal)
{
    console.log("Look its : " , adjective, animal)
}

makeheroname("super", "man")

//challenge 3
function pizzaParty(cheesePizzas, pepperoniPizzas, veggiePizzas)
{
    let total = cheesePizzas+ pepperoniPizzas+ veggiePizzas
    console.log("Total Pizza Ordered", total)
}

pizzaParty(5,6 ,7 )

//challenge 4
function RobotGreet(Username)
{
    console.log("BEEP BOOP! HELLO LEO. I AM A ROBOT", Username);
}

RobotGreet("Tendai")

function dogyears(Humanage)
{
    console.log("In dog years, your pet is:", Humanage * 7 )
}
dogyears(14)