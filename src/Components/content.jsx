import { Swiper, SwiperSlide } from "swiper/react";
import "./../swiper.min.css";
import React from "react";
import MainSwiper from "./MainSwiper";
import Video1 from "./../video/1.mp4";
import Video2 from "./../video/2.mp4";
import Video3 from "./../video/3.mp4";
import SwiperSlider from "./SwiperSlider";

import blueBanner from "./../image/bnr.jpg";
import imgSlide1 from "./../image/imgslide1.svg";
import imgSlide2 from "./../image/imgslide2.svg";
import imgSlide3 from "./../image/imgslide3.svg";
import RedCards from "./../image/redcards.png";
import GreenCards from "./../image/greencards.png";
import BlueCards from "./../image/bluecards.png";
import BgbluBank from "./../image/bgblueBank.png";
import DownloadBtn from "./../image/download.svg";

export default function Content() {
  // part 2 sliders
  const slids = document.getElementsByClassName("sliders");
  function slider1() {
    slids[0].style.left = "0%";
    slids[1].style.left = "100%";
    slids[2].style.left = "200%";
  }
  function slider2() {
    slids[0].style.left = "-100%";
    slids[1].style.left = "0%";
    slids[2].style.left = "100%";
  }
  function slider3() {
    slids[0].style.left = "-200%";
    slids[1].style.left = "-100%";
    slids[2].style.left = "0%";
  }

  // function autoSlide() {
  //   let currentSlide = 0;
  //   setInterval(() => {
  //     currentSlide = (currentSlide + 1) % 3;
  //     switch (currentSlide) {
  //       case 0:
  //         slider1();
  //         break;
  //       case 1:
  //         slider2();
  //         break;
  //       case 2:
  //         slider3();
  //         break;
  //     }
  //   }, 3000);
  // }

  // autoSlide();
  // part 3 green & red & blue cards
  function red() {
    document.getElementById("red").style.opacity = "1";
    document.getElementById("green").style.opacity = "0";
    document.getElementById("blue").style.opacity = "0";
  }
  function green() {
    document.getElementById("red").style.opacity = "0";
    document.getElementById("green").style.opacity = "1";
    document.getElementById("blue").style.opacity = "0";
  }
  function blue() {
    document.getElementById("red").style.opacity = "0";
    document.getElementById("green").style.opacity = "0";
    document.getElementById("blue").style.opacity = "1";
  }
  // javaScript belong accordion svg
  let flag = true;
  function acardeon1() {
    if (flag) {
      document.getElementById("p1").style.height = "100px";
      document.getElementById("acardeon1").style.color = "#3b82f6";
      flag = !flag;
    } else {
      document.getElementById("p1").style.height = "0";
      document.getElementById("acardeon1").style.color = "#777d8a";
      flag = !flag;
    }
  }

  function acardeon2() {
    if (flag) {
      document.getElementById("p2").style.height = "80px";
      document.getElementById("acardeon2").style.color = "#3b82f6";
      flag = !flag;
    } else {
      document.getElementById("p2").style.height = "0";
      document.getElementById("acardeon2").style.color = "#777d8a";
      flag = !flag;
    }
  }

  function acardeon3() {
    if (flag) {
      document.getElementById("p3").style.height = "100px";
      document.getElementById("acardeon3").style.color = "#3b82f6";
      flag = !flag;
    } else {
      document.getElementById("p3").style.height = "0";
      document.getElementById("acardeon3").style.color = "#777d8a";
      flag = !flag;
    }
  }

  function acardeon4() {
    if (flag) {
      document.getElementById("p4").style.height = "60px";
      document.getElementById("acardeon4").style.color = "#777d8a";
      flag = !flag;
    } else {
      document.getElementById("p4").style.height = "0";
      document.getElementById("acardeon4").style.color = "#777d8a";
      flag = !flag;
    }
  }

  function acardeon5() {
    if (flag) {
      document.getElementById("p5").style.height = "70px";
      document.getElementById("acardeon5").style.color = "#777d8a";
      flag = !flag;
    } else {
      document.getElementById("p5").style.height = "0";
      document.getElementById("acardeon5").style.color = "#777d8a";
      flag = !flag;
    }
  }
  return (
    <main>
      {/* part1 */}
      <section className="w-full mt-[120px] flex justify-center items-center">
        <div className="flex justify-center w-[90%]">
          <MainSwiper />
        </div>
      </section>
      {/* part2 */}
      <section className="w-full mt-[40px]">
        <div className="block lg:flex">
          <div className="w-[100%] lg:w-[40%] flex justify-evenly">
            <video autoPlay loop muted className="w-[65%] pr-[9]">
              <source src={Video1} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100%] lg:w-[60%] flex sm:h-[130%] h-[150%] lg:h-auto md:h-[130%]">
            <div className="w-[100%] lg:w-[90%] relative overflow-hidden">
              <div className="w-full flex justify-center items-center">
                <div className="w-full absolute left-[0%] top-[100px] duration-1000 sliders lg:pl-0 pl-[47px]">
                  <h3 className="text-primary px-[120] text-3xl mb-[16] font-bold">
                    حفاظت از سرمایه مشتریان
                  </h3>
                  <ul className="mb-[53] pr-[80]">
                    <li className="text-mainColor text-base leading-10 relative">
                      <svg
                        className="ml-[13] w-[24]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2563eb"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                      مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف
                      قانونی تعیین شده، مورد تضمین صندوق ضمانت سپرده‌های بانک
                      مرکزی است.
                    </li>
                    <li className="text-mainColor text-base leading-10 relative">
                      <svg
                        className="ml-[13] w-[24]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2563eb"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                      ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را
                      محرمانه تلقی کرده و متعهد میشویم تحت هر شرایطی جز در موارد
                      قانونی از انتشار آن جلوگیری کرده و مسئولیت این موضوع را به
                      طور کامل می‌پذیریم.
                    </li>
                  </ul>
                </div>
              </div>
              {/* slide 2 */}
              <div className="w-full flex justify-center items-center">
                <div className="w-full absolute left-[100%] top-[100px] duration-1000 flex sliders">
                  <div className="flex">
                    <div className="block w-[50%] ml-[13] mr-[13px] lg:mr-[0]">
                      <div className="flex justify-center">
                        <img
                          src={imgSlide1}
                          width={80}
                          height={80}
                          alt="icon"
                        />
                      </div>
                      <div className="service-one ">
                        <h3 className="text-black text-base text-center">
                          ۵ درصد سود سپرده
                        </h3>
                        <p className="font-normal text-sm text-center leading-7 text-primary px-[10px]">
                          در بلو برای حداقل مانده موجودی در ماه، سود سالیانه ۵
                          درصد به صورت ماه‌شمار پرداخت می‌شود.
                        </p>
                      </div>
                    </div>
                    <div className="block w-[50%] ml-[13]">
                      <div className="flex justify-center">
                        <img
                          src={imgSlide2}
                          width={80}
                          height={80}
                          alt="icon"
                        />
                      </div>
                      <div className="service-one ">
                        <h3 className="text-black text-base text-center">
                          بدون کارمزد بازکردن حساب
                        </h3>
                        <p className="font-normal text-sm text-center leading-7 text-primary px-[10px]">
                          در بلو بازکردن حساب کاملا رایگان است و نیاز به پرداخت
                          هیچ کارمزدی ندارد
                        </p>
                      </div>
                    </div>
                    <div className="block w-[50%] ml-[13]">
                      <div className="flex justify-center">
                        <img
                          src={imgSlide3}
                          width={80}
                          height={80}
                          alt="icon"
                        />
                      </div>
                      <div className="service-one ">
                        <h3 className="text-black text-base text-center">
                          بدون حداقل موجودی حساب
                        </h3>
                        <p className="font-normal text-sm text-center leading-7 text-primary px-[10px]">
                          در بلو برای بازکردن حساب، نیاز به حتی یک ریال موجودی
                          نیست.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slide 3 */}
              <div className="w-full flex justify-center items-center">
                <div className="w-full absolute left-[200%] top-[100px] duration-1000 sliders">
                  <div className="w-[100%] px-[15px] lg:px-[0] lg:w-[80%] md:h-full flex content-center flex-wrap justify-center">
                    <h3 className="text-primary text-4xl font-bold mb-[20px]">
                      بلو؛ بانک ولی دوست‌داشتنی
                    </h3>
                    <p className="text-mainColor mb-[35px] text-base font-normal leading-7">
                      بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی
                      اپلیکیشن موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده،
                      بانکی است که همیشه همراه شما خواهد بود.
                    </p>
                  </div>
                  <div className="flex justify-center w-[80%]">
                    <a
                      href="#"
                      className=" bg-primary w-[160px] rounded-[16px] inline-block"
                    >
                      <img
                        src={DownloadBtn}
                        alt="button download"
                        width={160}
                        height={34}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex h-[90%]">
                <div className="w-[85%] flex justify-center items-end">
                  <span
                    className="w-[35px] h-[6px] bg-blue-500 mx-3 rounded-[5px] cursor-pointer"
                    id="first-slider"
                    onClick={slider1}
                  ></span>
                  <span
                    className="w-[35px] h-[6px] bg-blue-500 mx-3 rounded-[5px] cursor-pointer"
                    id="second-slider"
                    onClick={slider2}
                  ></span>
                  <span
                    className="w-[35px] h-[6px] bg-blue-500 mx-3 rounded-[5px] cursor-pointer"
                    id="third-slider"
                    onClick={slider3}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* part 4 */}
      <section className="relative md:flex mt-[200px]">
        <div className="w-[90%] md:w-[55%] flex flex-wrap justify-end">
          <div className="w-[100%] md:w-[80%] pr-[50px] md:pr-[0]">
            <h3 className="text-blue-600 font-bold text-3xl">
              بلو، فقط آبی نیست ...
            </h3>
            <ul>
              <li className="text-gray-500 text-base leading-10">
                <svg
                  className="ml-[13] w-[24]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2563eb"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                عضو سامانه شتاب بانک مرکزی
              </li>
              <li className="text-gray-500 text-base leading-10 ">
                <svg
                  className="ml-[13] w-[24]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2563eb"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری
                در تهران و ۱۰ روز کاری در سایر نقاط کشور
              </li>
              <li className="text-gray-500 text-base leading-10 ">
                <svg
                  className="ml-[13] w-[24]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2563eb"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو
              </li>
              <li className="text-gray-500 text-base leading-10 ">
                <svg
                  className="ml-[13] w-[24]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2563eb"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                امکان مسدودکردن کارت از طریق اپلیکیشن بلو
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] md:w-[55%]">
          <div className="relative w-full h-[150%]">
            <img
              id="blue"
              src={BlueCards}
              alt="blue cards"
              className="w-[90%] object-cover absolute md:translate-y-[-45px] lg:translate-y-[-95px] xl:translate-y-[-187px] "
            />
            <img
              id="green"
              src={GreenCards}
              alt="green cards"
              className="w-[90%] object-cover absolute md:translate-y-[-45px] lg:translate-y-[-95px] xl:translate-y-[-187px] opacity-0"
            />
            <img
              id="red"
              src={RedCards}
              alt="red cards"
              className="w-[90%] object-cover absolute md:translate-y-[-45px] lg:translate-y-[-95px] xl:translate-y-[-187px] opacity-0"
            />
          </div>

          <div className="translate-x-[0px] translate-y-[0px] md:translate-y-[-109px] mr-[55px] md:mr-[0]">
            <div className="w-full flex items-center">
              <div
                className="w-[15] h-[15] bg-red-600 rounded-[50%] mx-1 cursor-pointer"
                onClick={red}
              ></div>
              <div
                className="w-[15] h-[15] bg-green-600 rounded-[50%] mx-1 cursor-pointer"
                onClick={green}
              ></div>
              <div
                className="w-[15] h-[15] bg-blue-600 rounded-[50%] mx-1 cursor-pointer"
                onClick={blue}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* part 4 */}
      <section className="w-full flex mt-[200] bg-primary">
        <div className="block lg:flex py-[50]">
          <div className="w-[100%] lg:w-[50%] flex justify-center items-center">
            <div className="w-[90%]">
              <img src={BgbluBank} alt="image" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center items-center">
            <div className="mt-[100] w-[90%]">
              <h3 className="text-white text-4xl mt-5 font-bold block">
                بلولاین؛ همیشه به وقت همه‌جا
              </h3>
              <p className="text-white text-base font-normal leading-8 mt-[18] block">
                اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید،
                یا با شماره ۹۱۰۳۶۰۶۰-۰۲۱ تماس بگیرید. کارشناسان بلولاین همیشه
                آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* part 5 */}
      <section className="w-full bg-[#f9f9f9]">
        <div className="block lg:flex">
          <div className="w-[100%] lg:w-[50%]  flex justify-center items-center">
            <div className="w-[80%]">
              <h3 className="block text-primary mt-[62px] lg:mt-5 text-4xl font-bold">
                شناسایی هویت
              </h3>
              <p className="block text-mainColor text-base mt-7 font-normal leading-8">
                “اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب
                در بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه
                نمونه بالا ضبط و ارسال کنید.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%]  flex justify-end items-center">
            <div className="w-[90%] pt-[50]">
              <video autoPlay loop muted className="w-[630]">
                <source src={Video2}></source>
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* part 5 */}
      <section className="w-full block lg:flex mt-[100]">
        <div className="w-[100%] lg:w-[50%] flex justify-end items-center">
          <div className="w-[70%]">
            <video autoPlay loop muted className="w-[400]">
              <source src={Video3}></source>
            </video>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex items-center justify-center lg:justify-start">
          <div className="w-[70%] ">
            <h3 className="text-primary mt-5 font-bold text-4xl block">
              انتقال هوشمند پول
            </h3>
            <p className="text-gray-500 text-base font-normal mt-7 leading-[46px] block">
              «انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید،
              جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست
              و برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما
              این کار را برای شما انجام می‌دهیم.
            </p>
          </div>
        </div>
      </section>
      {/* part 6 */}
      <section className="w-full mt-[120] bg-[#f9f9f9] pb-[75px]">
        <div className="flex justify-center items-center flex-wrap pt-[40px]">
          <h3 className="text-primary font-bold mt-5 text-4xl">
            سوالات متداول
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[70%] flex justify-evenly">
            <div className="flex justify-center content-center flex-wrap pt-[70px]">
              <div className="w-full flex  flex-wrap pt-[20px] justify-between border-b">
                <h4 onClick={acardeon1} id="acardeon1" className="pb-[27px]">
                  چگونه می‌توانم حساب بازکنم؟
                </h4>
                <svg
                  onClick={acardeon1}
                  className="text-blue-500 w-[50px] h-[50px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="path1"
                    className="text-blue-500 w-[50px] h-[50px] cursor-pointer border border-blue-500"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  />
                </svg>
                <p
                  id="p1"
                  className="w-[90%] overflow-hidden duration-100 text-gray-400 h-[0px] text-sm"
                >
                  مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط
                  تلفن همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت
                  ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت
                  هوشمند) برای ارسال تصاویر مربوطه
                </p>
              </div>
              <div className="w-full flex flex-wrap pt-[20px] justify-between border-b">
                <h4 onClick={acardeon2} id="acardeon2" className="pb-[27px]">
                  برای بازکردن حساب چه مدارکی لازم است؟
                </h4>
                <svg
                  onClick={acardeon1}
                  className="text-blue-500 w-[50px] h-[50px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="path1"
                    className="text-blue-500 w-[50px] h-[50px] cursor-pointer border border-blue-500"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  />
                </svg>
                <p
                  id="p2"
                  className="w-[90%] overflow-hidden duration-100 text-gray-400 h-[0px] text-sm"
                >
                  اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور
                  کارت هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه
                  فعال که به نام خودتان است.
                </p>
              </div>
              <div className="w-full flex flex-wrap pt-[20px] justify-between border-b">
                <h4 onClick={acardeon3} id="acardeon3" className="pb-[27px]">
                  من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟
                </h4>
                <svg
                  onClick={acardeon3}
                  className="text-blue-500 w-[50px] h-[50px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="path1"
                    className="text-blue-500 w-[50px] h-[50px] cursor-pointer border border-blue-500"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  />
                </svg>
                <p
                  id="p3"
                  className="w-[90%] overflow-hidden duration-100 text-gray-400 h-[0px] text-sm"
                >
                  بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد
                  رهگیری نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان
                  بازکردن حساب را دارید.
                </p>
              </div>
              <div className="w-full flex flex-wrap pt-[20px] justify-between border-b">
                <h4 onClick={acardeon4} id="acardeon4" className="pb-[27px]">
                  من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم
                  کرده‌ام، چطور می‌توانم حساب بازکنم؟
                </h4>
                <svg
                  onClick={acardeon4}
                  className="text-blue-500 w-[50px] h-[50px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="path1"
                    className="text-blue-500 w-[50px] h-[50px] cursor-pointer border border-blue-500"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  />
                </svg>
                <p
                  id="p4"
                  className="w-[90%] overflow-hidden duration-100 text-gray-400 h-[0px] text-sm"
                >
                  در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خود را
                  پیداکنید و فرآیند بازکردن حساب را انجام دهید.
                </p>
              </div>
              <div className="w-full flex flex-wrap pt-[20px] justify-between border-b">
                <h4 onClick={acardeon5} id="acardeon5" className="pb-[27px]">
                  مراحل بازکردن حساب چقدر زمان می‌برد؟
                </h4>
                <svg
                  onClick={acardeon5}
                  className="text-blue-500 w-[50px] h-[50px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="path1"
                    className="text-blue-500 w-[50px] h-[50px] cursor-pointer border border-blue-500"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  />
                </svg>
                <p
                  id="p5"
                  className="w-[90%] overflow-hidden duration-100 text-gray-400 h-[0px] text-sm"
                >
                  باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و
                  فعال شدن حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳
                  روز انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] mt-[40px] text-left">
          <a href="#" className="text-blue-600 ">
            سوالات بیشتر ...
          </a>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[40%] text-center">
            <h3 className="my-[50] text-mainColor text-3xl font-bold">
              خط ارتباطی برای پاسخ به سوالات شما
            </h3>
            <a
              href="#"
              className="bg-blue-600 text-white px-[30px] py-[5px] rounded-3xl"
            >
              <span>بلولاین</span>
            </a>
          </div>
        </div>
      </section>
      {/* part 5 */}
      <section className="w-full flex justify-center items-center my-[120px]">
        <SwiperSlider />
      </section>
    </main>
  );
}
