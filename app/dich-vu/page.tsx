import { Box, Container, Typography, Stack } from "@mui/material";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/mockData";

export default function DichVuPage() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={4} py={6} className="fade-in">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            color: "#0d47a1",
          }}
        >
          Dịch vụ pháp lý của Công Ty Luật Việt Minh
        </Typography>

        <Typography fontSize={18} lineHeight={1.7}>
          Chúng tôi cung cấp các dịch vụ pháp lý toàn diện cho doanh nghiệp và
          cá nhân, đảm bảo chất lượng – uy tín – hiệu quả. Mỗi dịch vụ được triển
          khai bởi các luật sư giàu kinh nghiệm trong từng lĩnh vực.
        </Typography>

        <Stack direction="row" spacing={3}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
