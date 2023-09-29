interface Option {
  id: string;
  href: string;
  name: string;
}

export interface AccordionProps {
  title: string;
  options: Option[];
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}