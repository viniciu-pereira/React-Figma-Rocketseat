import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text';

export default { //Configuração global:
    title: 'Components/Checkbox', //Titulo do componente na documentacao
    component: Checkbox, //Qual o componente a ser dicumentado
    args: {},
    argTypes: {},
    decorators: [
        (story) => {
            return (
                <div className='flex items-center gap-2'>
                    {story()}
                    <Text size="sm">Aceito</Text>
                </div>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {} 
