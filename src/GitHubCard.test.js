import { render, screen } from '@testing-library/react'
import myCard from './GitHubCard'
import renderer from 'react-test-renderer'

test('renders my card', () => {
    const card = renderer.create(<myCard />).toJSON()
    expect(card).toMatchSnapshot()
})