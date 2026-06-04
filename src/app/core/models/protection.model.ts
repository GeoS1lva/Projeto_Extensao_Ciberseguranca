export interface PillarCard {
  icon: string;
  title: string;
  description: string;
  tag: string;
  variant: 'g' | 'b' | 'a' | 'r';
}

export interface MfaCard {
  icon: string;
  iconColor: string;
  titleColor: string;
  title: string;
  description: string;
  recLabel: string;
  recVariant: 'best' | 'ok' | 'avoid' | 'blue';
}

export interface ChecklistItem {
  label: string;
  done: boolean;
}

export interface VpnItem {
  icon: string;
  text: string;
}

export interface HabitItem {
  num: string;
  title: string;
  description: string;
}

export interface PasswordOptions {
  length: number;
  quantity: number;
  upper: boolean;
  lower: boolean;
  num: boolean;
  sym: boolean;
  noAmb: boolean;
}

export interface PasswordStrength {
  label: string;
  color: string;
  percent: number;
}