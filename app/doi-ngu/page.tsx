import { Container, Typography, Stack } from "@mui/material";
import { lawyers } from "@/lib/mockData";
import LawyerCard from "@/components/team/LawyerCard";

export default function DoiNguPage() {
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
          Đội ngũ luật sư của Công Ty Luật Việt Minh
        </Typography>

        <Typography fontSize={18} lineHeight={1.7}>
          Chúng tôi tự hào sở hữu đội ngũ luật sư dày dặn kinh nghiệm, chuyên môn
          sâu rộng và tận tâm với khách hàng.
        </Typography>

        <Stack direction="row" spacing={3}>
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
