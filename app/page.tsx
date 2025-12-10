import { Box, Container } from "@mui/material";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import LawyerHighlight from "@/components/home/LawyerHighlight";
import ClientLogos from "@/components/home/ClientLogos";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/common/CTASection";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Container maxWidth="lg">
        <ServicesOverview />
        <LawyerHighlight />
        <ClientLogos />
        <Testimonials />
        <WhyChooseUs />
      </Container>

      <CTASection
      />
    </Box>
  );
}
