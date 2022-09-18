{
    let i = 1
    function logDiv() {
        console.log('------------'+i+'------------')
        i++
    }
}

function getLog(log){
    console.log(log)
}
logDiv()
//----------------------------------------//

class test1{
    constructor(name,lname){
        this.firstName = name
        this.lastName = lname
    }
    fullname(){
        return(
            this.firstName + ' ' + this.lastName
        )
    }
}

getLog(test1)
logDiv()
// --------------------------
let NAME = new test1 ('Arash','Kheirollahi')
getLog(NAME)
getLog(NAME.fullname()) //yay :D
logDiv()
// --------------------------
NAME.middlename = 'None'
getLog(NAME.middlename)
getLog(NAME)



//-------------Function-----------------

const test2 = {
    person:{

    },
    _get : function(name,lname){
        this.person.fname = name
        this.person.lname = lname
    }
}
logDiv()
getLog(test2)
getLog(test2.person)
test2._get('Armin','kh')
getLog(test2.person)

// let x = new test2
// getLog(x)  Error :/