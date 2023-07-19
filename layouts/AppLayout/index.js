import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const AppLayout = (props) => {
    const { children } = props

  return (
      <div className="relative">
        <Header/>
        <div className="top">
            <>{children}</>
            <Footer/>
        </div>
      </div>
  )
}

export default AppLayout


// car purchase plan
// questions
// When would you like to purchase your vehicle? = timeOfInitialWithdrawal
// How much do you think your vehicle would cost? = targetAmount
// What is your Expected Rate of Return p.a = expectedReturn
// How much can you contribute today ? = openingInvestmentAmount
// How much would you be able to contribute subsequently ? = additionalInvestmentAmount
// How frequently would you like to contribute ? = frequencyOfAdditionalInvestment

// inputs
// timeOfInitialWithdrawal
// targetAmount
// expectedReturn
// openingInvestmentAmount
// additionalInvestmentAmount
// frequencyOfAdditionalInvestment