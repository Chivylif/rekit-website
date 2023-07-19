import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormFeedback from "../FormFeedback";
import { homePlanSchema } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import NumberFormat from "react-number-format";
import {
  desiredOutput,
  futureValue,
  presentValue,
  removeAndConvert,
  removeAndConvertSuffix,
} from "../../helpers";

const HomePlan = () => {
  const [currency, setCurrency] = useState("NGN");
  const [result, setResult] = useState(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = useForm({
    defaultValues: {
      timeOfInitialWithdrawal: "",
      targetAmount: "",
      openingInvestmentAmount: "",
      additionalInvestmentAmount: "",
      frequencyOfAdditionalInvestment: "",
      expectedReturn: ""
    },
    resolver: yupResolver(homePlanSchema),
  });

  const submit = (data) => {
    setResult(
      desiredOutput(
        futureValue({
          timeOfInitialWithdrawal: data.timeOfInitialWithdrawal,
          targetAmount: removeAndConvert(data.targetAmount),
          expectedReturn:
            removeAndConvertSuffix(data.expectedReturn) / 100,
          openingInvestmentAmount: removeAndConvert(
            data.openingInvestmentAmount
          ),
          additionalInvestmentAmount: removeAndConvert(
            data.additionalInvestmentAmount 
          ) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1) ,
          frequencyOfAdditionalInvestment: 1 || parseInt(data.frequencyOfAdditionalInvestment),
        }),
        presentValue({
          timeOfInitialWithdrawal: data.timeOfInitialWithdrawal,
          targetAmount: removeAndConvert(data.targetAmount),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          openingInvestmentAmount: removeAndConvert(
            data.openingInvestmentAmount
          ),
          additionalInvestmentAmount: removeAndConvert(
            data.additionalInvestmentAmount
          ) * data.frequencyOfAdditionalInvestment == "m" ? 12 : 1 ,
          frequencyOfAdditionalInvestment: 1 || parseInt(data.frequencyOfAdditionalInvestment),
          withdrawalPeriod: 0,
        }),
        currency
      )
    );
    reset()
  };

  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Home Purchase Plan:</h4>
        <div>
          <select
            className="w-20 rounded-md outline-none py-2 text-center appearance-none"
            onChange={(e) => setCurrency(e.target.value)}
            value={currency}
          >
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="my-5">
          <div className="mb-2">
            <label htmlFor="timeOfInitialWithdrawal" className="font-semibold">
              When would you like to purchase your home ?
            </label>
          </div>
          <select
            className="w-full h-10 outline-none border-none"
            {...register("timeOfInitialWithdrawal")}
            name="timeOfInitialWithdrawal"
            defaultValue="Select"
          >
            <option value="" selected="selected" hidden>
              Select
            </option>
            {[
              { id: 1, value: "1 year" },
              { id: 2, value: "2 year" },
              { id: 3, value: "3 year" },
              { id: 4, value: "4 year" },
              { id: 5, value: "5 year" },
              { id: 6, value: "6 year" },
              { id: 7, value: "7 year" },
              { id: 8, value: "8 year" },
              { id: 9, value: "9 year" },
              { id: 10, value: "10 year" },
              { id: 11, value: "11 year" },
              { id: 12, value: "12 year" },
              { id: 13, value: "13 year" },
              { id: 14, value: "14 year" },
              { id: 15, value: "15 year" },
            ].map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>
          <FormFeedback message={errors?.timeOfInitialWithdrawal?.message} />
        </div>

        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="targetAmount" className="font-semibold">
              How much is the home you would like to purchase ?
            </label>
          </div>
          <Controller
            control={control}
            name="targetAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  prefix={currency === "NGN" ? "₦" : "$"}
                  onChange={onChange}
                  value={value}
                  placeholder={`${currency === "NGN" ? "₦" : "$"}10,000`}
                />
                <FormFeedback message={errors?.targetAmount?.message} />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="openingInvestmentAmount" className="font-semibold">
              How much can you contribute today ?
            </label>
          </div>
          <Controller
            control={control}
            name="openingInvestmentAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <NumberFormat
                className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                thousandSeparator={true}
                prefix={currency === "NGN" ? "₦" : "$"}
                onChange={onChange}
                value={value}
                placeholder={`${currency === "NGN" ? "₦" : "$"}10,000`}
              />
            )}
          />
          <FormFeedback message={errors?.openingInvestmentAmount?.message} />
        </div>

        <div className="my-2">
          <div className="mb-1">
            <label
              htmlFor="additionalInvestmentAmount"
              className="font-semibold"
            >
              How much would you be able to contribute subsequently ?
            </label>
          </div>
          <Controller
            control={control}
            name="additionalInvestmentAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <NumberFormat
                className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                thousandSeparator={true}
                prefix={currency === "NGN" ? "₦" : "$"}
                onChange={onChange}
                value={value}
                placeholder={`${currency === "NGN" ? "₦" : "$"}10,000`}
              />
            )}
          />
          <FormFeedback message={errors?.additionalInvestmentAmount?.message} />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="expectedReturn"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label
                    htmlFor="expectedReturn"
                    className="font-semibold capitalize"
                  >
                    What is your Expected Rate of Return p.a %
                  </label>
                </div>

                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  suffix="%"
                  onChange={onChange}
                  value={value}
                  placeholder="99%"
                  maxLength="3"
                />
                <FormFeedback message={errors?.expectedReturn?.message} />
              </>
            )}
          />
        </div>

        <div className="my-5">
          <div className="mb-2">
            <label
              htmlFor="frequencyOfAdditionalInvestment"
              className="font-semibold"
            >
              How frequently would you like to contribute ?
            </label>
          </div>
          <select
            className="w-full h-10 capitalize outline-none border-none"
            {...register("frequencyOfAdditionalInvestment")}
            name="frequencyOfAdditionalInvestment"
            defaultValue="Select"
          >
            <option value="" selected="selected" hidden>
              Select
            </option>
            {[
              { id: 'm', value: "monthly" },
              { id: 1, value: "yearly" },
            ].map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>
          <FormFeedback
            message={errors?.frequencyOfAdditionalInvestment?.message}
          />
        </div>

        <button
          className="my-3 text-white px-8 py-4 font-raleway font-semibold bg-[#EF962B]"
          type="submit"
        >
          Total value of your wealth would be
        </button>
      </form>
      {result && (
        <p className="text-[#16130F] text-sm leading-[1.7rem] font-inter font-semibold">
          {result}
        </p>
      )}
    </div>
  );
};

export default HomePlan;
