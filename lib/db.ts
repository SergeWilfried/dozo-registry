interface SituationMatrimoniale {
    etat: "Marié" | "Célibataire";
    nombre_enfants: number;
    member_id: string;
  }
  
  interface Decoration {
    est_decore: boolean;
    date?: string;
    lieu?: string;
    medaille?: string;
    member_id: string;
  }
  
  interface Sanction {
    date: string;
    lieu: string;
    motif: string;
    member_id: string;
  }
  
  interface MaitreDosoReferent {
    nom: string;
    prenoms: string;
    id: string;
  }
  
  interface StatutConfrerie {
    member_id: string;
    date_affiliation_dankoun: string;
    date_affiliation_union: string;
    maitre_doso: boolean;
    nombre_eleves_doso?: number;
    maitre_doso_referent_id?: string;
    num_carte_union: string;
    poste_union: string;
    situation_cotisante: "A jour" | "Non à jour";
    decoration_id: string;
    sanction_id: string;
  }
  
  interface MembreDozo {
    id: string;
    nom: string;
    prenoms: string;
    date_naissance: string;
    lieu_naissance: string;
    id_situation_matrimoniale: string;
    lieu_residence: string;
    id_statut_confrerie: string;
  }

interface Admission {
    id: string;
    nom: string;
    prenoms: string;
    date_naissance: string;
    lieu_naissance: string;
    situation_matrimoniale: SituationMatrimoniale;
    lieu_residence: string;
    id_referent?: string;
}

  export const membres: MembreDozo[] = [
    {
      id: '001',
      nom: "Koné",
      prenoms: "Boubacar",
      date_naissance: "1975-03-15",
      lieu_naissance: "Banfora",
      id_situation_matrimoniale: 'SM-001',
      lieu_residence: "Ouagadougou",
      id_statut_confrerie: 'SC-001',
    },
    {
      id: '002',
      nom: "Ouattara",
      prenoms: "Moussa",
      date_naissance: "1980-08-12",
      lieu_naissance: "Koudougou",
      id_situation_matrimoniale: 'SM-002',
      lieu_residence: "Bobo-Dioulasso",
      id_statut_confrerie: 'SC-002',
    },
    {
      id: '003',
      nom: "Sanou",
      prenoms: "Abdoulaye",
      date_naissance: "1972-11-23",
      lieu_naissance: "Dédougou",
      id_situation_matrimoniale: 'SM-003',
      lieu_residence: "Ouagadougou",
      id_statut_confrerie: 'SC-003',
    },
  ];
  
  export const situationsMatrimoniales: SituationMatrimoniale[] = [
    {
      etat: "Marié",
      nombre_enfants: 4,
      member_id: '001'
    },
    {
      etat: "Marié",
      nombre_enfants: 3,
      member_id: '002'
    },
    {
      etat: "Marié",
      nombre_enfants: 5,
      member_id: '003'
    },
  ];
  
  export const statutsConfrerie: StatutConfrerie[] = [
    {
      member_id: '001',
      date_affiliation_dankoun: "1995-09-10",
      date_affiliation_union: "1997-05-18",
      maitre_doso: true,
      nombre_eleves_doso: 15,
      num_carte_union: "UNDBF-102345",
      poste_union: "Chef de Région",
      situation_cotisante: "A jour",
      decoration_id: 'D-001',
      sanction_id: 'S-001'
    },
    {
      member_id: '002',
      date_affiliation_dankoun: "2001-04-05",
      date_affiliation_union: "2003-09-15",
      maitre_doso: true,
      nombre_eleves_doso: 8,
      num_carte_union: "UNDBF-105678",
      poste_union: "Coordinateur Local",
      situation_cotisante: "A jour",
      decoration_id: 'D-002',
      sanction_id: 'S-002'
    },
    {
      member_id: '003',
      date_affiliation_dankoun: "1990-06-10",
      date_affiliation_union: "1993-12-20",
      maitre_doso: false,
      maitre_doso_referent_id: 'MDR-001',
      num_carte_union: "UNDBF-102349",
      poste_union: "Secrétaire Général",
      situation_cotisante: "Non à jour",
      decoration_id: 'D-003',
      sanction_id: 'S-003'
    },
  ];
  
  export const decorations: Decoration[] = [
    {
      est_decore: true,
      date: "2010-06-24",
      lieu: "Bobo-Dioulasso",
      medaille: "Médaille d'Honneur",
      member_id: '001'
    },
    {
      est_decore: true,
      member_id: '002',
      date: "2010-06-24",
      lieu: "Orodara",
      medaille: "Médaille d'Honneur",
    },
    {
      est_decore: true,
      date: "2015-11-30",
      lieu: "Ouagadougou",
      medaille: "Médaille de Bravoure",
      member_id: '003'
    },
  ];
  
  export const sanctions: Sanction[] = [
    {
      date: "2021-03-25",
      lieu: "Ouagadougou",
      motif: "Non-respect des règles",
      member_id: '002'
    },
  ];
  
  export const maitresDosoReferents: MaitreDosoReferent[] = [
    {
      nom: "Traoré",
      prenoms: "Adama",
      id: 'MDR-001'
    },
    {
      nom: "Koulibaly",
      prenoms: "Issa",
      id: 'MDR-002'
    },
  ];
  

export const admissions: Admission[] = [

]