import { Calendar, Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // create a new calendar with prisma
      const calendar = prisma.calendar.create({
        data: {
          userId: input.id,
        },
      });

      return {
        greeting: `Hello`,
      };
    }),
});
