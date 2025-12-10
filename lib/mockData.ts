import { Service, Lawyer, Testimonial } from "@/types";

export const services: Service[] = [
  {
    slug: "tu-van-doanh-nghiep",
    title: "Tư vấn pháp lý doanh nghiệp",
    description: "Đồng hành cùng doanh nghiệp trong mọi hoạt động pháp lý, đảm bảo tuân thủ và phát triển bền vững.",
    content:
      "Chúng tôi cung cấp dịch vụ tư vấn toàn diện về pháp lý doanh nghiệp, hỗ trợ thành lập công ty, soạn thảo hợp đồng, giải quyết tranh chấp và đảm bảo tuân thủ pháp luật trong quá trình vận hành.",
    image:
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "dan-su-hop-dong",
    title: "Dân sự & Hợp đồng",
    description: "Tư vấn, soạn thảo và giải quyết tranh chấp trong các giao dịch dân sự, hợp đồng.",
    content:
      "Dịch vụ bao gồm tư vấn hợp đồng, giải quyết tranh chấp dân sự, đàm phán các điều khoản quan trọng và hỗ trợ khách hàng đảm bảo quyền lợi tối đa.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "lao-dong-bao-hiem",
    title: "Lao động & Bảo hiểm",
    description: "Hỗ trợ doanh nghiệp và người lao động giải quyết các vấn đề pháp lý trong quan hệ lao động.",
    content:
      "Chúng tôi xử lý tranh chấp lao động, chấm dứt hợp đồng, kỷ luật lao động, bảo hiểm xã hội, bảo hiểm thất nghiệp và xây dựng quy chế lao động cho doanh nghiệp.",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "hinh-su",
    title: "Hình sự",
    description: "Luật sư bào chữa chuyên nghiệp, bảo vệ quyền lợi trong các vụ án hình sự.",
    content:
      "Với kinh nghiệm dày dặn, chúng tôi tham gia bào chữa, tư vấn pháp lý và hỗ trợ khách hàng trong mọi giai đoạn tố tụng hình sự.",
    image:
      "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=80"
  }
];

export const lawyers: Lawyer[] = [
  {
    id: "1",
    name: "Luật sư Nguyễn Văn An",
    role: "Luật sư sáng lập",
    bio: "Chuyên gia trong lĩnh vực doanh nghiệp, hợp đồng và đầu tư. Hơn 15 năm kinh nghiệm tư vấn pháp lý chuyên sâu.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "2",
    name: "Luật sư Trần Thị Minh",
    role: "Luật sư tranh tụng",
    bio: "Tập trung vào tranh tụng dân sự và hình sự với hàng trăm vụ án thành công.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "3",
    name: "Luật sư Phạm Quốc Huy",
    role: "Chuyên gia lao động",
    bio: "Hỗ trợ doanh nghiệp và người lao động giải quyết tranh chấp, xây dựng nội quy và quy chế lao động.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Nguyễn Thị Lan",
    position: "Giám đốc nhân sự",
    message:
      "Công Ty Luật Việt Minh đã giúp công ty chúng tôi xử lý tranh chấp lao động một cách chuyên nghiệp và hiệu quả. Rất đáng tin cậy!",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    author: "Phạm Hoàng Minh",
    position: "CEO Startup Fintech",
    message:
      "Tư vấn pháp lý doanh nghiệp rất sâu sát và thực tế. Nhờ đó startup của tôi tránh được rất nhiều rủi ro pháp lý.",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    author: "Lê Quốc Tuấn",
    position: "Khách hàng cá nhân",
    message:
      "Luật sư hỗ trợ nhiệt tình và giải thích mọi vấn đề pháp lý rất rõ ràng. Tôi cảm thấy an tâm tuyệt đối.",
    avatar:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80"
  }
];
