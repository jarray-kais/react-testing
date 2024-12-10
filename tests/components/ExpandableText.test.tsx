import { fireEvent, render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
    it('should render the full text if less than or equal to 255 characters ', () => {
        const shortText = 'this is a short text'
        render(<ExpandableText text={shortText}/>)
        //verfier que le texte complet est rendu
        expect(screen.getByText(shortText)).toBeInTheDocument()

        //verifier qu'il n'ya pas de button show more 
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
    it('should render truncated text and a show More  button if the text is more than 255 characters', () => {
        const longText = 'A'.repeat(300)
        render(<ExpandableText text={longText}/>)
        //verfier que le texte tranquée est afficher
        expect(screen.getByText(`${longText.substring(0 , 255)}...`)).toBeInTheDocument()

        //verifier que le button show more est afficher 
        expect(screen.getByRole('button', {name: /Show More/i})).toBeInTheDocument()
    })

    it('should render the full text and a show less button if the text is more than 255 characters', () => {
        const longText = 'A'.repeat(300)
        render(<ExpandableText text={longText}/>)
        const button = screen.getByRole('button' , {name: /Show More/i})
        //cliquer sur show more button
        fireEvent.click(button)
        //verifier que le texte complet est rendu
        expect(screen.getByText(longText)).toBeInTheDocument()

        //cliquer sur show less button 
        fireEvent.click(button)

        //verifier que le texte est de nouveau tronqué
        expect(screen.getByText(`${longText.substring(0, 255)}...`)).toBeInTheDocument()
        //verifier que le button show More est afficher
        expect(button).toHaveTextContent(/show more/i)
        
    })
})