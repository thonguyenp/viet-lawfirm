"use client";

import { Container, Typography, Stack, Box } from "@mui/material";
import ContactForm from "@/components/common/ContactForm";

export default function LienHePage() {
  return (
    <Container maxWidth="md">
      <Stack spacing={4} py={6} className="fade-in">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            color: "#0d47a1",
          }}
        >
          Liên hệ với Công Ty Luật Việt Minh
        </Typography>

        <Typography fontSize={18} lineHeight={1.7}>
          Vui lòng điền thông tin của bạn vào biểu mẫu dưới đây. Chúng tôi sẽ phản
          hồi trong thời gian sớm nhất.  
          Mọi thông tin được bảo mật tuyệt đối.
        </Typography>

        <Box>
          <ContactForm />
        </Box>
      </Stack>
    </Container>
  );
}
