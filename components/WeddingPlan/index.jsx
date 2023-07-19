import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { desiredOutput, futureValue, presentValue, removeAndConvertSuffix, removeAndConvert } from "../../helpers";
import { weddingPlanSchema } from "../../validations";
import FormFeedback from "../FormFeedback";
import NumberFormat from "react-number-format";

const WeddingPlan = () => {
  const [result, setResult] = useState(null);
  const {
    values,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      timeOfInitialWithdrawal: "",
      targetAmount: "",
      expectedReturn: "",
      openingInvestmentAmount: "",
      additionalInvestmentAmount: "",
      frequencyOfAdditionalInvestment: "",
    },
    resolver: yupResolver(weddingPlanSchema),
  });
  const [currency, setCurrency] = useState("NGN");
  const onSubmit = (data) => {

    setResult(
      desiredOutput(
        futureValue({
          timeOfInitialWithdrawal: data.timeOfInitialWithdrawal,
          targetAmount: removeAndConvert(data.targetAmount),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          frequencyOfAdditionalInvestment: 1 || data.frequencyOfAdditionalInvestment,
        }),
        presentValue({
          timeOfInitialWithdrawal: data.timeOfInitialWithdrawal,
          targetAmount: removeAndConvert(data.targetAmount),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          frequencyOfAdditionalInvestment: 1 || data.frequencyOfAdditionalInvestment,
          withdrawalPeriod: 0,
        }),
        currency
      )
    );
    console.log("data", data);
    reset()
  };

  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Wedding Plan:</h4>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <div className="mb-2">
            <label htmlFor="" className="font-semibold">
              When would you like to get married ?
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
              { id: 16, value: "16 year" },
              { id: 17, value: "17 year" },
              { id: 18, value: "18 year" },
              { id: 19, value: "19 year" },
              { id: 20, value: "20 year" },
              { id: 21, value: "21 year" },
              { id: 22, value: "23 year" },
              { id: 23, value: "23 year" },
              { id: 24, value: "24 year" },
              { id: 25, value: "25 year" },
              { id: 26, value: "26 year" },
              { id: 27, value: "27 year" },
              { id: 28, value: "28 year" },
              { id: 29, value: "29 year" },
              { id: 30, value: "30 year" },
            ].map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>
          <FormFeedback message={errors?.timeOfInitialWithdrawal?.message} />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="targetAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="targetAmount" className="font-semibold">
                    How much do you think it would cost to plan your wedding ?
                  </label>
                </div>
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

        <div className="my-2">
          <Controller
            control={control}
            name="openingInvestmentAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="openingInvestmentAmount" className="font-semibold">
                  How much can you contribute today ?
                  </label>
                </div>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  prefix={currency === "NGN" ? "₦" : "$"}
                  onChange={onChange}
                  value={value}
                  placeholder={`${currency === "NGN" ? "₦" : "$"}10,000`}
                />
                <FormFeedback message={errors?.openingInvestmentAmount?.message} />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="additionalInvestmentAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="additionalInvestmentAmount" className="font-semibold">
                  How much would you be able to contribute subsequently ?
                  </label>
                </div>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  prefix={currency === "NGN" ? "₦" : "$"}
                  onChange={onChange}
                  value={value}
                  placeholder={`${currency === "NGN" ? "₦" : "$"}10,000`}
                />
                <FormFeedback message={errors?.additionalInvestmentAmount?.message} />
              </>
            )}
          />
        </div>

        <div className="my-5">
          <div className="mb-2">
            <label htmlFor="" className="font-semibold">
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
              { id: "m", value: "monthly" },
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

export default WeddingPlan;
