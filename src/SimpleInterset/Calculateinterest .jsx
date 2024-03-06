import React, { useState } from "react";
import './simpleInterset.css'

const Calculateinterest = () => {
  const [rateofinterest, setRateofinterest] = useState();
//   const [periodunit, setPeriodunit] = useState(0);
  const [annualamount, setAnnualamount] = useState();
  const [data, setData] = useState({
    principalamount: "",
    rateofinterest: "",
    period: "",
    value: "",
    periodunit: "",
  });
  console.log(data);

  const handleform = (e) => {
    e.preventDefault();
      // alert(data.principalamount)
     switch (data.periodunit) {
      case "yearly":
        const year = data.period * 12;
        const interest = data.rateofinterest / 100;
        const principalamount = data.principalamount;

        const annualamount = principalamount * (1 + (interest / 12) * year);
        setAnnualamount(annualamount);
        setRateofinterest(annualamount - principalamount);

        break;
      case "monthly":
        const monthly = data.period;
        const monthlyinterest = data.rateofinterest / 100;
        const Mprincipalamount = data.principalamount;
        const Mannualamount =
          Mprincipalamount * (1 + (monthlyinterest / 12) * monthly);
        setAnnualamount(Mannualamount);
        setRateofinterest(Mannualamount - Mprincipalamount);

        break;
      case "weekly":
        const weekly = data.period;
        const weeklyinterest = data.rateofinterest / 100;
        const Wprincipalamount = data.principalamount;
        const Wannualamount =
          Wprincipalamount * (1 + (weeklyinterest / 52) * weekly);
        setAnnualamount(Wannualamount);
        setRateofinterest(Wannualamount - Wprincipalamount);

        alert("weekly");
        break;
      case "day":
        const daily = data.period;
        const dailyinterest = data.rateofinterest / 100;
        const Dprincipalamount = data.principalamount;
        const Dannualamount =
          Dprincipalamount * (1 + (dailyinterest / 365) * daily);
        setAnnualamount(Dannualamount);
        setRateofinterest(Dannualamount - Dprincipalamount);
        alert("day");
        break;

      default:
        alert("select period correctly");
        break;
    }

    console.log(data);
  };
  return (
    <div className="main-div">
      <form action="#" className="form" onSubmit={handleform}>
        <div className=" input-div ">
          <label htmlFor="interest" id="interest">
            Interest type
          </label>
          <select name="interest" id="interest">
            <option value="simpleinterest">Simple interest</option>
            <option value="compundinterest">Compound interest</option>
          </select>
        </div>
        <div className=" input-div">
          <label htmlFor="principal amount">
            Principal Amount (Rs.)Optional
          </label>
          <input
            type="text"
            id="principal amount"
            // value={data.principalamount}
            onChange={(e) =>
              setData({ ...data, principalamount: e.target.value })
            }
          />
        </div>
        <div className=" input-div">
          <label htmlFor="annual rate">Annual rate Optional</label>
          <input
            type="text"
            // value={data.rateofinterest}
            onChange={(e) =>
              setData({ ...data, rateofinterest: e.target.value })
            }
            id="annualrate"
          />
        </div>
        <div className=" input-div">
          <label htmlFor="periodunit" id="periodunit">
            Period unit
          </label>
          <select
            name="periodunit"
            id="periodunit"
            // value={data.periodunit}
            onChange={(e) => setData({ ...data, periodunit: e.target.value })}
          >
            <option selected> select period</option>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="day">Day</option>
          </select>
        </div>
        <div className=" input-div">
          <label htmlFor="periodoptional">Period optional</label>
          <input
            type="text"
            id="periodoptional"
            // value={data.period}
            onChange={(e) => setData({ ...data, period: e.target.value })}
          />
        </div>
        <button
          className="btn btn-success"
          // onClick={(e) => calculation(principalamount, rateofinterest, period)}
        >
          submit
        </button>

        <div className=" input-div">
          <div className="amount-div">
            <h5>Interest Earned :&#8377;</h5>
            <span>{Math.floor(rateofinterest)}</span>
          </div>
          <div className="amount-div">
            <h5>Principal Amount :&#8377;</h5>
            <span>{Math.floor(data.principalamount)}</span>
          </div>
          <div className="amount-div">
            <h5>Total value Rs: &#8377; </h5>

            <span>{Math.floor(annualamount)}</span>
          </div>
        </div>
      </form>
 
    </div>
  );
};

export default Calculateinterest;