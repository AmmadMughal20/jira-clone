import { screen, render } from "@testing-library/react";

import { Button } from "./button";

describe('Button Test', () =>
{
    it('tests the button', () =>
    {
        render(<Button onClick={() => console.log('clicked')}>Click Me</Button>)
        const button = screen.findByTestId('button-test')
        expect(button).toBeTruthy;
    })
})