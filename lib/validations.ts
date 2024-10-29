import { z } from "zod";

// Define the SituationMatrimoniale schema
export const SituationMatrimonialeSchema = z.object({
  member_id: z.string(),
  etat: z.enum(["Marié", "Célibataire"]),
  nombre_enfants: z.number().nonnegative(), // Ensure number of children is non-negative
});

// Infer TypeScript type from the schema
export type SituationMatrimoniale = z.infer<typeof SituationMatrimonialeSchema>;

// Define the Decoration schema
export const DecorationSchema = z.object({
  member_id: z.string(),
  est_decore: z.boolean(),
  date: z.string().optional(),
  lieu: z.string().optional(),
  medaille: z.string().optional(),
});

// Infer TypeScript type from the schema
export type Decoration = z.infer<typeof DecorationSchema>;

// Define the Sanction schema
export const SanctionSchema = z.object({
  member_id: z.string(),
  date: z.string(),
  lieu: z.string(),
  motif: z.string(),
});

// Infer TypeScript type from the schema
export type Sanction = z.infer<typeof SanctionSchema>;

// Define the MaitreDosoReferent schema
export const MaitreDosoReferentSchema = z.object({
  id: z.string(),
  nom: z.string(),
  prenoms: z.string(),
});

// Infer TypeScript type from the schema
export type MaitreDosoReferent = z.infer<typeof MaitreDosoReferentSchema>;

// Define the StatutConfrerie schema
export const StatutConfrerieSchema = z.object({
  member_id: z.string(),
  date_affiliation_dankoun: z.string(),
  date_affiliation_union: z.string(),
  maitre_doso: z.boolean(),
  nombre_eleves_doso: z.number().nonnegative(), // Ensure optional number of students is non-negative
  maitre_doso_referent: MaitreDosoReferentSchema.optional(),
  num_carte_union: z.string(),
  poste_union: z.string(),
  situation_cotisante: z.enum(["A jour", "Non à jour"]),
  decoration: DecorationSchema,
  sanction: SanctionSchema.optional(),
});

// Infer TypeScript type from the schema
export type StatutConfrerie = z.infer<typeof StatutConfrerieSchema>;

// Define the MembreDozo schema
export const MembreDozoSchema = z.object({
  id: z.string().optional(),
  nom: z.string(),
  prenoms: z.string(),
  date_naissance: z.string(),
  lieu_naissance: z.string(),
  situation_matrimoniale: z.object({}).optional(),
  lieu_residence: z.string(),
  statut_confrerie: z.object({}).optional(),

});

// Infer TypeScript type from the schema
export type MembreDozo = z.infer<typeof MembreDozoSchema>;

export const ApplicationSchema = z.object({
  id: z.string().optional(),
  nom: z.string(),
  prenoms: z.string(),
  date_naissance: z.string(),
  lieu_naissance: z.string(),
  situation_matrimoniale: z.object({}).optional(),
  lieu_residence: z.string(),
  id_referent: z.string().optional(),
});

// Infer TypeScript type from the schema
export type MemberApplication = z.infer<typeof ApplicationSchema>;
