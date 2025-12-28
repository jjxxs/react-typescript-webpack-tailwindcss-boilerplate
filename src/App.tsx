import React from "react";
import { useDispatch } from "react-redux";
import { decrement, getCount, increment } from "./store/model/counter";
import { StoreDispatch, useTypedSelector } from "./store/store";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch<StoreDispatch>();
  const count = useTypedSelector(getCount);

  return (
    <div
      className={"h-screen antialiased font-sans overflow-hidden bg-gray-50"}
    >
      <div className={"absolute top-4 right-4 flex space-x-2"}>
        <LanguageButton
          label="EN"
          active={i18n.language === "en"}
          onClick={() => i18n.changeLanguage("en")}
        />
        <LanguageButton
          label="DE"
          active={i18n.language === "ger"}
          onClick={() => i18n.changeLanguage("ger")}
        />
      </div>

      <div className={"flex flex-col items-center mt-16"}>
        <label className={"text-gray-800 font-bold text-lg"}>
          {t("mainView.currentCount")}:
        </label>

        <h1 className={"text-gray-800 font-bold text-8xl"}>{count}</h1>

        <div className={"flex space-x-2 mt-8"}>
          <Button
            text={t("mainView.increment")}
            onClick={() => dispatch(increment())}
          />
          <Button
            text={t("mainView.decrement")}
            onClick={() => dispatch(decrement())}
          />
        </div>
      </div>
    </div>
  );
};

const Button = (props: { text: string; onClick: () => void }) => (
  <button
    type={"button"}
    onClick={props.onClick}
    className={
      "rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    }
  >
    {props.text}
  </button>
);

const LanguageButton = (props: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type={"button"}
    onClick={props.onClick}
    className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
      props.active
        ? "bg-indigo-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {props.label}
  </button>
);
