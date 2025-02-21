import * as VD from './ValueDescriptor.styles';

export interface ValueDescriptorProps {
    value: number,
    isCurrency?: boolean,
    description: string,
    color?: 'primary' | 'default',
   
}

export default function ValueDescriptor(props: ValueDescriptorProps) {
    return <VD.Wrapper>
       <span className="Description">{ props.description }:</span>
       <div>
        {
            props.isCurrency && 
            <span className="Currency">
                { 'R$' }
            </span>
        }      
        <span className="Value">
            { props.value.toLocaleString('pt-br') }
        </span>
       </div>
    </VD.Wrapper>
}