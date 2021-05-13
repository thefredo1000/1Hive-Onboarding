import React from 'react'
import { Button, Text } from '@1hive/1hive-ui'

class Step2 extends React.Component {
  constructor(currStep) {
    super(currStep)
    this.currStep = currStep.children
  }

  render() {
    return (
      <div
        css={`
          padding: 5%;
        `}
      >
        <h1
          css={`
            margin-top: 0px;
            font-size: 30px;
            font-weight: 700;
            font-family: Poppins, sans-serif;
          `}
        >
          Step 3
        </h1>
        <div
          css={`
            max-width: 450px;
            margin-top: 20px;
            padding-left: 10px;
            border-left: 4px solid #21bf73;
          `}
        >
          <Text>
            Zero Bridging Fees From Mainnet. Use the RAMP platform to skip the
            fuss of bridging and get straight to trading.
          </Text>
        </div>
        <br />
        <Button
          onClick={() => {
            this.props.setStep(this.currStep + 1)
          }}
        >
          Next Step
        </Button>
      </div>
    )
  }
}

export default Step2