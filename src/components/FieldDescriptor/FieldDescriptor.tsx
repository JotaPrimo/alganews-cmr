import * as FD from '../FieldDescriptor/FieldDescriptor.styles';

export interface FieldDescriptorProps{
    field: string,
    value: string
}


export default function FieldDescriptor({field, value}: FieldDescriptorProps) {
    return <FD.Wrapper>
         <FD.Field>{field}:</FD.Field>
         <FD.Value>{value}</FD.Value>
    </FD.Wrapper>;
}
