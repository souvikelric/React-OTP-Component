import { useEffect, useRef, useState } from "react";
import "./App.css";

export const OtpComponent = ({ digits }: { digits: number }) => {
  const [otpDigits, setOtpDigits] = useState<string[]>(
    new Array(digits).fill("")
  );
  const [focusNum, setFocusNum] = useState<number>(0);
  const focusedInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    focusedInput.current?.focus();
  }, [focusNum]);

  const handleChange = (val: string, i: number) => {
    if (isNaN(Number(val)) || otpDigits[i] !== "") return;
    let updated = [...otpDigits];
    updated[i] = val;
    setOtpDigits(updated);
    setFocusNum((prev) =>
      prev === otpDigits.length - 1 ? otpDigits.length - 1 : prev + 1
    );
  };
  const handleKeyPress = (k: React.KeyboardEvent<HTMLInputElement>) => {
    if (k.key === "Backspace") {
      let updated = [...otpDigits];
      updated[focusNum] = "";
      setOtpDigits(updated);
      setFocusNum((prev) => (prev === 0 ? 0 : prev - 1));
    } else return;
  };
  return (
    <div className="otpContainer">
      {otpDigits.map((d, i: number) => (
        <input
          onKeyDown={(k) => handleKeyPress(k)}
          ref={focusNum === i ? focusedInput : undefined}
          className="input"
          key={i}
          type="text"
          value={d}
          onChange={(e) => handleChange(e.target.value, i)}
        />
      ))}
    </div>
  );
};
