'use server';

/**
 * @fileOverview Determines the project category using an LLM, based on the project description.
 *
 * - categorizeProject - A function that takes a project description and returns the project category.
 * - CategorizeProjectInput - The input type for the categorizeProject function.
 * - CategorizeProjectOutput - The return type for the categorizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeProjectInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project for which a category is to be determined.'),
});
export type CategorizeProjectInput = z.infer<typeof CategorizeProjectInputSchema>;

const CategorizeProjectOutputSchema = z.object({
  category: z.string().describe('The determined category of the project.'),
});
export type CategorizeProjectOutput = z.infer<typeof CategorizeProjectOutputSchema>;

export async function categorizeProject(input: CategorizeProjectInput): Promise<CategorizeProjectOutput> {
  return categorizeProjectFlow(input);
}

const categorizeProjectPrompt = ai.definePrompt({
  name: 'categorizeProjectPrompt',
  input: {schema: CategorizeProjectInputSchema},
  output: {schema: CategorizeProjectOutputSchema},
  prompt: `Determine the most appropriate category for the following project description:

Project Description: {{{projectDescription}}}

Category:`, // Output will be used to populate the `category` field in CategorizeProjectOutputSchema
});

const categorizeProjectFlow = ai.defineFlow(
  {
    name: 'categorizeProjectFlow',
    inputSchema: CategorizeProjectInputSchema,
    outputSchema: CategorizeProjectOutputSchema,
  },
  async input => {
    const {output} = await categorizeProjectPrompt(input);
    return output!;
  }
);
