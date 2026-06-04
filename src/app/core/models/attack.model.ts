export interface AttackBadge {
  label: string;
  variant: 'nation' | 'iot' | 'ransom' | 'spy' | 'apt' | 'zero' | 'supply' | 'worm' | 'purple';
}

export interface DamageCard {
  value: string;
  label: string;
  color: 'red' | 'amber' | 'blue';
}

export interface TechStep {
  num: string;
  title: string;
  description: string;
}

export interface InfoBlock {
  icon: string;
  title: string;
  content: string;
}

export interface Attack {
  id: string;
  yearBadge: string;
  navLabel: string;
  title: string;
  subtitle: string;
  colorClass: 'red' | 'amber' | 'blue';
  badges: AttackBadge[];
  damageCards: DamageCard[];
  infoBlocks: InfoBlock[];
  techSteps: TechStep[];
  quote?: { text: string; cite: string };
  legacyTitle: string;
  legacyContent: string;
  victims: string[];
}