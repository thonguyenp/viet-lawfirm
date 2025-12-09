// data/testimonials.ts
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "ts1",
    name: "Trần Đức Thịnh",
    role: "CEO startup công nghệ",
    content:
      "Viet LawFirm giúp chúng tôi xử lý toàn bộ hồ sơ pháp lý khi gọi vốn. Dịch vụ nhanh chóng, chuyên nghiệp.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: "ts2",
    name: "Nguyễn Thu Hà",
    role: "Giám đốc nhân sự",
    content:
      "Dịch vụ tư vấn lao động của công ty thật sự chất lượng, giúp doanh nghiệp giảm thiểu rủi ro pháp lý.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: "ts3",
    name: "Lê Quốc Vinh",
    role: "Nhà đầu tư",
    content:
      "Đội ngũ luật sư giàu kinh nghiệm, hỗ trợ tôi rất nhiều trong việc đánh giá rủi ro pháp lý trước khi đầu tư.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  }
];

export default testimonials;
