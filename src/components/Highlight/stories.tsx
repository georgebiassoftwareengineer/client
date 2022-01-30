import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de de volta!',
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Comprar agora'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />

Default.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
}
