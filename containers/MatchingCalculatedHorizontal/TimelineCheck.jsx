
import { Steps, Divider } from 'antd';

const { Step } = Steps;

const status = [
    {
        status: "Matching Realizado em DD.MM.AA",
        description: "O seu convite expira em x dias",
    },
]

// A quantidade de steps precisa ser igual a quantidade de itens no array de personas

export default function TimelineCheck (props){
    return (
    <>
        <Steps progressDot current={4} direction="vertical">
            <Step title={status[0].status} description = {status[0].description} style={{margin: '20px 0px 80px 0px'}}/>
        </Steps>
    </>
    )
}
