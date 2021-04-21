import React from "react"
import { Link } from "gatsby"
import { useForm } from "@formspree/react"
import {
  TextField,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
    },
    submitTitle: {
      margin: theme.spacing(4),
    },
    submitText: {
      margin: theme.spacing(2),
    },
  })
)

function getSteps() {
  return ["入力", "確認", "送信完了"]
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mvodgpoz")
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const disabled = activeStep === 1

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  console.log(state)
  const haserror = state.errors.length > 0

  return (
    <div className={classes.root}>
      <Stepper activeStep={state.succeeded ? 2 : activeStep} alternativeLabel>
        {steps.map(label => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: { optional?: React.ReactNode } = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <Paper elevation={0} className={classes.paper}>
        {state.succeeded ? (
          <>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              className={classes.submitTitle}
            >
              送信完了
            </Typography>
            <Typography
              variant="h6"
              component="p"
              align="center"
              className={classes.submitText}
            >
              後日改めて担当者より連絡いたします。
            </Typography>
            <Typography
              variant="h6"
              component="p"
              align="center"
              className={classes.submitText}
            >
              お問い合わせいただきありがとうございます。
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              className={classes.button}
            >
              ホームに戻る
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="お名前"
              type="name"
              name="name"
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              label="メールアドレス"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              error={haserror}
            />
            <TextField
              id="subject"
              label="件名"
              type="subject"
              name="subject"
              fullWidth
              margin="normal"
            />
            <TextField
              id="message"
              name="message"
              label="内容"
              multiline
              rows={10}
              fullWidth
              margin="normal"
              error={haserror}
            />

            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              戻る
            </Button>

            {/* 入力画面 */}
            {activeStep === 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                次へ
              </Button>
            )}

            {/* 確認画面 */}
            {activeStep === 1 && (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={state.submitting}
                className={classes.button}
              >
                送信
              </Button>
            )}
          </form>
        )}
      </Paper>
    </div>
  )
}

function App() {
  return <ContactForm />
}
export default App
