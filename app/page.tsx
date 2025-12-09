// ===============================
// app/page.tsx  (Trang chủ)
// ===============================
import Hero from "@/components/ui/Hero";
import services from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import projects from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import team from "@/data/team";
import TeamCard from "@/components/ui/TeamCard";
import testimonials from "@/data/testimonials";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import StatsCounter from "@/components/ui/StatsCounter";
import CTASection from "@/components/ui/CTASection";
import SectionTitle from "@/components/ui/SectionTitle";
import PartnerLogos from "@/components/ui/PartnerLogos";

import { Box, Stack, Container } from "@mui/material";

export default function HomePage() {
  return (
    <Box>

      <Hero
        keyword="law firm premium"
        title="VIET-LAWFIRM"
        subtitle="Bảo vệ quyền lợi của bạn với đội ngũ luật sư giàu kinh nghiệm"
        ctaPrimary="Tư vấn ngay"
        ctaSecondary="Xem dịch vụ"
      />

      <Box sx={{ background: "#f5f5f5", py: 10 }}>
        <Container>
          <SectionTitle title="Dịch vụ nổi bật" />
          <Stack direction="row" flexWrap="wrap" spacing={1} justifyContent="center">
            {services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 10 }}>
        <SectionTitle title="Dự án tiêu biểu" />
        <Stack direction="row" spacing={4} overflow="auto" px={4}>
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </Stack>
      </Box>

      <Box sx={{ background: "#000", py: 10 }}>
        <Container>
          <SectionTitle title="Thành tựu" color="#d4af37" />
          <Stack direction="row" spacing={6} flexWrap="wrap" justifyContent="center">
            <StatsCounter icon="⚖️" number={250} label="Vụ án thành công" />
            <StatsCounter icon="🏆" number={120} label="Giải thưởng" />
            <StatsCounter icon="👨‍💼" number={40} label="Luật sư" />
            <StatsCounter icon="📁" number={980} label="Hồ sơ xử lý" />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: "#fff", py: 10 }}>
        <Container>
          <SectionTitle title="Đội ngũ luật sư" />
          <Stack direction="row"  flexWrap="wrap" spacing={6} justifyContent="center">
            {team.map((item) => (
              <TeamCard key={item.id} member={item} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: "#e9d6a0", py: 10 }}>
        <Container>
          <SectionTitle title="Khách hàng nói gì?" color="#000" />
          <TestimonialSlider testimonials={testimonials} />
        </Container>
      </Box>

      <CTASection
        title="Sẵn sàng bảo vệ quyền lợi của bạn?"
        buttonText="Liên hệ ngay"
      />

    <PartnerLogos
      logos={[
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6",
      ]}
    />
    </Box>
  );
}
