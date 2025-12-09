"use client";

import { Box, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface StatsCounterProps {
  icon: React.ReactNode;
  number: number;
  label: string;
}

export default function StatsCounter({ icon, number, label }: StatsCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.floor(value).toString());

  useEffect(() => {
    const controls = animate(count, number, { duration: 2 });

    return controls.stop;
  }, [number]);

  return (
    <Stack
      spacing={1}
      component={motion.div}
      sx={{ textAlign: "center", color: "#d4af37" }}
    >
      <Box sx={{ fontSize: "40px" }}>{icon}</Box>

      <motion.div style={{ fontSize: "42px", fontWeight: 700 }}>
        {rounded}
      </motion.div>

      <Box sx={{ fontSize: "16px", color: "#fff" }}>{label}</Box>
    </Stack>
  );
}
