import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import YAML from 'yaml';
import { z } from 'zod';

const publicationLinkLabelSchema = z.enum(['official', 'arxiv', 'code', 'award', 'slides']);
const profileLinkIconSchema = z.enum(['scholar', 'linkedin', 'email']);
const urlSchema = z.string().min(1).refine((url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}, 'Use a valid URL');

const linkSchema = z.object({
  label: z.string().min(1),
  url: urlSchema,
});

const profileLinkSchema = z.object({
  label: z.string().min(1),
  icon: profileLinkIconSchema,
  url: urlSchema,
});

const publicationLinkSchema = z.object({
  label: publicationLinkLabelSchema,
  url: urlSchema,
});

const profileSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  headshot: z
    .object({
      initials: z.string().min(1).max(4).default('HZ'),
      src: z.string().optional().nullable(),
      alt: z.string().min(1).default('Profile headshot'),
    })
    .default({
      initials: 'HZ',
      alt: 'Profile headshot',
    }),
  summary: z.array(z.string().min(1)),
  highlights: z.array(z.string().min(1)).default([]),
  links: z.array(profileLinkSchema).default([]),
});

const publicationSchema = z
  .object({
    title: z.string().min(1),
    authors: z.string().min(1),
    venue: z.string().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD'),
    note: z.string().optional(),
    topics: z.array(z.string().min(1)).min(1),
    links: z.array(publicationLinkSchema).default([]),
    selected: z.boolean().default(false),
  })
  .transform((publication) => ({
    ...publication,
    year: Number(publication.date.slice(0, 4)),
  }));

const servicesSchema = z.object({
  reviewing: z.array(z.string().min(1)),
  organising: z.array(
    z.object({
      title: z.string().min(1),
      venue: z.string().min(1),
      year: z.number().int().min(1900).max(2100),
      url: urlSchema.optional(),
    }),
  ),
});

const talksSchema = z.array(
  z.object({
    title: z.string().min(1),
    venue: z.string().min(1),
    year: z.number().int().min(1900).max(2100).optional(),
    date: z.string().optional(),
    url: urlSchema.optional(),
    links: z.array(linkSchema).default([]),
  }),
);

type DataFile = 'profile' | 'publications' | 'services' | 'talks';

function readYaml(file: DataFile) {
  const pathname = resolve(process.cwd(), `src/data/${file}.yaml`);
  return YAML.parse(readFileSync(pathname, 'utf8'));
}

function parseData<S extends z.ZodTypeAny>(file: DataFile, schema: S): z.output<S> {
  const result = schema.safeParse(readYaml(file));

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join('.') || file}: ${issue.message}`)
      .join('\n');
    throw new Error(`Invalid ${file}.yaml\n${details}`);
  }

  return result.data;
}

export const profile = parseData('profile', profileSchema);
export const publications = parseData('publications', z.array(publicationSchema)).sort(
  (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
);
export const publicationTopics = Array.from(
  new Set(publications.flatMap((publication) => publication.topics)),
);
export const services = parseData('services', servicesSchema);
export const talks = parseData('talks', talksSchema);

export type Publication = z.infer<typeof publicationSchema>;
