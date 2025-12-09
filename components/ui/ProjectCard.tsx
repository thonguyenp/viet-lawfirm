"use client";

import { Box, Stack } from "@mui/material";
import { ProjectItem } from "@/data/projects";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))",
        }}
      />

      <Stack
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "#fff",
        }}
        spacing={1}
      >
        <Box sx={{ fontSize: "24px", fontWeight: 600 }}>{project.title}</Box>

        <Box
          component="a"
          href="/du-an"
          sx={{ color: "#d4af37", fontWeight: 600 }}
        >
          Xem chi tiết →
        </Box>
      </Stack>
    </Box>
  );
}
