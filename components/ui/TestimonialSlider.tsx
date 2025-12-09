"use client";

import { Box, Stack } from "@mui/material";
import { TestimonialItem } from "@/data/testimonials";
import { motion } from "framer-motion";
import { useState } from "react";

export interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <Box sx={{ width: "100%", background: "#f7e9b0", py: 10 }}>
      <Stack
        component={motion.div}
        key={testimonials[index].id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        spacing={3}
        sx={{ textAlign: "center", maxWidth: "700px", mx: "auto" }}
      >
        <Box
          sx={{
            width: "120px",
            height: "120px",
            mx: "auto",
            borderRadius: "50%",
            backgroundImage: `url(${testimonials[index].avatar})`,
            backgroundSize: "cover",
          }}
        />

        <Box
          sx={{
            fontSize: "20px",
            fontStyle: "italic",
            mx: "auto",
            maxWidth: "500px",
          }}
        >
          “{testimonials[index].content}”
        </Box>

        <Box sx={{ fontWeight: 600, color: "#000" }}>
          — {testimonials[index].name}
        </Box>

        <Box
          onClick={next}
          sx={{
            mx: "auto",
            mt: 2,
            cursor: "pointer",
            color: "#000",
            borderBottom: "2px solid #000",
            fontWeight: 600,
            width: "fit-content",
          }}
        >
          Tiếp →
        </Box>
      </Stack>
    </Box>
  );
}
