// app/dich-vu/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Container, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";
import { services } from "@/lib/mockData";

// Đúng kiểu cho Next.js 15+: params là Promise
interface Props {
  params: Promise<{ slug: string }>;
}

// Build tĩnh tất cả các trang dịch vụ → tốc độ cực nhanh + SEO hoàn hảo
export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

// Page component phải là async để await params
export default async function ServiceDetailPage({ params }: Props) {
  // Bắt buộc phải await params
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={5}>
        {/* Tiêu đề sang trọng */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            color: "#0d47a1",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          {service.title}
        </Typography>

        {/* Ảnh bìa */}
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={1200}
            height={600}
            priority // ảnh hero nên ưu tiên tải
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Nội dung chi tiết */}
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 17, md: 18 },
              lineHeight: 1.8,
              color: "text.secondary",
              whiteSpace: "pre-line", // hỗ trợ xuống dòng trong mock data
            }}
          >
            {service.description}
          </Typography>
        </Box>

        {/* Có thể thêm các phần khác ở đây sau này: quy trình, case study, form tư vấn... */}
      </Stack>
    </Container>
  );
}