import Card from 'react-bootstrap/Card'

export default function GitHubCard() {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='../public/Subject.png' />
                <Card.Body>
                    <Card.Title>TheQueepingHour</Card.Title>
                    <Card.Text>
                        I'm a new developer that's learning all I can in order to pursue a career in software development.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}