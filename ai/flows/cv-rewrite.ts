// cv-rewrite.ts
'use server';
/**
 * @fileOverview A CV rewrite AI agent.
 *
 * - rewriteCvSection - A function that handles the CV rewriting process.
 * - RewriteCvSectionInput - The input type for the rewriteCvSection function.
 * - RewriteCvSectionOutput - The return type for the rewriteCvSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteCvSectionInputSchema = z.object({
  cvSection: z.string().describe('The section of the CV to rewrite.'),
});
export type RewriteCvSectionInput = z.infer<typeof RewriteCvSectionInputSchema>;

const RewriteCvSectionOutputSchema = z.object({
  rewrittenSection: z.string().describe('The rewritten section of the CV.'),
});
export type RewriteCvSectionOutput = z.infer<typeof RewriteCvSectionOutputSchema>;

export async function rewriteCvSection(input: RewriteCvSectionInput): Promise<RewriteCvSectionOutput> {
  return rewriteCvSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteCvSectionPrompt',
  input: {schema: RewriteCvSectionInputSchema},
  output: {schema: RewriteCvSectionOutputSchema},
  prompt: `You are an expert CV writer. Rewrite the following section of a CV to be more compelling. Do not save the CV content.

Section: {{{cvSection}}}`,
});

const rewriteCvSectionFlow = ai.defineFlow(
  {
    name: 'rewriteCvSectionFlow',
    inputSchema: RewriteCvSectionInputSchema,
    outputSchema: RewriteCvSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
