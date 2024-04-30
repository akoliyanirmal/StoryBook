import React from "react";

interface Breadcrumb {
  text: string;
  href: string;
}

export interface BreadcrumbsProps {
  links: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <nav className="flex" aria-label="breadcrumbs">
      {links.map((link, index) => (
        <span key={index}>
          <a href={link.href} className="text-blue-500 hover:underline">
            {link.text}
          </a>
          {index !== links.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
