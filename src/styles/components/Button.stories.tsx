import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button'

export default { //Configuração global:
    title: 'Components/Button', //Titulo do componente na documentacao
    component: Button, //Qual o componente a ser dicumentado
    args: {
        children: 'Create Account',
        size: 'md',
    },
    argTypes: {
    }
} as Meta <ButtonProps>

export const Default: StoryObj<ButtonProps> = {} 
