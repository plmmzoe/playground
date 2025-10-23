'use client';

import {Burger, Container, Group, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
  {link: '/visualizations', label: 'Visualizations'},
  {link: '/ideas', label: 'Ideas'},
  {link: '/about', label: 'About'},
  {link: '/community', label: 'Community'},
];

export function HeaderSimple() {
  const [opened, {toggle}] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={`block px-3 py-2 rounded text-sm font-medium no-underline transition-all duration-200 ${
        pathname === link.link
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={'sticky top-0 z-50 bg-white border-b border-gray-200'}>
      <Container size={'md'} className={'h-14 flex justify-between items-center'}>
        <Link href={'/'} className={'text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer'}>
          Playground
        </Link>
        <Group gap={5} visibleFrom={'xs'}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom={'xs'} size={'sm'} />
      </Container>
    </header>
  );
}
