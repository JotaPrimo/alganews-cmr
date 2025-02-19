import * as B from './Button.styles'

export interface ButtonProps {
    variant: 'danger' | 'text' | 'primary';
    label: string;
    backgroundColor?: string;
    onClick?: () => void; 
}

function Button({ variant, label, backgroundColor, onClick }: ButtonProps) {
    return <B.Wrapper variant={variant} style={{ backgroundColor }} onClick={onClick}>
        {label}
    </B.Wrapper>;
}

export default Button;