import React, { useState } from 'react';
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { DatePicker } from "zaman";
import {
    template_array, from_ranks, to_ranks, previewImage,
    imgDragAnim, upload_image, post_tournament
} from './fivevfive.js';
import { toast } from 'react-toastify';
import moment from 'moment-jalaali';
import 'react-toastify/dist/ReactToastify.css';
import './fivevfive.css';

const Fivevfive = () => {

    const [group, setGroup] = useState(false);
    const [template, setTemplate] = useState(0);
    const [fromRank, setFromRank] = useState("انتخاب کنید...");
    const [toRank, setToRank] = useState("انتخاب کنید...");
    const [toRanks, setToRanks] = useState([]);
    const [fromDropdown, setFromDropdown] = useState(0);
    const [toDropdown, setTodropdown] = useState(0);
    const [deadline, setDeadline] = useState(3);
    const [startDate, setStartDate] = useState(new Date());
    const [prvimg, setPrvimg] = useState(["/photo/images/img-unset.png"]);
    const [imgName, setImgName] = useState();

    const check_group = (e) => {
        if (e.target.value == "group-off") {
            setGroup(false)
        } else {
            setGroup(true)
        }
    }

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
            case "group-off":
                setTemplate(0);
                break;
            case "group-on":
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

    const regDate_handler = (e) => {
        setDeadline(e.target.value)
    }




    const post_tournament_data = async (e) => {
        e.preventDefault();
        let tournament_logo = await upload_image();

        let name = document.getElementById('name_input').value;
        let tournament_type = "5v5";
        let teams_count = document.getElementById('teams_count').value;
        switch (teams_count) {
            case "template-8":
                teams_count = 8
                break;
            case "template-16":
                teams_count = 16
                break;
            case "16":
                teams_count = 16
                break;
            case "20":
                teams_count = 20;
                break

            default:
                break;
        }
        let games_type = template === 2 ? "bracket" : "elimination";
        let group_stage = group;
        let prize_pool = document.getElementById('prize_input').value;
        let entry = document.getElementById('entry_input').value;
        const ranks = [];
        from_ranks.map(e => {
            ranks.push(e.value)
            return ranks
        })
        let from_rank;
        let to_rank
        if (ranks.includes(fromRank) && ranks.includes(toRank)) {
            from_rank = fromRank;
            to_rank = toRank;
        } else {
            toast("لطفا محدوده رنک تورنمنت را انتخاب کنید", {
                theme: "dark",
                type: "error"
            });
        }
        let registration_deadline = new Date(moment().add(deadline, "days")).getTime();
        let start_at;
        if (startDate.getTime() < registration_deadline) {
            toast("تاریخ شروع تورنمنت باید بعد از مهلت ثبت نام باشد", {
                theme: "dark",
                type: "error"
            });
            return
        } else {
            start_at = startDate.getTime();
        }
        const data = await post_tournament(name, tournament_type, teams_count, games_type, group_stage, prize_pool,
            entry, from_rank, to_rank, registration_deadline, start_at, tournament_logo)

        console.log(data);
    }

    return (
        <form className='create-tournament-5v5-area container'
            onSubmit={(e) => { post_tournament_data(e) }}>
            <h2>طراحی تورنمنت 5 به 5</h2>
            {group ?
                <div className="create-group-stage">
                    <ul>
                        <li className="gp-li-heading">Group A</li>
                        <li>team 1</li>
                        <li>team 2</li>
                        <li>team 3</li>
                        <li>team 4</li>
                        <li>team 5</li>
                    </ul>
                    <ul>
                        <li className="gp-li-heading">Group B</li>
                        <li>team 6</li>
                        <li>team 7</li>
                        <li>team 8</li>
                        <li>team 9</li>
                        <li>team 10</li>
                    </ul>
                    <ul>
                        <li className='gp-li-heading'>Group C</li>
                        <li>team 11</li>
                        <li>team 12</li>
                        <li>team 13</li>
                        <li>team 14</li>
                        <li>team 15</li>
                    </ul>
                    <ul>
                        <li className='gp-li-heading'>Group D</li>
                        <li>team 16</li>
                        <li>team 17</li>
                        <li>team 18</li>
                        <li>team 19</li>
                        <li>team 20</li>
                    </ul>
                </div>
                :
                ""}
            <div className="create-5v5-area">
                <div className="create-5v5-tools">
                    <div>
                        <label>تعداد تیم :</label>
                        {group ?
                            <select disabled>
                                <option value="20" id='teams_count'>20</option>
                            </select>
                            :
                            template === 2 ?
                                <select disabled>
                                    <option value="16" id='teams_count'>16</option>
                                </select>
                                :
                                <select onChange={(e) => check_template(e.target.value)} id='teams_count'>
                                    <option value="template-8">8</option>
                                    <option value="template-16">16</option>
                                </select>
                        }
                    </div>
                    <div>
                        <label>نوع مسابقات :</label>
                        {group ?
                            <select disabled>
                                <option>براکت</option>
                            </select>
                            :
                            <select onChange={(e) => check_template(e.target.value)}>
                                <option value="template-8">تک حذفی</option>
                                <option value="bracket">براکت</option>
                            </select>
                        }
                    </div>
                    <div>
                        <label>مرحله گروهی :</label>
                        <select onChange={(e) => { check_group(e), check_template(e.target.value) }}>
                            <option value="group-off">غیر فعال</option>
                            <option value="group-on">فعال</option>
                        </select>
                    </div>
                </div>
                <div className="create-5v5-plan">
                    <img src={template_array[template].src} />
                </div>
            </div>

            {group === false && template === 2 ?
                <p className='create_bracket_info'>
                    <FaCircleInfo />
                    در صورتی که مرحله گروهی غیرفعال باشد و نوع مسابقات براکت باشد ابتدا همه تیم ها
                    به صورت دو به دو باهم بازی میکنند<br />
                    که برنده ها به upper bracket و بازنده ها به lower bracket منتقل میشوند.
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

            <div className="create-5v5-options">
                <div>
                    <label>جایزه : </label>
                    <input type="text" id='prize_input' />
                    <p>
                        <span><FaCircleInfo /></span>
                        در صورتی که جایزه مبلغ پول است لطفا واحد پول را نیز در کادر ذکر کنید.
                    </p>
                </div>
                <div>
                    <label>مبلغ ورودی برای هر تیم :</label>
                    <input type="text" id='entry_input' />
                    <p>
                        <span><FaCircleInfo /></span>
                        در صورت وجود مبلغ ورودی لطفا واحد پول را نیز در کادر ذکر کنید.
                    </p>
                </div>
                <div>
                    <label>مهلت ثبت نام :</label>
                    <select onChange={(e) => regDate_handler(e)}>
                        <option value={3}>3 روز</option>
                        <option value={6}>6 روز</option>
                        <option value={10}>10 روز</option>
                    </select>
                </div>
                <div>
                    <label>تاریخ شروع تورنمنت :</label>
                    <div className='create-5v5-start-date'>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date.value)}
                            className='date_picker' />
                    </div>
                </div>
                <div>
                    <label>نام تورنمنت :</label>
                    <input type="text" id='name_input' />
                </div>
                <div className='create-logo-area'>
                    <label>لوگوی تورنمنت :</label>
                    <div className="signteam-logo-field" id='tournament_logo'>
                        <input type='file' multiple={false} className='create-file-input' id='create_logo_input'
                            onChange={(e) => { previewImage(e, prvimg, setPrvimg) }}
                            onDragEnter={() => { imgDragAnim("on") }}
                            onMouseLeave={() => { imgDragAnim("off") }}
                        />
                        <img src={prvimg[0]} alt='s' />
                    </div>
                </div>

                <button type='submit' className='create-5v5-submit-btn'>ثبت تورنمنت</button>

            </div>

        </form>
    );
}

export default Fivevfive;
