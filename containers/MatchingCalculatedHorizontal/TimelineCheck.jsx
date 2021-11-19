
import { Steps, Divider } from 'antd';

const { Step } = Steps;

const status = [
    {
        status: "Matching Realizado em DD.MM.AA",
        description: "Não Esqueça de Confirmar a mentoria até x dias após o Matching",
    },
]

export default function TimelineCheck (){
    return (
    <>
        <Steps progressDot current={4} direction="vertical">
          <Step title={status[0].status} description = {status[0].description} />
          <Step title={status[0].status} description = {status[0].description} />
          <Step title={status[0].status} description = {status[0].description} />
          <Step title={status[0].status} description = {status[0].description} />
        </Steps>
    </>
    )
}
