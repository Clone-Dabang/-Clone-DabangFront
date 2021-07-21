import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import { getPostsServer } from "../redux/modules/room";

const Main = (props) => {
  const dispatch = useDispatch();
  const main_list = useSelector((state) => state.room.main_list);
  console.log(main_list);

  useEffect(() => {
    dispatch(getPostsServer());
  }, []);

  return (
    <React.Fragment>
      <div className="styled__Wrap-sc-126ee4m-0 ihEESt">
        <div>
          <h1>어떤 방을 찾으세요?</h1>
          <div className="styled__Tab-sc-126ee4m-1 fJFycA">
            <p className="styled__TabBtn-sc-126ee4m-2 clLsLT">매물</p>
          </div>
          <form>
            <label className="styled__InputWindow-sc-126ee4m-3 dcnvxr">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0H24V24H0z"></path>
                  <g stroke="#222" strokeWidth="2" transform="translate(2 2)">
                    <circle cx="8" cy="8" r="8"></circle>
                    <path strokeLinecap="round" d="M15 14L19.95 18.95"></path>
                  </g>
                </g>
              </svg>
              <input placeholder="지역 또는 단지명을 입력하세요." />
            </label>
          </form>
        </div>
      </div>
      <div className="styled__Wrap-vrmdob-0 cBSEae">
        <div>
          <div className="styled__RecommendWrap-vrmdob-1 kVvjeX">
            <div>
              <div className="styled__Top-vrmdob-2 bjOFAH">
                <p className="styled__Title-vrmdob-3 jZbETT">
                  <strong>그냥...</strong> 추천매물
                </p>
                <p className="styled__RecentHistoryText-vrmdob-5 intnXm">
                  최근 검색조건으로 추천된 매물입니다.
                </p>
              </div>
              <ul className="styled__CardWrap-vrmdob-9 gLTOZu">
                {main_list.map((l, idx) => {
                  return (
                    <li key={l.postId}>
                      <div className="styled__CardWrap-sc-1e0j1a1-0 hObDcQ">
                        <div className="styled__LikeWrap-sc-1e0j1a1-3 gSwvZY"></div>
                        <a
                          href={`/posts/${l.postId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="styled__DetailLink-sc-1e0j1a1-1 bwyaas"
                        >
                          <div className="styled__ImgWrap-sc-14w4no0-0 hkMQhb">
                            <div className="styled__Image-ami2sx-0 gMnRzx">
                              <img
                                src={l.url[0]}
                                width="60"
                                height="60"
                                alt="매물 사진"
                                draggable="false"
                                loading="lazy"
                              />
                              <div className="styled__Cover-ami2sx-1 dZAvTS cover"></div>
                            </div>
                          </div>
                          <div className="styled__InfoWrap-sc-1e0j1a1-7 VkltZ">
                            <p className="styled__RoomType-sc-1e0j1a1-8 dENvCl">
                              {l.roomType}
                            </p>
                            <h1 className="styled__Price-sc-1e0j1a1-9 iJlOig">
                              {l.monthlyDeposit !== 0
                                ? `월세 ${l.monthlyDeposit}/${l.pay}`
                                : `전세 ${l.yearlyDeposit / 10000}억`}
                            </h1>
                            <p className="styled__Desc-sc-1e0j1a1-10 jFvIUQ">
                              {`${l.floor}층, ${l.buildingArea}m², 관리비 ${l.managementFee}만`}
                            </p>
                            <p className="styled__Desc-sc-1e0j1a1-10 jFvIUQ">
                              {l.title}
                            </p>
                            <div className="styled__TagWrap-sc-1e0j1a1-11 hRcMAS"></div>
                          </div>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
