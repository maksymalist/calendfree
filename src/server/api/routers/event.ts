import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        calendarId: z.string(),
        name: z.string(),
        description: z.string().nullable().nullish(),
        start: z.string(),
        end: z.string(),
        allDay: z.boolean().nullable().nullish(),
        color: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const uid = ctx.session?.user.id;

      const event = await prisma.event.create({
        data: {
          userId: uid,
          calendarId: input.calendarId,
          name: input.name,
          description: input.description || "",
          start: input.start,
          end: input.end,
          allDay: input.allDay || false,
          color: input.color,
        },
      });

      return {
        event,
      };
    }),
});
