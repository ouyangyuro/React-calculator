import React, { useState } from 'react';

function Cal() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const handleClear = () => {
    setResult('');
  };
  const handleBack = () => {
    setResult(result.slice(0, -1));
  };
  const handleResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };
  return (
    <>
      <div className="w-full px-4 py-16">
        <div className="w-full max-w-sm mx-auto bg-slate-800 rounded-2xl p-4">
          <div className="grid grid-rows-[_repeat(6,_minmax(0,_70px))] grid-cols-4 gap-4">
            <div className="bg-slate-800 col-span-4 output rounded-t-2xl flex justify-end items-center p-2 break-all overflow-y-auto">
              <div className="cur_operand text-slate-50 text-lg">{result}</div>
            </div>
            <button
              id="clear"
              onClick={handleClear}
              className="col-span-2 text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              AC
            </button>
            <button
              id="back"
              onClick={handleBack}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              DEL
            </button>
            <button
              name="/"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              &divide;
            </button>
            <button
              name="1"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              1
            </button>
            <button
              name="2"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              2
            </button>
            <button
              name="3"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              3
            </button>
            <button
              name="*"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              &times;
            </button>
            <button
              name="4"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              4
            </button>
            <button
              name="5"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              5
            </button>
            <button
              name="6"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              6
            </button>
            <button
              name="+"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              +
            </button>
            <button
              name="7"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              7
            </button>
            <button
              name="8"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              8
            </button>
            <button
              name="9"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              9
            </button>
            <button
              name="-"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              &ndash;
            </button>
            <button
              name="."
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              .
            </button>
            <button
              name="0"
              onClick={handleClick}
              className="text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              0
            </button>
            <button
              onClick={handleResult}
              className="col-span-2 text-cyan-400 bg-slate-600 hover:bg-cyan-50 rounded-2xl"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cal;
