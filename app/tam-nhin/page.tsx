import { Box, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function TamNhinPage() {
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
          Tầm nhìn & Sứ mệnh
        </Typography>

        <Typography fontSize={18} lineHeight={1.7}>
          Công Ty Luật Việt Minh hướng tới trở thành công ty luật hàng đầu Việt Nam, cung
          cấp dịch vụ pháp lý đẳng cấp quốc tế. Chúng tôi luôn đặt khách hàng
          làm trung tâm, đảm bảo uy tín, chất lượng và hiệu quả trong từng vụ
          việc.
        </Typography>

        <Box>
          <Image
            src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db"
            alt="Tầm nhìn công ty luật"
            width={1200}
            height={600}
            style={{ width: "100%", borderRadius: 12 }}
          />
        </Box>

        <Typography fontSize={18} lineHeight={1.7}>
          Sứ mệnh của chúng tôi là cung cấp giải pháp pháp lý toàn diện, sáng
          tạo và phù hợp với từng khách hàng. Công Ty Luật Việt Minh cam kết đồng hành lâu
          dài, bảo vệ quyền lợi và phát triển bền vững cùng cộng đồng doanh
          nghiệp.
        </Typography>
      </Stack>
    </Container>
  );
}
