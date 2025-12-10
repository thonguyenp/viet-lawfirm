import { Box, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function GioiThieuPage() {
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
          Giới thiệu về Công Ty Luật Việt Minh
        </Typography>

        <Typography fontSize={18} lineHeight={1.7}>
          Công Ty Luật Việt Minh là công ty luật uy tín, cung cấp các dịch vụ pháp lý chất
          lượng cao cho doanh nghiệp, tổ chức và cá nhân. Với đội ngũ luật sư
          giàu kinh nghiệm, chúng tôi cam kết mang lại giải pháp tối ưu và hiệu
          quả nhất cho khách hàng.
        </Typography>

        <Box>
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Giới thiệu công ty luật"
            width={1200}
            height={600}
            style={{ width: "100%", borderRadius: 12 }}
          />
        </Box>

        <Typography fontSize={18} lineHeight={1.7}>
          Chúng tôi luôn đề cao giá trị đạo đức nghề nghiệp, tính minh bạch và
          bảo mật thông tin. Công Ty Luật Việt Minh đồng hành cùng sự phát triển bền vững
          của khách hàng và đóng góp vào sự thịnh vượng của cộng đồng doanh
          nghiệp Việt Nam.
        </Typography>
      </Stack>
    </Container>
  );
}
