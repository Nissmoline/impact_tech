/**
 * Icon Mapper Utility
 *
 * Maps string icon names from CMS to actual Lucide React icon components.
 */

import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

/**
 * Get icon component by name
 * @param iconName - Name of the icon (e.g., "Code2", "Globe")
 * @returns Icon component or default icon if not found
 */
export function getIcon(iconName: string): LucideIcon {
  // Default icon if specified icon is not found
  const defaultIcon = LucideIcons.Package;

  // Check if the icon exists in lucide-react
  if (iconName in LucideIcons) {
    return (LucideIcons as any)[iconName] as LucideIcon;
  }

  console.warn(`Icon "${iconName}" not found in lucide-react. Using default icon.`);
  return defaultIcon;
}

/**
 * Map of commonly used icon names for easy reference
 */
export const ICON_MAP = {
  // Services
  code: 'Code2',
  web: 'Globe',
  cpu: 'Cpu',
  zap: 'Zap',
  layers: 'Layers',
  monitor: 'Monitor',
  palette: 'Palette',
  database: 'Database',

  // Actions
  send: 'Send',
  download: 'Download',
  upload: 'Upload',
  edit: 'Edit',
  trash: 'Trash2',

  // Navigation
  menu: 'Menu',
  close: 'X',
  home: 'Home',
  settings: 'Settings',

  // Social
  github: 'Github',
  linkedin: 'Linkedin',
  twitter: 'Twitter',

  // Status
  check: 'Check',
  error: 'AlertCircle',
  warning: 'AlertTriangle',
  info: 'Info',
} as const;
