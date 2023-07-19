import * as yup from "yup";

// export const carPlanValidation = (val) => {

// }

export const carPlanSchema = yup
  .object({
    timeOfInitialWithdrawal: yup.string().required("Required"),
    targetAmount: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    frequencyOfAdditionalInvestment: yup.string().required("Required"),
  })
  .required();

const schema = yup
  .object({
    firstName: yup.string().required("Required"),
    age: yup.number().positive().integer().required("Required"),
  })
  .required();

export const homePlanSchema = yup
  .object({
    timeOfInitialWithdrawal: yup.string().required("Required"),
    targetAmount: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    frequencyOfAdditionalInvestment: yup.string().required("Required"),
  })
  .required();

export const weddingPlanSchema = yup
  .object({
    timeOfInitialWithdrawal: yup.string().required("Required"),
    targetAmount: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    frequencyOfAdditionalInvestment: yup.string().required("Required"),
  })
  .required();

export const retirementPlanSchema = yup
  .object({
    age: yup.string().required("Required"),
    retireAge: yup.string().required("Required"),
    initialWithdrawalAmount: yup.string().required("Required"),
    additionalWithdrawal: yup.string().required("Required"),
    frequencyOfWithdrawals: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    targetAmount: yup.string().required("Required"),
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    frequencyOfAdditionalInvestment: yup.string().required("Required"),
  })
  .required();

export const educationPlanSchema = yup
  .object({
    timeOfInitialWithdrawal: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    frequencyOfAdditionalInvestment: yup.string().required("Required"),
  })
  .required();

export const savingsPlanSchema = yup
  .object({
    openingInvestmentAmount: yup.string().required("Required"),
    additionalInvestmentAmount: yup.string().required("Required"),
    timeOfInitialWithdrawal: yup.string().required("Required"),
    expectedReturn: yup.string().required("Required"),
    initialWithdrawalAmount: yup.string().required("Required"),
  })
  .required();
