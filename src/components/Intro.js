import React, { useState, useEffect } from "react";

export default function Intro() {
  let i = 0;
  const txt = "web developer ✨";
  const speed = 62.5;

  function typeAni() {
    if (i < txt.length) {
      document.getElementById("about-txt").textContent += txt.charAt(i);
      i++;
      setTimeout(typeAni, speed);
    }
  }

  useEffect(() => {
    typeAni();
  }, []);

  return (
    <section
      id="intro"
      className="font-roboto mb-64 mt-16 text-slate-900 dark:text-white"
    >
      <div className="ml-24 mr-24 flex justify-end md:mr-64 md:ml-64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="64"
          height="64"
          viewBox="0 0 396.64573 278.9329"
          className="dark:fill-white"
        >
          <path
            d="M437.60438,372.9664c.09648-5.17624-8.25932-6.95294-11.42916-2.85966s-1.362,10.43347,2.49947,13.88191,9.13373,4.738,14.17607,5.91173c6.53631,1.52144,13.25509-5.94313,11.05655-12.28383S441.81123,369.57274,437.60438,372.9664Z"
            transform="translate(-401.67714 -310.53355)"
            fill="#ef4444"
          />
          <path
            d="M471.35353,376.0687a27.092,27.092,0,0,0,29.62181,41.898c13.09981-3.88555,28.4919,2.44087,35.07287,14.41557,14.97842,27.25473,46.03758,44.83607,77.11442,43.65139S673.87,454.954,686.73,426.63809c-11.76994,9.14356-23.96639,18.50343-38.37313,22.32206s-31.73935.68858-40.46932-11.39131c-17.20269-23.80382-49.48322-35.57729-77.97157-28.43805C507.3381,414.78884,481.62766,399.7794,471.35353,376.0687Z"
            transform="translate(-401.67714 -310.53355)"
            fill="#ef4444"
          />
          <path
            d="M796.84433,410.26393c-.894-1.70479-1.76363-3.4221-2.64611-5.13281-3.658-7.17338-7.74829-14.11147-11.66887-21.14162-10.11436-18.32335-20.78434-36.36838-29.87-55.23672a116.82091,116.82091,0,0,1-4.8345-11.48044c-.9704-2.22339-1.67487-4.81273-3.833-6.17793a4.368,4.368,0,0,0-5.65092,1.19119c-1.38466,1.95966-1.60939,4.50079-2.41851,6.723-.754,2.43061-1.6,4.8329-2.55861,7.19048-6.35287,14.79219-16.2319,22.42357-31.012,29.68725-14.50131,7.04962-28.09979,8.08065-47.066,7.2246-14.98541-.64678-29.892-2.46339-44.85773-3.37941a96.57031,96.57031,0,0,0-28.29806,3.76527,128.60606,128.60606,0,0,0-18.19522,6.77995c-6.4428,2.89261-12.77113,6.7447-16.49126,12.94074a36.62859,36.62859,0,0,0-2.32758,4.20323c-2.44481-5.95559-5.47921-11.75956-10.45171-15.91312a83.55545,83.55545,0,0,0-28.99413-14.93149,92.36815,92.36815,0,0,0-19.9775-2.89039c-11.06248-.62854-23.34867,2.7702-30.41316,11.565-8.78.00769-17.55882-.01151-26.33306-.43031a139.5458,139.5458,0,0,0-16.81745.08354,23.06556,23.06556,0,0,0-5.8965.84836,6.16656,6.16656,0,0,0-4.35174,7.4116c1.13294,3.45026,3.98445,5.85742,6.80823,7.95126a64.27536,64.27536,0,0,0,9.41636,6.08069c11.64088,6.15066,24.00028,10.7945,36.30311,15.43485a51.56723,51.56723,0,0,0,12.36191,15.54218C472.266,422.775,478.73115,425.959,485.26,428.81572c7.38328,3.25493,14.908,6.18175,22.44761,9.05272,3.70929,9.323,8.18164,18.588,15.58088,25.46084,5.71875,4.94295,12.44849,8.48545,19.13881,11.91794A154.32658,154.32658,0,0,0,573.03,486.84289c.95048,6.15675,1.78665,10.89858,1.65436,17.91689-.14019,11.43859-2.48045,23.36115-.63606,36.55861a48.04094,48.04094,0,0,0,4.32165,15.48931,80.454,80.454,0,0,0-5.68269,11.445c-2.90278,6.95842-5.44408,14.06347-7.82906,21.21377,4.96788-7.12622,9.61412-14.46647,14.31557-21.76869,1.11747-1.64743,2.07526-3.09869,2.96413-4.39943,6.71545,9.55545,17.14137,15.97018,30.05488,15.63043a65.41318,65.41318,0,0,0,13.37685-1.65248c.57278-.12817,1.14421-.26415,1.71446-.40132q-.54815-.01543-1.09613-.034c-7.14358-.31387-12.59161-.77949-19.41548-2.92749-8.55186-2.97229-14.50131-8.39906-19.5645-16.81476a22.837,22.837,0,0,1,3.59541-2.68183c3.96008-2.30274,3.97807-2.46583,8.57119-3.34692.142-.01648.30122-.03459.46612-.05262a71.35876,71.35876,0,0,1,15.6097.827c5.41744.91059,11.30437,2.04786,16.14761,4.18347q.84617.366,1.68428.75053a44.68927,44.68927,0,0,0-3.93621-3.08234A51.19052,51.19052,0,0,0,620.199,548.901a61.81767,61.81767,0,0,0-13.82054-4.16877,31.27111,31.27111,0,0,0-10.93288-.25176,23.77861,23.77861,0,0,0-8.87308,3.69113c-.94552.64607-1.88381,1.31566-2.76764,2.046a59.719,59.719,0,0,1-2.24974-9.82032c-1.233-9.35924-.134-27.89569-3.02566-39.63743a92.18764,92.18764,0,0,0-4.52529-13.66606c1.35675.34636,2.71637.68162,4.08186.99112,6.77992,1.45126,13.67262,2.33442,20.55322,3.15362,6.82521.71313,13.73346,1.21245,20.574.42682a123.75211,123.75211,0,0,0,26.53057-6.64913c2.16687,8.6354,4.69414,17.26092,9.296,24.92941A81.15167,81.15167,0,0,0,661.28,518.322a27.57185,27.57185,0,0,0-1.18135,2.70629c-2.72124,6.9738-1.68807,14.64368-1.57183,21.95287.49974,10.69869,1.31229,21.38342,2.30437,32.04681a323.87627,323.87627,0,0,0,3.88512-33.5087c.64194-7.40043.15565-11.5876,2.04232-17.18116,3.19123,3.27544,6.54693,6.39762,9.9271,9.4435q1.80757,1.58721,3.63869,3.14786c-1.04158-1.81536-2.12107-3.60844-3.21384-5.39332-2.03089-3.4211-4.183-6.7621-6.39237-10.06515.33046.02963.65387.06325.87122.08619q.27154.04324.5431.08632c10.80412,1.94495,21.26147,5.44631,32.09577,7.27767q1.30216.27257,2.604.54727c-1.035-.53185-2.072-1.05982-3.11744-1.57091-7.55692-3.44509-14.95591-7.26011-22.67975-10.32569-4.76659-1.71924-9.88222-3.87515-15.0134-2.97863-2.5102-3.61932-5.0436-7.22317-7.52355-10.86195-4.07514-6.24134-7.61247-12.81139-11.46346-19.19078,5.13689-1.92739,10.17276-4.13028,15.08828-6.53505,6.58417-3.27334,13.26516-6.46037,19.294-10.70494,14.16-9.9058,25.57328-23.34212,33.92662-38.415a116.02525,116.02525,0,0,0,6.69183-13.95585c2.01837-4.84929,3.7925-9.31176,7.45665-11.29983.10708-.0253.236-.05438.40847-.08787.04774-.01.09648-.01361.14439-.02277a22.4254,22.4254,0,0,1,5.72135.29512c7.97429,1.28494,15.99481,2.49558,23.75175,4.80025,11.0703,3.32012,21.66506,8.424,33.10709,10.38915a5.22792,5.22792,0,0,0,4.25509-1.22586,4.44006,4.44006,0,0,0,1.44256-3.3876A10.4103,10.4103,0,0,0,796.84433,410.26393ZM452.85681,368.84742c-2.5845,4.62934-3.14761,10.07574-3.18526,15.295a44.50306,44.50306,0,0,0,2.48944,13.45594c-7.76258-4.83568-15.75267-9.31214-23.80706-13.63618-5.22464-2.75852-10.54156-5.42938-15.23284-9.05164-1.35331-1.11815-2.09468-1.673-2.622-2.18822,5.96265-.60358,19.04509-1.05469,26.99426-2.15725a141.23951,141.23951,0,0,0,16.09843-2.9525C453.3378,368.01566,453.09054,368.42526,452.85681,368.84742Zm309.13966,32.50906c-7.94756-2.418-16.18811-3.64764-24.37268-4.96376-3.96126-.5911-8.31989-1.27695-12.04557.60362a21.79893,21.79893,0,0,0-8.14045,9.36622c-1.15983,2.45116-2.15141,4.97624-3.19492,7.47817a132.40007,132.40007,0,0,1-11.85,21.44338c-5.76119,8.90439-16.9378,20.05549-25.2903,25.7023-7.88352,5.30839-16.55489,9.35483-25.16289,13.33521-7.85528,3.75471-26.338,9.4772-35.32952,9.90941-9.019.55588-18.48122-.65493-24.63617-1.508-21.38089-2.98683-37.85258-9.20069-55.4857-19.42783-6.40111-3.8944-8.86753-5.6829-14.0061-11.74254-4.51361-5.28763-10.41171-14.71084-15.405-22.80485-1.81858-3.02973-3.59717-6.08321-5.37441-9.13732,1.20842,4.51916,2.513,9.01987,4.129,13.41232q.81845,2.163,1.6747,4.34233c-7.1898-5.18317-14.60426-10.04174-22.05638-14.83737-10.179-6.46751-17.54453-12.11289-23.28151-21.6103-4.83584-7.7788-5.70538-17.46221-4.10153-25.27349a18.544,18.544,0,0,1,7.83729-10.71869c7.46716-4.68532,14.74437-5.27671,25.41629-4.2247,10.07015.75658,21.19969,4.47141,31.42894,10.98381a39.44819,39.44819,0,0,1,9.15447,7.62541c.21171.23037.41165.47032.60891.71271a49.08538,49.08538,0,0,1,5.35945,9.61134q.58181,1.39874,1.1205,2.815c.58387,1.54237,1.13353,3.09806,1.63487,4.66926a3.9543,3.9543,0,0,0,3.33267,3.07836c4.78189.46208,5.82482-5.7546,7.75342-8.95852,3.42858-6.42721,4.33964-7.59868,9.51671-10.91825a103.03589,103.03589,0,0,1,41.61851-12.80139c7.47389-.54109,14.92566.43771,22.36744,1.01376,13.519,1.13748,27.04829,2.499,40.629,2.45839,9.354.03089,18.813-.76709,27.78705-3.53141,13.61866-4.34938,26.65387-11.4638,36.533-21.92371,5.68723-6.156,9.36256-13.6031,12.12146-21.40552.09775.2413.2007.49179.31131.75553,7.77745,18.28729,18.06469,35.3723,27.60241,52.77013,5.56469,10.12142,11.46774,20.05818,16.82938,30.28978.372.73671.75171,1.46984,1.13319,2.20213C779.29,407.69528,770.78374,404.09067,761.99647,401.35648Z"
            transform="translate(-401.67714 -310.53355)"
          />
          <path
            d="M677.49438,377.29981c-6.62115,3.08411-12.75189,7.16308-19.19092,10.6114-8.516,4.69116-17.1822,9.10492-25.80138,13.60248-5.136,2.72868-10.46172,5.14034-15.42977,8.16818-.43065.29475-.81776.59081-1.18454.88787-1.133-2.11427-2.28908-4.20748-3.46774-6.25459.73322,2.48915,1.43366,4.98738,2.12325,7.48863-2.99489,3.20174-2.69544,6.706-.60647,11.49494,1.823,4.48252,3.63591,8.96948,5.49661,13.43662.99418,2.3859,2.00736,4.76663,3.19283,7.06512.25264.48679.50066.99.777,1.4732-.05345.03412-.10648.069-.16.103q.0924-.02919.185-.058a5.55812,5.55812,0,0,0,1.92584,2.12678,3.74624,3.74624,0,0,0,5.33146-4.55395c-.02463-.06446-.05144-.13191-.07623-.19654a82.05223,82.05223,0,0,0,10.307-5.25515,109.14724,109.14724,0,0,0,20.22207-17.57147,126.015,126.015,0,0,0,14.584-20.64793c2.72032-5.15875,5.71194-10.31813,7.31974-15.94925C683.94037,379.66066,681.3647,376.25011,677.49438,377.29981Zm-32.8563,50.14844A91.50947,91.50947,0,0,1,629.888,440.83447c-2.40195-6.116-5.39155-12.9936-8.75608-19.95619-.44276-1.2132-.84517-2.43931-1.18942-3.68378.267-.28046.64514-.61606.92333-.85588,3.54254-2.30379,7.44362-4.03106,11.16972-6.01783,9.53-4.90291,19.058-9.81494,28.48909-14.90574,4.10221-2.22066,8.12171-4.59353,12.17559-6.90241C664.95563,404.26347,656.23694,414.55957,644.63808,427.44825Z"
            transform="translate(-401.67714 -310.53355)"
          />
          <path
            d="M710.94084,374.58915a74.26771,74.26771,0,0,0,13.39325-5.09336,75.37909,75.37909,0,0,0,11.42774-7.757A63.898,63.898,0,0,0,710.94084,374.58915Z"
            transform="translate(-401.67714 -310.53355)"
          />
          <path
            d="M716.88609,387.3289a44.902,44.902,0,0,0,16.57876-5.3471A32.25284,32.25284,0,0,0,716.88609,387.3289Z"
            transform="translate(-401.67714 -310.53355)"
          />
          <path
            d="M733.87248,386.47957a40.12613,40.12613,0,0,0,16.35007-6.4881A35.10555,35.10555,0,0,0,733.87248,386.47957Z"
            transform="translate(-401.67714 -310.53355)"
          />
          <circle cx="88.09485" cy="74.68824" r="7" />
        </svg>
      </div>

      <div className="container-intro1 flex flex-col items-center justify-center rounded-b-lg md:ml-32 lg:ml-64 lg:items-start lg:justify-start">
        <p className="mt-0 w-64 pl-0 text-xl opacity-75 md:w-full md:text-3xl lg:text-4xl">
          Hi, my name is
        </p>
        <h1 className="mt-6 w-64 pl-0 text-4xl md:w-full md:text-7xl lg:w-full lg:text-8xl">
          Yin Chu
        </h1>
        <p className="mt-6 w-64 pl-0 text-xl md:w-full md:text-3xl lg:w-full lg:text-4xl">
          I'm a,
          <span
            id="about-txt"
            className="font-roboto-mono ml-1 rounded-b-lg border-b-2 border-b-red-500 p-2 font-bold"
          ></span>
        </p>
      </div>

      <div className="container-intro2 container-intro1 flex flex-col items-center justify-center rounded-b-lg md:ml-32 md:mr-32 lg:ml-64 lg:mr-64 lg:items-start lg:justify-start">
        <p className="mt-6 w-64 pl-0 opacity-75 md:w-full lg:w-1/2">
          I am an aspiring junior web developer looking to find his first job in
          the world of tech. Currently working as a Customer Support Agent at
          Google 💻
        </p>
      </div>

      <div
        id="btn"
        className="m-auto flex w-64 flex-col items-start justify-start md:ml-32 md:mr-32 lg:ml-64 lg:mr-64 lg:items-center lg:justify-center"
      >
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSZnrXe6bNXXzdj6T11DmeWAvwWvHOLu67BL6zX44nbCbzw31mVDso41LGyu1I5oFW_U5tH9vTNoA8m/pub"
          target="_blank"
          className="mt-8 flex items-center justify-center rounded-full border-2 border-slate-900 p-4 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900 md:text-xl lg:text-2xl"
        >
          Read my resume!&nbsp;
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}