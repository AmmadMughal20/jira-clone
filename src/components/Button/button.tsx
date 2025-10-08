interface ButtonProps
{
    onClick: () => void,
    children: string,
}

export const Button = (props: ButtonProps) =>
{
    const { onClick } = props

    return (
        <button data-testid={"button-test"} onClick={onClick}>Button</button>
    )
}
