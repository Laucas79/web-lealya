export const Icon = {
  Arrow: ({ size = 16, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M4 12h15M13 6l6 6-6 6"/>
    </svg>
  ),
  ArrowDown: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 4v15M6 13l6 6 6-6"/>
    </svg>
  ),
  Plus: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Minus: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 12h14"/>
    </svg>
  ),
  Close: ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 6l12 12M18 6L6 18"/>
    </svg>
  ),
  Menu: ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 8h16M4 16h16"/>
    </svg>
  ),
  Search: ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="14" cy="14" r="8"/><path d="M20 20l7 7"/>
    </svg>
  ),
  Home: ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M4 14L16 4l12 10v14H4z"/><path d="M12 28v-9h8v9"/>
    </svg>
  ),
  Key: ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="10" cy="16" r="6"/><path d="M16 16h12M24 16v5M28 16v3"/>
    </svg>
  ),
  Compass: ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="16" cy="16" r="12"/><path d="M12 20l3-8 8-3-3 8z" strokeLinejoin="round"/>
    </svg>
  ),
}
