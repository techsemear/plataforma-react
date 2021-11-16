
import { Steps, Divider } from 'antd';

const { Step } = Steps;

const status = [
    {
        status: "Concluído",
        description: "Essa mentoria foi confirmada",
    },
    {
        status: "A Iniciar", 
        description:"Essa mentoria não foi confirmada",
    },
]

export default function TimelineCheck (){
    return (
    <>
        <Steps progressDot current={1} direction="vertical">
          <Step title={status[0].status} description = {status[0].description} />
          <Step title={status[0].status} description = {status[0].description} />
          <Step title={status[1].status} description = {status[1].description} />
          <Step title={status[1].status} description = {status[1].description} />
        </Steps>
    </>
    )
}
