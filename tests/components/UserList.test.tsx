import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'

describe('UserList', () => {
    it('should render "No users available." when users list is empty', () => {
        render(<UserList users={[]} />)
        const message = screen.getByText("No users available.");
        expect(message).toBeInTheDocument();
    })

    it('should render a list of users when provided', () => {
        const mockusers = [
            { id: 1, name: 'kais' },
            { id: 2, name: 'ahmed' },
        ]
        render(<UserList users={mockusers} />)
        const listItems = screen.getAllByRole('listitem')
        expect()
    })
})