const nums = document.getElementById('nums')
const target = document.getElementById('target')
const submit = document.getElementById('submitButton')
const output = document.getElementById('outputAnswer')

let nCheck = false

let tCheck = false

let nErr = []

let tErr = []

let errCheck = []

let cutNums = []

let tArr = []

submit.addEventListener('mousedown', () => {

    submit.className = 'altInputColor'

})

submit.addEventListener('mouseup', () => {

    submit.className = 'inputColor'

    fullVerify(nums.value, target.value)

})

document.addEventListener('keydown', (event) => {

    if ((event).key === 'Enter') {

        submit.className = 'altInputColor'

    }

})

document.addEventListener('keyup', (event) => {

    if ((event).key === 'Enter') {

        submit.className = 'inputColor'

        fullVerify(nums.value, target.value)

    }

})

const fullVerify = (nums, target) => {

    errCheck = []

    cutNums = []

    nCheck = false

    tArr = []

    tCheck = false

    console.log('Numbers input = "' + nums + '"')

    console.log('Target input = "' + target + '"')

    numsVerify(nums)

    targetVerify(target)

    if (nCheck && tCheck) {

        console.log('Rules met')

        console.log(cutNums)

        console.log(tArr)

        twoSum(cutNums, tArr)

    } else {

        console.log('Rules not met')

        console.log(errCheck.join(' '))

        return output.innerText = errCheck.join(' ')

    }



}

//Number Input Verification
const numsVerify = (nVer) => {

    console.log('Number Verification for: ' + '"' + nVer + '"')


    console.log('[' + nVer + ']: Before Comma Check')

    console.log(nVer.split(','))

    //Comma Check
    if (nVer.split('').includes(',')) {

        cutNums = nVer.split(',').map(i => {

            return i

        })

        cutNums = cutNums.join(' ').split(' ')

        // for (let i = 0; i < cutNums.length; i++) {

        //     if (cutNums[i] === ',') {

        //         cutNums.splice(cutNums.indexOf(cutNums[i]), 1)

        //         i--

        //     }

        // }

    } else {

        cutNums = nVer.split(' ')

    }

    console.log('[' + cutNums + ']: After Comma Check/Before Space Check')

    //Space Check
    if (cutNums.includes(' ')) {

        for (let i = 0; i < cutNums.length; i++) {

            if (cutNums[i] == ' ') {

                cutNums.splice(cutNums.indexOf(cutNums[i]), 1)

                i--

            }

        }

    }

    console.log('[' + cutNums + ']: After Space Check/Before Length & NaN Check')

    //Length & NaN Check
    if (cutNums.length > 1) {

        if (cutNums.includes(NaN)) {

            errCheck.push('Numbers included a non-number.')

        } else {

            cutNums = cutNums.map(i => {

                return Number(i)

            })

            console.log('[' + cutNums + ']Number Verification: Pass')

            nCheck = true

            return cutNums

        }

    } else {

        errCheck.push('Map Unsuccessfull.')

        errCheck.push('Enter multiple numbers.')

    }

}

//Target Input Verification
const targetVerify = (tVer) => {

    console.log('Target Verification for: "' + tVer + '"')

    tArr = tVer.split('')

    console.log('[' + tArr + ']: Before Space Check')

    //Space Check
    if (tArr.includes(' ')) {

        console.log('Target includes spaces')

        for (let i = 0; i < tArr.length; i++) {

            console.log('[' + tArr[i] + ']' + 'Indexed Value')

            if (tArr[i] == ' ') {

                tArr.splice(tArr.indexOf(tArr[i]), 1)

                i--

            } else {

                tArr[i] = Number(tArr[i])

            }

        }


    } else {

        tArr = tArr.map(i => {

            return i.toString()

        })

        tArr = Number(tArr.join(''))

    }

    console.log('[' + tArr + ']' + ': After Space Check/Before Length & NaN Check')

    //Length and NaN Check
    if (isNaN(Number(tArr))) {

        errCheck.push('Enter a Single Number into Target.')

    } else if (tArr.length > 1) {

        errCheck.push('Please enter a single number in Target.')

    } else if (Number(tArr) === 0) {

        errCheck.push('Enter a number Greater Than Zero.')

    } else {

        console.log('[' + tArr + ']' + 'Target Verification: Pass')

        tCheck = true

    }

}


const twoSum = (nFinal, tFinal) => {

    const ans = []

    for (let i = 0; i < nFinal.length; i++) {

        for (let j = 0; j < nFinal.length; j++) {

            if ((nFinal[i] + nFinal[j] == tFinal)) {

                if (i !== j) {

                    if (!ans.includes(nFinal[j])) {

                        ans.push(nFinal[i], nFinal[j])

                    }

                }

            }

        }

    }

    if (ans.length === 0) {

        errCheck.push('None of the numbers add up to the target.')

        console.log(errCheck.join(' '))

        return output.innerText = errCheck.join(' ')

    }

    else {

        return output.innerText = ans

    }

};



