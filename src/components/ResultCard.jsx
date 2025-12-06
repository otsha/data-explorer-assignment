import { Card } from "@heroui/react"


const ResultCard = ({data}) => {
    return (
        <Card className="text-black bg-indigo-50">
            <Card.Header>
                <Card.Title className="text-xl font-bold text-center">{data.municipality}</Card.Title>
            </Card.Header>
            <Card.Content>
                <p className="text-sm text-center">Vieraskielisten osuus</p>
                <p className="text-xl text-center">{(parseInt(data.nnSpeaker) / parseInt(data.total) * 100).toFixed(2)}%</p>
                <div className="flex flex-row gap-4 justify-between mt-4">
                <div>
                <p className="text-sm">Päiväkotilapsia yhteensä</p>
                <p className="text-lg text-center">{data.total}</p>
                </div>
                <div>
                <p className="text-sm">Joista vieraskielisiä</p>
                <p className="text-lg text-center">{data.nnSpeaker}</p>
                </div>
                </div>
            </Card.Content>
        </Card>
    )
}

export default ResultCard