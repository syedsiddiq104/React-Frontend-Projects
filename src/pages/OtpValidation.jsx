import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const OtpValidation = () => {
  const [bool, setBool] = useState(false);
  const [generatedOPT, setGeneratedOtp] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [displayAccess, setDisplayAccess] = useState("");
  const [timer, setTimer] = useState(5);

  const intervalRef = useRef(null);

  const handleBool = () => {
    setBool(true);
    setDisplayAccess("");
    setTimer(5);
    setInputValue("");

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          setDisplayAccess("Time Out");
          setBool(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const GenerateOtp = () => {
    const otp = Math.floor(Math.random() * 9000) + 1000;
    setGeneratedOtp(otp);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (+inputValue === generatedOPT) {
      toast.success("Access Granted");
      clearInterval(intervalRef.current);
    } else {
      setBool(false);
      toast.error("Access Denied");
    }
  };

  // ----------PASSEORD VALIDATION------------------------
  let [passwordActive, setpasswordActive] = useState(false);

  // let [userPassOnchange, setUserPassOnchange] = useState("");
  let [printMsg, setPrintMsg] = useState("");
  let [score, setscore] = useState("");

  const userInput = (e) => {
    const value = e.target.value;
    // setUserPassOnchange(value);

    let score = 0;

    if (
      value.length >= 12 &&
      /[0-9]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(value)
    ) {
      setPrintMsg("strong");
      score = 3;
    } else if (value.length >= 6 && /[0-9]/.test(value)) {
      setPrintMsg("medium");
      score = 2;
    } else {
      setPrintMsg("weak");
      score = 1;
    }

    setscore(score);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  // ------------CAPCHA VALIDATION--------------------------
  let [toggle, setToogle] = useState(false);
  let [capcha, Setcapcha] = useState("");
  let [userInputval, setUserInputval] = useState("");

  const generateCapcha = () => {
    let capcha = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 6; i++) {
      let randomCapcha = char.charAt(Math.floor(Math.random() * char.length));
      capcha += randomCapcha;
    }
    Setcapcha(capcha);
    // console.log(capcha)
  };

  useEffect(() => {
    generateCapcha();
  }, []);

  let handleCapcha = (e) => {
    e.preventDefault();

    if (userInputval === capcha) {
      toast.success("Verified");
    } else {
      toast.error("Incorrect capcha");
    }
  };

  // ------------------HIDE BUTTON-------------------
  const [text, setText] = useState("");



  return (
    <div className="min-h-screen  flex items-center justify-evenly bg-gray-100 flex-wrap gap-5">
      <div className="bg-white border-x-black rounded-2xl p-8 w-80 flex flex-col items-center gap-5 border-2">
        <h1 className="text-2xl font-bold text-gray-800">OTP Verification</h1>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          onClick={() => {
            handleBool();
            GenerateOtp();
          }}
        >
          Generate OTP
        </button>

        {bool && (
          <>
            <h2 className="text-3xl font-bold text-purple-600">
              {generatedOPT}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-full items-center"
            >
              <input
                type="text"
                maxLength={4}
                value={inputValue}
                onChange={handleInput}
                className="border border-gray-300 rounded-lg p-2 text-black text-center text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter OTP"
              />

              <p className="text-sm text-gray-600">
                Time left:
                <span className="text-red-500 font-semibold ml-1">
                  {timer}s
                </span>
              </p>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
              >
                Verify OTP
              </button>
            </form>
          </>
        )}

        {displayAccess && (
          <p className="text-red-500 font-semibold">{displayAccess}</p>
        )}
      </div>

      <div className="bg-white border-x-black rounded-2xl p-8 w-80 flex flex-col items-center gap-5 border-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Password Validation
        </h1>
        <span
          onClick={() => setpasswordActive(!passwordActive)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition text-center"
        >
          Validate
        </span>
        {passwordActive ? (
          <>
            <form
              action=""
              className="flex flex-col items-center justify-center gap-3"
              onSubmit={HandleSubmit}
            >
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 text-black text-center text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
                onChange={userInput}
              />
              {/* <h1 className="text-black">{score}</h1> */}
              <div
                className={`h-2 rounded transition-all duration-300 ${
                  score === 1
                    ? "bg-red-500"
                    : score === 2
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
                style={{ width: `${score * 33}%` }}
              ></div>
              <h1
                className={`text-lg font-semibold  ${
                  score === 1
                    ? "text-red-500"
                    : score === 2
                      ? "text-yellow-500"
                      : "text-green-500"
                }`}
              >
                {printMsg}
              </h1>
              <button
                className={`w-full text-white border-2 border-black-400 px-2 py-1 bg-blue-500 rounded-2xl hover:bg-blue-600 font-extrabold 
              ${score === 1 ? "bg-red-500" : score === 2 ? "bg-yellow-500" : "bg-green-500"}`}
              >
                Verify
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="bg-white border-x-black rounded-2xl p-8 w-80 flex flex-col items-center gap-5 border-2">
        <h1 className="text-2xl font-bold text-gray-800">capcha Validation</h1>

        <span
          onClick={() => setToogle(!toggle)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition text-center"
        >
          capcha
        </span>
        {toggle && (
          <>
            <form
              action=""
              className="flex gap-5 flex-col justify-evenly items-center"
              onSubmit={handleCapcha}
            >
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 text-black text-center text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter capcha"
                onChange={(e) => setUserInputval(e.target.value)}
              />

              <div className=" w-full items-center justify-evenly flex gap-3">
                <h1 className="text-black font-semibold border-stone-800 border rounded-sm px-2 py-1 ">
                  {capcha}
                </h1>
                <button
                  type="button"
                  onClick={generateCapcha}
                  className="className={` text-white border-2 border-black-400 px-2 py-1 bg-blue-500 rounded-2xl hover:bg-blue-600 font-extrabold"
                >
                  <CachedOutlinedIcon />
                </button>
              </div>

              <button
                className={`w-full text-white border-2 border-black-400 px-2 py-1 bg-blue-500 rounded-2xl hover:bg-blue-600 font-extrabold `}
              >
                Verify
              </button>
            </form>
          </>
        )}
      </div>

      <div className="bg-white border-x-black rounded-2xl p-8 w-80 flex flex-col items-center gap-5 border-2">
        <h1 className = "text-2xl text-black font-bold ">VISIBLE BUTTON</h1>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 text-black text-center text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400
          focus:font-bold"
          placeholder="Enter something to send..."
        />

        {text !== "" && (
          <button className="w-full text-white border-2 border-black-400 px-2 py-1 bg-blue-500 rounded-2xl hover:bg-blue-600 font-extrabold ">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpValidation;
