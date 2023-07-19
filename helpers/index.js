import commaNumber from 'comma-number'

export const removeAndConvert = (data) => {
  const commaData = data?.replace(/,/g,"")
  console.log('commaData', commaData);
  const newData = commaData?.substring(1)
  console.log('newData', newData);
  const newDataType = parseInt(newData)
  console.log('newDataType', newDataType);
  return newDataType
}
export const removeAndConvertSuffix = (data) => {
  console.log('before suffixer', data);
  const newData = data?.substring(0, data.length -1)
  console.log('suffixer', newData, typeof newData)
  const newDataType = parseInt(newData)
  console.log('suffixer parsed', newDataType, typeof newDataType)

  return newDataType
}
export const desiredOutput = (fv, pv, curr) => {
   const result = fv - pv;

   console.log('result', result)

  if (result > 0){
    return `Well done you are set to create your plan you have a surplus of ${curr === 'NGN' ? '₦' : '$'}${commaNumber(result?.toFixed(2) < 0 ? result?.toFixed(2) * -1 :  result?.toFixed(2))}. Click get started to achieve your goal today.`
  }else {
    return `Oh sorry!!! you are almost there unfortunately you would need an additional ${curr === 'NGN' ? '₦' : '$'}${commaNumber(result?.toFixed(2) < 0 ? result?.toFixed(2) * -1 :  result?.toFixed(2))} at the end of the period to meet up your obligations, Kindly increase your initial contribution and your subsequent contribution `
  }
};



export const getTheAmountOfTimes = (args) => {
  const { withdrawalPeriod, additionalWithdrawal, expectedReturn, frequency } = args
  let res = 0
  if(withdrawalPeriod < 3) {
    //    dont do this
    res = 0
  }else {
    // if withdrawalPeriod is 3 run once if 4 run twice
    for(var i=3; i <= withdrawalPeriod; i++){
      res = (additionalWithdrawal  * 1 / Math.pow((1 + expectedReturn/frequency), (1 * frequency)) )
    }
  }
  
  return res
}




export const presentValue = val => {
  const {
    initialWithdrawalAmount = 0,
    additionalWithdrawal = 0,
    expectedReturn = 0,
    withdrawalPeriod = 0,
    targetAmount = 0,
    frequencyOfWithdrawal=0
  } = val;

  const frequency = frequencyOfWithdrawal

  const times = getTheAmountOfTimes(withdrawalPeriod)

  const phaseThree = (additionalWithdrawal + targetAmount  * 1 / Math.pow((1+expectedReturn/ frequency), (withdrawalPeriod * frequency)) )

  const realFormula = initialWithdrawalAmount + times + phaseThree

  return realFormula
}


export const getTheAmountOfTimesTwo = (args) => {
  const { withdrawalPeriod, additionalWithdrawal, expectedReturn, frequency } = args
  let res = 0

  console.log('withdrawalPeriod >>> tk', withdrawalPeriod)

    for(let i=1; i <= withdrawalPeriod ; i++){
      console.log('i', i);
      // console.log('plusser', ( additionalWithdrawal * (1 / Math.pow((1 + (expectedReturn/frequency)), ( i * frequency))) ));
      res += ( additionalWithdrawal * (1 / Math.pow((1 + (expectedReturn/frequency)), ( i * frequency))) )
      // console.log('repeating res', res, 'what is i', i);
    }

    // for(let i=1; i <= 3; i++){
    //   console.log('i', i);
    //   res += (additionalWithdrawal  * (1 / Math.pow((1 + (expectedReturn/frequency)), ( i * frequency))) )
    // }

    // console.log('repeater',  res)
  return res
}


// -14519834.71 period be 2
// -21281667.918858 period be 3 
// (Additional withdrawal * 1 / Math.pow(1+ (expectedReturn / frequency), withdrawalPeriod* frequency) (1+expected return/ frequency) ^(withdrawal period* frequency) 
// solution 

export const presentValueTwo = val => {
  const {
    initialWithdrawalAmount = 0,
    additionalWithdrawal = 0,
    expectedReturn = 0,
    withdrawalPeriod = 0,
    targetAmount = 0,
    frequencyOfWithdrawal=0
  } = val;

  console.log('pv2 withdrawalPeriod', withdrawalPeriod)
  // console.log('initial', initialWithdrawalAmount);
  const frequency = frequencyOfWithdrawal

  const beginner = initialWithdrawalAmount

  // const beginnerSample = initialWithdrawalAmount + (additionalWithdrawal * 1 / Math.pow((1 + (expectedReturn/frequency)), (1 * frequency)))
  // console.log('beginner', beginner)

  const times = getTheAmountOfTimesTwo({withdrawalPeriod, additionalWithdrawal, expectedReturn, frequency})
  
  console.log('times times times', times);

  const phaseThree = ( targetAmount  * 1 / Math.pow((1+expectedReturn/ frequency), (withdrawalPeriod * frequency)) )

  // console.log('phaseThree', phaseThree);

  const realFormula = beginner + times + phaseThree

  return realFormula
}

const repeat = (args) => {

  let result = 0
    if(args.timeOfInitialWithdrawal === 0) {
      return result
    }else {
      for(let i = 0; i < args.timeOfInitialWithdrawal * args.frequency; i++){
        console.log('once times');
        result += args.additionalInvestmentAmount *
          Math.pow(
            1 + args.expectedReturn / args.frequency,
            ( i - args.timeOfAdditionalInvestment * args.frequency)
          )
        }
        // console.log('abc>> result', result);
        // result = abc
    }
  // console.log('result repeat', result)
    return result
}
export const futureValue = (val) => {
  const {
    openingInvestmentAmount = 0,
    expectedReturn = 0,
    frequencyOfAdditionalInvestment = 0,
    timeToInitialWithdrawal = 0,
    timeOfInitialWithdrawal = 0,
    additionalInvestmentAmount = 0,
    timeOfAdditionalInvestment = 0,
  } = val;

  console.log('frequencyOfAdditionalInvestment taofik', frequencyOfAdditionalInvestment);


  // console.log('expectedReturn', expectedReturn)

  const frequency = frequencyOfAdditionalInvestment;
  const fv =
    openingInvestmentAmount *
      Math.pow(
        1 + expectedReturn / frequency,
        timeOfInitialWithdrawal * frequency
      ) +
          repeat({additionalInvestmentAmount, expectedReturn, frequency, timeOfInitialWithdrawal, timeOfAdditionalInvestment})
  return fv;
};


// (Opening Investment amount * (1+Expected Return/frequency)^Time to initial withdrawal*frequency ) + (Additional Investment amount *(1+expected return/ frequency)^((Time of initial withdrawal – Time of additional investment)(Frequency))

// opening * 1 + 10/100 / frequency