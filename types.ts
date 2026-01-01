
import type React from 'react';

export interface NavItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
}
