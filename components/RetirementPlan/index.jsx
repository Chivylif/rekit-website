import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { retirementPlanSchema } from "../../validations";
import FormFeedback from "../FormFeedback";
import {
  desiredOutput,
  futureValue,
  presentValue,
  removeAndConvert,
  removeAndConvertSuffix,
  presentValueTwo,
} from "../../helpers";
import NumberFormat from "react-number-format";
import { parse } from "postcss";

const RetirementPlan = () => {
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
      age: "",
      retireAge: "",
      initialWithdrawalAmount: "",
      additionalWithdrawal: "",
      expectedReturn: "",
      targetAmount: "",
      openingInvestmentAmount: "",
      additionalInvestmentAmount: "",
      frequencyOfAdditionalInvestment: "",
      frequencyOfWithdrawals: "",
    },
    resolver: yupResolver(retirementPlanSchema),
  });

  const onSubmit = (data) => {

    setResult(
      desiredOutput(
        futureValue({
          timeOfInitialWithdrawal: parseInt(data.retireAge) - parseInt(data.age),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          frequencyOfAdditionalInvestment: 1 || parseInt(data.frequencyOfAdditionalInvestment),
        }),

        presentValueTwo({
          frequencyOfWithdrawal: 1 || parseInt(data.frequencyOfWithdrawals),
          initialWithdrawalAmount: removeAndConvert(
            data.initialWithdrawalAmount
          ),
          additionalWithdrawal: removeAndConvert(data.additionalWithdrawal)  * (data.frequencyOfWithdrawals == "m" ? 12 : 1),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          targetAmount: removeAndConvert(data.targetAmount),
          withdrawalPeriod: 85 - parseInt(data.retireAge),
        })
        ,currency
      )
    );
    reset();
  };
  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Retirement Plan:</h4>
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
        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="age" className="font-semibold">
              How old are you ?
            </label>
          </div>
          <input
            {...register("age")}
            type="number"
            name="age"
            placeholder="39"
            className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
          />
          <FormFeedback message={errors?.age?.message} />
        </div>

        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="retireAge" className="font-semibold">
              At what age do you plan to retire ?
            </label>
          </div>
          <input
            {...register("retireAge")}
            type="number"
            name="retireAge"
            placeholder="70"
            className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
          />
          <FormFeedback message={errors?.retireAge?.message} />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="initialWithdrawalAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label
                    htmlFor="initialWithdrawalAmount"
                    className="font-semibold"
                  >
                    How much would you like to receive at your retirement date ?
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
                  message={errors?.initialWithdrawalAmount?.message}
                />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="additionalWithdrawal"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label
                    htmlFor="additionalWithdrawal"
                    className="font-semibold"
                  >
                    How much would you like to receive subsequently ?
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
                  message={errors?.additionalWithdrawal?.message}
                />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="" className="font-semibold">
              At what frequency would you like to receive this amount ?
            </label>
          </div>
          <select
            className="w-full h-10 capitalize outline-none border-none"
            {...register("frequencyOfWithdrawals")}
            name="frequencyOfWithdrawals"
            defaultValue="Select"
          >
            <option value="" selected="selected" hidden>Select</option>
            {[
              { id: "m", value: "monthly" },
              { id: 1, value: "yearly" },
            ].map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>
          <FormFeedback message={errors?.frequencyOfWithdrawals?.message} />
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
                    className="font-semibold"
                  >
                    What is your Expected Rate of Return p.a ? %
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
                <FormFeedback
                  message={errors?.expectedReturn?.message}
                />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <Controller
            control={control}
            name="targetAmount"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <div className="mb-1">
                  <label
                    htmlFor="targetAmount"
                    className="font-semibold"
                  >
                    How much would you like to leave as an inheritance amount ?
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
                  message={errors?.targetAmount?.message}
                />
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
              How frequently would you like to contribute ?
            </label>
          </div>
          <select
            className="w-full h-10 capitalize outline-none border-none"
            {...register("frequencyOfAdditionalInvestment")}
            name="frequencyOfAdditionalInvestment"
            defaultValue="Select"
          >
            <option value="" selected="selected" hidden>Select</option>
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

export default RetirementPlan;
