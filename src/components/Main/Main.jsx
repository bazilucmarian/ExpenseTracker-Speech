import React, {useContext} from 'react'
import Form from "./Form/Form"
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import { makeStyles} from "@material-ui/core/styles";
import List from "./List/List"
import {ExpenseTrackerContext} from "../../context/context"
import InfoCard from "../InfoCard"


const useStyles=makeStyles((theme)=>({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      cartContent: {
        paddingTop: 0,
      },
      divider: {
        margin: '20px 0',
      },
    
}))

const Main = () => {

    const classes=useStyles()
    const {balance}=useContext(ExpenseTrackerContext)
    
    return (
    <Card classes={classes.root}>
        <CardHeader style={{textAlign:"center"}} title="Expense Tracker" subheader="Powered by Baziluc Marian"/>
        <CardContent>
            <Typography align="center" variant="h5" >Total: <span style={{color:balance<0? "#f55b5f":"#14915f"}}>${balance}</span></Typography>
            <Typography align="center" style={{lineHeight:"1.5em", marginTop:"20px"}} variant="subtitle1">
          <InfoCard/>
            </Typography>
            <Divider/>

            <Form/>
        </CardContent>
        <CardContent classes={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                   <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default Main
