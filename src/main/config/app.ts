import express from 'express'
import {monitorintRoute, videoRoute} from '../routes'

const app = express()


app.use(monitorintRoute)
app.use(videoRoute)


export default app



