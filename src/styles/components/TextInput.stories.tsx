import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default { //Configuração global:
    title: 'Components/TextInput', //Titulo do componente na documentacao
    component: TextInput.Root, //Qual o componente a ser dicumentado
    args: {
        children: [

            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,

            <TextInput.Input placeholder='Type your email address' />

        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {} 

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder = "Enter your email address" />
    }
} 