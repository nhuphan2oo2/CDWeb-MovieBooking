import clsx from "clsx";
import { useState } from "react";

const BookingHistory = () => {
  const films = [
    {
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
    },
    {
      id: "540df14d-8591-43b4-bf87-df8155ff187a",
      name_vn: "THANH XUÂN 18x2: LỮ TRÌNH HƯỚNG VỀ EM (T13)",
      name_en: "18X2 BEYOND YOUTHFUL DAYS (T13)",
      director: "Michihito Fujii",
      actor: "Hứa Quang Hán, Kiyohara Kaya, Trương Chấn",
      country_id: "ab21efed-68c1-4fcc-a172-3496f0bf9539",
      country_name_vn: "Khác",
      country_name_en: "Other",
      formats_id: "7835de0f-c073-43d4-a086-e1d9ae8dbed4",
      formats_name_vn: "2D",
      formats_name_en: "2D",
      type_id: "1bfe9d04-d045-405f-b2b0-22eb5be4c13b",
      type_name_vn: "Tình Cảm",
      type_name_en: "Romance",
      release_date: "4/3/2024 12:00:00 AM",
      end_date: "4/30/2024 12:00:00 AM",
      brief_vn:
        "Ký ức tình đầu ùa về khi Jimmy nhận được tấm bưu thiếp từ Ami. Cậu quyết định một mình bước lên chuyến tàu đến Nhật Bản gặp lại người con gái cậu đã bỏ lỡ 18 năm trước. Mối tình day dứt thời thanh xuân, liệu sẽ có một kết cục nào tốt đẹp khi đoàn tụ?",
      brief_en: "",
      image:
        "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/04-2024/thanh-xuan-18x2-poster-2.jpg",
      himage: "",
      trailer: "kpzTxHLwTJ4",
      status: "2",
      ratings: "",
      time: "135",
      limitage_id: "16e1ac95-3413-4069-8852-3df676ee17e6",
      limitage_vn: "T13",
      limitage_en: "T13",
      language_id: "1db4ab93-0c22-44d5-96f1-f78f8e3a0ecb",
      language_vn: "Phụ Đề",
      language_en: "VN",
      sortorder: "2",
    },
  ];
  const [visibleForm, setVisibleForm] = useState(false);
  const [index, setIndex] = useState<number>(-1);

  const modalClass = clsx(
    "bg-gray-900 w-[550px] h-fit p-5 pt-0 rounded flex flex-col gap-3",
    visibleForm ? "animate-detail-film" : "animate-detail-film"
  );
  return (
    <div className="flex flex-col w-3/4 gap-5 p-5">
      {visibleForm && (
        <div
          id={`detail-${index}`}
          className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-hidden bg-opacity-50 bg-slate-600"
        >
          <div className={modalClass}>
            <div
              className="cursor-pointer text-end text-[30px]"
              onClick={() => setVisibleForm(false)}
            >
              x
            </div>
            <div className="flex flex-col justify-center gap-5 text-center">
              <div className="w-32 mx-auto">
                <img className="rounded" src={films[index].image} alt="" />
              </div>
              <div>{films[index].name_vn}</div>
            </div>
            <div className="w-full border border-gray-300 border-dashed"></div>
            <div className="text-center ">14:15 - 18/04/2024</div>
            <div className="w-full border border-gray-300 border-dashed"></div>

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
        <div className="text-[22px] font-light uppercase">
          Lịch sử giao dịch
        </div>
        <div className=" bg-gray-900 h-[2px] rounded-md"></div>
      </div>
      <div className="flex flex-col gap-5">
        {films.map((film, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between py-2 pl-3 pr-4 mx-2 text-gray-900 bg-gray-200 rounded cursor-pointer hover:scale-[1.01] duration-150"
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
          );
        })}
      </div>
    </div>
  );
};
export default BookingHistory;
