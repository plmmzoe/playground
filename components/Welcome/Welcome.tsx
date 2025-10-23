import {Text, Title} from '@mantine/core';

export function Welcome() {
  return (
      <Title 
        className={'text-black text-6xl md:text-[100px] bg-transparent'}
        ta={'center'}
      >
        Welcome to{' '}
        <Text 
          inherit 
          variant={'gradient'} 
          component={'span'} 
          gradient={{from: 'pink', to: 'yellow'}}
        >
          Playground
        </Text>
      </Title>
  );
}
