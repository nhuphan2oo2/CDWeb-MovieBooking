import { Link } from "react-router-dom";
import FilmCard from "../../components/FilmCard";

const SearchPage = () => {
  const film = {
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
    sortorder: "1",
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-[40px] text-center">Kết quả tìm kiếm</div>
      <div className="my-7">
        <div className="w-[300px]">
          <Link to={`/film/${film.id}`}>
            <FilmCard key={film.id} film={film} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
