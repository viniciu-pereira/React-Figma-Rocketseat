import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text'

export default { //Configuração global:
    title: 'Components/Text', //Titulo do componente na documentacao
    component: Text, //Qual o componente a ser dicumentado
    args: {
        children: '',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                tyoe: 'inline-radio'
            }
        }
    }
} as Meta <TextProps>

export const Default: StoryObj<TextProps> = {} 

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
} 

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        ),
    },
    argTypes:{
        children: {
            table:{
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}