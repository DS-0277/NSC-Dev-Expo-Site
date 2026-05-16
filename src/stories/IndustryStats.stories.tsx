import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';

import IndustryStats from '../components/IndustryStats';

const meta = {
  title: 'Example/IndustryStats',
  component: IndustryStats,
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof IndustryStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      { value: '80%', description: 'of students find gainful employment' },
      {
        value: '12',
        description:
          'students on average per class for more individualized attention',
      },
      { value: '100+', description: 'students placed within industry' },
    ],
  },
};
