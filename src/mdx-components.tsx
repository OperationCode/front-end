import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import Section from '@/components/Section/Section';
import Card from '@/components/Section/Card';
import Story from '@/components/Section/Story';
import FAQ from '@/components/Section/FAQ';
import Q from '@/components/Section/Q';

function MdxLink({ href = '', children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <OutboundLink analyticsEventLabel={`MDX Link: ${href}`} href={href} {...props}>
        {children}
      </OutboundLink>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxLink,
    Section,
    Card,
    Story,
    FAQ,
    Q,
    OutboundLink,
    ...components,
  };
}
