import { z } from 'zod';

export const feedbackSchema = z.object({
  rating: z.number({ required_error: 'Please give minimum 1 rating' }),
  message: z
    .string({ required_error: 'Please enter your message' })
    .min(5, { message: 'Please write minimum 5 letter' })
});
