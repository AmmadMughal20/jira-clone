interface ButtonProps
{
    onClick?: () => void,
    children: string,
}

export const Button = (props: ButtonProps) =>
{
    const { onClick } = props

    const handler = () =>
    {
        console.log('hey')
    }

    if (!onClick) return <button data-testid={"button-test"} onClick={handler}>Button</button>

    return (
        <button data-testid={"button-test"} onClick={onClick}>Button</button>
    )
}
