import clsx from "clsx";
import { useState } from "react";

const SuccessBookingPage = () => {
  const film = {
    id: "89155a45-a4d8-49a5-ae94-4d3cb5e73843",
    name_vn: "CÁI GIÁ CỦA HẠNH PHÚC (T18)",
    name_en: "",
    director: "Nguyễn Ngọc Lâm",
    actor: "Thái Hòa, Xuân Lan, Lâm Thanh Nhã, Uyển Ân",
    country_id: "e05acda1-df71-4578-a40b-6766a1ba8e23",
    country_name_vn: "Việt Nam",
    country_name_en: "VietNam",
    formats_id: "7835de0f-c073-43d4-a086-e1d9ae8dbed4",
    formats_name_vn: "2D",
    formats_name_en: "2D",
    type_id:
      "1bfe9d04-d045-405f-b2b0-22eb5be4c13b,a970a694-a823-4ca3-b6ea-cb8b3f44f2bd",
    type_name_vn: "Tình Cảm, Tâm Lý",
    type_name_en: "Romance, Drama",
    release_date: "4/18/2024 12:00:00 AM",
    end_date: "5/26/2024 12:00:00 AM",
    brief_vn:
      "Bà Dương và ông Thoại luôn cố gắng để xây dựng một hình ảnh gia đình tài giỏi và danh giá trong mắt mọi người. Tuy nhiên dưới lớp vỏ bọc hào nhoáng ấy là những biến cố và lục đục gia đình đầy sóng gió. Nhìn kĩ hơn một chút bức tranh gia đình hạnh phúc ấy, rất nhiều “khuyết điểm” sẽ lộ ra gây bất ngờ.",
    brief_en: "",
    image:
      "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/04-2024/cai-gia-cua-hanh-phuc-poster.jpg",
    himage: "",
    trailer: "7Bysp9dT_Wg",
    status: "2",
    ratings: "",
    time: "130",
    limitage_id: "c25ef778-7dd2-4371-a854-11a7c502becc",
    limitage_vn: "T18",
    limitage_en: "T18",
    language_id: "8cccac51-8401-46b0-9807-711723da953c",
    language_vn: "VN",
    language_en: "EN",
    sortorder: "1",
  };
  const [visibleForm, setVisibleForm] = useState(false);
  const [index, setIndex] = useState<number>(-1);
  const handleCloseForm = () => {
    document.querySelector("#form")?.classList.remove("animate-film-form-open");
    document.querySelector("#form")?.classList.add("animate-film-form-close");
    setTimeout(() => {
      setVisibleForm(false);
    }, 300);
  };
  const modalClass = clsx(
    "bg-quaternary w-[550px] h-fit p-5 pt-0 rounded  flex-col gap-3 ",
    visibleForm ? " animate-film-form-open flex" : "hidden"
  );
  return (
    <div className="flex flex-col w-full gap-10 mx-auto max-w-7xl">
      <div className="flex flex-col w-full gap-5 p-5 mx-auto">
        {visibleForm && (
          <div
            id={`detail-${index}`}
            className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-hidden bg-opacity-50 bg-primary"
          >
            <div id="form" className={modalClass}>
              <div
                className="cursor-pointer text-end text-[30px]"
                onClick={() => handleCloseForm()}
              >
                x
              </div>
              <div className="flex flex-col justify-center gap-5 text-center">
                <div className="w-32 mx-auto">
                  <img className="rounded" src={film.image} alt="" />
                </div>
                <div>{film.name_vn}</div>
              </div>
              <div className="w-full border border-dashed border-secondary"></div>
              <div className="text-center ">14:15 - 18/04/2024</div>
              <div className="w-full border border-dashed border-secondary"></div>
              <div className="flex justify-between">
                <div>Số vé</div>
                <div>Chỗ ngồi</div>
                <div>Tổng tiền</div>
              </div>
              <div className="flex justify-between text-center">
                <div>2 vé</div>
                <div className="text-wrap max-w-64">
                  G11, G12, G10, G9, G8, G7, G6, G5, G4, G3, G2, G1 G3, G2, G1
                </div>
                <div>250,000VND</div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div className="text-[22px] font-light ">
            Xin cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
          </div>
          <div className="text-[22px] ">
            Vui lòng kiểm tra
            <strong>
              <a href="https://www.gmail.com"> email </a>
            </strong>
            để nhận thông tin chi tiết về đặt vé của bạn.
          </div>
          {/* <div className=" bg-primary h-[2px] rounded-md"></div> */}
        </div>
        <div className="flex flex-col gap-5">
          <div
            key={index}
            className="flex items-center justify-between py-2 pl-3 pr-4 mx-2 text-primary bg-gray-200 rounded cursor-pointer hover:scale-[1.01] duration-150"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-20 h-24 rounded aspect-auto"
                src={film.image}
                alt=""
              />
              <div className="w-80">{film.name_vn}</div>
            </div>

            <div>14:40 - 05/10/2023</div>
            <div>250,000VND</div>
            <label
              htmlFor={`detail-${index}`}
              onClick={() => {
                setIndex(index);
                setVisibleForm(!visibleForm);
              }}
              className="cursor-pointer hover:scale-105"
            >
              Chi tiết
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessBookingPage;
