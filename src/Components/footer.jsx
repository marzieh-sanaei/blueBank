import img11 from "./../image/11.png";
import img12 from "./../image/12.png";
import img13 from "./../image/13.png";
import img14 from "./../image/14.png";
import img15 from "./../image/15.png";
import img16 from "./../image/16.png";
import img17 from "./../image/17.png";
import Download from "./../image/download.png"

export default function Footer() {
  return (
    <>
      <footer className="w-full flex justify-center items-center flex-wrap bg-primary">
        <div className="w-full pt-[120px] md:flex block">
          <div className="w-[100%] md:w-[60%] flex md:justify-end justify-center">
            <div className="w-[80%]">
              <h3 className="text-white font-bold text-[25px] mb-[8px]">
                امنیت حساب‌ها در بلو
              </h3>
              <div>
                <h3 className="text-white text-base mb-[8px]">
                  نحوه حفاظت از سرمایه مشتریان
                </h3>
                <p className="text-white text-[14px] leading-8 mb-[8px]">
                  مبالغ سپرده‌‌های مشتریان در چارچوب ضوابط قانونی و تا سقف
                  قانونی تعیین شده مورد تضمین «صندوق ضمانت سپرده‌های بانک مرکزی»
                  است..
                </p>
                <h3 className="text-white text-base mb-[8px]">
                  پروتکل‌های امنیتی
                </h3>
                <p className="text-white text-[14px] leading-8 mb-[8px]">
                  در بلو همه پروتکل‌های امنیتی در سیستم‌های زیرساخت بانکی و
                  همچنین استانداردهای بانک مرکزی در خصوص تسویه وجوه و حسابداری،
                  به‌دقت رعایت شده است.
                </p>
                <h3 className="text-white text-base mb-[8px]">آسایش بیشتر</h3>
                <p className="text-white text-[14px] leading-8 mb-[8px]">
                  جایگزینی کارت بانکی با پول کاغذی به دلیل اشراف لحظه‌ای بر
                  دارایی‌های مشتریان، سبب امنیت دوچندان حساب‌های بانکی شده است.
                  این تجربه موفق نشان داده است، روند دیجیتالی شدن منجر به آسایش
                  و راحتی بیشتری برای مشتریان می‌شود.
                </p>
              </div>
              <div>
                <h4 className="text-white text-base mb-[8px]">ارتباط با ما</h4>
                <p className="text-white text-[14px] leading-8 mb-[8px]">
                  آدرس : تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک ۴۳
                  تلفن : ۹۱۰۳۶۰۶۰ - ۰۲۱
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] flex justify-center">
            <div>
              <a href="#" className="block mb-[15px]">
                <img src={img11} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img12} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img13} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img14} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img15} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img16} width={160} alt="google play" />
              </a>
              <a href="#" className="block mb-[15px]">
                <img src={img17} width={160} alt="google play" />
              </a>
            </div>
          </div>
        </div>
        <div className="block md:flex w-full mt-[20px] pb-[20px]">
          <div className="w-[100%] md:w-[41%] flex justify-center items-center">
            <div>
              <a href="#" className="text-white text-[14px] mr-[20px]">
                Contact us
                <span className="ml-[20px]">|</span>
              </a>
              <a href="#" className="text-white text-[14px] mr-[20px]">
                About us
                <span className="ml-[20px]" >|</span>
              </a>
              <a href="#" className="text-white text-[14px]">
                Hiring
              </a>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <div className="flex justify-center md:justify-end items-center">
              <p className="text-white text-[14px]"> Copyright © 2024 bluBank Saman. All rights reserved</p>
              <img src={Download} alt="icon download" width={46} className="mr-[20px]"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
