// data/projects.ts
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Tư vấn M&A cho tập đoàn F&B",
    description: "Hỗ trợ pháp lý thương vụ mua lại chuỗi nhà hàng lớn tại Việt Nam.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    link: "/du-an"
  },
  {
    id: "p2",
    title: "Bảo vệ doanh nghiệp trong vụ kiện thương mại",
    description: "Chiến lược tranh tụng thành công giúp doanh nghiệp thắng kiện.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    link: "/du-an"
  },
  {
    id: "p3",
    title: "Đăng ký thương hiệu quốc tế",
    description: "Thương hiệu Việt mở rộng ra thị trường toàn cầu.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    link: "/du-an"
  }
];

export default projects;
