// data/team.ts
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  linkedin: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    id: "t1",
    name: "Luật sư Nguyễn Hoàng Minh",
    position: "Giám đốc điều hành",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    linkedin: "https://linkedin.com",
    bio: "15 năm kinh nghiệm tư vấn pháp lý cho doanh nghiệp và đầu tư quốc tế."
  },
  {
    id: "t2",
    name: "Luật sư Trần Thu Ngọc",
    position: "Trưởng phòng tranh tụng",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    linkedin: "https://linkedin.com",
    bio: "Chuyên gia giải quyết tranh chấp thương mại phức tạp."
  },
  {
    id: "t3",
    name: "Luật sư Phạm Hữu Tài",
    position: "Chuyên gia hợp đồng",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    linkedin: "https://linkedin.com",
    bio: "Phân tích & soạn thảo hợp đồng hiệu quả cho doanh nghiệp."
  },
  {
    id: "t4",
    name: "Luật sư Lê Minh Ánh",
    position: "Cố vấn pháp lý doanh nghiệp",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    linkedin: "https://linkedin.com",
    bio: "Đồng hành pháp lý dài hạn cùng các công ty trong nhiều lĩnh vực."
  }
];

export default team;
