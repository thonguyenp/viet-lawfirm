"use client";

import { Box, Stack } from "@mui/material";
import { TeamMember } from "@/data/team";
import { motion } from "framer-motion";

export interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      sx={{
        width: {
            xs: "100%",   // mobile
            sm: "48%",    // tablet
            md: "20%",    // desktop: 3 cột
        },        
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "280px",
          height: "280px",
          borderRadius: "12px",
          mx: "auto",
          backgroundImage: `url(${member.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Stack spacing={1} sx={{ mt: 2 }}>
        <Box
          sx={{
            fontFamily: "Cinzel",
            fontSize: "22px",
            fontWeight: 700,
            color: "#d4af37",
          }}
        >
          {member.name}
        </Box>

        <Box sx={{ fontSize: "16px", color: "#444" }}>{member.position}</Box>

        <Box
          component="a"
          href={member.linkedin}
          target="_blank"
          sx={{
            mt: 1,
            color: "#d4af37",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          LinkedIn
        </Box>
      </Stack>
    </Box>
  );
}
