export type Movie = {
  id: number;
  name_vn?: string;
  name_en?: string;
  director?: string;
  actor?: string;
  country_id?: string;
  country_name_vn?: string;
  country_name_en?: string;
  formats_id?: string;
  formats_name_vn?: string;
  formats_name_en?: string;
  type_id?: string;
  type_name_vn?: string;
  type_name_en?: string;
  release_date?: string;
  end_date?: string;
  brief_vn?: string;
  brief_en?: string;
  image?: string;
  himage?: string;
  trailer?: string;
  status?: string;
  ratings?: string;
  time?: string;
  limitage_id?: string;
  limitage_vn?: string;
  limitage_en?: string;
  language_id?: string;
  language_vn?: string;
  language_en?: string;
  sortorder?: string;
};

export type Setting = {
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
};

export type SeatType = {
  id?: number;
  seatIndex?: string;
  status?: number;
  screen?: ScreenType;
};

export type UserType = {
  name?: string;
  birth?: string;
  email?: string;
  phone?: string;
  password?: string;
};
export type ShowTimeType = {
  id?: number;
  startTime?: string;
  endTime?: string;
  price?: number;
  movie?: Movie;
  screen?: ScreenType;
  status?: number;
};
export type ScreenType = {
  id?: number;
  capacity?: number;
  status?: number;
};
