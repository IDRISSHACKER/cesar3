const STEP = 3
const ABC  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v' ,'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '`', 'é', 'à', '"', '\'', '(', ')', '-', 'è', '_', 'ç', '=', '*', '$', '!', ',', ':', '/', '<', '>', ';', '²', '#', ' ' ,'{', '[', '|', '\\', '^', '@', ']', '}']

/**
 * 
 * @param {*} joker 
 */
const jokerToArray = (joker)=>{
    if(joker == undefined){
        return null;
    }
    const jokerArray = []

    joker = String(joker)

    for(let position = 0; position < joker.length; position++){
        jokerArray.push(joker[position])
    }

    return jokerArray
}


/**
 * 
 * @param {String} joker 
 * @param {Number} step 
 */
const cesarEncode = (joker, step = STEP)=>{
    const jokerArray = jokerToArray(joker)
    let myCode = ""

    if(!jokerArray){
        return null;
    }

    jokerArray.forEach((char)=>{

        if(ABC.indexOf(char) !== -1){
            if(char === " "){
                myCode = `${myCode}|`
            }else if(char === "|") {
                myCode = myCode+" "
            }else{
                const newPosition = ABC.indexOf(char) + step
                const newChar = ABC[newPosition]
                myCode = `${myCode}${newChar}`
            }
        }

    })

    return myCode
}

/**
 * 
 * @param {String} cesarCode 
 */
const cesarDecode = (cesarCode)=>{
    const cesarCodeToArray = jokerToArray(cesarCode)
    return cesarEncode(cesarCode, -STEP)
}

/**
 * 
 * @param {String} cesarCode 
 * @param {String} joker
 */
const cesarVerify = (cesarCode, joker) => {
    if(cesarDecode(cesarCode) === joker){
        return true
    }else{
        return false
    }
}


module.exports = {
    jokerToArray,
    cesarEncode,
    cesarVerify,
    cesarDecode
}
