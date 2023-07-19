import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import {
  desiredOutput,
  futureValue,
  presentValue,
  removeAndConvert,
  removeAndConvertSuffix,
} from "../../helpers";
import { savingsPlanSchema } from "../../validations";
import FormFeedback from "../FormFeedback";

const SavingsPlan = () => {
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState("NGN");

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      initialWithdrawalAmount: "",
      expectedReturn: "",
      timeOfInitialWithdrawal: "",
      additionalInvestmentAmount: "",
      openingInvestmentAmount: "",
    },
    resolver: yupResolver(savingsPlanSchema),
  });
  const onSubmit = (data) => {
    setResult(
      desiredOutput(
        futureValue({
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          timeOfInitialWithdrawal: data.timeOfInitialWithdrawal,
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          frequencyOfAdditionalInvestment: 1 || parseInt(data.frequencyOfAdditionalInvestment),
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
        }),
        presentValue({
          initialWithdrawalAmount: removeAndConvert(data.initialWithdrawalAmount),
          targetAmount: 0,
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          timeOfInitialWithdrawal: parseInt(data.timeOfInitialWithdrawal),
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
          withdrawalPeriod: 0,
          frequencyOfAdditionalInvestment: 1 || data.frequencyOfAdditionalInvestment,
        }),
        currency
      )
    );
    reset()
  };
  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Savings Plan:</h4>
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
        {/* What Is your Saving goal?  */}
        <div className="my-2">
          <Controller
            control={control}
            name="initialWithdrawalAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="initialWithdrawalAmount" className="font-semibold">
                    What Is your Saving goal?
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
                <FormFeedback message={errors?.initialWithdrawalAmount?.message} />
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
                  <label
                    htmlFor="openingInvestmentAmount"
                    className="font-semibold"
                  >
                    How much can you save today ?
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
                <FormFeedback
                  message={errors?.openingInvestmentAmount?.message}
                />
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
                  <label
                    htmlFor="additionalInvestmentAmount"
                    className="font-semibold"
                  >
                    How much would you like to save subsequently ?
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
                <FormFeedback
                  message={errors?.additionalInvestmentAmount?.message}
                />
              </>
            )}
          />
        </div>

        <div className="my-5">
          <div className="mb-2">
            <label htmlFor="" className="font-semibold">
              When would you like to redeem your savings ?
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
              { id: 2, value: "2 year's" },
              { id: 3, value: "3 year's" },
              { id: 4, value: "4 year's" },
              { id: 5, value: "5 year's" },
              { id: 6, value: "6 year's" },
              { id: 7, value: "7 year's" },
              { id: 8, value: "8 year's" },
              { id: 9, value: "9 year's" },
              { id: 10, value: "10 year's" },
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
            name="expectedReturn"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="expectedReturn" className="font-semibold">
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
              How frequently would you like to save ?
            </label>
          </div>
          <select
            className="w-full h-10 capitalize outline-none border-none rounded-md"
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

export default SavingsPlan;
