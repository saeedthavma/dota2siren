import React, { useState } from 'react';
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { DatePicker } from "zaman";
import { template_array, from_ranks, to_ranks } from './onevone.js';
import './onevone.css';

const Fivevfive = () => {

    const [template, setTemplate] = useState(0);
    const [fromRank, setFromRank] = useState("انتخاب کنید...");
    const [toRank, setToRank] = useState("انتخاب کنید...");
    const [toRanks, setToRanks] = useState([]);
    const [fromDropdown, setFromDropdown] = useState(0);
    const [toDropdown, setTodropdown] = useState(0);

    const check_template = (value) => {
        switch (value) {
            case "template-8":
                setTemplate(0)
                break;
            case "template-16":
                setTemplate(1);
                break;
            case "bracket":
                setTemplate(2);
                break;
            default:
                break;
        }
    }

    const toRank_handler = (index) => {
        let set_to_ranks = to_ranks.slice(index, 8)
        setToRanks(set_to_ranks);
    }

    return (
        <form className='create-tournament-1v1-area container'>
            <h2>طراحی تورنمنت 1 به 1</h2>

            <div className="create-1v1-area">
                <div className="create-1v1-tools">
                    <div>
                        <label>تعداد بازیکن :</label>
                        {template === 2 ?
                            <select disabled>
                                <option>16</option>
                            </select>
                            :
                            <select onChange={(e) => check_template(e.target.value)}>
                                <option value="template-8">8</option>
                                <option value="template-16">16</option>
                            </select>
                        }
                    </div>
                    <div>
                        <label>نوع مسابقات :</label>
                        <select onChange={(e) => check_template(e.target.value)}>
                            <option value="template-8">تک حذفی</option>
                            <option value="bracket">براکت</option>
                        </select>
                    </div>
                </div>
                <div className="create-1v1-plan">
                    <img src={template_array[template].src} />
                </div>
            </div>

            {template === 2 ?
                <p className='create_bracket_info'>
                    <FaCircleInfo />
                    در نوع براکت ابتدا بازیکن ها به صورت دو به دو با هم بازی میکنند که برنده ها<br />
                    به upper bracket و بازنده ها به lower bracket منتقل میشوند.
                </p>
                :
                ""
            }

            <div className='create-rank-limit'>
                <label>محدودیت رنک :</label><br />
                <div>
                    <span>از</span>
                    <div onClick={() => { fromDropdown === 1 ? setFromDropdown(0) : setFromDropdown(1) }}>
                        {fromRank}
                        <IoIosArrowDown />
                    </div><br />
                    {fromDropdown === 1 ?
                        <ul className='rank-dropdown-anim'>
                            {from_ranks.map((e, i) =>
                                <li onClick={() => {
                                    setFromRank(e.value), setFromDropdown(0),
                                        setToRank("انتخاب کنید..."), toRank_handler(i)
                                }}>
                                    <img src={e.icon} />
                                    <span>{e.value}</span>
                                </li>
                            )}
                        </ul>
                        :
                        ""
                    }
                </div>
                <div>
                    <span>تا</span>
                    <div onClick={() => { toDropdown === 1 ? setTodropdown(0) : setTodropdown(1) }}>
                        {toRank}
                        <IoIosArrowDown />
                    </div><br />
                    {toDropdown === 1 ?
                        <ul className='rank-dropdown-anim'>
                            {toRanks.map(e =>
                                <li onClick={() => { setToRank(e.value), setTodropdown(0) }}>
                                    <img src={e.icon} />
                                    <span>{e.value}</span>
                                </li>
                            )}
                        </ul>
                        :
                        ""
                    }
                </div>
            </div>

            <div className="create-1v1-options">
                <div>
                    <label>جایزه : </label>
                    <input type="text" />
                    <p>
                        <span><FaCircleInfo /></span>
                        در صورتی که جایزه مبلغ پول است لطفا واحد پول را نیز در کادر ذکر کنید.
                    </p>
                </div>
                <div>
                    <label>مبلغ ورودی برای هر بازیکن :</label>
                    <input type="text" />
                    <p>
                        <span><FaCircleInfo /></span>
                        در صورت وجود مبلغ ورودی لطفا واحد پول را نیز در کادر ذکر کنید.
                    </p>
                </div>
                <div>
                    <label>مهلت ثبت نام :</label>
                    <select>
                        <option value="">3 روز</option>
                        <option value="">6 روز</option>
                        <option value="">10 روز</option>
                    </select>
                </div>
                <div>
                    <label>تاریخ شروع تورنمنت :</label>
                    <div className='create-1v1-start-date'>
                        <DatePicker />
                    </div>
                </div>
                <div className='create-tournament-name'>
                    <label>نام تورنمنت :</label>
                    <input type="text" />
                </div>
                <br />

                <button type='submit' className='create-1v1-submit-btn'>ثبت تورنمنت</button>

            </div>

        </form>
    );
}

export default Fivevfive;
