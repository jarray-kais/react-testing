import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('UserList', () => {
    it('should render no users when users list is empty', () => {
        render(<UserList users={[]} />)
        const message = screen.getByText(/no users/i);
        expect(message).toBeInTheDocument();
    })

    it('should render a list of users when provided', () => {
        const users: User[] = [
            { id: 1, name: 'kais' },
            { id: 2, name: 'ahmed' },
        ]
        render(<UserList users={users} />)
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(users.length);
        users.forEach((user) => {
            const link = screen.getByText(user.name)
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)

        })
    })
})