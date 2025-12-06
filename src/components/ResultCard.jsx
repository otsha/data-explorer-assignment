import { Card } from "@heroui/react"


const ResultCard = ({data}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{data.municipality}</Card.Title>
            </Card.Header>
            <Card.Content>
                <p>{(parseInt(data.nnSpeaker) / parseInt(data.total)).toFixed(2)}%</p>
                <p>{data.total}</p>
                <p>{data.nnSpeaker}</p>
            </Card.Content>
        </Card>
    )
}

export default ResultCard