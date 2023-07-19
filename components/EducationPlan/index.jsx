import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  desiredOutput,
  futureValue,
  presentValue,
  presentValueTwo,
  removeAndConvert,
  removeAndConvertSuffix,
} from "../../helpers";
import { educationPlanSchema } from "../../validations";
import FormFeedback from "../FormFeedback";
import NumberFormat from "react-number-format";
import { yupResolver } from "@hookform/resolvers/yup";

const EducationPlan = () => {
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState("NGN");

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    getValues,
    setValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      timeOfInitialWithdrawal: "",
      totalWithdrawalAmount: "",
      expectedReturn: "",
      openingInvestmentAmount: "",
      additionalInvestmentAmount: "",
      frequencyOfAdditionalInvestment: "",
      withdrawalPeriod: "",
      condition: "",
      percentage: "",
      frequencyOfWithdrawal: 1,
    },
    resolver: yupResolver(educationPlanSchema),
  });

  const condition = watch("condition");
  const onSubmit = (data) => {
    const res = removeAndConvert(data.additionalInvestmentAmount)
    
    setResult(
      desiredOutput(
        futureValue({
          // timeOfAdditionalInvestment = 0,
          openingInvestmentAmount: removeAndConvert(
            data.openingInvestmentAmount
          ),
          expectedReturn: removeAndConvertSuffix(data.expectedReturn) / 100,
          frequencyOfAdditionalInvestment: 1 || parseInt(
            data.frequencyOfAdditionalInvestment
          ),
          timeOfInitialWithdrawal: parseInt(data.timeOfInitialWithdrawal),
          additionalInvestmentAmount: removeAndConvert(
            data.additionalInvestmentAmount
          )  * (data.frequencyOfAdditionalInvestment == "m" ? 12 : 1),
        }),
        presentValueTwo({
          frequencyOfWithdrawal: 1,
          expectedReturn: parseInt(data.expectedReturn) / 100,
          withdrawalPeriod: parseInt(data.withdrawalPeriod),
          targetAmount: data.condition === "beginning" ? 0 : 0,
          initialWithdrawalAmount:
            data.condition === "beginning"
              ? removeAndConvert(data.totalWithdrawalAmount)
              : (removeAndConvertSuffix(data.percentage) / 100) *
                removeAndConvert(data.totalWithdrawalAmount),
          additionalWithdrawal:
            data.condition === "beginning"
              ? 0
              : (removeAndConvert(data.totalWithdrawalAmount) -
                  (removeAndConvertSuffix(data.percentage) / 100) *
                    removeAndConvert(data.totalWithdrawalAmount)) /
                parseInt(data.withdrawalPeriod),
        }),
        currency
      )
    );
    reset()
  };

  // console.log("watch", watch());
  const begin = watch("withdrawalPeriod");
  console.log("begin", begin);
  return (
    <div className="pr-10 bg-gray-200 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold font-raleway">Education Plan:</h4>
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
            <label htmlFor="timeOfInitialWithdrawal" className="font-semibold">
              When would you be going to your prefered academic institution ?
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

        <Controller
          control={control}
          name="totalWithdrawalAmount"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <div className="mb-1">
                <label
                  htmlFor="totalWithdrawalAmount"
                  className="font-semibold"
                >
                  How much do you think it would cost ?
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
              <FormFeedback message={errors?.totalWithdrawalAmount?.message} />
            </>
          )}
        />

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
        <div className="my-5">
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
            className="w-full h-10 outline-none border-none"
            {...register("frequencyOfAdditionalInvestment")}
            name="frequencyOfAdditionalInvestment"
            defaultValue="Select"
          >
            <option value="" selected hidden>
              Select
            </option>
            {[
              { id: "m", text: "Monthly" },
              { id: 1, text: "Yearly" },
            ].map((item, idx) => (
              <option key={item.id} value={item.id}>
                {item.text}
              </option>
            ))}
          </select>
          <FormFeedback
            message={errors?.frequencyOfAdditionalInvestment?.message}
          />
        </div>

        <div className="my-5">
          <div className="mb-2">
            <label htmlFor="" className="font-semibold">
              How long would your program last ?
            </label>
          </div>
          <select
            className="w-full h-10 outline-none border-none"
            {...register("withdrawalPeriod")}
            name="withdrawalPeriod"
            defaultValue="Select"
          >
            <option value="" selected="selected" hidden>
              Select
            </option>
            {[
              { id: 0, value: "1 year" },
              { id: 1, value: "2 year's" },
              { id: 2, value: "3 year's" },
              { id: 3, value: "4 year's" },
              { id: 4, value: "5 year's" },
              { id: 5, value: "6 year's" },
              { id: 6, value: "7 year's" },
              { id: 7, value: "8 year's" },
              { id: 8, value: "9 year's" },
              { id: 9, value: "10 year's" },
            ].map((item, idx) => (
              <option key={idx} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>
          <FormFeedback message={errors?.withdrawalPeriod?.message} />
        </div>

        {/* conditional questions below */}

        <div className="my-2">
          <div className="mb-1">
            <label htmlFor="condition" className="font-semibold">
              Would you like to receive all your plan benefit at the beginning
              of your academic year or over the course of your study ?
            </label>
          </div>

          <div className="flex justify-start gap-y-2 capitalize flex-col">
            <div>
              <input
                type="radio"
                name="condition"
                {...register("condition")}
                value="beginning"
              />{" "}
              <label htmlFor="condition">beginning</label>
            </div>
            <div>
              <input
                type="radio"
                name="condition"
                {...register("condition")}
                value="over"
              />{" "}
              <label htmlFor="condition">over the course of study</label>
            </div>
          </div>
        </div>

        {condition === "over" && (
          <div className="my-2">
            <Controller
              control={control}
              name="percentage"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <>
                  <div className="mb-1">
                    <label
                      htmlFor="percentage"
                      className="font-semibold capitalize"
                    >
                      what percentage of the plan benefit would you like to
                      receive at the beginning of the period % ?
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
                  <FormFeedback message={errors?.percentage?.message} />
                </>
              )}
            />
          </div>
        )}

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

export default EducationPlan;
