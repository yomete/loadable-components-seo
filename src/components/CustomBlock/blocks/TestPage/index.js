import * as React from 'react'
import moment from 'moment'

const dateOne = moment().format('MMMM Do YYYY, h:mm:ss a')
const dateTwo = moment().format('dddd')
const dateThree = moment().format('MMM Do YY')

const TestPage = ({ customBlock }) => {
  return (
    <>
      <p>Date One: {dateOne}</p>
      <p>Date Two: {dateTwo}</p>
      <p>Date Three: {dateThree}</p>
    </>
  )
}

export default TestPage
