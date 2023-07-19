import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { carPlanSchema } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import FormFeedback from "../FormFeedback";
import { desiredOutput, futureValue, presentValue,   removeAndConvert,
  removeAndConvertSuffix } from "../../helpers";
import NumberFormat from "react-number-format";

const CarPlan = () => {
  const [result, setResult] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
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
    resolver: yupResolver(carPlanSchema),
  });
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
          expectedReturn: data.expectedReturn / 100,
          openingInvestmentAmount: removeAndConvert(data.openingInvestmentAmount),
          additionalInvestmentAmount: removeAndConvert(data.additionalInvestmentAmount) * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
          withdrawalPeriod: 0,
          frequencyOfAdditionalInvestment: 1 || data.frequencyOfAdditionalInvestment,
        }),
        currency
      )
    );
    reset();
  };

  // console.log("errors", errors);
  const [currency, setCurrency] = useState("NGN");
  const [range, setRange] = useState(100);

  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Car Purchase Plan:</h4>
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
              When would you like to purchase your vehicle?
            </label>
          </div>
          <select
            className="w-full h-10 outline-none border-none rounded-md"
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
            name="targetAmount"
            control={control}
            render={({ field: { onBlur, value, onChange } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="targetAmount" className="font-semibold">
                    How much do you think your vehicle would cost?
                  </label>
                </div>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  prefix={currency === "NGN" ? "₦" : "$"}
                  onChange={onChange}
                  onBlur={onBlur}
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
            name="expectedReturn"
            control={control}
            render={({ field: { onBlur, value, onChange } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="expectedReturn" className="font-semibold">
                  What is your Expected Rate of Return p.a %
                  </label>
                </div>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  suffix="%"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  maxLength="3"
                  placeholder="99%"
                />
                <FormFeedback message={errors?.expectedReturn?.message} />
              </>
            )}
          />
        </div>

        <div className="my-2">
          <Controller
            name="openingInvestmentAmount"
            control={control}
            render={({ field: { onBlur, value, onChange } }) => (
              <>
                <div className="mb-1">
                  <label htmlFor="openingInvestmentAmount" className="font-semibold">
                    How much can you contribute today
                  </label>
                </div>
                <NumberFormat
                  className="bg-white text-[#504F4E] placeholder-[#504F4E] font-inter outline-0 border-0 ring-0 w-full p-3"
                  thousandSeparator={true}
                  prefix={currency === "NGN" ? "₦" : "$"}
                  onChange={onChange}
                  onBlur={onBlur}
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
            name="additionalInvestmentAmount"
            control={control}
            render={({ field: { onBlur, value, onChange } }) => (
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
                  onBlur={onBlur}
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
            <label
              htmlFor="frequencyOfAdditionalInvestment"
              className="font-semibold"
            >
              How frequently would you like to contribute ?
            </label>
          </div>
          <select
            className="w-full h-10 capitalize outline-none border-none rounded-md"
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

export default CarPlan;
