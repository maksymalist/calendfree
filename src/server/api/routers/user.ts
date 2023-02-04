import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });

      return {
        user,
      };
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().nullable().nullish(),
        bio: z.string().nullable().nullish(),
        location: z.string().nullable().nullish(),
        job: z.string().nullable().nullish(),
        education: z.string().nullable().nullish(),
        website: z.string().nullable().nullish(),
        phone_number: z.string().nullable().nullish(),
        email: z.string().nullable().nullish(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("INPUT", input);
      const user = await prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          bio: input.bio,
          location: input.location,
          job: input.job,
          education: input.education,
          website: input.website,
          phone_number: input.phone_number,
          email: input.email,
        },
      });

      console.log("UPDATED USER", user);

      return {
        user,
      };
    }),
});

// z.object({
//   id: z.string(),
//   name: z.string().nullable().nullish(),
//   bio: z.string().nullable().nullish(),
//   location: z.string().nullable().nullish(),
//   job: z.string().nullable().nullish(),
//   education: z.string().nullable().nullish(),
//   website: z.string().nullable().nullish(),
//   phone_number: z.string().nullable().nullish(),
//   email: z.string().nullable().nullish(),
// })
