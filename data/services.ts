// data/services.ts
export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  content: string;
}

const services: ServiceItem[] = [
  {
    id: "s1",
    slug: "tu-van-phap-ly-doanh-nghiep",
    title: "Tư vấn pháp lý doanh nghiệp",
    description: "Đồng hành pháp lý toàn diện cho doanh nghiệp vừa và lớn.",
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246",
    benefits: [
      "Giảm thiểu rủi ro pháp lý",
      "Tối ưu chiến lược kinh doanh",
      "Bảo vệ quyền lợi doanh nghiệp"
    ],
    content:
      "Chúng tôi cung cấp tư vấn pháp lý chuyên sâu cho doanh nghiệp, bao gồm hợp đồng, nhân sự, thuế, mua bán sáp nhập (M&A) và quản trị doanh nghiệp."
  },
  {
    id: "s2",
    slug: "giai-quyet-tranh-chap",
    title: "Giải quyết tranh chấp",
    description: "Luật sư tranh tụng kinh nghiệm, bảo vệ quyền lợi tối đa.",
    image: "https://images.unsplash.com/photo-1528747045269-390fe33c19d3",
    benefits: [
      "Phân tích hồ sơ chuyên sâu",
      "Chiến lược tranh tụng hiệu quả",
      "Đại diện làm việc với cơ quan chức năng"
    ],
    content:
      "Dịch vụ giải quyết tranh chấp tại tòa án và trọng tài, đảm bảo chiến lược pháp lý vững chắc và hiệu quả cho khách hàng."
  },
  {
    id: "s3",
    slug: "soan-thao-hop-dong",
    title: "Soạn thảo & rà soát hợp đồng",
    description: "Chuẩn hóa hợp đồng để bảo vệ quyền lợi của bạn.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    benefits: [
      "Phân tích điều khoản rủi ro",
      "Tối ưu quyền lợi cho khách hàng",
      "Ngôn ngữ pháp lý rõ ràng, chặt chẽ"
    ],
    content:
      "Đội ngũ luật sư giàu kinh nghiệm hỗ trợ soạn thảo và rà soát hợp đồng cho cá nhân và doanh nghiệp."
  },
  {
    id: "s4",
    slug: "dang-ky-so-huu-tri-tue",
    title: "Đăng ký sở hữu trí tuệ",
    description: "Thủ tục đăng ký bản quyền, thương hiệu, sáng chế.",
    image: "https://images.unsplash.com/photo-1581090464777-29e8c68e3f7c",
    benefits: [
      "Tư vấn danh mục bảo hộ phù hợp",
      "Đại diện nộp hồ sơ",
      "Theo dõi quá trình và xử lý phản hồi"
    ],
    content:
      "Hỗ trợ doanh nghiệp đăng ký và bảo vệ tài sản trí tuệ: nhãn hiệu, logo, bản quyền, sáng chế."
  },
  {
    id: "s5",
    slug: "luat-dan-su-ca-nhan",
    title: "Tư vấn luật dân sự cá nhân",
    description: "Hỗ trợ giải quyết các vấn đề dân sự đời sống.",
    image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368",
    benefits: [
      "Tư vấn nhanh chóng, rõ ràng",
      "Bảo vệ quyền lợi hợp pháp",
      "Giải quyết đúng pháp luật"
    ],
    content:
      "Chuyên tư vấn các vấn đề dân sự: hợp đồng, tài sản, bồi thường thiệt hại, nghĩa vụ dân sự."
  },
  {
    id: "s6",
    slug: "tu-van-hon-nhan-gia-dinh",
    title: "Luật hôn nhân & gia đình",
    description: "Tư vấn ly hôn, chia tài sản, nuôi con…",
    image: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4",
    benefits: [
      "Bảo mật thông tin tuyệt đối",
      "Chiến lược ổn định tâm lý cho khách hàng",
      "Thủ tục nhanh chóng, chính xác"
    ],
    content:
      "Cung cấp tư vấn về hôn nhân: ly hôn, chia tài sản, quyền nuôi con, xác lập tài sản chung riêng."
  }
];

export default services;
